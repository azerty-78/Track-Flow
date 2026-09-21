"use client";

import { Avatar } from "@/components/ui/Avatar";
import { Dropdown } from "@/components/ui/Dropdown";
import { Bell, Menu, Search } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { BreadcrumbItem } from "./Breadcrumbs";
import { Breadcrumbs } from "./Breadcrumbs";

export interface HeaderProps {
  breadcrumbs: BreadcrumbItem[];
  user: { name: string; email: string };
  onMenuClick: () => void;
  notificationCount?: number;
  notificationsHref?: string;
  profileHref?: string;
}

export function Header({
  breadcrumbs,
  user,
  onMenuClick,
  notificationCount = 0,
  notificationsHref = "/dashboard/notifications",
  profileHref = "/dashboard/profile",
}: HeaderProps) {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-header/95 px-4 backdrop-blur supports-[backdrop-filter]:bg-header/80 sm:px-6">
      <button
        type="button"
        className="rounded-lg p-2 text-muted-foreground hover:bg-muted lg:hidden"
        onClick={onMenuClick}
        aria-label="Ouvrir le menu"
      >
        <Menu className="size-5" />
      </button>

      <div className="min-w-0 flex-1">
        <Breadcrumbs items={breadcrumbs} />
      </div>

      <div className="hidden items-center gap-1 md:flex">
        <Link
          href="/tracking"
          className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground"
        >
          <Search className="size-4" aria-hidden />
          Tracking
        </Link>
      </div>

      <Link
        href={notificationsHref}
        className="relative rounded-lg p-2 text-muted-foreground hover:bg-muted"
        aria-label={`Notifications${notificationCount ? ` (${notificationCount} non lues)` : ""}`}
      >
        <Bell className="size-5" />
        {notificationCount > 0 ? (
          <span className="absolute top-1.5 right-1.5 size-2 rounded-full bg-error" />
        ) : null}
      </Link>

      <Dropdown
        trigger={
          <span className="flex items-center gap-2 rounded-lg p-1 hover:bg-muted">
            <Avatar name={user.name} size="sm" />
            <span className="hidden text-sm font-medium sm:inline">
              {user.name.split(" ")[0]}
            </span>
          </span>
        }
        items={[
          {
            label: "Mon profil",
            onClick: () => router.push(profileHref),
          },
          {
            label: "Déconnexion",
            onClick: () => router.push("/login"),
            danger: true,
          },
        ]}
      />
    </header>
  );
}
