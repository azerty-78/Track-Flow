import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader } from "@/components/ui/Card";
import { Table, type Column } from "@/components/ui/Table";
import { orders } from "@/lib/mock/orders";
import { formatCurrency, formatDate } from "@/lib/utils/format";
import type { Order } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin · Commandes" };

export default function AdminOrdersPage() {
  const columns: Column<Order>[] = [
    {
      key: "ref",
      header: "Référence",
      render: (r) => <span className="font-mono">{r.reference}</span>,
    },
    { key: "client", header: "Client", render: (r) => r.customerName },
    { key: "product", header: "Produit", render: (r) => r.product },
    { key: "qty", header: "Qté", render: (r) => r.quantity },
    {
      key: "amount",
      header: "Montant",
      render: (r) => formatCurrency(r.amount, r.currency),
    },
    {
      key: "status",
      header: "Statut",
      render: (r) => <Badge variant="info">{r.status}</Badge>,
    },
    {
      key: "date",
      header: "Date",
      render: (r) => formatDate(r.createdAt),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Commandes</h1>
        <p className="text-sm text-muted-foreground">
          Gestion centralisée des commandes.
        </p>
      </div>
      <Card>
        <CardHeader title="Toutes les commandes" />
        <Table columns={columns} data={orders} rowKey={(r) => r.id} />
      </Card>
    </div>
  );
}
