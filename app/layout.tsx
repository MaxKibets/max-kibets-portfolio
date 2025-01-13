import type { Metadata } from "next";
import { Inconsolata } from "next/font/google";

import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Tabs from "@/components/Tabs";
import ProgressBar from "@/components/ProgressBar";
import RowIndexer from "@/components/RowIndexer";
import NotificationContainer from "@/components/NotificationContainer";
import Footer from "@/components/Footer";

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
        <ProgressBar>
          <Sidebar />
          <main>
            <Tabs />
            <RowIndexer>{children}</RowIndexer>
          </main>
        </ProgressBar>
        <NotificationContainer />
        <Footer>footer in progress...</Footer>
      </body>
    </html>
  );
}
