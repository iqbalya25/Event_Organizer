import React from "react";

interface VideoReviewProps {
  src: string;
}

const VideoReview: React.FC<VideoReviewProps> = ({ src }) => {
  return (
    <div>
      <video src={src} className="p-44" controls></video>
    </div>
  );
};

export default VideoReview;

// src=""
