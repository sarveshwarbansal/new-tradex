"use client";

import React from "react";
import YouTube from "react-youtube";

const YoutubeVideo = ({ videoId }: any) => {
  const onReady = (event: any) => {
    const player = event.target;

    player.playVideo();
  };

  const onError = (error: any) => {
    console.error("YouTube Player Error:", error);
  };
  const opts = {
    playerVars: {
      autoplay: 0,
    }
  }
  return (
    <div className="bg-custom p-8 md:p-48" id="aboutus">
      <YouTube
        videoId={videoId}
        onReady={onReady}
        onError={onError}
        opts={opts}
        className="aspect-w-16 aspect-h-9"
      />
      <div className="w-full h-full rounded-b-lg bg-[#2B2059] text-white">
        <ol className="flex  md:flex-row justify-between">
          <li className="p-2 sm:p-10">
            <span className="font-[12px] sm:text-lg font-bold">10000+</span>{" "}
            <span className="text-sm font-light">Customers</span>
          </li>
          <li className="p-2 sm:p-10">
            <span className="font-[12px] sm:text-lg  font-bold">10x</span>{" "}
            <span className="text-sm font-light">Cost efficient</span>
          </li>
          <li className="p-2 sm:p-10">
            <span className="font-[12px] sm:text-lg  font-bold">75%</span>{" "}
            <span className="text-sm font-light">Time Saving</span>
          </li>
          <li className="p-2 sm:p-10">
            <span className="font-[12px] sm:text-lg  font-bold">⭐ 4.5/5</span>{" "}
          </li>
        </ol>
      </div>
    </div>
  );
};

export default YoutubeVideo;
