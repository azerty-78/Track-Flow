import { Alert } from "@/components/ui/Alert";
import { Card, CardHeader } from "@/components/ui/Card";
import { notifications } from "@/lib/mock/notifications";
import { formatDateTime } from "@/lib/utils/format";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin · Notifications" };

export default function AdminNotificationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Notifications</h1>
        <p className="text-sm text-muted-foreground">
          Centre d&apos;alertes opérationnelles.
        </p>
      </div>
      <Card>
        <CardHeader title="Flux d'alertes" />
        <ul className="space-y-3">
          {notifications.map((n) => (
            <li key={n.id}>
              <Alert variant={n.type} title={n.title}>
                <p>{n.message}</p>
                <p className="mt-1 text-xs opacity-70">
                  {formatDateTime(n.createdAt)}
                </p>
              </Alert>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
