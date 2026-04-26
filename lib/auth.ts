// lib/auth.ts

import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import { prisma } from './prisma'
import { PrismaAdapter } from '@auth/prisma-adapter'
import {PrismaClient} from "@prisma/client";

export const { handlers, auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    providers: [
        GitHub({
            clientId: process.env.AUTH_GITHUB_ID!,
            clientSecret: process.env.AUTH_GITHUB_SECRET!,
        }),
    ],
    callbacks: {
        async signIn({ user, account }) {
            if (account?.provider === "github") {
                // Send an event to PostHog (analytics)
            }
            return true
        },
        async session({ session, user }) {
            if (session.user) {
                session.user.id = user.id
            }
            return session
        },
    },
    session: {
        strategy: "database",
    },
})