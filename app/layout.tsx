import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Tabs from "@/components/Tabs";
import ProgressBar from "@/components/ProgressBar";

import "../styles/globals.css";

const inconsolata = Inconsolata({
  weight: "400",
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Max Kibets | Developer portfolio",
  description:
    "Software engineer with a passion for building web applications. Specialized in front-end development and have experience with React, TypeScript, Next.js, and more.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inconsolata.variable}>
        <Header />
        <Sidebar />
        <main>
          <Tabs />
          <ProgressBar />
          {children}
        </main>
      </body>
    </html>
  );
}
