import { Card, CardHeader } from "@/components/ui/Card";
import { TRACKING_STATUS_LABELS } from "@/lib/constants/brand";
import type { Shipment, TrackingStatus } from "@/types";

const chartStatuses: TrackingStatus[] = [
  "received_china",
  "in_transit",
  "arrived_cameroon",
  "customs",
  "available",
  "delivered",
];

export function ShipmentStatusChart({ shipments }: { shipments: Shipment[] }) {
  const counts = chartStatuses.map((status) => ({
    status,
    label: TRACKING_STATUS_LABELS[status],
    count: shipments.filter((s) => s.status === status).length,
  }));
  const max = Math.max(...counts.map((c) => c.count), 1);

  return (
    <Card>
      <CardHeader
        title="Répartition des statuts"
        description="Vue d'ensemble du pipeline logistique"
      />
      <ul className="space-y-3" aria-label="Graphique des statuts">
        {counts.map((item) => (
          <li key={item.status}>
            <div className="mb-1 flex justify-between text-sm">
              <span className="text-muted-foreground">{item.label}</span>
              <span className="font-medium">{item.count}</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${(item.count / max) * 100}%` }}
                role="presentation"
              />
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}
