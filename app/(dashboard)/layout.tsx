"use client";

import { DashboardShell } from "@/components/layout/DashboardShell";
import { clientNavItems } from "@/lib/constants/navigation";
import { CURRENT_USER } from "@/lib/mock/notifications";
import { notifications } from "@/lib/mock/notifications";
import type { ReactNode } from "react";

export default function ClientDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const unread = notifications.filter((n) => !n.read).length;

  return (
    <DashboardShell
      items={clientNavItems}
      user={{ name: CURRENT_USER.name, email: CURRENT_USER.email }}
      variant="client"
      notificationCount={unread}
    >
      {children}
    </DashboardShell>
  );
}
