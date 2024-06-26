import Link from "next/link";
import React from "react";

interface RegularButtonProps {
  title: string;
  linkbutton: string;
  hoverColor: string;
}

const RegularButton: React.FC<RegularButtonProps> = ({
  title,
  linkbutton,
  hoverColor,
}) => {
  return (
    <div>
      <Link href={linkbutton}>
        <button
          className={`mt-6 btn font-bold hover:text-white w-48 ml-0 bg-white hover:${hoverColor} text-black border-transparent rounded-full`}
        >
          {title}
        </button>
      </Link>
    </div>
  );
};
export default RegularButton;
