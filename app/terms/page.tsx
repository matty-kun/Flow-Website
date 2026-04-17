import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Terms of Service — Flow",
  description: "Terms of Service for the Flow focus companion app.",
};

export default function Terms() {
  return (
    <div className="policy-root">
      <div className="policy-container">
        <Link href="/" className="policy-back">← Back to Flow</Link>
        <h1 className="policy-title">Terms of Service</h1>
        <p className="policy-date">Last updated: April 17, 2026</p>

        <div className="policy-card-wrap">
          <Image src="/read flow.png" alt="Read Flow" width={220} height={220} className="policy-mascot policy-mascot--flip" />
          <div className="policy-body">
            <h2>Simple terms for using flow.</h2>
            <p>flow is provided as a personal productivity tool for individual use. You are responsible for how you use the app and for keeping your device and focus data secure.</p>

            <p>flow may be available as a one-time purchase. We may also offer optional cloud synchronization or advanced features in the future. Any such subscription would be optional and is not required to use the core, on-device features of the app.</p>

            <p>If you purchase flow through the Google Play Store, all billing, renewals, cancellations, and refunds are handled by Google under their own platform policies.</p>

            <p>Any future cloud-based features will depend on internet connectivity and compatible app versions. We reserve the right to change, improve, or limit these optional features for security, technical, or product reasons.</p>

            <p>flow is provided on an &quot;as is&quot; basis. While we strive to help you find your rhythm, we do not provide guarantees of uninterrupted availability or compatibility with every device configuration.</p>

            <p>These terms may be updated from time to time, and this page will always reflect the latest version. By continuing to use flow, you agree to these terms.</p>
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
