import { spotify } from "~/lib/spotify/spotify-server";
import { createTRPCRouter, protectedProcedure } from "../trpc";

export const spotifyRouter = createTRPCRouter({
    search: protectedProcedure.query(async () => {
        const res = await spotify.search("No Broke Boys",["track"])
        return res
    }),
    // track: protectedProcedure.query(async () => {
    //     const res = await spotifyApi.tracks()
    //     return res
    // })
})