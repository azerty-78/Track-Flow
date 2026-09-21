import { TrackingStatusBadge } from "@/components/tracking/TrackingStatus";
import { Card, CardHeader } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { formatDate } from "@/lib/utils/format";
import type { Shipment } from "@/types";
import { Package } from "lucide-react";
import Link from "next/link";

export function RecentShipments({
  shipments,
  basePath = "/dashboard/shipments",
}: {
  shipments: Shipment[];
  basePath?: string;
}) {
  return (
    <Card>
      <CardHeader
        title="Dernières expéditions"
        description="Suivi des mouvements récents"
        action={
          <Link
            href={basePath}
            className="text-sm font-medium text-primary hover:underline"
          >
            Voir tout
          </Link>
        }
      />
      {shipments.length === 0 ? (
        <EmptyState
          icon={Package}
          title="Vous n'avez encore aucune expédition."
          description="Créez votre première commande pour commencer le suivi."
          actionLabel="Nouvelle commande"
          actionHref="/dashboard/orders"
          className="border-0 py-8 shadow-none"
        />
      ) : (
        <ul className="divide-y divide-border">
          {shipments.map((shipment) => (
            <li key={shipment.id}>
              <Link
                href={`${basePath}/${shipment.id}`}
                className="flex flex-col gap-2 py-3 transition-colors hover:bg-muted/40 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="min-w-0">
                  <p className="font-mono text-sm font-semibold">
                    {shipment.trackingNumber}
                  </p>
                  <p className="truncate text-sm text-muted-foreground">
                    {shipment.product} · {shipment.origin} →{" "}
                    {shipment.destination}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <TrackingStatusBadge status={shipment.status} />
                  <span className="text-xs text-muted-foreground">
                    {formatDate(shipment.updatedAt)}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
