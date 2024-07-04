// components/Gallery.tsx
import React from "react";
import GalleryCard from "../components/Card/galleryCard";

const galleryItems = [
  {
    imgSrc: "./Industriallink.png",
    altText: "Industry meets AI Startups",
    label: "Industry meets AI Startups",
  },
  {
    imgSrc: "./Conference.jpg",
    altText: "Industrial AI Conference",
    label: "Industrial AI Conference",
  },
  {
    imgSrc: "./Exhibition2.jpg",
    altText: "Industrial Exhibition",
    label: "Industrial Exhibition",
  },
];

const Gallery: React.FC = () => {
  return (
    <div className="bg-black py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-16 md:px-16">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-3xl">
            Side Events of HANNOVER MESSE
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {galleryItems.map((item, index) => (
            <GalleryCard
              key={index}
              imgSrc={item.imgSrc}
              altText={item.altText}
              label={item.label}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
