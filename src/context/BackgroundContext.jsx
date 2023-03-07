import React, { createContext, useContext, useEffect, useState } from "react";
import { getBackgroundImageUrls } from "../api/firebase";

export const BackgroundContext = createContext();

export default function BackgroundProvider({ children }) {
  const [imageList, setImageList] = useState();
  const [bgNum, setBgNum] = useState(1);
  const [bgImg, setBgImg] = useState(imageList && imageList[bgNum]);
  // imageList에서 bgNum번째 원소를 추출하여, bgImg로 설정.

  useEffect(() => {
    // imageList db로부터 업데이트하도록 변경해야 함.
    getBackgroundImageUrls().then(setImageList);
  }, []);

  //test
  // if (imageList) console.log(imageList);

  // bgChangeWithAnimation에서의 원하는 로직
  // 1. 현재 이미지 페이드 아웃
  // 2. 페이드아웃 시 현재 이미지의 src를 새 이미지로 변경
  // 3. 새 이미지의 로딩이 끝나면 페이드인
  const bgChangeWithAnimation = (backgroundImg) => {
    let loadEnd = false;
    let fadeOutEnd = false;
    if (backgroundImg.complete) loadEnd = true;
    setBgNum(bgNum === 2 ? 0 : bgNum + 1);
    backgroundImg.style.opacity = 0.9;
    const fadeEffect = setInterval(function () {
      const opacity = parseFloat(backgroundImg.style.opacity);
      if (opacity > 0)
        backgroundImg.style.opacity = (opacity - 0.03).toString();
      else {
        fadeOutEnd = true;
        setBgImg(`${imageList[bgNum]}`);
        clearInterval(fadeEffect);
      }
    }, 15);

    const check = setInterval(() => {
      if (loadEnd && fadeOutEnd) {
        clearInterval(check);
        fadeIn(backgroundImg);
      }
    }, 100);
  };
  const fadeIn = (backgroundImg) => {
    const fadeEffect = setInterval(function () {
      const opacity = parseFloat(backgroundImg.style.opacity);
      if (opacity < 0.9)
        backgroundImg.style.opacity = (opacity + 0.03).toString();
      else clearInterval(fadeEffect);
    }, 15);
  };

  const bgChange = () => {
    setBgNum(bgNum === 2 ? 0 : bgNum + 1);
    setBgImg(`${imageList[bgNum]}`);
  };

  return (
    <BackgroundContext.Provider
      value={{ bgChangeWithAnimation, bgNum, bgImg, bgChange }}
    >
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackgroundContext() {
  return useContext(BackgroundContext);
}
