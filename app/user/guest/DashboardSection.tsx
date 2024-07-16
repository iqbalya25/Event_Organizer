"use client";
import React, { useState } from "react";
import ServiceCard from "@/app/components/Card/serviceCard";
import StarRating from "@/app/components/starrating";
import CommentBox from "@/app/components/commentbox";

const DashboardGuestSection = () => {
  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");

  const handleRatingChange = (newRating: number) => {
    setRating(newRating);
  };

  const handleCommentChange = (newComment: string) => {
    setComment(newComment);
  };

  const handleSubmitReview = () => {
    // Handle the review submission logic here
    console.log("Rating:", rating);
    console.log("Comment:", comment);
  };

  return (
    <div>
      <header className="bg-black text-white pt-32 pb-8">
        <h1 className="text-2xl lg:text-6xl font-bold text-center">
          Dashboard
        </h1>
      </header>
      <section className="bg-white text-black p-8">
        <div className="container mx-auto">
          <h2 className="text-xl lg:text-4xl font-bold">Welcome, Guest</h2>
          <p className="mt-4 text-lg">
            It’s good to have you back! Plan your visit to the show conveniently
            here. Our contact persons will be happy to answer any questions you
            may have about our online services.
          </p>
        </div>
      </section>
      <section className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Guest Status</h2>
        <div className="bg-white p-4 shadow rounded-lg">
          <p>Event to Exhibition Has Been Registered</p>
        </div>
      </section>
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl text-black font-bold mb-4">Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <ServiceCard
              link="#"
              title="User Account"
              description="Personal Setting"
              icon="fi fi-ts-arrow-right"
            />
            <ServiceCard
              link="#"
              title="Exhibition"
              description="Find Exhibition"
              icon="fi fi-ts-arrow-right"
            />
            <ServiceCard
              link="#"
              title="Conference"
              description="Find Conference"
              icon="fi fi-ts-arrow-right"
            />
          </div>
        </div>
      </section>
      <section className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">Make a Review</h2>
        <div className="bg-white p-4 shadow rounded-lg">
          <div className="py-5">
            <StarRating onRatingChange={handleRatingChange} />
          </div>
          <CommentBox onCommentChange={handleCommentChange} />
          <button
            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200 mt-4"
            onClick={handleSubmitReview}
          >
            Submit Review
          </button>
        </div>
      </section>
    </div>
  );
};

export default DashboardGuestSection;
