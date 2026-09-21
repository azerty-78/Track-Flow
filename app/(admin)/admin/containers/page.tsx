import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader } from "@/components/ui/Card";
import { Table, type Column } from "@/components/ui/Table";
import { containers } from "@/lib/mock/notifications";
import { formatDate } from "@/lib/utils/format";
import type { Container } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin · Conteneurs" };

export default function AdminContainersPage() {
  const columns: Column<Container>[] = [
    {
      key: "code",
      header: "Code",
      render: (r) => <span className="font-mono font-medium">{r.code}</span>,
    },
    { key: "type", header: "Type", render: (r) => r.type },
    {
      key: "status",
      header: "Statut",
      render: (r) => <Badge variant="info">{r.status}</Badge>,
    },
    {
      key: "route",
      header: "Trajet",
      render: (r) => `${r.origin} → ${r.destination}`,
    },
    {
      key: "shipments",
      header: "Expéditions",
      render: (r) => r.shipmentCount,
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
        <h1 className="text-2xl font-semibold tracking-tight">Conteneurs</h1>
        <p className="text-sm text-muted-foreground">
          Suivi des unités de transport.
        </p>
      </div>
      <Card>
        <CardHeader title="Parc conteneurs" />
        <Table columns={columns} data={containers} rowKey={(r) => r.id} />
      </Card>
    </div>
  );
}
