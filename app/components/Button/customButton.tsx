import Link from "next/link";
import React from "react";

interface customButtonProps {
  title: string;
  linkbutton: string;
  size: string;
  backgroundColor: string;
  backgroundHoverColor: string;
  textColor: string;
  textColorHover: string;
}

const CustomButton: React.FC<customButtonProps> = ({
  title,
  linkbutton,
  size,
  backgroundColor,
  backgroundHoverColor,
  textColor,
  textColorHover,
}) => {
  return (
    <div className={`group ${textColor}`}>
      <Link href={linkbutton}>
        <button
          className={`mt-6 font-bold hover:text-white ${size} ml-0 ${backgroundColor} hover:${backgroundHoverColor} ${textColor} hover:${textColorHover} border-transparent rounded-full`}
        >
          {title}
        </button>
      </Link>
    </div>
  );
};

export default CustomButton;
