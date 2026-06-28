import React from "react";
import { useLoaderData } from "react-router-dom";


function Image() {
  const data = useLoaderData();
  return <img src={data.avatar_url} alt="git-picture" className="border-4 border-[#2d2d2d] hover:border-[#b4ff39] scale-99 rounded-full" />;
}

export default Image;

