"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import styles from "./signin.module.css";

const SignIn = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const potatoName = searchParams.get("potatoName");

  // This is to check if we have potatoName in the URL query parameters
  useEffect(() => {
    if (potatoName) {
      console.log("Potato Name:", potatoName); // Debugging or internal use only
    }
  }, [potatoName]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);

    try {
      // Sending the request to the backend API route
      const res = await fetch("/api/Sellsignin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      
      // Debugging the response data to ensure it's correct
      console.log("Response Data:", data);

      if (res.ok) {
        toast.success(data.message || "Login successful!");
        // Redirect after successful login, including email and potatoName (if available)
        router.push(`/components/BuyandSell/Sell?potatoName=${encodeURIComponent(potatoName || "")}&userEmail=${encodeURIComponent(form.email)}`);
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
        <div className={styles.header}>
          <h2 className={styles.title}>Sign in</h2>
          <p className={styles.description}>Use email or a service to log in</p>
        </div>

        {error && <div className={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit} className={styles.form}>
          {/* Hidden potatoName field */}
          {potatoName && (
            <input
              type="hidden"
              id="potatoName"
              value={potatoName}
              name="potatoName"
            />
          )}

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

        <div className={styles.divider}>or</div>

        <p className={styles.footer}>
          Don’t have an account?{" "}
          <Link href={`/Sellsign-up?potatoName=${encodeURIComponent(potatoName || "")}`} className={styles.link}>
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
