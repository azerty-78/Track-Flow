import { cn } from "@/lib/utils/cn";
import { formatDate } from "@/lib/utils/format";
import type { TimelineEvent } from "@/types";
import { Check, Circle, MapPin } from "lucide-react";

export interface TrackingTimelineProps {
  events: TimelineEvent[];
  className?: string;
}

export function TrackingTimeline({ events, className }: TrackingTimelineProps) {
  return (
    <ol className={cn("relative space-y-0", className)} aria-label="Timeline de suivi">
      {events.map((event, index) => {
        const isLast = index === events.length - 1;
        return (
          <li key={event.status} className="relative flex gap-4 pb-8 last:pb-0">
            {!isLast ? (
              <span
                className={cn(
                  "absolute top-8 left-[15px] h-[calc(100%-16px)] w-0.5",
                  event.completed || event.current
                    ? "bg-primary"
                    : "bg-border",
                )}
                aria-hidden
              />
            ) : null}
            <span
              className={cn(
                "relative z-10 flex size-8 shrink-0 items-center justify-center rounded-full border-2",
                event.completed &&
                  "border-primary bg-primary text-primary-foreground",
                event.current &&
                  "border-accent bg-accent-muted text-primary ring-4 ring-accent/20",
                !event.completed &&
                  !event.current &&
                  "border-border bg-card text-muted-foreground",
              )}
              aria-hidden
            >
              {event.completed ? (
                <Check className="size-4" />
              ) : event.current ? (
                <MapPin className="size-3.5" />
              ) : (
                <Circle className="size-3" />
              )}
            </span>
            <div className="min-w-0 flex-1 pt-1">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p
                  className={cn(
                    "font-medium",
                    event.current
                      ? "text-primary"
                      : event.completed
                        ? "text-foreground"
                        : "text-muted-foreground",
                  )}
                >
                  {event.label}
                  {event.current ? (
                    <span className="ml-2 text-xs font-normal text-accent">
                      En cours
                    </span>
                  ) : null}
                </p>
                <time className="text-xs text-muted-foreground">
                  {formatDate(event.date)}
                </time>
              </div>
              {event.location ? (
                <p className="mt-0.5 text-sm text-muted-foreground">
                  {event.location}
                </p>
              ) : null}
              {event.description ? (
                <p className="mt-1 text-sm text-muted-foreground">
                  {event.description}
                </p>
              ) : null}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
