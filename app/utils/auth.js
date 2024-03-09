import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { getServerSession } from "next-auth";
import bcrypt from "bcrypt";
import prisma from "@/app/utils/connect";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentails, req) {
        const { email, password } = credentails;

        if (!email || !password) {
          throw new Error("invalid credentails");
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentails.email,
          },
        });

        // if no user was found
        if (!user || !user?.hashedPassword) {
          throw new Error("No user found");
        }

        // check to see if password matches
        const passwordMatch = await bcrypt.compare(
          password,
          user.hashedPassword,
        );

        // if password does not match
        if (!passwordMatch) {
          throw new Error("Incorrect password");
        }

        return user;
      },
    }),
  ],

  callbacks: {
    jwt: async ({ token, user, account, profile, isNewUser }) => {
      if (user) {
        token.uid = user.id;
      }
      return Promise.resolve(token);
    },
    session: async ({ session, token, user }) => {
      session.user.uid = token.uid;
      return Promise.resolve(session);
    },
  },

  pages: {
    signIn: "/login/page",
  },
  session: {
    strategy: "jwt",
  },
};

export const getAuthSession = () => getServerSession(authOptions);
