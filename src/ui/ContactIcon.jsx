import React from "react";

export default function ContactIcon({ src, url, showContactIcons }) {
  return (
    <button
      onClick={() => {
        window.open(`${url}`);
      }}
      disabled={!showContactIcons}
    >
      <img src={`/${src}.png`} alt={src} className="w-6"></img>
    </button>
  );
}
