import Image from "next/image";
import { Card, CardTitle } from "../ui/card";
import type { Track } from "~/lib/shared/track-types";

export function TrackCard(props: Track) {
    return (
        <Card className="flex flex-row max-w-200">
            {props.artworkUrl &&
                (
                    <Image
                        src={props.artworkUrl}
                        alt="Track Cover Art"
                        className="ml-5 w-20 h-auto"
                        width={300}
                        height={300}
                    />
                )}
            <CardTitle>{props.title}</CardTitle>
        </Card>
    );
}
