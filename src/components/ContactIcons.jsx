import React from "react";
import ContactIcon from "../ui/ContactIcon";

export default function ContactIcons({ showContactIcons }) {
  return (
    <div
      className={`opacity-0 transition-all mt-32 duration-700 ${
        showContactIcons && "mt-28 opacity-100"
      }`}
    >
      <div className="flex justify-around">
        <ContactIcon
          src="youtube"
          url="https://youtube.com/@user-ce5pw5wn6h"
          showContactIcons={showContactIcons}
        />
        <ContactIcon
          src="instagram"
          url="https://www.instagram.com/legen_sia/"
          showContactIcons={showContactIcons}
        />
        <ContactIcon
          src="mail"
          url="mailto:legensia@gmail.com"
          showContactIcons={showContactIcons}
        />
      </div>
      <p className="opacity-60 text-white textShadow mt-1">
        legensia@gmail.com
      </p>
    </div>
  );
}
