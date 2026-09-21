import { TrackingStatusBadge, TransportModeLabel } from "@/components/tracking/TrackingStatus";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Table, type Column } from "@/components/ui/Table";
import { CURRENT_USER } from "@/lib/mock/notifications";
import { getShipmentsByCustomer } from "@/lib/mock/shipments";
import { formatDate } from "@/lib/utils/format";
import type { Shipment } from "@/types";
import { Package, Plus } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Expéditions",
};

export default function ClientShipmentsPage() {
  const shipments = getShipmentsByCustomer(CURRENT_USER.id);

  const columns: Column<Shipment>[] = [
    {
      key: "tracking",
      header: "Tracking",
      render: (row) => (
        <Link
          href={`/dashboard/shipments/${row.id}`}
          className="font-mono font-medium text-primary hover:underline"
        >
          {row.trackingNumber}
        </Link>
      ),
    },
    {
      key: "product",
      header: "Produit",
      render: (row) => row.product,
    },
    {
      key: "route",
      header: "Trajet",
      render: (row) => (
        <span className="text-muted-foreground">
          {row.origin.split(",")[0]} → {row.destination.split(",")[0]}
        </span>
      ),
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
      key: "eta",
      header: "ETA",
      render: (row) => formatDate(row.estimatedArrival),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Expéditions</h1>
          <p className="text-sm text-muted-foreground">
            Suivez l&apos;ensemble de vos envois.
          </p>
        </div>
        <Link href="/dashboard/orders">
          <Button size="sm" leftIcon={<Plus className="size-4" />}>
            Nouvelle commande
          </Button>
        </Link>
      </div>

      <Card>
        <CardHeader title="Liste des expéditions" />
        {shipments.length === 0 ? (
          <EmptyState
            icon={Package}
            title="Vous n'avez encore aucune expédition."
            description="Créez une commande pour démarrer le suivi."
            actionLabel="Créer une commande"
            actionHref="/dashboard/orders"
          />
        ) : (
          <Table
            columns={columns}
            data={shipments}
            rowKey={(row) => row.id}
          />
        )}
      </Card>
    </div>
  );
}
