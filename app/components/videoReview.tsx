import React from "react";

interface VideoReviewProps {
  src: string;
}

const VideoReview: React.FC<VideoReviewProps> = ({ src }) => {
  return (
    <div className="h-fit bg-black">
      <video src={src} className="p-16" controls></video>
    </div>
  );
};

export default VideoReview;

// src=""
