import React from "react";
import { useNavigate } from "react-router-dom";
import { useBackgroundContext } from "../context/BackgroundContext";

export default function SideNav() {
  const { bgImg } = useBackgroundContext();
  const navigate = useNavigate();
  const WHITE_MEDIUM_TEXT =
    "text-white uppercase m-auto font-medium text-lg hover:cursor-pointer textShadow";
  return (
    <div className="mr-60 max-md:hidden">
      <div className="flex fixed">
        <div className="relative h-screen -z-10 bg-black">
          <img
            src={bgImg || "/1.png"}
            alt="background"
            className="w-60 h-screen object-cover fixed -z-10 opacity-80"
          />
          <img
            src="/Wlogo.svg"
            alt="logo"
            className="w-40 m-auto mt-10 hover:cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
          <ul className="flex flex-col w-60 gap-2 mt-12">
            <li className={WHITE_MEDIUM_TEXT}>photo</li>
            <li className={WHITE_MEDIUM_TEXT}>music</li>
            <li className={WHITE_MEDIUM_TEXT}>log</li>
            <li className={WHITE_MEDIUM_TEXT}>other</li>
          </ul>
          <footer className="absolute bottom-4 text-white text-xs text-center w-full font-semibold">
            <h5>Legen_sia</h5>
            <a
              href="https://taehun0933.tistory.com/"
              target="_blank"
              rel="noreferrer"
              className="animate-spin"
            >
              <div className="animate-bounce">made by taehun0933</div>
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
