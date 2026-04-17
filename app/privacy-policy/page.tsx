import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Privacy Policy — Flow",
  description: "Privacy Policy for the Flow focus companion app.",
};

export default function PrivacyPolicy() {
  return (
    <div className="policy-root">
      <div className="policy-container">
        <Link href="/" className="policy-back">← Back to Flow</Link>
        <h1 className="policy-title">Privacy Policy</h1>
        <p className="policy-date">Last updated: April 17, 2026</p>

        <div className="policy-card-wrap">
          <Image src="/smart flow.png" alt="Smart Flow" width={220} height={220} className="policy-mascot" />
        <div className="policy-body">
          <h2>Privacy for local use and offline focus.</h2>
          <p>flow is designed to work locally on your device by default. If you use flow without an account or subscription, your focus information, rhythms, and logs remain on your device except when you choose to export, back up, or share it yourself.</p>

          <p>flow may offer optional features in the future, such as cloud synchronization or backup services. If you choose to use those features, we may collect and store the information needed to maintain your account, sync your data across devices, and provide access to the features you request.</p>

          <p>We do not sell your personal information. We do not use advertising trackers for third-party ad targeting, and we do not use your productivity data for data brokerage.</p>

          <p>If you contact support by email, we use the information you send only to respond, troubleshoot, and support your request.</p>

          <p>By using flow, you agree to this policy. If this privacy policy changes, this page will be updated to reflect the current version. Continued use of flow after an update means you accept the revised policy.</p>
        </div>
        </div>
      </div>

      <footer className="site-footer">
        <a href="https://www.facebook.com/go.mattykun" target="_blank" rel="noopener noreferrer" className="footer-link">Made by Matthew Vargas</a>
        <div className="footer-links">
          <Link href="/privacy-policy" className="footer-link">Privacy Policy</Link>
          <Link href="/terms" className="footer-link">Terms</Link>
        </div>
      </footer>
    </div>
  );
}
