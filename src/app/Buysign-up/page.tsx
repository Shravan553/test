"use client";

import React, { useState, Suspense } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { toast } from "sonner";
import PotatoNameFetcher from "./PotatoNameFetcher";
import styles from "./sign-up.module.css"; 

const SignUp = () => {
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
      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Account created successfully!");
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

  return (
    <div className={styles.container}>
      {/* Wrap PotatoNameFetcher inside Suspense */}
      <Suspense fallback={null}>
        <PotatoNameFetcher setPotatoName={setPotatoName} />
      </Suspense>

      <div className={styles.card}>
        <div className={styles.header}>
          <h2 className={styles.title}>Sign up</h2>
          <p className={styles.description}>Use email or a service to create an account</p>
        </div>

        {error && <div className={styles.error}>{error}</div>}

        <form onSubmit={handleSubmit} className={styles.form}>
          {potatoName && <input type="hidden" id="potatoName" value={potatoName} name="potatoName" />}

          <input
            type="text"
            placeholder="Full name"
            className={styles.input}
            disabled={pending}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
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
          <input
            type="password"
            placeholder="Confirm password"
            className={styles.input}
            disabled={pending}
            value={form.confirmPassword}
            onChange={(e) => setForm({ ...form, confirmPassword: e.target.value })}
            required
          />
          <button type="submit" className={styles.button} disabled={pending}>
            {pending ? "Creating account..." : "Continue"}
          </button>
        </form>

        <div className={styles.divider}>or</div>

        <div className={styles.socialButtons}>
        <button onClick={() => signIn("google", { callbackUrl: "/" })} className={styles.googleButton} disabled={pending}>
  <FcGoogle size={20} />
  Continue with Google
</button>
<button onClick={() => signIn("github", { callbackUrl: "/" })} className={styles.githubButton} disabled={pending}>
  <FaGithub size={20} />
  Continue with GitHub
</button>

        </div>

        <p className={styles.footer}>
          Already have an account?{" "}
          <Link href={`/Sellsign-in?potatoName=${encodeURIComponent(potatoName || "")}`} className={styles.link}>
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
