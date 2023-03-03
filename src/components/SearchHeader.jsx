import React from "react";
import { useNavigate } from "react-router-dom";
import { useBackgroundContext } from "../context/BackgroundContext";

export default function SearchHeader() {
  const navigate = useNavigate();
  const { test } = useBackgroundContext();
  return (
    <header className="mt-7 mb-10 flex">
      <input
        type="text"
        className="w-2/5 border border-gray-500 m-auto rounded-full outline-none px-3 py-2"
      />
      <nav className="flex gap-3">
        <img
          src="/background.svg"
          alt="backgroundLogo"
          className="w-5 hover:cursor-pointer"
          onClick={() => {
            test();
          }}
        />
        <img
          src="/home.svg"
          alt="homeLogo"
          className="w-5 hover:cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        />
      </nav>
    </header>
  );
}
