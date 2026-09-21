"use client";

import { cn } from "@/lib/utils/cn";
import { X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import type { NavItem } from "./Sidebar";

export interface MobileNavigationProps {
  open: boolean;
  onClose: () => void;
  items: NavItem[];
  title?: string;
}

export function MobileNavigation({
  open,
  onClose,
  items,
  title = "Menu",
}: MobileNavigationProps) {
  const pathname = usePathname();

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        type="button"
        className="absolute inset-0 bg-foreground/40"
        aria-label="Fermer le menu"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="absolute inset-y-0 left-0 flex w-[min(100%,20rem)] flex-col bg-sidebar text-sidebar-foreground shadow-xl"
      >
        <div className="flex h-16 items-center justify-between border-b border-white/5 px-4">
          <Logo variant="dark" />
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1.5 text-sidebar-muted hover:bg-white/10"
            aria-label="Fermer"
          >
            <X className="size-5" />
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto px-2 py-3">
          <ul className="space-y-1">
            {items.map((item) => {
              const active =
                pathname === item.href ||
                (item.href !== "/dashboard" &&
                  item.href !== "/admin" &&
                  pathname.startsWith(item.href));
              const Icon = item.icon;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium",
                      active
                        ? "bg-sidebar-active text-white"
                        : "text-sidebar-muted hover:bg-white/5 hover:text-white",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    <Icon className="size-4" aria-hidden />
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </div>
  );
}
