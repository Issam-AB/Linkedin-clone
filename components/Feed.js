import React, { useState } from "react";
import { useEffect } from "react";
import Input from "./Input";
import { handlePostState, useSSRPostsState } from "../atoms/postAtom";
import { useRecoilState } from "recoil";
import Post from "./Post";

const Feed = ({ posts }) => {
  const [realtimePosts, setRealtimePosts] = useState([]);
  const [handlePost, setHandlePost] = useRecoilState(handlePostState);
  const [useSSRPosts, setUseSSRPosts] = useRecoilState(useSSRPostsState);

  useEffect(() => {
    const fetPosts = async () => {
      const response = await fetch("/api/posts", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const responseData = await response.json();

      setRealtimePosts(responseData);
      setHandlePost(false);
      setUseSSRPosts(false);
    };
    fetPosts();
  }, [handlePost]);

  return (
    <div className="space-y-6 pb-24 max-w-lg">
      <Input />
      {/* Posts */}

      {!useSSRPosts
        ? realtimePosts.map((post) => <Post key={post._id} post={post} />)
        : posts.map((post) => <Post key={post._id} post={post} />)}
    </div>
  );
};

export default Feed;
