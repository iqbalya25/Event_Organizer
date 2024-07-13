"use client";

import React, { useState } from "react";
import { signOut } from "next-auth/react";
import { serverLogout } from "@/app/api/auth/logout";
import { useRouter } from "next/navigation";

const SignOutBtn: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogout = async () => {
    setIsLoading(true);
    try {
      const result = await serverLogout();
      if (result.success) {
        console.log("Server logout successful");

        await signOut({ redirect: false });
        console.log("Client logout successful");

        router.push("/");
      } else {
        console.error("Server logout failed");
      }
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <button
      onClick={handleLogout}
      disabled={isLoading}
      className="bg-yellow-300 btn">
      {isLoading ? "Logging out..." : "Sign out"}
    </button>
  );
};

export default SignOutBtn;
