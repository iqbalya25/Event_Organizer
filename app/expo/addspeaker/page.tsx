// File: pages/expo/[eventId]/addspeaker.tsx
"use client";

import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { UserSession } from "@/types/usersession";

import { useRouter, useParams } from "next/navigation";
import AddSpeakerForm from "./addspeakerform";

const AddSpeakerPage: React.FC = () => {
  const { data: session } = useSession();
  const user = session?.user as UserSession;
  const router = useRouter();
  const params = useParams();
  const eventId = params.eventId as string;

  useEffect(() => {
    if (!session || user?.role !== "ROLE_ORGANIZER") {
      router.push("/login");
    }
  }, [session, user, router]);

  if (!session || user?.role !== "ROLE_ORGANIZER") {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <AddSpeakerForm eventId={eventId} />
    </div>
  );
};

export default AddSpeakerPage;
