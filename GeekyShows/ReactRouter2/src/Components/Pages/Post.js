import React from "react";
import { useLocation, useParams } from "react-router-dom";

const Post = () => {
  let { category, id } = useParams();

  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Post Page -{category}</h1>
      <h1>Post Page -{id}</h1>
    </div>
  );
};

export default Post;
