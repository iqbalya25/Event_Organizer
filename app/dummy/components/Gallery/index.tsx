// components/Gallery.tsx
import Card from "@/app/components/Card";
import React from "react";

const galleryItems = [
  {
    imgSrc:
      "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&q=75&fit=crop&w=600",
    altText: "Industry meets AI Startups",
    label: "Industry meets AI Startups",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&q=75&fit=crop&w=600",
    altText: "Industrial AI Conference",
    label: "Industrial AI Conference",
  },
  {
    imgSrc:
      "https://images.unsplash.com/photo-1542759564-7ccbb6ac450a?auto=format&q=75&fit=crop&w=600",
    altText: "ROBOTICS AWARD",
    label: "ROBOTICS AWARD",
  },
];

const Gallery: React.FC = () => {
  return (
    <div className="bg-black py-6 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-white md:mb-6 lg:text-3xl">
            Side Events of HANNOVER MESSE
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          {galleryItems.map((item, index) => (
            <Card
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
