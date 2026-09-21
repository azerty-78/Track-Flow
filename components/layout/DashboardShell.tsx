"use client";

import { Header } from "@/components/layout/Header";
import { MobileNavigation } from "@/components/layout/MobileNavigation";
import { Sidebar, type NavItem } from "@/components/layout/Sidebar";
import { usePathname } from "next/navigation";
import { useMemo, useState, type ReactNode } from "react";

const SEGMENT_LABELS: Record<string, string> = {
  shipments: "Expéditions",
  orders: "Commandes",
  invoices: "Factures",
  payments: "Paiements",
  documents: "Documents",
  notifications: "Notifications",
  profile: "Profil",
  customers: "Clients",
  warehouses: "Entrepôts",
  containers: "Conteneurs",
  transit: "Transit",
  deliveries: "Livraisons",
  settings: "Paramètres",
};

function buildBreadcrumbs(
  pathname: string,
  rootLabel: string,
  rootHref: string,
) {
  const crumbs = [{ label: rootLabel, href: rootHref }];
  const segments = pathname.split("/").filter(Boolean);
  const rest = segments.slice(1);
  let path = rootHref;

  for (const segment of rest) {
    path += `/${segment}`;
    crumbs.push({
      label: SEGMENT_LABELS[segment] ?? segment,
      href: path,
    });
  }

  return crumbs;
}

export function DashboardShell({
  children,
  items,
  user,
  variant,
  notificationCount = 0,
}: {
  children: ReactNode;
  items: NavItem[];
  user: { name: string; email: string };
  variant: "client" | "admin";
  notificationCount?: number;
}) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const breadcrumbs = useMemo(
    () =>
      buildBreadcrumbs(
        pathname,
        variant === "admin" ? "Admin" : "Dashboard",
        variant === "admin" ? "/admin" : "/dashboard",
      ),
    [pathname, variant],
  );

  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar
        items={items}
        collapsed={collapsed}
        onToggle={() => setCollapsed((v) => !v)}
        user={user}
        variant={variant}
      />
      <MobileNavigation
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        items={items}
      />
      <div className="flex min-w-0 flex-1 flex-col">
        <Header
          breadcrumbs={breadcrumbs}
          user={user}
          onMenuClick={() => setMobileOpen(true)}
          notificationCount={notificationCount}
          notificationsHref={
            variant === "admin"
              ? "/admin/notifications"
              : "/dashboard/notifications"
          }
          profileHref={
            variant === "admin" ? "/admin/settings" : "/dashboard/profile"
          }
        />
        <main className="flex-1 p-4 sm:p-6">{children}</main>
      </div>
    </div>
  );
}
