"use client";

import Link from "next/link";

import { ROUTES } from "@/constants/routes";

export default function Error() {
  return (
    <div>
      <h2>Error</h2>
      <p>Something went wrong</p>
      <Link href={ROUTES.MAIN}>Return Home</Link>
    </div>
  );
}
