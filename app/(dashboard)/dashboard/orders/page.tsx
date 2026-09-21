import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader } from "@/components/ui/Card";
import { Table, type Column } from "@/components/ui/Table";
import { CURRENT_USER } from "@/lib/mock/notifications";
import { orders } from "@/lib/mock/orders";
import { formatCurrency, formatDate } from "@/lib/utils/format";
import type { Order, OrderStatus } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Commandes" };

const statusVariant: Record<
  OrderStatus,
  "neutral" | "info" | "warning" | "success" | "error" | "default"
> = {
  pending: "warning",
  confirmed: "info",
  processing: "default",
  shipped: "info",
  completed: "success",
  cancelled: "error",
};

const statusLabel: Record<OrderStatus, string> = {
  pending: "En attente",
  confirmed: "Confirmée",
  processing: "En traitement",
  shipped: "Expédiée",
  completed: "Terminée",
  cancelled: "Annulée",
};

export default function ClientOrdersPage() {
  const data = orders.filter((o) => o.customerId === CURRENT_USER.id);

  const columns: Column<Order>[] = [
    {
      key: "ref",
      header: "Référence",
      render: (row) => (
        <span className="font-mono font-medium">{row.reference}</span>
      ),
    },
    { key: "product", header: "Produit", render: (row) => row.product },
    {
      key: "qty",
      header: "Qté",
      render: (row) => row.quantity,
    },
    {
      key: "amount",
      header: "Montant",
      render: (row) => formatCurrency(row.amount, row.currency),
    },
    {
      key: "status",
      header: "Statut",
      render: (row) => (
        <Badge variant={statusVariant[row.status]}>
          {statusLabel[row.status]}
        </Badge>
      ),
    },
    {
      key: "date",
      header: "Date",
      render: (row) => formatDate(row.createdAt),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Commandes</h1>
        <p className="text-sm text-muted-foreground">
          Historique et suivi de vos commandes d&apos;importation.
        </p>
      </div>
      <Card>
        <CardHeader title="Mes commandes" />
        <Table columns={columns} data={data} rowKey={(r) => r.id} />
      </Card>
    </div>
  );
}
