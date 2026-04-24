import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import LightRays from '@/components/LightRays';
import React from "react";
import Navbar from "@/components/Navbar";
import { PostHogProvider } from "@/components/PostHogProvider";


const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const christenedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Event",
  description: "The Hub for Every Dev Event You Mustn't miss",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"
    >
      <body
          className={cn("min-h-screen", "antialiased", christenedGrotesk.variable, martianMono.variable, "font-sans", geist.variable)}>
      <PostHogProvider>
      <Navbar />
      <div className={'absolute z-[-1] min-h-screen inset-0 top-0'} >
        <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={0.5}
            lightSpread={1}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.2}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating
            fadeDistance={0.7}
            saturation={1.6}
        />
      </div>
        <main >
      {children}
        </main>
      </PostHogProvider>
      </body>
    </html>
  );
}
