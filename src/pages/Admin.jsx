import React from "react";
import { handleGoogleLogin, logout } from "../api/firebase";
import { useUserContext } from "../context/UserContext";

export default function Admin() {
  const { userData } = useUserContext();
  if (!userData)
    return (
      <div className="p-1">
        여길 어떻게 오셨지..?
        <button className="border p-1" onClick={handleGoogleLogin}>
          로그인하기
        </button>
      </div>
    );
  if (userData.isAdmin)
    return (
      <>
        <h1>안녕하세요 현석햄</h1>
        <button className="border p-1" onClick={logout}>
          로그아웃하기
        </button>
      </>
    );
  return (
    <>
      <img src="/nothing_here_gay.gif" alt="" className="w-1/2 -z-10" />
      <a
        href="https://taehun0933.tistory.com/"
        target="_blank"
        rel="noreferrer"
        onClick={(e) => {
          e.target.style.visibility = "hidden";
        }}
      >
        <img
          src="/popup3.png"
          alt="no ad1"
          className="w-1/3 absolute top-10 right-10"
        />
      </a>
      <a
        href="https://taehun0933.tistory.com/"
        target="_blank"
        rel="noreferrer"
        onClick={(e) => {
          e.target.style.visibility = "hidden";
        }}
      >
        <img
          src="/popup2.png"
          alt="no ad2"
          className="w-1/3 absolute bottom-4 right-24"
        />
      </a>
      <a
        href="https://taehun0933.tistory.com/"
        target="_blank"
        rel="noreferrer"
        onClick={(e) => {
          e.target.style.visibility = "hidden";
        }}
      >
        <img
          src="/popup1.png"
          alt="no ad3"
          className="w-1/3 absolute top-36 right-96"
        />
      </a>

      <button className="border p-1" onClick={logout}>
        로그아웃하기
      </button>
    </>
  );
}

// 어드민 화면 : 포스팅 관리, 배경사진 관리, 카테고리 관리
