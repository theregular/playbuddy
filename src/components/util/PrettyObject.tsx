import { cn } from "~/lib/utils";
import { Card } from "../ui/card";

type PrettyObjectProps = {
    children: unknown;
    className?: string;
};

export function PrettyObject({ children, className }: PrettyObjectProps) {
    return (
        <Card
            className={cn(
                "border-success p-1 font-mono whitespace-pre-wrap",
                className,
            )}
        >
            {JSON.stringify(children, null, 2)}
        </Card>
    );
}
