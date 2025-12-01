import { soundcloud } from "~/lib/soundcloud/soundcloud-server";
import { createTRPCRouter, publicProcedure } from "../trpc";
import z from "zod";

export const soundcloudRouter = createTRPCRouter({
    search: publicProcedure.input(z.object({query: z.string()})).query(async ({input: {query}}) => {
        const res = await soundcloud.tracks.search({q: query})
        return res
    }),
})