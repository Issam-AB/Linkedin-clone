import { useSession } from "next-auth/react";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { handlePostState } from "../atoms/postAtom";

const Form = () => {
  const [input, setInput] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const { data: session } = useSession();
  const [modalOpen, setModalOpen] = useRecoilState(modalState);
  const [handlePost, setHandlePost] = useState(handlePostState);

  const upoloadPost = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        input: input,
        photoUrl: photoUrl,
        username: session.user.name,
        email: session.user.email,
        userImg: session.user.image,
        createdAt: new Date().toString(),
      }),
      headers: { "Content-Type": "application/json" },
    });
    const responseData = await response.json();
    // console.log(responseData);

    setHandlePost(true);
    setModalOpen(false);
  };

  return (
    <form className="flex flex-col relative sapce-y-2 text-black/80 dark:text-white/75">
      <textarea
        rows="4"
        placeholder="what do you want to talk about?"
        className="bg-transparent focus:outline-none dark:placeholder-white/75"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <input
        type="text"
        placeholder="Add a photo URL (optional)"
        className="bg-transparent focus:outline-none truncate max-w-xs md:max-w-sm dark:placeholder-white/75"
        value={photoUrl}
        onChange={(e) => setPhotoUrl(e.target.value)}
      />
      <button
        className="absolute right-0 bottom-0 bg-blue-400 hover:bg-blue-500 disabled:text-black/40 disabled:bg-white/75 disabled:cursor-not-allowed text-white rounded-full px-3.5 py-1"
        type="submit"
        disabled={!input.trim() && !photoUrl.trim()}
        onClick={upoloadPost}
      >
        Post
      </button>
    </form>
  );
};

export default Form;
