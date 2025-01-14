"use server";

export async function verifyRecaptcha(token: string | null) {
  const res = await fetch(
    `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${token}`,
    {
      method: "POST",
      cache: "no-store",
    },
  );

  const body = await res.json();

  if (res.ok && body.success) {
    return true;
  } else {
    return false;
  }
}
