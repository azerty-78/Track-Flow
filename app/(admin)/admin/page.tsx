import { RecentShipments } from "@/components/dashboard/RecentShipments";
import { ShipmentStatusChart } from "@/components/dashboard/ShipmentStatusChart";
import { StatCard } from "@/components/dashboard/StatCard";
import { TrackingStatusBadge, TransportModeLabel } from "@/components/tracking/TrackingStatus";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader } from "@/components/ui/Card";
import { Table, type Column } from "@/components/ui/Table";
import { shipments } from "@/lib/mock/shipments";
import { formatDate } from "@/lib/utils/format";
import type { Shipment } from "@/types";
import {
  Package,
  PackageCheck,
  Ship,
  Truck,
  Warehouse,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin" };

export default function AdminDashboardPage() {
  const inTransit = shipments.filter((s) => s.status === "in_transit").length;
  const receivedChina = shipments.filter(
    (s) => s.status === "received_china" || s.status === "quality_check",
  ).length;
  const arrived = shipments.filter(
    (s) => s.status === "arrived_cameroon",
  ).length;
  const customs = shipments.filter((s) => s.status === "customs").length;
  const deliveries = shipments.filter(
    (s) => s.status === "available" || s.status === "delivered",
  ).length;

  const columns: Column<Shipment>[] = [
    {
      key: "tracking",
      header: "Tracking",
      render: (row) => (
        <Link
          href={`/admin/shipments/${row.id}`}
          className="font-mono text-sm font-medium text-primary hover:underline"
        >
          {row.trackingNumber}
        </Link>
      ),
    },
    { key: "client", header: "Client", render: (row) => row.customerName },
    {
      key: "origin",
      header: "Origine",
      render: (row) => row.origin.split(",")[0],
    },
    {
      key: "dest",
      header: "Destination",
      render: (row) => row.destination.split(",")[0],
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
          <Button variant="ghost" size="sm">
            Voir
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Console opérationnelle
          </h1>
          <p className="text-sm text-muted-foreground">
            Pilotage des flux Chine → Cameroun.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Badge variant="info">Live mock</Badge>
          <Link href="/admin/shipments">
            <Button size="sm">Gérer les expéditions</Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6">
        <StatCard
          label="Total expéditions"
          value={shipments.length}
          icon={Package}
          href="/admin/shipments"
        />
        <StatCard label="En transit" value={inTransit} icon={Ship} />
        <StatCard
          label="Reçues en Chine"
          value={receivedChina}
          icon={Warehouse}
        />
        <StatCard
          label="Arrivées Cameroun"
          value={arrived}
          icon={PackageCheck}
        />
        <StatCard label="Dédouanements" value={customs} icon={Package} />
        <StatCard label="Livraisons" value={deliveries} icon={Truck} />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Card className="lg:col-span-2" padding="md">
          <CardHeader
            title="Dernières expéditions"
            description="Filtrez et ouvrez un dossier"
            action={
              <div className="flex flex-wrap gap-2">
                {["Tous", "Transit", "Douane", "Livraison"].map((f) => (
                  <Badge key={f} variant="neutral" className="cursor-default">
                    {f}
                  </Badge>
                ))}
              </div>
            }
          />
          <Table
            columns={columns}
            data={shipments.slice(0, 6)}
            rowKey={(r) => r.id}
          />
        </Card>
        <div className="space-y-4">
          <ShipmentStatusChart shipments={shipments} />
          <RecentShipments
            shipments={shipments.slice(0, 4)}
            basePath="/admin/shipments"
          />
        </div>
      </div>
    </div>
  );
}
