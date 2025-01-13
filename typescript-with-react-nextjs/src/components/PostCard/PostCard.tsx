import { PostProps } from "@/types";
import React from "react";

const PostCard = async ({ title, body }: PostProps) => {
  return (
    <div className="postCard">
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  );
};

export default PostCard;