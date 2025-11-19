import { NextResponse } from "next/server";

import { auth } from "~/server/better-auth";

const DEFAULT_CALLBACK = "/";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const callbackURL = searchParams.get("callbackURL") ?? DEFAULT_CALLBACK;

  const result = await auth.api.signInSocial({
    body: {
      provider: "spotify",
      callbackURL,
    },
    returnHeaders: true,
  });

  const { response, headers } = result;
  if (!("url" in response) || !response.url) {
    return NextResponse.json(
      { error: "Unable to start Spotify OAuth flow" },
      { status: 500 },
    );
  }

  const redirectResponse = NextResponse.redirect(response.url);
  headers.forEach((value, key) => {
    redirectResponse.headers.append(key, value);
  });

  return redirectResponse;
}
