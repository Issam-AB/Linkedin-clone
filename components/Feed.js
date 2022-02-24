import React from "react";
import { useEffect } from "react";
import Input from "./Input";
import { handlePostState, useSSRPostsState } from "../atoms/postAtom";

const Feed = () => {
  const [realtimePosts, setRealtimePosts] = useState([]);
  const [handlePost, setHandlePost] = useRecoilState(handlePostState);

  useEffect(() => {
    const fetPosts = async () => {
      const response = await fetch("/api/posts", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });
      const responseData = await response.json();
      setRealtimePosts(responseData);
    };
    fetPosts();
  }, [handlePost]);

  return (
    <div className="space-y-6 pb-24 max-w-lg">
      <Input />
      {/* Posts */}
    </div>
  );
};

export default Feed;
