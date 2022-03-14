import React from "react";

const Post = (props) => {
  return (
    <div>
      <h1>Post Page -{props.match.params.category}</h1>
      <h1>Post Page -{props.match.params.id}</h1>
    </div>
  );
};

export default Post;
