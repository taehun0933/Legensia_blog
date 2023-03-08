import React from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { deleteImageUrl } from "../api/firebase";

export default function UploadedImage({ url }) {
  return (
    <div className="relative transition-transform hover:scale-105">
      <button
        className="absolute z-10 text-2xl right-1 top-1"
        onClick={() => {
          const reallyDelete =
            window.confirm("정말로 해당 이미지를 삭제할까요?");
          if (reallyDelete) {
            deleteImageUrl(url);
          }
        }}
      >
        <TiDeleteOutline />
      </button>
      <img src={url} alt="backgroundImage" />
    </div>
  );
}
