// "use server";

// import { cookies } from "next/headers";
// import { redirect } from "next/navigation";
// import { signOut } from "next-auth/react";

// export async function logout() {
//   const cookieStore = cookies();
//   cookieStore.set("sid", "", {
//     httpOnly: true,
//     secure: false,
//     maxAge: 0,
//     path: "/",
//   });
//   cookieStore.set("role", "", {
//     httpOnly: true,
//     secure: false,
//     maxAge: 0,
//     path: "/",
//   });

//   redirect("/");
// }

"use server";

import { cookies } from "next/headers";

export async function serverLogout() {
  const cookieStore = cookies();
  cookieStore.set("sid", "", {
    httpOnly: true,
    secure: false,
    maxAge: 0,
    path: "/",
  });
  cookieStore.set("role", "", {
    httpOnly: true,
    secure: false,
    maxAge: 0,
    path: "/",
  });

  return { success: true };
}
