import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavButton({ text, onClick, contact, isContact }) {
  const navigate = useNavigate();
  return (
    <li
      className={`w-1/5 text-center opacity-60 text-lg font-light hover:scale-105 text-white`}
      onClick={
        isContact
          ? () => {
              !contact && onClick();
            }
          : () => {
              navigate("/posts");
            }
      }
    >
      <button disabled={contact} className="textShadow">
        {text}
      </button>
    </li>
  );
}
