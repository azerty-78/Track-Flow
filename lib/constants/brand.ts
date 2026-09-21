export const BRAND = {
  name: process.env.NEXT_PUBLIC_APP_NAME ?? "TrackFlow",
  tagline:
    process.env.NEXT_PUBLIC_APP_TAGLINE ??
    "Suivez vos marchandises de la Chine au Cameroun",
  description:
    process.env.NEXT_PUBLIC_APP_DESCRIPTION ??
    "Plateforme de gestion et de suivi des opérations logistiques et d'importation pour les entreprises.",
  email: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "contact@trackflow.cm",
  phone: process.env.NEXT_PUBLIC_SUPPORT_PHONE ?? "+237 6 XX XX XX XX",
  address: process.env.NEXT_PUBLIC_SUPPORT_ADDRESS ?? "Douala, Cameroun",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  locale: process.env.NEXT_PUBLIC_APP_LOCALE ?? "fr",
} as const;

export const TRACKING_STATUSES = [
  "order_created",
  "received_china",
  "quality_check",
  "prepared",
  "shipped_china",
  "in_transit",
  "arrived_cameroon",
  "customs",
  "available",
  "delivered",
] as const;

export const TRACKING_STATUS_LABELS: Record<
  (typeof TRACKING_STATUSES)[number],
  string
> = {
  order_created: "Commande créée",
  received_china: "Marchandise reçue en Chine",
  quality_check: "Contrôle effectué",
  prepared: "Expédition préparée",
  shipped_china: "Expédiée de Chine",
  in_transit: "En transit",
  arrived_cameroon: "Arrivée au Cameroun",
  customs: "Dédouanement",
  available: "Disponible",
  delivered: "Livrée",
};

export const TRANSPORT_MODES = ["maritime", "air", "road"] as const;

export const TRANSPORT_MODE_LABELS: Record<
  (typeof TRANSPORT_MODES)[number],
  string
> = {
  maritime: "Maritime",
  air: "Aérien",
  road: "Routier",
};
