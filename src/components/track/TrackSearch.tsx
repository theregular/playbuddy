"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Popover, PopoverAnchor, PopoverContent } from "../ui/popover";
import { api } from "~/trpc/react";
import { TrackCard } from "./TrackCard";

export function TrackSearch() {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState("");

    const trackSearch = api.soundcloud.search.useQuery({
        query: search,
    }, {
        enabled: !!search,
    });

    return (
        <div className="w-200">
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverAnchor>
                    <Input
                        placeholder="Type to search..."
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value);
                            setOpen(true);
                        }}
                        onFocus={() => setOpen(true)}
                    />
                </PopoverAnchor>
                <PopoverContent
                    onOpenAutoFocus={(e) => e.preventDefault()}
                    className="w-full max-h-200 overflow-auto"
                >
                    {trackSearch.data
                        ? trackSearch.data.collection.map((track) => (
                            <TrackCard
                                key={track.id}
                                artworkUrl={track.artwork_url}
                                title={track.title}
                                artist={track.user.username}
                                duration={track.duration}
                                id={track.id}
                            />
                        ))
                        : <div>NO RESULTS</div>}
                </PopoverContent>
            </Popover>
        </div>
    );
}
