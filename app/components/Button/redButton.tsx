import React from "react";
import Link from "next/link";

interface RedButtonProps {
  title: string;
  href: string;
}

const RedButton: React.FC<RedButtonProps> = ({ title, href }) => {
  return (
    <Link href={href}>
      <button className="btn border-none bg-red-600 hover:bg-white text-white hover:text-black w-24 md:w-36 rounded-full">
        <p className="p-3 tex-2xl font-bold">{title}</p>
      </button>
    </Link>
  );
};

export default RedButton;
