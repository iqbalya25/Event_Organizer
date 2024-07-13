import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { cookies } from "next/headers";
import { JWT } from "next-auth/jwt";
import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  iss: string;
  iat: number;
  exp: number;
  sub: string;
  scope: string;
  userId: number;
  token: string;
}

interface UserSession {
  email: string;
  role: string;
  token: string;
}

interface User {
  email: string;
  role: string;
  token: string;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Email", type: "text", placeholder: "username" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        if (!credentials || !credentials.username || !credentials.password) {
          throw new Error("Invalid input.");
        }
        const res = await fetch("http://localhost:8080/api/v1/auth", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: credentials?.username,
            password: credentials?.password,
          }),
          credentials: "include",
        });

        if (!res.ok) return null;

        const user = await res.json();
        if (!user) {
          throw new Error("User not found.");
        }

        const useCookies = cookies();
        useCookies.set("sid", user.token, {
          httpOnly: true,
          secure: false,
          maxAge: 3600,
          path: "/",
        });
        useCookies.set("role", user.role, {
          httpOnly: true,
          secure: false,
          maxAge: 3600,
          path: "/",
        });
        // decode jwt
        const decoded = jwtDecode<DecodedToken>(user.token);
        const userObject: User = {
          email: decoded.sub,
          role: decoded.scope,
          token: user.token,
        };

        return userObject;
      },
    }),
  ],
  // pages: {
  //   signIn: "/sign-in",
  // },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account?.provider === "credentials") {
        return { ...token, ...user };
      }
      return token;
    },
    async session({ session, token }: { session: any; token: JWT }) {
      session.user = {
        email: token.email,
        role: token.role,
        token: token.token,
      };
      return session;
    },
  },
});
