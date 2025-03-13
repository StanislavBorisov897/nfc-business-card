import { NextApiHandler } from 'next';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const options = {
  providers: [
    GoogleProvider({
      clientId: process.env.520413224770-3h2ddrcfn3tcr3kmpvjuedpbvouhudva.apps.googleusercontent.com,
      clientSecret: process.env.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,
    }),
  ],
};

const authHandler: NextApiHandler = (req, res) => NextAuth(req, res, options);
export default authHandler;