import { ShipmentSummary } from "@/components/tracking/ShipmentSummary";
import { TrackingSearch } from "@/components/tracking/TrackingSearch";
import { TrackingTimeline } from "@/components/tracking/TrackingTimeline";
import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader } from "@/components/ui/Card";
import { getShipmentByTracking } from "@/lib/mock/shipments";
import Link from "next/link";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ trackingNumber: string }>;
}): Promise<Metadata> {
  const { trackingNumber } = await params;
  return {
    title: `Tracking ${decodeURIComponent(trackingNumber)}`,
  };
}

export default async function TrackingDetailPage({
  params,
}: {
  params: Promise<{ trackingNumber: string }>;
}) {
  const { trackingNumber: raw } = await params;
  const trackingNumber = decodeURIComponent(raw);
  const shipment = getShipmentByTracking(trackingNumber);

  return (
    <section className="py-10 sm:py-14">
      <div className="tf-container max-w-4xl space-y-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Résultat du tracking
            </h1>
            <p className="mt-1 text-muted-foreground">
              Recherche :{" "}
              <span className="font-mono font-medium text-foreground">
                {trackingNumber.toUpperCase()}
              </span>
            </p>
          </div>
          <Link href="/tracking">
            <Button variant="outline" size="sm">
              Nouvelle recherche
            </Button>
          </Link>
        </div>

        <Card className="p-4 sm:p-5">
          <TrackingSearch initialValue={trackingNumber.toUpperCase()} />
        </Card>

        {!shipment ? (
          <Alert variant="error" title="Expédition introuvable">
            Aucun envoi ne correspond au numéro{" "}
            <strong>{trackingNumber.toUpperCase()}</strong>. Vérifiez le format
            (ex. TF-2026-000184) ou contactez le support.
          </Alert>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <ShipmentSummary shipment={shipment} />
            <Card>
              <CardHeader
                title="Timeline de suivi"
                description="Étapes terminées, en cours et à venir"
              />
              <TrackingTimeline events={shipment.timeline} />
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
