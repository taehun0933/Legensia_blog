import React from "react";
import { useNavigate } from "react-router-dom";
import { useBackgroundContext } from "../context/BackgroundContext";

export default function SearchHeader() {
  const navigate = useNavigate();
  const { test } = useBackgroundContext();
  return (
    // <header className="mt-7 mb-10 flex items-center">
    <div className="pt-28 flex w-full">
      <div className="fixed bg-white w-full h-28 top-0">
        <header className="mt-7 mb-10 flex items-center fixed top-0 left-0 right-0 px-24">
          <img
            src="/logo.svg"
            alt="logo"
            className="w-10 hidden max-md:block max-md:hover:cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
          <input
            type="text"
            className="w-1/3 border border-gray-500 m-auto rounded-full outline-none px-3 py-2 max-md:w-2/3 relative left-40 max-md:left-0"
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
      </div>
    </div>
  );
}
