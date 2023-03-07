export const imageUpload = async (imgFile) => {
  const data = new FormData();
  data.append("file", imgFile);
  data.append("upload_preset", "cjil91o0");
  const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloudName}/upload`,
    {
      method: "POST",
      body: data,
    }
  );
  return res.json();
};
