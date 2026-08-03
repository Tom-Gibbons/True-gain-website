"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function MemberLoginPage() {
  const router = useRouter();
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Preview login accepted. Secure Supabase authentication will replace this before launch.");
    window.setTimeout(() => router.push("/member-portal"), 650);
  }

  return (
    <main className="portalAuthPage">
      <section className="portalAuthPanel">
        <Link href="/" className="portalAuthBrand">TRUE GAIN PERFORMANCE</Link>
        <p className="eyebrow">Member access</p>
        <h1>Login to your coaching portal.</h1>
        <p className="portalAuthIntro">
          This is the Phase 20 interface foundation. Secure authentication will be connected before launch.
        </p>

        <form onSubmit={handleSubmit} className="portalAuthForm">
          <label>
            Email address
            <input type="email" placeholder="member@example.com" required />
          </label>
          <label>
            Password
            <input type="password" placeholder="••••••••" required />
          </label>
          <button type="submit" className="button buttonGold">Login to portal</button>
        </form>

        {message && <p className="portalAuthMessage">{message}</p>}

        <div className="portalAuthLinks">
          <Link href="/forgot-password">Forgot password?</Link>
          <Link href="/">Return to website</Link>
        </div>
      </section>
    </main>
  );
}
