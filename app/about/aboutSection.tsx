import React from "react";
import Image from "next/image"; // Import Image component from Next.js
import VideoReview from "../components/videoReview";

const AboutSection = () => {
  return (
    <div>
      <div
        // style={{ height: "80vh" }}
        className="flex flex-col items-center bg-black text-white md:flex-row py-24"
      >
        <div
          style={{ width: "60vw" }}
          className="flex flex-col max-w-4xl mx-auto pl-20 justify-start"
        >
          <h1 className="text-2xl font-bold mb-5 md:text-3xl lg:text-8xl">
            Facts & Figures of KUKIVENT
          </h1>
          <p className="text-xl text-justify md:text-2xl lg:text-4xl">
            KUKIVENT is the most important international platform and hot spot
            for industrial transformation - with excellent innovations or
            unusual products. Here you will find all the facts that make one
            thing even clearer: participation is an absolute must.
          </p>
        </div>
        <div
          style={{ width: "40vw" }}
          className="flex flex-col justify-start items-start lg:p-10"
        >
          <Image
            src="/aboutimg.png" // Replace with your image path
            alt="KUKIEVENT Corp"
            width={500} // Adjust width and height as per your design
            height={400}
          />
        </div>
      </div>
      <div>
        <h1 className="flex justify-center text-2xl font-bold text-black lg:text-6xl pt-24">
          KUKIVENT 2024 - Best Of
        </h1>
        <VideoReview src="./HannoverHighlight.webm" />
      </div>
    </div>
  );
};

export default AboutSection;
