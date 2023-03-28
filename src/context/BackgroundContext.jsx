import React, { createContext, useContext, useEffect, useState } from "react";
import { getBackgroundImageUrls } from "../api/firebase";

export const BackgroundContext = createContext();

export default function BackgroundProvider({ children }) {
  const [imageList, setImageList] = useState();
  const [bgNum, setBgNum] = useState(0);
  const [bgImg, setBgImg] = useState();
  // imageList에서 bgNum번째 원소를 추출하여, bgImg로 설정.

  useEffect(() => {
    getBackgroundImageUrls().then(setImageList);
  }, []);
  useEffect(() => {
    if (imageList) setBgImg(imageList[bgNum]);
  }, [imageList, bgNum]);

  const bgChangeWithAnimation = (
    frontBg,
    backBgImg,
    frontBgImg,
    landscapeLogo
  ) => {
    // 배경 전환 버튼이 눌리면
    // 1) 뒤의 배경을 새로운 배경의 url로 교체
    // 2) 뒤의 배경 로딩이 끝나면, 앞의 배경의 opacity 0으로 전환
    // 3) 앞의 배경을 1)의 url로 교체
    // 4) 앞의 배경(opacity 0인)의 로딩이 끝나면, opacity 1로 전환
    landscapeLogo.style.pointerEvents = "none";

    const nextBgNum = (bgNum + 1) % imageList.length;
    backBgImg.src = imageList && imageList[nextBgNum];

    backBgImg.onload = () => {
      frontBg.style.opacity = 0;
      setTimeout(() => {
        setBgNum(nextBgNum);
      }, 1000);
    };

    frontBgImg.onload = () => {
      setTimeout(() => {
        frontBg.style.opacity = 1;
        landscapeLogo.style.pointerEvents = "auto";
      }, 1000);
    };
  };
  const bgChange = () => {
    setBgNum(bgNum === imageList.length - 1 ? 0 : bgNum + 1);
  };

  return (
    <BackgroundContext.Provider
      value={{ bgChangeWithAnimation, bgNum, bgImg, bgChange, imageList }}
    >
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackgroundContext() {
  return useContext(BackgroundContext);
}
