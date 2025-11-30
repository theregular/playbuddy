import { LatestPost } from "~/app/_components/post";
import { TrackCard } from "~/components/track/TrackCard";

import { PrettyObject } from "~/components/util/PrettyObject";
import { getSession } from "~/server/better-auth/server";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getSession();

  // const search = await api.spotify.search();

  const soundcloudSearch = await api.soundcloud.search();

  const firstSong = soundcloudSearch.collection[0];

  if (session) {
    void api.post.getLatest.prefetch();
  }

  return (
    <HydrateClient>
      <main className="">
        <p className="text-2xl">
          {hello ? hello.greeting : "Loading tRPC query..."}
        </p>

        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-center text-2xl text-white">
            {session && <span>Logged in as {session.user?.name}</span>}
          </p>
        </div>
        <div>{session?.user && <LatestPost />}</div>
        <section>
          {firstSong &&
            (
              <TrackCard
                artworkUrl={firstSong.artwork_url}
                title={firstSong.title}
                artist={firstSong.user.username}
                duration={firstSong.duration}
              />
            )}
          <PrettyObject>{soundcloudSearch.collection[0]}</PrettyObject>
        </section>
      </main>
    </HydrateClient>
  );
}
