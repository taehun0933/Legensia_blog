import React from "react";

export default function Post({ title, thumbnail }) {
  return (
    <article className="mb-5">
      <img
        src={thumbnail}
        alt="thumbnail"
        className="h-48 w-full object-cover"
      />
      <h3 className="text-gray-600 mt-2">{title}</h3>
    </article>
  );
}
