// File: src/app/expo/[eventSlug]/page.tsx

"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { MonthEvents } from "@/types/eventTypes";
import EventDetail from "./EventDetail";
import EventInfo from "./EventInfo";
import EventSpeakers from "./EventSpeaker";
import EventTopics from "./EventTopics";
import StatsCard from "../components/statcard";
import GuestAttendanceGraph from "../components/guestgraph";
import { useSession } from "next-auth/react";
import { UserSession } from "@/types/usersession";
import CommentBox from "../components/CommentBox";
import AddSpeakerForm from "../addspeaker/addspeakerform";
import StarRating from "../components/Rating";
import EventRegistration from "../components/EventRegistration";
import ReviewCard from "../components/ReviewCard";

const fetchEventBySlug = async (slug: string): Promise<MonthEvents> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}api/v1/event/${slug}`
  );
  console.log("API response:", response.data);
  return response.data.data;
};

interface ReviewData {
  eventId: number;
  rating: number;
  review: string;
  userName: string;
}

const fetchEventReviews = async (eventId: number): Promise<ReviewData[]> => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}api/v1/rating/${eventId}`
  );
  console.log("Reviews response:", response.data);
  return response.data.data;
};

const EventDetailPage = () => {
  const params = useParams();
  const eventSlug = params.eventSlug as string;
  const { data: session } = useSession();
  const user = session?.user as UserSession;
  const token = user?.token;

  const {
    data: event,
    error: eventError,
    isLoading: eventLoading,
  } = useQuery<MonthEvents, Error>({
    queryKey: ["event", eventSlug],
    queryFn: () => fetchEventBySlug(eventSlug),
  });

  const [reviews, setReviews] = useState<ReviewData[]>([]);
  const [reviewError, setReviewError] = useState<string | null>(null);

  useEffect(() => {
    if (event && event.id) {
      fetchEventReviews(event.id)
        .then((data) => setReviews(data))
        .catch((error) => setReviewError(error.message));
    }
  }, [event]);

  const [rating, setRating] = useState<number>(0);
  const [comment, setComment] = useState<string>("");

  const handleRatingChange = (rating: number) => {
    setRating(rating);
  };

  const handleCommentChange = (comment: string) => {
    setComment(comment);
  };

  const handleSubmitReview = async () => {
    if (!event || !event.id) {
      alert("Event data is not available. Please try again later.");
      return;
    }

    const reviewData: ReviewData = {
      eventId: event.id,
      rating,
      review: comment,
      userName: user.email, // Assuming user.email exists in the session
    };

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}api/v1/rating/create-rating`,
        reviewData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Review submitted successfully:", response.data);
      alert("Review submitted successfully!");
      setReviews((prev) => [...prev, reviewData]); // Add the new review to the list
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Error submitting review, please try again later.");
    }
  };

  if (eventLoading) return <div>Loading...</div>;
  if (eventError) return <div>Error: {eventError.message}</div>;
  if (!event) return <div>Event not found</div>;

  const registeredGuests = 100;
  const attendedGuests = 75;

  return (
    <div>
      <div className="px-16 pb-10 flex flex-col items-center justify-center bg-black">
        <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-white">
          Event Detail
        </h1>
      </div>
      <EventDetail event={event} />
      <EventInfo event={event} />
      <EventSpeakers speakers={event.speakers} />
      <EventTopics topics={event.topics} />

      {session && session.user && user.role === "ROLE_ORGANIZER" && (
        <>
          <section className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">
              Guest Registrations and Attendance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <StatsCard title="Registered Guests" count={registeredGuests} />
              <StatsCard title="Attended Guests" count={attendedGuests} />
            </div>
          </section>
          <section className="container mx-auto p-4">
            <h2 className="text-2xl font-bold mb-4">
              Guest Attendance Overview
            </h2>
            <GuestAttendanceGraph />
          </section>
          {event.id && (
            <section className="container mx-auto p-4">
              <h2 className="text-2xl font-bold mb-4">Add Speaker</h2>
              <AddSpeakerForm eventId={event.id.toString()} />
            </section>
          )}
        </>
      )}

      {session && session.user && user.role === "ROLE_USER" && (
        <>
          <section className="container mx-auto p-4">
            <EventRegistration event={event} />
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
        </>
      )}

      <section className="container mx-auto p-4">
        <h2 className="text-2xl font-bold mb-4">User Reviews</h2>
        {reviewError && <p className="text-red-500">{reviewError}</p>}
        {reviews.map((review, index) => (
          <ReviewCard
            key={index}
            userName={review.userName}
            rating={review.rating}
            review={review.review}
          />
        ))}
      </section>
    </div>
  );
};

export default EventDetailPage;
