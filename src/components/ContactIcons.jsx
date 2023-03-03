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
          url="https://www.instagram.com/legen_sia/"
          // 추후 현석형 계정으로 이메일 작성하게 변경
          showContactIcons={showContactIcons}
        />
      </div>
      <p className="opacity-60">legensia@gmail.com</p>
    </div>
  );
}
