import Link from "next/link";
import React from "react";
import classNames from "classnames";

interface SmallButtonProps {
  title: string;
  linkbutton: string;
  backgroundColor: string;
  backgroundHoverColor: string;
  textColor: string;
  textColorHover: string;
  borderColor: string;
  borderHoverColor: string;
}

const SmallButton: React.FC<SmallButtonProps> = ({
  title,
  linkbutton,
  backgroundColor,
  backgroundHoverColor,
  textColor,
  textColorHover,
  borderColor,
  borderHoverColor,
}) => {
  return (
    <div>
      <Link href={linkbutton}>
        <button
          className={classNames(
            "btn btn-sm font-semibold ml-0 rounded-full",
            textColor,
            textColorHover && `hover:${textColorHover}`,
            backgroundColor,
            backgroundHoverColor && `hover:${backgroundHoverColor}`,
            borderColor,
            borderHoverColor && `hover:${borderHoverColor}`
          )}>
          {title}
        </button>
      </Link>
    </div>
  );
};

export default SmallButton;
