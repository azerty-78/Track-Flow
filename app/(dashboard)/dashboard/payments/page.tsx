import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { Table, type Column } from "@/components/ui/Table";
import { payments } from "@/lib/mock/invoices";
import { CURRENT_USER } from "@/lib/mock/notifications";
import { formatCurrency, formatDate } from "@/lib/utils/format";
import type { Payment, PaymentStatus } from "@/types";
import { Wallet } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Paiements" };

const variants: Record<
  PaymentStatus,
  "neutral" | "info" | "warning" | "success" | "error" | "default"
> = {
  pending: "warning",
  completed: "success",
  failed: "error",
  refunded: "neutral",
};

const labels: Record<PaymentStatus, string> = {
  pending: "En attente",
  completed: "Complété",
  failed: "Échoué",
  refunded: "Remboursé",
};

const methodLabels = {
  mobile_money: "Mobile Money",
  bank_transfer: "Virement",
  card: "Carte",
  cash: "Espèces",
} as const;

export default function ClientPaymentsPage() {
  const data = payments.filter((p) => p.customerId === CURRENT_USER.id);

  const columns: Column<Payment>[] = [
    {
      key: "ref",
      header: "Référence",
      render: (row) => (
        <span className="font-mono font-medium">{row.reference}</span>
      ),
    },
    {
      key: "amount",
      header: "Montant",
      render: (row) => formatCurrency(row.amount, row.currency),
    },
    {
      key: "method",
      header: "Méthode",
      render: (row) => methodLabels[row.method],
    },
    {
      key: "status",
      header: "Statut",
      render: (row) => (
        <Badge variant={variants[row.status]}>{labels[row.status]}</Badge>
      ),
    },
    {
      key: "date",
      header: "Date",
      render: (row) => formatDate(row.paidAt ?? row.createdAt),
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Paiements</h1>
        <p className="text-sm text-muted-foreground">
          Historique de vos règlements.
        </p>
      </div>
      <Card>
        <CardHeader title="Mes paiements" />
        {data.length === 0 ? (
          <EmptyState
            icon={Wallet}
            title="Aucun paiement pour le moment."
            description="Vos règlements apparaîtront ici."
          />
        ) : (
          <Table columns={columns} data={data} rowKey={(r) => r.id} />
        )}
      </Card>
    </div>
  );
}
