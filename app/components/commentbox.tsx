// components/Review/commentBox.tsx
"use client";
import React, { useState, ChangeEvent } from "react";

interface CommentBoxProps {
  onCommentChange: (comment: string) => void;
}

const CommentBox: React.FC<CommentBoxProps> = ({ onCommentChange }) => {
  const [comment, setComment] = useState<string>("");

  const handleCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const newComment = event.target.value;
    setComment(newComment);
    onCommentChange(newComment);
  };

  return (
    <textarea
      className="w-full p-4 border rounded-lg"
      rows={4}
      placeholder="Leave a comment..."
      value={comment}
      onChange={handleCommentChange}
    ></textarea>
  );
};

export default CommentBox;
