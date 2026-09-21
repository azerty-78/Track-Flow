import { TrackingStatusBadge } from "@/components/tracking/TrackingStatus";
import { Card, CardHeader } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Table, type Column } from "@/components/ui/Table";
import { shipments } from "@/lib/mock/shipments";
import { formatDate } from "@/lib/utils/format";
import type { Shipment } from "@/types";
import { Truck } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin · Livraisons" };

export default function AdminDeliveriesPage() {
  const data = shipments.filter(
    (s) =>
      s.status === "available" ||
      s.status === "delivered" ||
      s.status === "customs",
  );

  const columns: Column<Shipment>[] = [
    {
      key: "tracking",
      header: "Tracking",
      render: (r) => (
        <Link
          href={`/admin/shipments/${r.id}`}
          className="font-mono text-primary hover:underline"
        >
          {r.trackingNumber}
        </Link>
      ),
    },
    { key: "client", header: "Client", render: (r) => r.customerName },
    { key: "dest", header: "Destination", render: (r) => r.destination },
    {
      key: "status",
      header: "Statut",
      render: (r) => <TrackingStatusBadge status={r.status} />,
    },
    {
      key: "date",
      header: "Mise à jour",
      render: (r) => formatDate(r.updatedAt),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Livraisons</h1>
        <p className="text-sm text-muted-foreground">
          Dédouanement, disponibilité et livraison finale.
        </p>
      </div>
      <Card>
        <CardHeader title="Pipeline livraison" />
        {data.length === 0 ? (
          <EmptyState
            icon={Truck}
            title="Aucune livraison en cours."
            description="Les dossiers arriveront ici après le transit."
          />
        ) : (
          <Table columns={columns} data={data} rowKey={(r) => r.id} />
        )}
      </Card>
    </div>
  );
}
