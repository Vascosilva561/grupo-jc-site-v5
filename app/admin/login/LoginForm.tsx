"use client";

import { useActionState, useState } from "react";
import { ArrowRight, Eye, EyeOff, Lock, Mail, AlertCircle, Loader2 } from "lucide-react";
import { loginAction } from "../auth";

export function LoginForm() {
  const [state, formAction, isPending] = useActionState(loginAction, undefined);
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form action={formAction} className="cms-login-form">
      {state?.error && (
        <div className="cms-login-error" role="alert">
          <AlertCircle size={17} className="cms-login-error__icon" />
          <span>{state.error}</span>
        </div>
      )}

      <div className="cms-login-field">
        <label htmlFor="email">Endereço de E-mail</label>
        <div className="cms-login-input-wrap">
          <Mail size={17} className="cms-login-input-icon" />
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            defaultValue={state?.email ?? ""}
            placeholder="seu.email@grupojc.ao"
            className="cms-login-input"
          />
        </div>
      </div>

      <div className="cms-login-field">
        <label htmlFor="password">Palavra-passe</label>
        <div className="cms-login-input-wrap">
          <Lock size={17} className="cms-login-input-icon" />
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            required
            autoComplete="current-password"
            placeholder="••••••••"
            className="cms-login-input cms-login-input--password"
          />
          <button
            type="button"
            className="cms-login-toggle-password"
            onClick={() => setShowPassword(!showPassword)}
            aria-label={showPassword ? "Ocultar palavra-passe" : "Mostrar palavra-passe"}
          >
            {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
          </button>
        </div>
      </div>

      <button
        type="submit"
        disabled={isPending}
        className="cms-login-submit"
      >
        {isPending ? (
          <>
            <Loader2 size={18} className="cms-spin" /> A entrar...
          </>
        ) : (
          <>
            Entrar no CMS <ArrowRight size={18} />
          </>
        )}
      </button>
    </form>
  );
}
