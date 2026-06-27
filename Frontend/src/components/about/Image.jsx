import React from "react";
import { useLoaderData } from "react-router-dom";


function Image() {
  const data = useLoaderData();
  return <img src={data.avatar_url} alt="git-picture" className="scale-99 rounded-full" />;
}

export default Image;

