import { Card, CardHeader } from "@/components/ui/Card";
import { formatDateTime } from "@/lib/utils/format";
import type { ActivityItem } from "@/types";
import {
  Bell,
  FileText,
  Package,
  Wallet,
} from "lucide-react";

const icons = {
  shipment: Package,
  payment: Wallet,
  document: FileText,
  system: Bell,
};

export function ActivityFeed({ activities }: { activities: ActivityItem[] }) {
  return (
    <Card>
      <CardHeader
        title="Activité récente"
        description="Derniers événements sur votre compte"
      />
      {activities.length === 0 ? (
        <p className="text-sm text-muted-foreground">Aucune activité récente.</p>
      ) : (
        <ul className="space-y-4">
          {activities.map((item) => {
            const Icon = icons[item.type];
            return (
              <li key={item.id} className="flex gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                  <Icon className="size-4" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                  <time className="mt-0.5 block text-xs text-muted-foreground">
                    {formatDateTime(item.timestamp)}
                  </time>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </Card>
  );
}
