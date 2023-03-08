import React, { useState } from "react";
import { imageUpload } from "../api/cloudinary";
import { setBackgroundImg } from "../api/firebase";
import UploadedImage from "../components/UploadedImage";
import { useBackgroundContext } from "../context/BackgroundContext";

export default function AdminBackground() {
  const [imgFile, setImgFile] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [success, setSuccess] = useState();
  const [loading, setLoading] = useState();
  const { imageList } = useBackgroundContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!imgFile) {
      alert("선택된 이미지가 없어요");
      return;
    }
    const reallyUpload = window.confirm("해당 이미지를 업로드할까요?");
    if (reallyUpload) {
      setLoading(true);
      imageUpload(imgFile)
        .then((res) => setBackgroundImg(res.url))
        .then(() => {
          setSuccess(true);
          setLoading();
          setTimeout(() => {
            setSuccess();
          }, 3000);
        });
    }
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
          className={`border px-2 py-1 bg-slate-300 ${
            loading && "bg-black text-white"
          }`}
        >
          {loading ? "등록중..." : "등록하기"}
        </button>
      </form>
      {success && "🙉 성공적으로 처리되었습니다"}
      <section className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-10 p-10">
        {imageList &&
          imageList.map((url) => <UploadedImage url={url} key={url} />)}
      </section>
    </div>
  );
}
