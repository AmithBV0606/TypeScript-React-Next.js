import React from "react";
import PostCard from "../PostCard/PostCard";
import { PostProps } from "@/types";

// Type of prop which is coming from an API :
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  if (!res.ok) {
    throw new Error("Failed to fetch data.");
  }

  return res.json();
}

const PostList = async () => {
  const data: PostProps[] = await getData();

  return (
    <div className="postList">
      {/* <PostCard
        title="first post about nextjs"
        body="This is a post explaining the structure of NextJs. NextJs is a full-stack framework built by vercel company.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur aliquid saepe neque repellat, obcaecati animi unde est nemo quasi asperiores quo laudantium accusamus exercitationem illo rem fugiat eveniet voluptates, explicabo, vel ea officiis fuga officia dolor. Magni distinctio eum, ut fugit totam molestiae corporis ea a repellat consequatur provident ratione."
      /> */}

      {/* {data.map((post: { id: number; title: string; body: string }) => (
        // <PostCard key={post.id} title={post.title} body={post.body}/>
        <PostCard key={post.id} {...post} />
      ))} */}

      {/* {data.map((post: PostProps) => (
        // <PostCard key={post.id} title={post.title} body={post.body}/>
        <PostCard key={post.id} {...post} />
      ))} */}

      {data.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
  );
};

export default PostList;
