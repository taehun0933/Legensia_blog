import React, { createContext, useContext, useEffect, useState } from "react";

export const BackgroundContext = createContext();

export default function BackgroundProvider({ children }) {
  const [imageList, setImageList] = useState();
  // 추후엔 db에서 데이터를 가져 옴.
  const [bgNum, setBgNum] = useState(1);
  // bgNum에서는 숫자를 다룸. 이 숫자를 통해 bgImg에 접근하여 해당하는 인덱스의 url로 이미지를 교체 처리함.(하도록 추후 변경)
  const [bgImg, setBgImg] = useState(imageList && imageList[bgNum]);
  // imageList에서 bgNum번째 원소를 추출하여, bgImg로 설정.

  useEffect(() => {
    // imageList db로부터 업데이트하도록 변경해야 함.
    setImageList(["/1.png", "/2.png", "/3.png"]);
  }, []);

  // const bgChangeWithAnimation = (backgroundImg) => {
  //   setBgNum(bgNum === 2 ? 0 : bgNum + 1);
  //   backgroundImg.style.opacity = 0.9;
  //   const fadeEffect = setInterval(function () {
  //     const opacity = parseFloat(backgroundImg.style.opacity);
  //     if (opacity > 0)
  //       backgroundImg.style.opacity = (opacity - 0.04).toString();
  //     else {
  //       setBgImg(`${imageList[bgNum]}`);
  //       clearInterval(fadeEffect);
  //       fadeIn(backgroundImg);
  //     }
  //   }, 15);
  // };
  // const fadeIn = (backgroundImg) => {
  //   const fadeEffect = setInterval(function () {
  //     const opacity = parseFloat(backgroundImg.style.opacity);
  //     if (opacity < 0.9)
  //       backgroundImg.style.opacity = (opacity + 0.04).toString();
  //     else clearInterval(fadeEffect);
  //   }, 15);
  // };

  const bgChangeWithAnimation = (backgroundImg) => {
    backgroundImg.style.opacity = 0;
    setBgNum(bgNum === 2 ? 0 : bgNum + 1);
    setBgImg(`${imageList[bgNum]}`);
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
