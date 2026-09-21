import { TrackingStatusBadge, TransportModeLabel } from "@/components/tracking/TrackingStatus";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader } from "@/components/ui/Card";
import { Select } from "@/components/ui/Select";
import { Table, type Column } from "@/components/ui/Table";
import { shipments } from "@/lib/mock/shipments";
import { formatDate } from "@/lib/utils/format";
import type { Shipment } from "@/types";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin · Expéditions" };

export default function AdminShipmentsPage() {
  const columns: Column<Shipment>[] = [
    {
      key: "tracking",
      header: "Tracking",
      render: (row) => (
        <Link
          href={`/admin/shipments/${row.id}`}
          className="font-mono font-medium text-primary hover:underline"
        >
          {row.trackingNumber}
        </Link>
      ),
    },
    { key: "client", header: "Client", render: (row) => row.customerName },
    {
      key: "origin",
      header: "Origine",
      render: (row) => row.origin,
    },
    {
      key: "dest",
      header: "Destination",
      render: (row) => row.destination,
    },
    {
      key: "mode",
      header: "Mode",
      render: (row) => <TransportModeLabel mode={row.mode} />,
    },
    {
      key: "status",
      header: "Statut",
      render: (row) => <TrackingStatusBadge status={row.status} />,
    },
    {
      key: "date",
      header: "Date",
      render: (row) => formatDate(row.updatedAt),
    },
    {
      key: "action",
      header: "Action",
      render: (row) => (
        <Link href={`/admin/shipments/${row.id}`}>
          <Button variant="outline" size="sm">
            Ouvrir
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Gestion des expéditions
        </h1>
        <p className="text-sm text-muted-foreground">
          Vue opérationnelle de tous les envois.
        </p>
      </div>

      <Card>
        <CardHeader
          title="Filtres"
          description="Interface visuelle (sans backend)"
        />
        <div className="mb-6 grid gap-3 sm:grid-cols-3">
          <Select
            label="Statut"
            name="status"
            defaultValue="all"
            options={[
              { value: "all", label: "Tous les statuts" },
              { value: "in_transit", label: "En transit" },
              { value: "customs", label: "Dédouanement" },
              { value: "delivered", label: "Livrée" },
            ]}
          />
          <Select
            label="Mode"
            name="mode"
            defaultValue="all"
            options={[
              { value: "all", label: "Tous les modes" },
              { value: "maritime", label: "Maritime" },
              { value: "air", label: "Aérien" },
            ]}
          />
          <div className="flex items-end gap-2">
            <Badge variant="default">{shipments.length} résultats</Badge>
          </div>
        </div>
        <Table columns={columns} data={shipments} rowKey={(r) => r.id} />
      </Card>
    </div>
  );
}
