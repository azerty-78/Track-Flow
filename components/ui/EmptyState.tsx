import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils/cn";
import { Inbox, type LucideIcon } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

export interface EmptyStateProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
  actionHref?: string;
  className?: string;
  children?: ReactNode;
}

export function EmptyState({
  icon: Icon = Inbox,
  title,
  description,
  actionLabel,
  onAction,
  actionHref,
  className,
  children,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card px-6 py-12 text-center",
        className,
      )}
    >
      <div className="mb-4 flex size-12 items-center justify-center rounded-full bg-accent-muted text-primary">
        <Icon className="size-6" aria-hidden />
      </div>
      <h3 className="text-base font-semibold text-foreground">{title}</h3>
      {description ? (
        <p className="mt-1 max-w-sm text-sm text-muted-foreground">
          {description}
        </p>
      ) : null}
      {children}
      {actionLabel && (onAction || actionHref) ? (
        <div className="mt-5">
          {actionHref ? (
            <Link href={actionHref}>
              <Button>{actionLabel}</Button>
            </Link>
          ) : (
            <Button onClick={onAction}>{actionLabel}</Button>
          )}
        </div>
      ) : null}
    </div>
  );
}
