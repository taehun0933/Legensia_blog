import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavButton({ text, onClick, contact, isContact }) {
  const navigate = useNavigate();
  return (
    <li
      className={`w-1/5 text-center opacity-60 text-lg font-light hover:scale-105`}
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
      <button disabled={contact}>{text}</button>
    </li>
  );
}
