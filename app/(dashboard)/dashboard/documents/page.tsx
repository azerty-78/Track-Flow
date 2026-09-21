import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";
import { documents } from "@/lib/mock/notifications";
import { formatDate } from "@/lib/utils/format";
import { FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Documents" };

const typeLabels = {
  invoice: "Facture",
  packing_list: "Liste de colisage",
  bill_of_lading: "Connaissement",
  customs: "Douane",
  other: "Autre",
} as const;

export default function ClientDocumentsPage() {
  const data = documents.filter(
    (d) => d.trackingNumber === "TF-2026-000184" || d.trackingNumber === "TF-2026-000203",
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Documents</h1>
        <p className="text-sm text-muted-foreground">
          Pièces jointes liées à vos expéditions.
        </p>
      </div>
      <Card>
        <CardHeader title="Bibliothèque documentaire" />
        {data.length === 0 ? (
          <EmptyState
            icon={FileText}
            title="Aucun document disponible."
            description="Les documents d'expédition apparaîtront ici."
          />
        ) : (
          <ul className="divide-y divide-border">
            {data.map((doc) => (
              <li
                key={doc.id}
                className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-3">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                    <FileText className="size-4" aria-hidden />
                  </span>
                  <div>
                    <p className="text-sm font-medium">{doc.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {doc.trackingNumber} · {doc.sizeKb} Ko ·{" "}
                      {formatDate(doc.uploadedAt)}
                    </p>
                  </div>
                </div>
                <Badge variant="neutral">{typeLabels[doc.type]}</Badge>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}
