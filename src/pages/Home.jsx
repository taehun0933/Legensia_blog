import React, { useEffect, useRef, useState } from "react";
import ContactIcons from "../components/ContactIcons";
import NavBar from "../components/NavBar";
import { useBackgroundContext } from "../context/BackgroundContext";

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add("overFlowHidden");
    return () => {
      document.documentElement.classList.remove("overFlowHidden");
    };
  }, []);
  const [contact, setContact] = useState(false);
  const [showContactIcons, setShowContactIcons] = useState(false);
  const [refConnected, setRefConnected] = useState(false);
  const { bgChangeWithAnimation, bgImg, imageList } = useBackgroundContext();
  const toggleContact = () => {
    if (!contact) {
      setContact(!contact);
      setTimeout(() => {
        setShowContactIcons(!showContactIcons);
      }, 500);
    } else {
      setShowContactIcons(!showContactIcons);
      setTimeout(() => {
        setContact(!contact);
      }, 500);
    }
  };
  const handleClick = () => {
    bgChangeWithAnimation(
      frontBg.current,
      backBgImg.current,
      frontBgImg.current,
      landscapeLogo.current
    );
  };

  const landscapeLogo = useRef();
  const frontBg = useRef();
  const backBgImg = useRef();
  const frontBgImg = useRef();
  useEffect(() => {
    if (landscapeLogo.current) setRefConnected(true);
    if (refConnected)
      landscapeLogo.current.style.filter =
        " invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg) brightness(103%) contrast(103%)";
  }, [refConnected]);
  return (
    <>
      <div className="flex flex-col items-center mt-20 max-md:mt-32">
        <img
          src={"/Wlogo.svg"}
          alt="logo"
          className={`w-40 m-auto opacity-60 transition-all duration-1000 max-md:w-32 ${
            contact && "translate-y-24 hover:cursor-pointer"
          }`}
          onClick={() => {
            contact && toggleContact();
          }}
        />
        <ContactIcons showContactIcons={showContactIcons} />
        <NavBar toggleContact={toggleContact} contact={contact} bgImg={bgImg} />
      </div>
      <div
        className={`absolute bottom-0 -z-10 transition-all duration-1000 ${
          contact && "translate-y-48"
        }`}
      >
        <div className="bg-black behindBg -z-10">
          <img
            src={imageList && imageList[0]}
            alt="background"
            className="w-screen h-bgDefault object-cover opacity-90"
            ref={backBgImg}
          />
        </div>
        <div
          className="bg-black transition-opacity duration-1000 opacity-0"
          ref={frontBg}
        >
          <img
            src={bgImg}
            alt="background"
            className="w-screen h-bgDefault object-cover opacity-90"
            ref={frontBgImg}
          />
        </div>
        <div className="absolute z-20 bottom-5 w-full">
          <img
            src="/background.svg"
            alt="landscapeLogo"
            className="m-auto w-6 h-6 hover:cursor-pointer"
            onClick={handleClick}
            ref={landscapeLogo}
          />
        </div>
      </div>
    </>
  );
}
