import Link from "next/link";
import React from "react";

const RegistrationSection = () => {
  return (
    <div>
      <h1 className="text-xl lg:text-6xl pt-32 pb-16 bg-black text-white font-bold flex justify-center">
        Online Registration
      </h1>
      <div className="flex flex-row justify-center gap-20 mt-10 text-white font-bold">
        <Link
          href="/registration/guest"
          className="bg-black p-5 w-40 text-center flex justify-center items-center h-16"
        >
          Guest
        </Link>
        <Link
          href="/registration/company"
          className="bg-black p-5 w-40 text-center flex justify-center items-center h-16"
        >
          Company
        </Link>
        <Link
          href="#"
          className="bg-red-600 p-5 w-40 text-center flex justify-center items-center h-16"
        >
          Event Organizer
        </Link>
      </div>
    </div>
  );
};

export default RegistrationSection;
