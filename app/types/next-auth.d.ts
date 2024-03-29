import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      uid?: string | null;
    } & DefaultSession['user'];
  }
}