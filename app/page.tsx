import Link from "next/link";
import Image from "next/image";
import StoreButtons from "./components/StoreButtons";

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
            <StoreButtons />
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
            <Link href="https://www.facebook.com/groups/slowissmooth" target="_blank" rel="noopener noreferrer" className="btn-community">Join our Facebook Group</Link>
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
