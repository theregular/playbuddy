import { soundcloud } from "~/lib/soundcloud/soundcloud-server";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const soundcloudRouter = createTRPCRouter({
    search: publicProcedure.query(async () => {
        const res = await soundcloud.tracks.search({q:"no broke boys"})
        return res
    }),
})