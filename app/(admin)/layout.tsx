"use client";

import { DashboardShell } from "@/components/layout/DashboardShell";
import { adminNavItems } from "@/lib/constants/navigation";
import { CURRENT_ADMIN, notifications } from "@/lib/mock/notifications";
import type { ReactNode } from "react";

export default function AdminDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const unread = notifications.filter((n) => !n.read).length;

  return (
    <DashboardShell
      items={adminNavItems}
      user={{ name: CURRENT_ADMIN.name, email: CURRENT_ADMIN.email }}
      variant="admin"
      notificationCount={unread}
    >
      {children}
    </DashboardShell>
  );
}
