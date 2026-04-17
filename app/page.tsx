import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Flow — Your Focus Companion",
  description: "Flow helps you stay focused, build deep work habits, and get more done.",
};

export default function Home() {
  return (
    <div className="page-root">
      {/* HERO */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <div className="hero-logo-row">
              <Image src="/app icon glass.png" alt="Flow icon" width={160} height={160} className="hero-icon" priority />
              <Image src="/flow.png" alt="Flow" width={640} height={160} className="hero-logo" priority />
            </div>
            <h1 className="hero-title">Your Focus<br />Companion</h1>
            <p className="hero-subtitle">
              A personal focus companion that helps you manage your time and effort in one place.
            </p>
            <div className="store-buttons hero-store-buttons">
              <Link href="#" className="btn-store">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                App Store
              </Link>
              <Link href="#" className="btn-store">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.24 1.1L15.9 12l-5.69 5.37L3.24 1.1zm17.65 10c.84.44.84 1.36 0 1.8l-5.32 2.82-1.92-1.8 1.94-1.83 5.3-1zM2.08 2.08L14.7 13.9 3.2 22.9C2.45 23.38 2 23.06 2 22.06V2.08zm8.68 15.11L14.47 21a.95.95 0 0 0 1.4-.23l-3.32-3.14-1.8.44z" />
                </svg>
                Google Play
              </Link>
            </div>
          </div>
          <div className="hero-hand">
            <Image src="/handsie.png" alt="Flow app on phone" width={980} height={1360} className="hero-hand-img" priority />
          </div>
        </div>
      </section>

      <div className="content-box">

        {/* FEATURES */}
        <section className="features-section" id="features">
          <div className="features-inner">
            <div className="screenshots-row">
              {[1,2,3,4,5,6,7].map((n) => (
                <Image
                  key={n}
                  src={`/${n}.png`}
                  alt={`Flow app screenshot ${n}`}
                  width={600}
                  height={1200}
                  className="screenshot-img"
                  quality={100}
                />
              ))}
            </div>
          </div>
        </section>

        {/* COMMUNITY */}
        <section className="community-section" id="community">
          <div className="community-card">
            <div className="community-card-text">
              <h2>Join our community</h2>
              <p>Connect with thousands of Flow users. Share your focus wins, get tips, and stay inspired to do your best work.</p>
            </div>
            <Link href="#" className="btn-community">Join our Facebook Group</Link>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="site-footer">
          <a href="https://www.facebook.com/go.mattykun" target="_blank" rel="noopener noreferrer" className="footer-link">Made by Matthew Vargas</a>
          <div className="footer-links">
            <Link href="/privacy-policy" className="footer-link">Privacy Policy</Link>
            <Link href="/terms" className="footer-link">Terms</Link>
          </div>
        </footer>

      </div>
    </div>
  );
}
