import { Badge } from "@/components/ui/Badge";
import { Card, CardHeader } from "@/components/ui/Card";
import { documents } from "@/lib/mock/notifications";
import { formatDate } from "@/lib/utils/format";
import { FileText } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin · Documents" };

export default function AdminDocumentsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Documents</h1>
        <p className="text-sm text-muted-foreground">
          Pièces jointes de toutes les expéditions.
        </p>
      </div>
      <Card>
        <CardHeader title={`${documents.length} documents`} />
        <ul className="divide-y divide-border">
          {documents.map((doc) => (
            <li
              key={doc.id}
              className="flex flex-col gap-2 py-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <div className="flex items-start gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-muted">
                  <FileText className="size-4 text-muted-foreground" />
                </span>
                <div>
                  <p className="text-sm font-medium">{doc.name}</p>
                  <p className="text-xs text-muted-foreground">
                    {doc.trackingNumber} · {formatDate(doc.uploadedAt)}
                  </p>
                </div>
              </div>
              <Badge variant="neutral">{doc.type}</Badge>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
