import { ShipmentSummary } from "@/components/tracking/ShipmentSummary";
import { TrackingTimeline } from "@/components/tracking/TrackingTimeline";
import { Alert } from "@/components/ui/Alert";
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
  return {
    title: shipment?.trackingNumber ?? "Expédition",
  };
}

export default async function ClientShipmentDetailPage({
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
            Détail expédition
          </h1>
          <p className="font-mono text-sm text-muted-foreground">
            {shipment.trackingNumber}
          </p>
        </div>
        <Link href="/dashboard/shipments">
          <Button variant="outline" size="sm">
            Retour à la liste
          </Button>
        </Link>
      </div>

      <Alert variant="info" title="Statut actuel">
        L&apos;expédition est actuellement à l&apos;étape «{" "}
        {shipment.timeline.find((e) => e.current)?.label} ».
      </Alert>

      <div className="grid gap-6 lg:grid-cols-2">
        <ShipmentSummary shipment={shipment} />
        <Card>
          <CardHeader title="Timeline" />
          <TrackingTimeline events={shipment.timeline} />
        </Card>
      </div>
    </div>
  );
}
