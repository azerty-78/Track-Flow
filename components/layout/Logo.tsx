import { BRAND } from "@/lib/constants/brand";
import { cn } from "@/lib/utils/cn";
import Link from "next/link";

export function Logo({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 focus-visible:rounded-md",
        className,
      )}
      aria-label={`${BRAND.name} — Accueil`}
    >
      <span
        className={cn(
          "relative flex size-8 items-center justify-center overflow-hidden rounded-lg",
          variant === "dark" ? "bg-accent" : "bg-primary",
        )}
        aria-hidden
      >
        <span className="absolute inset-x-1.5 top-1/2 h-0.5 -translate-y-1/2 rounded-full bg-white/90" />
        <span className="absolute top-2 right-1.5 size-1.5 rounded-full bg-white" />
        <span className="absolute bottom-2 left-1.5 size-1.5 rounded-full bg-white/70" />
      </span>
      <span
        className={cn(
          "text-lg font-semibold tracking-tight",
          variant === "dark" ? "text-white" : "text-foreground",
        )}
      >
        Track<span className="text-accent">Flow</span>
      </span>
    </Link>
  );
}
