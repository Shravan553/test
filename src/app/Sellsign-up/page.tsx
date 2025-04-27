"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { toast } from "sonner";
import styles from "./sign-up.module.css"; 

const Input = ({
  type,
  placeholder,
  value,
  onChange,
  disabled,
  required,
  autoComplete,
}: {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  required?: boolean;
  autoComplete?: string;
}) => (
  <input
    type={type}
    placeholder={placeholder}
    className={styles.input}
    value={value}
    onChange={onChange}
    disabled={disabled}
    required={required}
    autoComplete={autoComplete}
  />
);

export default function SignUpForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [potatoName, setPotatoName] = useState<string | null>(null);

  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const name = searchParams.get("potatoName");
    if (name) {
      setPotatoName(name);
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      setPending(false);
      return;
    }

    try {
      const res = await fetch("/api/Sellsignup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, potatoName }),
      });

      let data;
      try {
        data = await res.json();
      } catch {
        data = { message: "Server error. Please try again." };
      }

      if (res.ok) {
        toast.success(data.message || "Account created successfully!");
        setForm({ name: "", email: "", password: "", confirmPassword: "" }); // Reset form
        router.push(`/Sellsign-in?potatoName=${encodeURIComponent(potatoName || "")}`);
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Error during sign-up:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setPending(false);
    }
  };

  const handleProvider = (
    e: React.MouseEvent<HTMLButtonElement>,
    provider: "google" | "github"
  ) => {
    e.preventDefault();
    signIn(provider, { callbackUrl: "/" });
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>Sign up</h2>
          <p className={styles.description}>
            Use email or a service to create an account
          </p>
        </div>

        {error && <div className={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit} className={styles.form}>
          {potatoName && (
            <input type="hidden" name="potatoName" value={potatoName} />
          )}

          <Input
            type="text"
            placeholder="Full name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            disabled={pending}
            required
            autoComplete="name"
          />
          <Input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            disabled={pending}
            required
            autoComplete="email"
          />
          <Input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            disabled={pending}
            required
            autoComplete="new-password"
          />
          <Input
            type="password"
            placeholder="Confirm password"
            value={form.confirmPassword}
            onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
            disabled={pending}
            required
            autoComplete="new-password"
          />

          <button
            type="submit"
            className={styles.button}
            disabled={pending}
          >
            {pending ? "Creating account..." : "Continue"}
          </button>
        </form>

        <div className={styles.divider}>or</div>

        <div className={styles.socialButtons}>
          <button
            onClick={(e) => handleProvider(e, "google")}
            className={styles.googleButton}
            disabled={pending}
          >
            <FcGoogle size={20} />
            Continue with Google
          </button>
          <button
            onClick={(e) => handleProvider(e, "github")}
            className={styles.githubButton}
            disabled={pending}
          >
            <FaGithub size={20} />
            Continue with GitHub
          </button>
        </div>

        <p className={styles.footer}>
          Already have an account?{" "}
          <Link
            href={`/Sellsign-in?potatoName=${encodeURIComponent(potatoName || "")}`}
            className={styles.link}
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}
