import React from "react";
import {
  InfoRounded as InfoRoundedIcon,
  FiberSmartRecordRounded as FiberSmartRecordRoundedIcon,
} from "@mui/icons-material";
import Image from "next/image";
import TimeAgo from "timeago-react";

const Widgets = ({ articles }) => {
  return (
    <div className="hidden xl:inline  space-y-2">
      {/* NEWS */}
      <div className="bg-white dark:bg-[#1D2226] py-2.5 rounded-lg space-y-2  w-11/12 overflow-hidden">
        <div className="flex items-center justify-between font-bold px-2">
          <h4>Linkedin News</h4>
          <InfoRoundedIcon className="w-5 h-5" />
        </div>

        <div className="space-y-1">
          {articles.slice(0, 5).map((article) => (
            <div
              key={article.url}
              className="flex items-center space-x-2 cursor-pointer hover:bg-black/10 dark:hover:bg-black/20 px-2.5 py"
            >
              <FiberSmartRecordRoundedIcon className="!w-2 !h-2" />
              <div>
                <h5 className="max-w-xs font-medium text-sm truncate pr-10">
                  {article.title}
                </h5>
                <TimeAgo
                  datetime={article.publishedAt}
                  className="text-xs mt-0.5 dark:text-white/75 opacity-80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* ADS */}
      <div className="bg-white dark:bg-[#1D2226] w-11/12 h-64 px-2.5 rounded-lg sticky top-20 border border-gray-300 dark:border-none">
        <div className="relative w-full h-full">
          <Image
            src="https://rb.gy/kbfeaa"
            layout="fill"
            objectFit="contain"
            priority
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Widgets;
