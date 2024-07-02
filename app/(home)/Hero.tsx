import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover">
        <source
          src="https://res.cloudinary.com/djyevwtie/video/upload/v1718554165/assetmp/qn7hf3parz4o7oe3e4ba.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-blue-500 opacity-50 z-0"></div>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white">
        <div className="relative w-full flex justify-center items-center">
          <Image
            src="/Box Title.png"
            alt="Box Title"
            width={800}
            height={600}
            className="absolute z-20"
            style={{ left: "-10%" }}
          />
          <div className="absolute z-30 w-full h-full flex flex-col justify-center p-8 text-left pl-36 lg:pl-44">
            <h1 className="text-2xl md:text-5xl lg:text-6xl font-bold">
              <span>
                Shaping the Future
                <br />
                with Technology
              </span>
            </h1>
            <p className="mt-4 text-xl md:text-2xl">
              World. Leading. Industryshow.
            </p>
            <button className="mt-6 btn hover:text-white w-48 ml-0 bg-white hover:bg-red text-black border-transparent rounded-full md:ml-20 lg:ml-24">
              Become an Exhibitor
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
