import NextAuth from "next-auth";
<<<<<<< HEAD
import GoogleProvider from "next-auth/providers/google";
import { NextAuthOptions } from "next-auth";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token from a provider.
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
    error: '/auth/error', // Error code passed in query string as ?error=
  },
};

export default NextAuth(authOptions);
=======

declare module "next-auth" {
  interface Session {
    accessToken?: string;
  }
  interface Token {
    accessToken?: string;
  }
}
>>>>>>> bb10e9a (Fix type error by extending Session and Token types)
