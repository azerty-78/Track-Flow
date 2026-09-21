import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader } from "@/components/ui/Card";
import { Table, type Column } from "@/components/ui/Table";
import { invoices, payments } from "@/lib/mock/invoices";
import { formatCurrency, formatDate } from "@/lib/utils/format";
import type { Payment } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin · Paiements" };

export default function AdminPaymentsPage() {
  const columns: Column<Payment>[] = [
    {
      key: "ref",
      header: "Référence",
      render: (r) => <span className="font-mono">{r.reference}</span>,
    },
    { key: "client", header: "Client", render: (r) => r.customerName },
    {
      key: "amount",
      header: "Montant",
      render: (r) => formatCurrency(r.amount, r.currency),
    },
    { key: "method", header: "Méthode", render: (r) => r.method },
    {
      key: "status",
      header: "Statut",
      render: (r) => (
        <Badge
          variant={
            r.status === "completed"
              ? "success"
              : r.status === "pending"
                ? "warning"
                : "error"
          }
        >
          {r.status}
        </Badge>
      ),
    },
    {
      key: "date",
      header: "Date",
      render: (r) => formatDate(r.paidAt ?? r.createdAt),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Paiements</h1>
        <p className="text-sm text-muted-foreground">
          Encaissements et échéances ({invoices.length} factures liées).
        </p>
      </div>
      <Card>
        <CardHeader title="Tous les paiements" />
        <Table columns={columns} data={payments} rowKey={(r) => r.id} />
      </Card>
    </div>
  );
}
