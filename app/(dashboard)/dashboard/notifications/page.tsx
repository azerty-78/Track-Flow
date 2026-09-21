import { Alert } from "@/components/ui/Alert";
import { Card, CardHeader } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { notifications } from "@/lib/mock/notifications";
import { formatDateTime } from "@/lib/utils/format";
import { Bell } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Notifications" };

export default function ClientNotificationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Notifications</h1>
        <p className="text-sm text-muted-foreground">
          Alertes et mises à jour liées à vos opérations.
        </p>
      </div>
      <Card>
        <CardHeader title="Boîte de réception" />
        {notifications.length === 0 ? (
          <EmptyState
            icon={Bell}
            title="Aucune notification."
            description="Vous êtes à jour."
          />
        ) : (
          <ul className="space-y-3">
            {notifications.map((n) => (
              <li key={n.id}>
                {n.href ? (
                  <Link href={n.href} className="block">
                    <Alert
                      variant={n.type}
                      title={n.read ? n.title : `${n.title} · Non lu`}
                    >
                      <p>{n.message}</p>
                      <p className="mt-1 text-xs opacity-70">
                        {formatDateTime(n.createdAt)}
                      </p>
                    </Alert>
                  </Link>
                ) : (
                  <Alert variant={n.type} title={n.title}>
                    <p>{n.message}</p>
                    <p className="mt-1 text-xs opacity-70">
                      {formatDateTime(n.createdAt)}
                    </p>
                  </Alert>
                )}
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}
