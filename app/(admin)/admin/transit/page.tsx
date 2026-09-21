import { TrackingStatusBadge } from "@/components/tracking/TrackingStatus";
import { Card, CardHeader } from "@/components/ui/Card";
import { Table, type Column } from "@/components/ui/Table";
import { shipments } from "@/lib/mock/shipments";
import { formatDate } from "@/lib/utils/format";
import type { Shipment } from "@/types";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin · Transit" };

export default function AdminTransitPage() {
  const data = shipments.filter(
    (s) =>
      s.status === "shipped_china" ||
      s.status === "in_transit" ||
      s.status === "prepared",
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
    { key: "mode", header: "Mode", render: (r) => r.mode },
    {
      key: "status",
      header: "Statut",
      render: (r) => <TrackingStatusBadge status={r.status} />,
    },
    {
      key: "eta",
      header: "ETA",
      render: (r) => formatDate(r.estimatedArrival),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Marchandises en transit
        </h1>
        <p className="text-sm text-muted-foreground">
          Flux actuellement en mouvement vers le Cameroun.
        </p>
      </div>
      <Card>
        <CardHeader title={`${data.length} envois en transit / préparation`} />
        <Table columns={columns} data={data} rowKey={(r) => r.id} />
      </Card>
    </div>
  );
}
