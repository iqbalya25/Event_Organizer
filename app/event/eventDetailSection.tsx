"use client";
import Image from "next/image";
import React, { useState } from "react";
import RegularButton from "../components/Button/regularButton";

interface EventDetailSectionProps {
  eventType: string;
  eventName: string;
  shortDescription: string;
  longDescription: string;
  dateStart: string;
  dateEnd: string;
  hourStart: string;
  hourEnd: string;
  city: string;
  address: string;
  topic: string;
  imgUrl: string;
  imgAlt: string;
}

const EventDetailSection: React.FC<EventDetailSectionProps> = ({
  eventType,
  eventName,
  shortDescription,
  longDescription,
  dateStart,
  dateEnd,
  hourStart,
  hourEnd,
  city,
  address,
  topic,
  imgUrl,
  imgAlt,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="py-[64px] px-5 sm:px-10 md:px-14 lg:px-[132px] bg-black">
      <div className="card lg:card-side flex flex-col lg:flex-row">
        <div className="card-body p-1 flex flex-col font-Helvetica-Neue text-white lg:w-1/2">
          <div className="pt-7">
            <p className="mb-2 text-xs">{eventType}</p>
            <h2 className="font-bold text-5xl text-left">{eventName}</h2>
          </div>
          <div className="text-wrap text-left">
            <p>{shortDescription}</p>
            <br />
            <div className="daisy-collapse daisy-collapse-arrow ">
              <div
                className="daisy-collapse-title text-lg font-medium cursor-pointer"
                onClick={toggleAccordion}>
                {isOpen ? "Show less" : "Show more"}
              </div>
              <div
                className={`daisy-collapse-content bg-black overflow-hidden transition-all duration-400 ${
                  isOpen ? "max-h-full" : "max-h-0"
                }`}>
                <p className="p-2">{longDescription}</p>
              </div>
            </div>
            <div>
              <div className=" bg-stone-600 flex flex-col p-6 mb-8 text-white font-bold mt-2">
                <div className="text-3xl">
                  {dateStart} - {dateEnd}
                </div>
                <div className="text-2xl">
                  {hourStart}, {hourEnd}
                </div>
                <div className="text-2xl">
                  {city}, {address}
                </div>
              </div>
            </div>
            <div className="m">topic : {topic}</div>
            <div>
              <RegularButton
                linkbutton="/"
                title="Register"
                hoverColor="bg-red-600"
              />
            </div>
          </div>
        </div>
        <figure className="w-full pt-7  lg:w-1/2">
          <div className="w-[408px] h-[408px]">
            <Image src={imgUrl} alt={imgAlt} width={408} height={408} />
          </div>
        </figure>
      </div>
    </div>
  );
};
export default EventDetailSection;
