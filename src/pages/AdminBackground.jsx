import React, { useState } from "react";
import { TiDeleteOutline } from "react-icons/ti";
import { imageUpload } from "../api/cloudinary";
import { setBackgroundImg } from "../api/firebase";

export default function AdminBackground() {
  const [imgFile, setImgFile] = useState();
  const [imgUrl, setImgUrl] = useState();
  const handleClick = () => {
    const reallyDelete = window.confirm("정말로 해당 이미지를 삭제할까요?");
    if (reallyDelete) {
      // 삭제 처리
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!imgFile) {
      alert("선택된 이미지가 없습니다!");
      return;
    }
    const reallyUpload = window.confirm("해당 이미지를 업로드할까요?");
    if (reallyUpload)
      imageUpload(imgFile).then((res) => setBackgroundImg(res.url));
  };
  return (
    <div className="flex flex-col items-center">
      {imgUrl && <img src={imgUrl} alt="miribogi" className="w-96"></img>}
      <form>
        <input
          type="file"
          onChange={(e) => {
            const file = e.target.files[0];
            const url = URL.createObjectURL(file);
            setImgUrl(url);
            setImgFile(file);
          }}
        />
        <button
          onClick={handleSubmit}
          className="border px-2 py-1 bg-slate-300"
        >
          등록
        </button>
      </form>
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 p-10">
        <div className="relative transition-transform hover:scale-105">
          <button
            className="absolute z-10 text-2xl right-1 top-1"
            onClick={handleClick}
          >
            <TiDeleteOutline />
          </button>
          <img src="/1.png" alt="backgroundImage" />
        </div>
      </section>
    </div>
  );
}
