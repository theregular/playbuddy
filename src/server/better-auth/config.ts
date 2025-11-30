import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";

import { env } from "~/env";
import { db } from "~/server/db";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg", // or "pg" or "mysql"
  }),
  emailAndPassword: {
    enabled: true,
  },
  socialProviders: {
    spotify: {
      clientId: env.SPOTIFY_CLIENT_ID,
      clientSecret: env.SPOTIFY_CLIENT_SECRET,
      redirectURI: "http://127.0.0.1:3000/api/auth/callback/spotify", //SPOTIFY ONLY LETS YOU DO 127.0.0.1 NOT LOCALHOST
    },
  },
});

export type Session = typeof auth.$Infer.Session;
