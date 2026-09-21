import { TrackingSearch } from "@/components/tracking/TrackingSearch";
import { Button } from "@/components/ui/Button";
import { BRAND } from "@/lib/constants/brand";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Globe2,
  Package,
  Shield,
  Ship,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accueil",
};

const features = [
  {
    icon: Package,
    title: "Suivi bout en bout",
    description:
      "Visualisez chaque étape de vos marchandises, de la réception en Chine jusqu'à la livraison au Cameroun.",
  },
  {
    icon: Ship,
    title: "Modes multimodaux",
    description:
      "Maritime, aérien ou routier : pilotez vos flux selon vos délais et votre budget.",
  },
  {
    icon: Shield,
    title: "Opérations sécurisées",
    description:
      "Documents, contrôles qualité et dédouanement centralisés dans une seule plateforme.",
  },
  {
    icon: Globe2,
    title: "Corridor Chine → Cameroun",
    description:
      "Une expertise dédiée à l'axe commercial le plus stratégique pour vos importations.",
  },
];

const steps = [
  "Commande créée",
  "Réception & contrôle en Chine",
  "Expédition & transit",
  "Arrivée, douane & livraison",
];

const stats = [
  { value: "2 400+", label: "Expéditions suivies" },
  { value: "98%", label: "Taux de livraison" },
  { value: "14 j", label: "Délai moyen maritime" },
  { value: "24/7", label: "Visibilité tracking" },
];

export default function HomePage() {
  return (
    <>
      <section className="tf-gradient-hero relative overflow-hidden text-white">
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="tf-flow-line absolute top-1/3 left-0 h-px w-full" />
          <div className="tf-flow-line absolute top-2/3 left-0 h-px w-full opacity-50" />
        </div>
        <div className="tf-container relative grid gap-10 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-28">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-accent">
              <Sparkles className="size-4" aria-hidden />
              {BRAND.name}
            </p>
            <h1 className="max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              Le flux de vos importations, sous contrôle.
            </h1>
            <p className="mt-5 max-w-lg text-base text-white/75 sm:text-lg">
              {BRAND.tagline}. Une plateforme SaaS pensée pour les
              importateurs exigeants.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/tracking">
                <Button
                  size="lg"
                  className="bg-accent text-sidebar hover:bg-accent/90"
                  rightIcon={<ArrowRight className="size-4" />}
                >
                  Suivre une expédition
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-white/5 text-white hover:bg-white/10"
                >
                  Ouvrir le dashboard
                </Button>
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm sm:p-6">
            <p className="mb-3 text-sm font-medium text-white/80">
              Suivez votre marchandise
            </p>
            <TrackingSearch variant="hero" />
            <p className="mt-3 text-xs text-white/55">
              Essayez : <span className="font-mono text-accent">TF-2026-000184</span>
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card py-10">
        <div className="tf-container grid grid-cols-2 gap-6 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="text-2xl font-semibold text-primary sm:text-3xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="tf-container">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight">
              Une plateforme conçue pour le terrain
            </h2>
            <p className="mt-3 text-muted-foreground">
              TrackFlow centralise tracking, documents, paiements et opérations
              logistiques dans une expérience claire.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-xl border border-border bg-card p-5"
              >
                <span className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-accent-muted text-primary">
                  <feature.icon className="size-5" aria-hidden />
                </span>
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-16 sm:py-20">
        <div className="tf-container grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight">
              Comment fonctionne le tracking
            </h2>
            <p className="mt-3 text-muted-foreground">
              Chaque expédition suit un parcours standardisé, visible en temps
              réel pour vos équipes et vos clients.
            </p>
            <ul className="mt-8 space-y-4">
              {steps.map((step, index) => (
                <li key={step} className="flex items-center gap-3">
                  <span className="flex size-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                    {index + 1}
                  </span>
                  <span className="font-medium">{step}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-border bg-background p-6">
            <div className="mb-4 flex items-center gap-2 text-primary">
              <Clock className="size-5" aria-hidden />
              <p className="font-semibold">Timeline visuelle</p>
            </div>
            <ul className="space-y-3 text-sm">
              {[
                "Commande créée",
                "Marchandise reçue en Chine",
                "Contrôle effectué",
                "Expédiée de Chine",
                "En transit",
                "Arrivée au Cameroun",
                "Livrée",
              ].map((label, i) => (
                <li key={label} className="flex items-center gap-3">
                  <CheckCircle2
                    className={
                      i < 5
                        ? "size-4 text-primary"
                        : "size-4 text-muted-foreground"
                    }
                    aria-hidden
                  />
                  <span
                    className={
                      i === 4
                        ? "font-medium text-primary"
                        : i > 4
                          ? "text-muted-foreground"
                          : ""
                    }
                  >
                    {label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="tf-container">
          <div className="overflow-hidden rounded-2xl bg-secondary px-6 py-12 text-center text-secondary-foreground sm:px-12">
            <h2 className="text-3xl font-semibold tracking-tight">
              Prêt à fluidifier vos importations ?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-white/70">
              Rejoignez TrackFlow et suivez vos marchandises avec la précision
              d&apos;une vraie plateforme opérationnelle.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact">
                <Button
                  size="lg"
                  className="bg-accent text-sidebar hover:bg-accent/90"
                >
                  Nous contacter
                </Button>
              </Link>
              <Link href="/login">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/20 bg-transparent text-white hover:bg-white/10"
                >
                  Se connecter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
