import { Card } from "@/components/ui/Card";
import {
  ClipboardCheck,
  FileStack,
  Plane,
  Ship,
  Truck,
  Warehouse,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

const services = [
  {
    icon: Ship,
    title: "Fret maritime",
    description:
      "Groupage et conteneurs complets depuis les ports chinois vers Douala, avec suivi de transit.",
  },
  {
    icon: Plane,
    title: "Fret aérien",
    description:
      "Solutions express pour les marchandises urgentes et à forte valeur ajoutée.",
  },
  {
    icon: Warehouse,
    title: "Réception & entreposage",
    description:
      "Réception en Chine, stockage sécurisé et préparation d'expédition avant départ.",
  },
  {
    icon: ClipboardCheck,
    title: "Contrôle qualité",
    description:
      "Vérification visuelle et documentaire avant chargement pour limiter les litiges.",
  },
  {
    icon: FileStack,
    title: "Dédouanement",
    description:
      "Accompagnement administratif à l'arrivée au Cameroun jusqu'à la mise à disposition.",
  },
  {
    icon: Truck,
    title: "Livraison finale",
    description:
      "Distribution vers Douala, Yaoundé et les principales villes du territoire.",
  },
];

export default function ServicesPage() {
  return (
    <section className="py-12 sm:py-16">
      <div className="tf-container">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Nos services logistiques
          </h1>
          <p className="mt-3 text-muted-foreground">
            Une offre complète pour importer sereinement de la Chine vers le
            Cameroun, avec une visibilité continue.
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card key={service.title} className="h-full">
              <span className="mb-4 inline-flex size-10 items-center justify-center rounded-lg bg-accent-muted text-primary">
                <service.icon className="size-5" aria-hidden />
              </span>
              <h2 className="text-lg font-semibold">{service.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
