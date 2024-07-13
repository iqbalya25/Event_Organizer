import React from "react";

interface RedButtonProfilesProps {
  title: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  href?: string;
}

const RedButtonProfiles: React.FC<RedButtonProfilesProps> = ({ title, icon, onClick, href }) => {
  const ButtonContent = () => (
    <>
      {icon && <span className="mr-2">{icon}</span>}
      {title}
    </>
  );

  return href ? (
    <a
      href={href}
      className="bg-red-600 text-white py-2 px-4 rounded-full flex items-center justify-center"
      target="_blank"
      rel="noopener noreferrer"
    >
      <ButtonContent />
    </a>
  ) : (
    <button
      onClick={onClick}
      className="bg-red-600 text-white py-2 px-4 rounded-full flex items-center justify-center"
    >
      <ButtonContent />
    </button>
  );
};

export default RedButtonProfiles;
