"use server";
import { auth } from "auth";
import { useSession } from "next-auth/react";
import AuthTestClient from "./AuthTestClient";

const AuthTest = () => {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  if (loading) {
    return <div>Loading auth...</div>;
  }

  return <AuthTestClient session={session} />;
};
export default AuthTest;
