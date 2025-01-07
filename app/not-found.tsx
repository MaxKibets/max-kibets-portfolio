import Link from "next/link";

import { ROUTE } from "@/constants/shared";

export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href={ROUTE.MAIN}>Return Home</Link>
    </div>
  );
}
