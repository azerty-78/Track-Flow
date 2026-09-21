import { TrackingSearch } from "@/components/tracking/TrackingSearch";
import { Card } from "@/components/ui/Card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tracking",
};

export default function TrackingPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="tf-container max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Suivez votre marchandise
          </h1>
          <p className="mt-3 text-muted-foreground">
            Entrez votre numéro de tracking pour visualiser le statut et la
            timeline complète de votre expédition.
          </p>
        </div>
        <Card className="p-6 sm:p-8">
          <TrackingSearch />
          <p className="mt-4 text-center text-sm text-muted-foreground">
            Exemple :{" "}
            <span className="font-mono font-medium text-primary">
              TF-2026-000184
            </span>
          </p>
        </Card>
      </div>
    </section>
  );
}
