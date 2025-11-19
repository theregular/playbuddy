import { SpotifyApi } from "@spotify/web-api-ts-sdk";
import { env } from "~/env";

export const spotifyApi = SpotifyApi.withClientCredentials(
    env.BETTER_AUTH_SPOTIFY_CLIENT_ID as string,
    env.BETTER_AUTH_SPOTIFY_CLIENT_SECRET as string
);
