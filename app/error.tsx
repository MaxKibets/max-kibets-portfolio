"use client";

import Link from "next/link";

import { ROUTE } from "@/constants/shared";

export default function Error() {
  return (
    <div>
      <h2>Error</h2>
      <p>Something went wrong</p>
      <Link href={ROUTE.MAIN}>Return Home</Link>
    </div>
  );
}
