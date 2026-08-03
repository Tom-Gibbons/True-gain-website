import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <main className="portalAuthPage">
      <section className="portalAuthPanel">
        <Link href="/" className="portalAuthBrand">TRUE GAIN PERFORMANCE</Link>
        <p className="eyebrow">Password recovery</p>
        <h1>Reset access.</h1>
        <p className="portalAuthIntro">
          Password-reset emails will be connected through Supabase Auth before launch.
        </p>
        <form className="portalAuthForm">
          <label>
            Email address
            <input type="email" placeholder="member@example.com" required />
          </label>
          <button type="button" className="button buttonGold">Send reset email</button>
        </form>
        <div className="portalAuthLinks">
          <Link href="/member-login">Back to login</Link>
        </div>
      </section>
    </main>
  );
}
