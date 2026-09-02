/**
 * Cryptographic helpers for CMS password hashing, verification, and session tokens.
 * Uses Web Crypto API (crypto.subtle), 100% compatible with Cloudflare Workers and Node.js.
 */

const PBKDF2_ITERATIONS = 100000;
const KEY_LENGTH = 32; // 256 bits
const SESSION_EXPIRY_MS = 7 * 24 * 60 * 60 * 1000; // 7 days

export async function hashPassword(
  password: string,
  existingSaltHex?: string,
): Promise<{ hash: string; salt: string }> {
  const encoder = new TextEncoder();
  const salt = existingSaltHex
    ? hexToBytes(existingSaltHex)
    : crypto.getRandomValues(new Uint8Array(16));
  const saltBuffer = new Uint8Array(salt).buffer;

  const passwordKey = await crypto.subtle.importKey(
    "raw",
    encoder.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits"],
  );

  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: saltBuffer,
      iterations: PBKDF2_ITERATIONS,
      hash: "SHA-256",
    },
    passwordKey,
    KEY_LENGTH * 8,
  );

  return {
    hash: bytesToHex(new Uint8Array(derivedBits)),
    salt: bytesToHex(salt),
  };
}

export async function verifyPassword(
  password: string,
  storedHash: string,
  storedSalt: string,
): Promise<boolean> {
  try {
    const { hash } = await hashPassword(password, storedSalt);
    return timingSafeEqual(hash, storedHash);
  } catch {
    return false;
  }
}

export type CmsSessionPayload = {
  id: number;
  email: string;
  name: string;
  role: "admin" | "editor";
  exp: number;
};

export async function createSessionToken(profile: {
  id: number;
  email: string;
  name: string;
  role: string;
}): Promise<string> {
  const payload: CmsSessionPayload = {
    id: profile.id,
    email: profile.email,
    name: profile.name,
    role: profile.role as "admin" | "editor",
    exp: Date.now() + SESSION_EXPIRY_MS,
  };

  const payloadString = JSON.stringify(payload);
  const base64Payload = btoa(unescape(encodeURIComponent(payloadString)));
  const signature = await signData(base64Payload);

  return `${base64Payload}.${signature}`;
}

export async function verifySessionToken(
  token: string,
): Promise<CmsSessionPayload | null> {
  try {
    const [base64Payload, signature] = token.split(".");
    if (!base64Payload || !signature) return null;

    const expectedSignature = await signData(base64Payload);
    if (!timingSafeEqual(signature, expectedSignature)) return null;

    const jsonString = decodeURIComponent(escape(atob(base64Payload)));
    const payload = JSON.parse(jsonString) as CmsSessionPayload;

    if (Date.now() > payload.exp) return null;

    return payload;
  } catch {
    return null;
  }
}

async function signData(data: string): Promise<string> {
  const sessionSecret = getSessionSecret();
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(sessionSecret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );

  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(data));
  return bytesToHex(new Uint8Array(signature));
}

function getSessionSecret(): string {
  // Runtime secrets are configured in Vercel and must never be stored in the
  // source tree. A local-only fallback keeps development usable.
  const secret = process.env.CMS_SESSION_SECRET;
  if (secret) return secret;
  if (process.env.NODE_ENV === "development") {
    return "local-development-session-secret-not-for-production";
  }
  throw new Error("CMS_SESSION_SECRET is not configured.");
}

function bytesToHex(bytes: Uint8Array): string {
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

function hexToBytes(hex: string): Uint8Array {
  const bytes = new Uint8Array(hex.length / 2);
  for (let i = 0; i < bytes.length; i++) {
    bytes[i] = parseInt(hex.substr(i * 2, 2), 16);
  }
  return bytes;
}

function timingSafeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false;
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return result === 0;
}
