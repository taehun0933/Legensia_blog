import React, { createContext, useContext, useState } from "react";

export const BackgroundContext = createContext();

export default function BackgroundProvider({ children }) {
  const [bgImg, setBgImg] = useState("/1.png");
  // bgImg에는 데이터베이스 상에서 받아온 배경 이미지들이 들어 있음.
  const [bgNum, setBgNum] = useState(2);
  // bgNum에서는 숫자를 다룸. 이 숫자를 통해 bgImg에 접근하여 해당하는 인덱스의 url로 이미지를 교체 처리함.(하도록 추후 변경)

  const bgChangeWithAnimation = (backgroundImg) => {
    setBgNum(bgNum === 3 ? 1 : bgNum + 1);
    backgroundImg.style.opacity = 1;
    const fadeEffect = setInterval(function () {
      const opacity = parseFloat(backgroundImg.style.opacity);
      if (opacity > 0)
        backgroundImg.style.opacity = (opacity - 0.04).toString();
      else {
        clearInterval(fadeEffect);
        setBgImg(`${bgNum}.png`);
        fadeIn(backgroundImg);
      }
    }, 15);
  };
  const fadeIn = (backgroundImg) => {
    const fadeEffect = setInterval(function () {
      const opacity = parseFloat(backgroundImg.style.opacity);
      if (opacity < 1)
        backgroundImg.style.opacity = (opacity + 0.04).toString();
      else clearInterval(fadeEffect);
    }, 15);
  };

  const test = () => {
    setBgNum(bgNum === 3 ? 1 : bgNum + 1);
    setBgImg(`${bgNum}.png`);
  };

  return (
    <BackgroundContext.Provider
      value={{ bgChangeWithAnimation, bgNum, bgImg, test }}
    >
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackgroundContext() {
  return useContext(BackgroundContext);
}
