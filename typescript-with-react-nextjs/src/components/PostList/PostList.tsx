import React from "react";
import PostCard from "../PostCard/PostCard";

const PostList = async () => {
  return (
    <div className="postList">
      <PostCard
        title="first post about nextjs"
        desc="This is a post explaining the structure of NextJs. NextJs is a full-stack framework built by vercel company.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur aliquid saepe neque repellat, obcaecati animi unde est nemo quasi asperiores quo laudantium accusamus exercitationem illo rem fugiat eveniet voluptates, explicabo, vel ea officiis fuga officia dolor. Magni distinctio eum, ut fugit totam molestiae corporis ea a repellat consequatur provident ratione."
      />
    </div>
  );
};

export default PostList;