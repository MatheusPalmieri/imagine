import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Room } from "./Room";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Imagine",
  description:
    "A collaborative, minimalist design canvas built with Fabric.js and powered by Liveblocks for seamless real-time interaction.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased bg-gray-800`}>
        <Room>{children}</Room>
      </body>
    </html>
  );
}
