"use client";

import { Avatar } from "@/components/ui/Avatar";
import { cn } from "@/lib/utils/cn";
import type { LucideIcon } from "lucide-react";
import {
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export interface SidebarProps {
  items: NavItem[];
  collapsed: boolean;
  onToggle: () => void;
  user: { name: string; email: string };
  variant?: "client" | "admin";
}

export function Sidebar({
  items,
  collapsed,
  onToggle,
  user,
  variant = "client",
}: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "hidden h-screen flex-col border-r border-white/5 bg-sidebar text-sidebar-foreground transition-[width] duration-200 lg:flex",
        collapsed ? "w-[72px]" : "w-64",
      )}
      aria-label="Navigation principale"
    >
      <div
        className={cn(
          "flex h-16 items-center border-b border-white/5 px-3",
          collapsed ? "justify-center" : "justify-between",
        )}
      >
        {!collapsed ? <Logo variant="dark" /> : (
          <span className="flex size-8 items-center justify-center rounded-lg bg-accent" aria-hidden>
            <span className="size-2 rounded-full bg-white" />
          </span>
        )}
        <button
          type="button"
          onClick={onToggle}
          className="rounded-md p-1.5 text-sidebar-muted hover:bg-white/10 hover:text-white"
          aria-label={collapsed ? "Agrandir le menu" : "Réduire le menu"}
        >
          {collapsed ? (
            <ChevronsRight className="size-4" />
          ) : (
            <ChevronsLeft className="size-4" />
          )}
        </button>
      </div>

      {variant === "admin" && !collapsed ? (
        <p className="px-4 pt-3 text-[10px] font-semibold tracking-wider text-sidebar-muted uppercase">
          Administration
        </p>
      ) : null}

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
                  title={collapsed ? item.label : undefined}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    collapsed && "justify-center px-2",
                    active
                      ? "bg-sidebar-active text-white"
                      : "text-sidebar-muted hover:bg-white/5 hover:text-white",
                  )}
                  aria-current={active ? "page" : undefined}
                >
                  <Icon className="size-4 shrink-0" aria-hidden />
                  {!collapsed ? <span>{item.label}</span> : null}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div
        className={cn(
          "border-t border-white/5 p-3",
          collapsed && "flex justify-center",
        )}
      >
        <div className={cn("flex items-center gap-3", collapsed && "justify-center")}>
          <Avatar name={user.name} size="sm" />
          {!collapsed ? (
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-white">
                {user.name}
              </p>
              <p className="truncate text-xs text-sidebar-muted">{user.email}</p>
            </div>
          ) : null}
        </div>
      </div>
    </aside>
  );
}
