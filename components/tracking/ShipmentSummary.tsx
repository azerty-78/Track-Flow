import { Card } from "@/components/ui/Card";
import { TrackingStatusBadge, TransportModeLabel } from "@/components/tracking/TrackingStatus";
import { formatDate, formatWeight } from "@/lib/utils/format";
import type { Shipment } from "@/types";
import { MapPin, Package, Scale, Ship } from "lucide-react";

export function ShipmentSummary({ shipment }: { shipment: Shipment }) {
  const items = [
    {
      icon: Package,
      label: "Produit",
      value: shipment.product,
    },
    {
      icon: Scale,
      label: "Poids",
      value: formatWeight(shipment.weightKg),
    },
    {
      icon: Ship,
      label: "Mode",
      value: <TransportModeLabel mode={shipment.mode} />,
    },
    {
      icon: MapPin,
      label: "Trajet",
      value: `${shipment.origin} → ${shipment.destination}`,
    },
  ];

  return (
    <Card>
      <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-sm text-muted-foreground">Numéro de tracking</p>
          <p className="font-mono text-xl font-semibold tracking-tight">
            {shipment.trackingNumber}
          </p>
        </div>
        <TrackingStatusBadge status={shipment.status} />
      </div>
      <dl className="grid gap-4 sm:grid-cols-2">
        {items.map((item) => (
          <div key={item.label} className="flex gap-3">
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent-muted text-primary">
              <item.icon className="size-4" aria-hidden />
            </span>
            <div>
              <dt className="text-xs text-muted-foreground">{item.label}</dt>
              <dd className="text-sm font-medium">{item.value}</dd>
            </div>
          </div>
        ))}
      </dl>
      <div className="mt-5 flex flex-wrap gap-4 border-t border-border pt-4 text-sm">
        <p>
          <span className="text-muted-foreground">Colis : </span>
          <span className="font-medium">{shipment.packages}</span>
        </p>
        <p>
          <span className="text-muted-foreground">Arrivée estimée : </span>
          <span className="font-medium">
            {formatDate(shipment.estimatedArrival)}
          </span>
        </p>
        <p>
          <span className="text-muted-foreground">Client : </span>
          <span className="font-medium">{shipment.customerName}</span>
        </p>
      </div>
    </Card>
  );
}
