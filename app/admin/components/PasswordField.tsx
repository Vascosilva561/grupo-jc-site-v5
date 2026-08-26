"use client";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
export function PasswordField({ required, placeholder }: { required: boolean; placeholder: string }) { const [visible, setVisible] = useState(false); return <div className="cms-password-field"><input name="password" type={visible ? "text" : "password"} required={required} minLength={required ? 12 : undefined} placeholder={placeholder} className="cms-text-input" autoComplete="new-password"/><button type="button" onClick={() => setVisible((value) => !value)} aria-label={visible ? "Ocultar palavra-passe" : "Mostrar palavra-passe"}>{visible ? <EyeOff size={18}/> : <Eye size={18}/>}</button></div>; }
