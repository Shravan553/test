"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import styles from "./signin.module.css";

const SignInContent = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const potatoName = searchParams.get("potatoName");

  useEffect(() => {
    if (potatoName) {
      console.log("Potato Name:", potatoName);
    }
  }, [potatoName]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    try {
      const res = await fetch("/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        toast.success(data.message || "Login successful!");
        router.push(`/components/BuyandSell/Buy?potatoName=${encodeURIComponent(potatoName || "")}&userEmail=${encodeURIComponent(form.email)}`);
      } else {
        setError(data.message || "Invalid credentials. Please try again.");
      }
    } catch (err) {
      console.error("Error during sign-in:", err);
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setPending(false);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Sign In</h2>
        <p className={styles.description}>Use email or a service to log in</p>

        {error && <div className={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit} className={styles.form}>
          {potatoName && <input type="hidden" value={potatoName} name="potatoName" />}

          <input
            type="email"
            placeholder="Email"
            className={styles.input}
            disabled={pending}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className={styles.input}
            disabled={pending}
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <button
            type="submit"
            className={styles.button}
            disabled={pending}
          >
            {pending ? "Signing in..." : "Continue"}
          </button>
        </form>

        <p className={styles.footer}>
          Don’t have an account?{' '}
          <Link href={`/Buysign-up?potatoName=${encodeURIComponent(potatoName || "")}`} className={styles.link}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

const SignIn = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SignInContent />
    </Suspense>
  );
};

export default SignIn;
