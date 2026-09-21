import { ShipmentSummary } from "@/components/tracking/ShipmentSummary";
import { TrackingTimeline } from "@/components/tracking/TrackingTimeline";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader } from "@/components/ui/Card";
import { getShipmentById } from "@/lib/mock/shipments";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const shipment = getShipmentById(id);
  return { title: shipment ? `Admin · ${shipment.trackingNumber}` : "Admin" };
}

export default async function AdminShipmentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const shipment = getShipmentById(id);
  if (!shipment) notFound();

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Dossier expédition
          </h1>
          <p className="font-mono text-sm text-muted-foreground">
            {shipment.trackingNumber} · {shipment.customerName}
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" type="button">
            Mettre à jour le statut
          </Button>
          <Link href="/admin/shipments">
            <Button variant="ghost" size="sm">
              Retour
            </Button>
          </Link>
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <ShipmentSummary shipment={shipment} />
        <Card>
          <CardHeader title="Timeline opérationnelle" />
          <TrackingTimeline events={shipment.timeline} />
        </Card>
      </div>
    </div>
  );
}
