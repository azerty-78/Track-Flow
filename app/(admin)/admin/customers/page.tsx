import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader } from "@/components/ui/Card";
import { Table, type Column } from "@/components/ui/Table";
import { customers } from "@/lib/mock/customers";
import { formatDate } from "@/lib/utils/format";
import type { Customer } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin · Clients" };

export default function AdminCustomersPage() {
  const columns: Column<Customer>[] = [
    { key: "name", header: "Nom", render: (r) => r.name },
    { key: "company", header: "Entreprise", render: (r) => r.company },
    { key: "email", header: "Email", render: (r) => r.email },
    { key: "city", header: "Ville", render: (r) => r.city },
    {
      key: "shipments",
      header: "Expéditions",
      render: (r) => r.shipmentsCount,
    },
    {
      key: "status",
      header: "Statut",
      render: (r) => (
        <Badge variant={r.status === "active" ? "success" : "neutral"}>
          {r.status === "active" ? "Actif" : "Inactif"}
        </Badge>
      ),
    },
    {
      key: "created",
      header: "Créé le",
      render: (r) => formatDate(r.createdAt),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Clients</h1>
        <p className="text-sm text-muted-foreground">
          Portefeuille clients importateurs.
        </p>
      </div>
      <Card>
        <CardHeader title="Liste des clients" />
        <Table columns={columns} data={customers} rowKey={(r) => r.id} />
      </Card>
    </div>
  );
}
