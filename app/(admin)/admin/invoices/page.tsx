import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader } from "@/components/ui/Card";
import { Table, type Column } from "@/components/ui/Table";
import { invoices } from "@/lib/mock/invoices";
import { formatCurrency, formatDate } from "@/lib/utils/format";
import type { Invoice } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin · Factures" };

export default function AdminInvoicesPage() {
  const columns: Column<Invoice>[] = [
    {
      key: "number",
      header: "N°",
      render: (r) => <span className="font-mono">{r.number}</span>,
    },
    { key: "client", header: "Client", render: (r) => r.customerName },
    {
      key: "amount",
      header: "Montant",
      render: (r) => formatCurrency(r.amount, r.currency),
    },
    {
      key: "status",
      header: "Statut",
      render: (r) => (
        <Badge
          variant={
            r.status === "paid"
              ? "success"
              : r.status === "overdue"
                ? "error"
                : "info"
          }
        >
          {r.status}
        </Badge>
      ),
    },
    {
      key: "due",
      header: "Échéance",
      render: (r) => formatDate(r.dueDate),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Factures</h1>
        <p className="text-sm text-muted-foreground">
          Facturation clients et suivi des échéances.
        </p>
      </div>
      <Card>
        <CardHeader title="Registre des factures" />
        <Table columns={columns} data={invoices} rowKey={(r) => r.id} />
      </Card>
    </div>
  );
}
