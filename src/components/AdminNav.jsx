import React from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

export default function AdminHeader() {
  const { userData } = useUserContext();
  const navigate = useNavigate();
  if (!userData || !userData.isAdmin) return null;
  return (
    <nav className="flex gap-2">
      <button
        onClick={() => {
          navigate("posting");
        }}
      >
        포스팅
      </button>
      <button
        onClick={() => {
          navigate("background");
        }}
      >
        백그라운드변경
      </button>
      <button
        onClick={() => {
          navigate("category");
        }}
      >
        카테고리변경
      </button>
    </nav>
  );
  // admin 전용 navBar 구현.
}
