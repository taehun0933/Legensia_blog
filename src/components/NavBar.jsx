import React from "react";
import NavButton from "../ui/NavButton";

export default function NavBar({ toggleContact, contact }) {
  return (
    <ul
      className={`flex justify-between w-2/5 -mt-32 transition-all duration-1000 ${
        contact && "-translate-y-44 opacity-0"
      }`}
    >
      <NavButton text={"PHOTO"} contact={contact} />
      <NavButton text={"MUSIC"} contact={contact} />
      <NavButton text={"LOG"} contact={contact} />
      <NavButton text={"OTHER"} contact={contact} />
      <NavButton
        text={"CONTACT"}
        onClick={toggleContact}
        contact={contact}
        isContact
      />
    </ul>
  );
}
