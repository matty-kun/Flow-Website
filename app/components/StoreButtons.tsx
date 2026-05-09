"use client";

import { useState } from "react";

export default function StoreButtons() {
  const [bubble, setBubble] = useState(false);

  function showBubble() {
    setBubble(true);
    setTimeout(() => setBubble(false), 2500);
  }

  return (
    <div className="store-buttons hero-store-buttons">
      <div className="btn-store-wrap">
        <button onClick={showBubble} className="btn-store">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
          </svg>
          App Store
        </button>
        {bubble && (
          <div className="chat-bubble">Coming soon</div>
        )}
      </div>
      <a
        href="https://play.google.com/store/apps/details?id=io.flow.app&hl=en"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-store"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M3.24 1.1L15.9 12l-5.69 5.37L3.24 1.1zm17.65 10c.84.44.84 1.36 0 1.8l-5.32 2.82-1.92-1.8 1.94-1.83 5.3-1zM2.08 2.08L14.7 13.9 3.2 22.9C2.45 23.38 2 23.06 2 22.06V2.08zm8.68 15.11L14.47 21a.95.95 0 0 0 1.4-.23l-3.32-3.14-1.8.44z" />
        </svg>
        Google Play
      </a>
    </div>
  );
}
