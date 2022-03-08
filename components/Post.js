import { Avatar } from "@mui/material";
import React, { useState } from "react";
import { IconButton } from "@mui/material";
import {
  CloseRounded as CloseRoundedIcon,
  MoreHorizRounded as MoreHorizRoundedIcon,
} from "@mui/icons-material";

const Post = ({ post, modalPost }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [showInput, setShowInput] = useState(false);

  // const truncate = (string, n) => {
  //   string?.length > n ? string.substr(0, n - 1) + "... se more" : string;
  // };

  return (
    <div
      className={`bg-white dark:bg-[#1D2226] ${
        modalPost ? "rounded-r-lg" : "rounded-lg"
      } space-y-2 py-2.5 border border-gray-300 dark:border-none`}
    >
      <div className=" flex items-center px-2.5 cursor-pointer">
        <Avatar src={post.userImg} className="!h-10 !w-10 cursor-pointer" />
        <div className="mr-auto ml-2 leading-none">
          <h6 className="font-medium hover:text-blue-500 hover:underline">
            {post.username}
          </h6>
          <p className="text-sm dark:text-white/75 opacity-80">{post.email}</p>
          {/* timeago stamp */}
        </div>
        {modalPost ? (
          <IconButton onClick={setModalOpen(true)}>
            <CloseRoundedIcon className="dark:text-white/75 h-7 w-7" />
          </IconButton>
        ) : (
          <IconButton>
            <MoreHorizRoundedIcon className="dark:text-white/75 h-7 w-7" />
          </IconButton>
        )}
      </div>
      {post.input && (
        <div className="px-2.5 break-all md:breal-normal">
          {modalPost || showInput ? (
            <p>{post.input}</p>
          ) : (
            <p>{truncate(post.input, 150)}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Post;
