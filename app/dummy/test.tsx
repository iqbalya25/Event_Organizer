"use client";
import React from "react";
import { cookies } from "next/headers";

import { signIn, signOut, useSession } from "next-auth/react";
import { auth } from "@/auth";

const Test = () => {
  const { data: session } = useSession();

  return (
    <div className="bg-red-500 h-64 text-slate-50">
      {session && session.user ? (
        <div>
          <p>Email: {session.user.email}</p>
          {/* <p>Email: {session.user.role}</p> */}
          <p>Email: {session.user.token}</p>
        </div>
      ) : (
        <p>belom ada</p>
      )}
      <div className="flex gap-2 mr-2">
        <button className="btn " onClick={() => signIn()}>
          Log in
        </button>
        <button className="btn" onClick={() => signOut()}>
          sign out
        </button>
        <p></p>
      </div>
    </div>
  );
};

export default Test;
