import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import prisma from '../../../utils/connect'
import CredentialsProvider  from "next-auth/providers/credentials";
import { getServerSession } from "next-auth";
import bcrypt from 'bcrypt'



const authOptions = {
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
          throw new Error('No user found')
      }

      // check to see if password matches
      const passwordMatch = await bcrypt.compare(password, user.hashedPassword)

      // if password does not match
      if (!passwordMatch) {
          throw new Error('Incorrect password')
      }


        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login/page",
  },
  session: {
    strategy: "jwt",
  },
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }
