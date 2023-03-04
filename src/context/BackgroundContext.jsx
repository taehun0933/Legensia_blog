import React, { createContext, useContext, useEffect, useState } from "react";

export const BackgroundContext = createContext();

export default function BackgroundProvider({ children }) {
  const [imageList, setImageList] = useState();
  // 추후엔 db에서 데이터를 가져 옴.
  let bgNum = 0;
  // bgNum에서는 숫자를 다룸. 이 숫자를 통해 bgImg에 접근하여 해당하는 인덱스의 url로 이미지를 교체 처리함.(하도록 추후 변경)
  const [bgImg, setBgImg] = useState(imageList && imageList[bgNum]);
  // imageList에서 bgNum번째 원소를 추출하여, bgImg로 설정.

  useEffect(() => {
    // imageList db로부터 업데이트하도록 변경해야 함.
    setImageList(["/1.png", "/2.png", "/3.png"]);
  }, []);

  const bgChangeWithAnimation = (backgroundImg) => {
    bgNum === 2 ? (bgNum = 0) : (bgNum += 1);
    console.log(bgNum);
    backgroundImg.style.opacity = 1;
    const fadeEffect = setInterval(function () {
      const opacity = parseFloat(backgroundImg.style.opacity);
      if (opacity > 0)
        backgroundImg.style.opacity = (opacity - 0.04).toString();
      else {
        clearInterval(fadeEffect);
        setBgImg(`${imageList[bgNum]}`);
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

  return (
    <BackgroundContext.Provider value={{ bgChangeWithAnimation, bgNum, bgImg }}>
      {children}
    </BackgroundContext.Provider>
  );
}

export function useBackgroundContext() {
  return useContext(BackgroundContext);
}
