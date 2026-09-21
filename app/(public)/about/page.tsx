import { BRAND } from "@/lib/constants/brand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À propos",
};

export default function AboutPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="tf-container max-w-3xl">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          À propos de {BRAND.name}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          {BRAND.description}
        </p>
        <div className="mt-8 space-y-4 text-foreground">
          <p>
            TrackFlow est née d&apos;un constat simple : les importateurs sur
            l&apos;axe Chine → Cameroun manquent d&apos;une vision claire et
            unifiée de leurs opérations. Entre les entrepôts, les transitaires,
            la douane et la livraison finale, l&apos;information se disperse.
          </p>
          <p>
            Notre mission est de créer un{" "}
            <strong>flux numérique fiable</strong> : chaque étape est visible,
            chaque document est accessible, chaque anomalie est signalée à
            temps.
          </p>
          <p>
            Basée à {BRAND.address}, l&apos;équipe TrackFlow conçoit une
            plateforme SaaS moderne, pensée pour les équipes opérationnelles
            comme pour les dirigeants.
          </p>
        </div>
        <dl className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { label: "Focus", value: "Chine → Cameroun" },
            { label: "Contact", value: BRAND.email },
            { label: "Siège", value: BRAND.address },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-xl border border-border bg-card p-4"
            >
              <dt className="text-xs text-muted-foreground">{item.label}</dt>
              <dd className="mt-1 font-medium">{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
