import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader } from "@/components/ui/Card";
import { Table, type Column } from "@/components/ui/Table";
import { invoices } from "@/lib/mock/invoices";
import { CURRENT_USER } from "@/lib/mock/notifications";
import { formatCurrency, formatDate } from "@/lib/utils/format";
import type { Invoice, InvoiceStatus } from "@/types";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Factures" };

const variants: Record<
  InvoiceStatus,
  "neutral" | "info" | "warning" | "success" | "error" | "default"
> = {
  draft: "neutral",
  sent: "info",
  paid: "success",
  overdue: "error",
  cancelled: "neutral",
};

const labels: Record<InvoiceStatus, string> = {
  draft: "Brouillon",
  sent: "Envoyée",
  paid: "Payée",
  overdue: "En retard",
  cancelled: "Annulée",
};

export default function ClientInvoicesPage() {
  const data = invoices.filter((i) => i.customerId === CURRENT_USER.id);

  const columns: Column<Invoice>[] = [
    {
      key: "number",
      header: "N° facture",
      render: (row) => (
        <span className="font-mono font-medium">{row.number}</span>
      ),
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
        <Badge variant={variants[row.status]}>{labels[row.status]}</Badge>
      ),
    },
    {
      key: "issued",
      header: "Émise le",
      render: (row) => formatDate(row.issuedAt),
    },
    {
      key: "due",
      header: "Échéance",
      render: (row) => formatDate(row.dueDate),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Factures</h1>
        <p className="text-sm text-muted-foreground">
          Consultez et suivez vos factures.
        </p>
      </div>
      <Card>
        <CardHeader title="Mes factures" />
        <Table columns={columns} data={data} rowKey={(r) => r.id} />
      </Card>
    </div>
  );
}
