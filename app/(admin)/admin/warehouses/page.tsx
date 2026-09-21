import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { warehouses } from "@/lib/mock/notifications";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin · Entrepôts" };

export default function AdminWarehousesPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Entrepôts</h1>
        <p className="text-sm text-muted-foreground">
          Capacités et occupation des hubs.
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {warehouses.map((wh) => {
          const pct = Math.round((wh.occupied / wh.capacity) * 100);
          return (
            <Card key={wh.id}>
              <div className="mb-3 flex items-start justify-between gap-2">
                <div>
                  <h2 className="font-semibold">{wh.name}</h2>
                  <p className="text-sm text-muted-foreground">
                    {wh.city}, {wh.country}
                  </p>
                </div>
                <Badge
                  variant={
                    wh.status === "operational"
                      ? "success"
                      : wh.status === "maintenance"
                        ? "warning"
                        : "neutral"
                  }
                >
                  {wh.status}
                </Badge>
              </div>
              <div className="mb-1 flex justify-between text-sm">
                <span className="text-muted-foreground">Occupation</span>
                <span className="font-medium">
                  {wh.occupied}/{wh.capacity} m³ ({pct}%)
                </span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
