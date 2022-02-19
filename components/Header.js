import Image from "next/image";
import React from "react";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import HeaderLink from "./HeaderLink";
import GroupIcon from "@mui/icons-material/Group";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsIcon from "@mui/icons-material/Notifications";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import { Avatar } from "@mui/material";

const Header = () => {
  return (
    <div>
      {/* left  */}
      <div className="flex items-center space-x-2 w-full max-w-xs">
        <Image src="https://rb.gy/bizvqj" alt="" width="45" height="45" />

        <div className="flex item-center space-x-2 dark:md:bg-gray-700 py-2.5 px-8 rounded w-full">
          <SearchRoundedIcon />
          <input
            type="text"
            placeholder="Search"
            className="hidden md:inline-flex bg-transparent text-sm focus:outline-none placeholder-black/70 dark:placeholder-white/75 flex-grow"
          />
        </div>
      </div>
      {/* right */}
      <div className="flex items-center space-x-6">
        <HeaderLink Icon={HomeRoundedIcon} text="Home" feed active />
        <HeaderLink Icon={GroupIcon} text="My Network" feed />
        <HeaderLink Icon={BusinessCenterIcon} text="Jobs" feed hidden />
        <HeaderLink Icon={ChatIcon} text="Messaging" feed />
        <HeaderLink Icon={NotificationsIcon} text="Notifications" feed />
        <HeaderLink Icon={Avatar} text="Me" feed avatar hidden />
        <HeaderLink Icon={AppsOutlinedIcon} text="Work" feed hidden />

        {/* dark mode toggle */}

        <div
          className={`bg-gray-600 flex items-center px-O.5 rounded-full h-6 w-12 cursor-pointer shrink-0 relative`}
        >
          <span className="absolute left-0">🌜</span>
          {/* motion.div */}
          <span className="absolute right-0">🌤</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
