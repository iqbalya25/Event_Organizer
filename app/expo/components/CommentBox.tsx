// components/CommentBox.tsx
import React from "react";

interface CommentBoxProps {
  onCommentChange: (comment: string) => void;
}

const CommentBox: React.FC<CommentBoxProps> = ({ onCommentChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onCommentChange(event.target.value);
  };

  return (
    <textarea
      onChange={handleChange}
      className="w-full p-2 border border-gray-300 rounded-md"
      rows={4}
      placeholder="Write your comment here..."
    />
  );
};

export default CommentBox;
