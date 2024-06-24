"use client";
import Image from "next/image";
import React, { useRef } from "react";

interface SpeakerCardProps {
  name: string;
  position: string;
  company: string;
  profileImgUrl: string;
  imgAlt: string;
}

const SpeakerCard: React.FC<SpeakerCardProps> = ({
  name,
  position,
  company,
  profileImgUrl,
  imgAlt,
}) => {
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };
  return (
    <>
      <div
        onClick={openModal}
        className="bg-white p-2 flex group flex-col w-[200px]">
        <Image
          className="group-hover:border-red-600 border-transparent border-b-8 border-l-8 transition-all duration-300"
          src={profileImgUrl}
          alt={imgAlt}
          width={166}
          height={166}
        />

        <div className="w-[200px]">
          <h3 className="text-lg font-bold text-black mb-2 max-h-14 overflow-hidden">
            {name}
          </h3>
          <p className="text-gray-600 pr-2 overflow-hidden max-h-20">
            {position} - {company}
          </p>
        </div>
      </div>
      <dialog ref={modalRef} id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl bg-white">
          <form method="dialog">
            <button className="border-transparent absolute right-3 top-3">
              ✕
            </button>
          </form>
          <div className="card lg:card-side flex flex-col lg:flex-row ">
            <figure className="w-full pt-7  lg:w-1/4">
              <div className="w-[408px] h-[280px]">
                <Image
                  src={profileImgUrl}
                  alt={imgAlt}
                  width={408}
                  height={408}
                />
              </div>
            </figure>
            <div className="card-body p-4 flex flex-col font-Helvetica-Neue  text-black lg:w-3/4">
              <div className="pt-7">
                <h1 className="font-bold text-4xl text-left ">{name}</h1>
                <h2 className="text-xl text-left pt-2">{position}</h2>
                <h3 className="font-semibold text-xl text-left pt-2">
                  {company}
                </h3>
              </div>
            </div>
          </div>
          <div className="p-1 w-auto text-black overflow-hidden">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
            cupiditate at nobis minus quam voluptas voluptatibus nemo ea in
            aliquam quasi odit reiciendis adipisci qui reprehenderit, quibusdam
            dolorem distinctio error?
          </div>
        </div>
      </dialog>
    </>
  );
};
export default SpeakerCard;
