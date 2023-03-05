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

  // bgChangeWithAnimation에서의 원하는 로직
  // 1. 현재 이미지 페이드 아웃
  // 2. 페이드아웃 시 현재 이미지의 src를 새 이미지로 변경
  // 3. 새 이미지의 로딩이 끝나면 페이드인
  const bgChangeWithAnimation = (backgroundImg) => {
    let loadEnd = false;
    let fadeOutEnd = false;
    if (!backgroundImg.classList.contains("loadEventListener")) {
      backgroundImg.classList.add("loadEventListener");
      backgroundImg.addEventListener("load", () => {
        loadEnd = true;
        console.log("로드가 끝났어요.");
      });
    }
    setBgNum(bgNum === 2 ? 0 : bgNum + 1);
    backgroundImg.style.opacity = 0.9;
    const fadeEffect = setInterval(function () {
      const opacity = parseFloat(backgroundImg.style.opacity);
      if (opacity > 0)
        backgroundImg.style.opacity = (opacity - 0.03).toString();
      else {
        // opacity가 0일 때.
        console.log("opacity가 0입니다.");
        fadeOutEnd = true;
        setBgImg(`${imageList[bgNum]}`);
        clearInterval(fadeEffect);
      }
    }, 15);

    const check = setInterval(() => {
      console.log(loadEnd, fadeOutEnd);
      if (loadEnd && fadeOutEnd) {
        clearInterval(check);
        fadeIn(backgroundImg);
      }
    }, 1000);
  };
  const fadeIn = (backgroundImg) => {
    const fadeEffect = setInterval(function () {
      const opacity = parseFloat(backgroundImg.style.opacity);
      if (opacity < 0.9)
        backgroundImg.style.opacity = (opacity + 0.03).toString();
      else clearInterval(fadeEffect);
    }, 15);
  };
  // bgChangeWithAnimation에서의 원하는 로직
  // 1. 현재 이미지 페이드 아웃
  // 2. 페이드아웃 시 현재 이미지의 src를 새 이미지로 변경
  // 3. 새 이미지의 로딩이 끝나면 페이드인

  // const bgChangeWithAnimation = (backgroundImg) => {
  //   // getEventListers라는 콘솔용 api라서 사용 불가능. 때문에 우회적으로 이벤트 등록과 동시에 관련된 classList를 추가하여 중복 등록을 방지해 줌.
  //   if (!backgroundImg.classList.contains("loadEventListener")) {
  //     backgroundImg.classList.add("loadEventListener");
  //     backgroundImg.addEventListener("load", () => {
  //       if (backgroundImg.style.opacity === 0)
  //         backgroundImg.style.opacity = 0.9;
  //       else
  //         setTimeout(() => {
  //           backgroundImg.style.opacity = 0.9;
  //         }, 1000);
  //     });
  //   }

  //   backgroundImg.style.opacity = 0;
  //   setBgNum(bgNum === 2 ? 0 : bgNum + 1);
  //   setBgImg(`${imageList[bgNum]}`);
  // };

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
