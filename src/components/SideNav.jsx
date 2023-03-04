import React from "react";
import { useNavigate } from "react-router-dom";
import { useBackgroundContext } from "../context/BackgroundContext";

export default function SideNav() {
  const { bgImg } = useBackgroundContext();
  // 왜 변경되기 전의 value들이 뜨지? => 기존에 Outlet과 Home이 다른 경로에 있어 두 곳을 모두 Provider로 감싸 주었는데, 결과적으로 값이 공유되는 것이 아닌 각각의 값들이 별도로 존재하게 되었음.
  // 그렇기에, 공통된 값을 가지도록 index.js의 App 컴포넌트(전체를 아우르는)를 Provider로 감싸 주었음. 문제 해결!
  const navigate = useNavigate();
  const WHITE_BOLD_TEXT =
    "text-white uppercase m-auto font-bold text-lg hover:cursor-pointer textShadow";
  return (
    <div className="mr-60">
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
            <li className={WHITE_BOLD_TEXT}>photo</li>
            <li className={WHITE_BOLD_TEXT}>music</li>
            <li className={WHITE_BOLD_TEXT}>log</li>
            <li className={WHITE_BOLD_TEXT}>other</li>
          </ul>
          <footer className="absolute bottom-4 text-white text-xs text-center w-full font-semibold">
            <h5>Legen_sia</h5>
            <a
              href="https://taehun0933.tistory.com/"
              target="_blank"
              rel="noreferrer"
            >
              made by taehun0933
              {/* 이거 hover 시 커지게 만들어야함 */}
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}
