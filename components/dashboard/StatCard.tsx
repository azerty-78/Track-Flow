import { Card } from "@/components/ui/Card";
import { cn } from "@/lib/utils/cn";
import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export interface StatCardProps {
  label: string;
  value: string | number;
  change?: string;
  trend?: "up" | "down" | "neutral";
  icon?: LucideIcon;
  href?: string;
  className?: string;
}

export function StatCard({
  label,
  value,
  change,
  trend = "neutral",
  icon: Icon,
  href,
  className,
}: StatCardProps) {
  const content: ReactNode = (
    <Card
      className={cn(
        "transition-shadow",
        href && "hover:shadow-md",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="mt-1 text-2xl font-semibold tracking-tight">{value}</p>
          {change ? (
            <p
              className={cn(
                "mt-1 text-xs font-medium",
                trend === "up" && "text-success",
                trend === "down" && "text-error",
                trend === "neutral" && "text-muted-foreground",
              )}
            >
              {change}
            </p>
          ) : null}
        </div>
        {Icon ? (
          <span className="flex size-10 items-center justify-center rounded-lg bg-accent-muted text-primary">
            <Icon className="size-5" aria-hidden />
          </span>
        ) : null}
      </div>
    </Card>
  );

  if (href) {
    return (
      <Link href={href} className="block focus-visible:rounded-xl">
        {content}
      </Link>
    );
  }

  return content;
}
