import type {
  ActivityItem,
  AppNotification,
  Container,
  DocumentItem,
  Warehouse,
} from "@/types";

export const notifications: AppNotification[] = [
  {
    id: "ntf-001",
    title: "Expédition en transit",
    message: "TF-2026-000184 a quitté le port de Shenzhen.",
    type: "info",
    read: false,
    createdAt: "2026-03-15T14:30:00Z",
    href: "/dashboard/shipments/shp-001",
  },
  {
    id: "ntf-002",
    title: "Paiement en attente",
    message: "La facture FAC-2026-0042 attend un règlement partiel.",
    type: "warning",
    read: false,
    createdAt: "2026-03-15T09:00:00Z",
    href: "/dashboard/invoices",
  },
  {
    id: "ntf-003",
    title: "Marchandise disponible",
    message: "TF-2026-000210 est prête au retrait à Douala.",
    type: "success",
    read: true,
    createdAt: "2026-03-18T09:00:00Z",
    href: "/dashboard/shipments/shp-005",
  },
  {
    id: "ntf-004",
    title: "Document ajouté",
    message: "Le connaissement BL-88421 a été téléversé.",
    type: "info",
    read: true,
    createdAt: "2026-03-12T11:00:00Z",
    href: "/dashboard/documents",
  },
];

export const documents: DocumentItem[] = [
  {
    id: "doc-001",
    name: "Connaissement BL-88421.pdf",
    type: "bill_of_lading",
    shipmentId: "shp-001",
    trackingNumber: "TF-2026-000184",
    sizeKb: 420,
    uploadedAt: "2026-03-02T10:00:00Z",
  },
  {
    id: "doc-002",
    name: "Liste de colisage.pdf",
    type: "packing_list",
    shipmentId: "shp-001",
    trackingNumber: "TF-2026-000184",
    sizeKb: 180,
    uploadedAt: "2026-02-28T15:00:00Z",
  },
  {
    id: "doc-003",
    name: "Déclaration douanière.pdf",
    type: "customs",
    shipmentId: "shp-002",
    trackingNumber: "TF-2026-000191",
    sizeKb: 310,
    uploadedAt: "2026-03-17T08:30:00Z",
  },
  {
    id: "doc-004",
    name: "Facture FAC-2026-0031.pdf",
    type: "invoice",
    shipmentId: "shp-004",
    trackingNumber: "TF-2026-000156",
    sizeKb: 95,
    uploadedAt: "2026-01-15T12:00:00Z",
  },
];

export const warehouses: Warehouse[] = [
  {
    id: "wh-001",
    name: "Entrepôt Shenzhen Hub",
    city: "Shenzhen",
    country: "Chine",
    capacity: 5000,
    occupied: 3280,
    status: "operational",
  },
  {
    id: "wh-002",
    name: "Entrepôt Guangzhou",
    city: "Guangzhou",
    country: "Chine",
    capacity: 3500,
    occupied: 2100,
    status: "operational",
  },
  {
    id: "wh-003",
    name: "Entrepôt Douala Port",
    city: "Douala",
    country: "Cameroun",
    capacity: 4200,
    occupied: 2890,
    status: "operational",
  },
  {
    id: "wh-004",
    name: "Entrepôt Yaoundé",
    city: "Yaoundé",
    country: "Cameroun",
    capacity: 1800,
    occupied: 640,
    status: "maintenance",
  },
];

export const containers: Container[] = [
  {
    id: "ctr-001",
    code: "TFLU-4529180",
    type: "40ft",
    status: "in_transit",
    origin: "Shenzhen",
    destination: "Douala",
    shipmentCount: 18,
    estimatedArrival: "2026-04-12",
  },
  {
    id: "ctr-002",
    code: "TFLU-3312045",
    type: "20ft",
    status: "arrived",
    origin: "Guangzhou",
    destination: "Douala",
    shipmentCount: 9,
    estimatedArrival: "2026-03-15",
  },
  {
    id: "ctr-003",
    code: "TFLU-7781203",
    type: "40ft_hc",
    status: "loading",
    origin: "Ningbo",
    destination: "Douala",
    shipmentCount: 6,
    estimatedArrival: "2026-05-01",
  },
  {
    id: "ctr-004",
    code: "TFLU-1209844",
    type: "40ft",
    status: "unloading",
    origin: "Yiwu",
    destination: "Douala",
    shipmentCount: 22,
    estimatedArrival: "2026-02-18",
  },
];

export const activities: ActivityItem[] = [
  {
    id: "act-001",
    title: "Statut mis à jour",
    description: "TF-2026-000184 est maintenant en transit.",
    timestamp: "2026-03-15T14:30:00Z",
    type: "shipment",
  },
  {
    id: "act-002",
    title: "Paiement initié",
    description: "Acompte de 425 000 XAF enregistré.",
    timestamp: "2026-03-15T09:00:00Z",
    type: "payment",
  },
  {
    id: "act-003",
    title: "Document reçu",
    description: "Connaissement BL-88421 téléversé.",
    timestamp: "2026-03-12T11:00:00Z",
    type: "document",
  },
  {
    id: "act-004",
    title: "Contrôle qualité",
    description: "TF-2026-000203 validé à Shenzhen.",
    timestamp: "2026-03-14T10:00:00Z",
    type: "shipment",
  },
  {
    id: "act-005",
    title: "Rappel système",
    description: "Facture FAC-2026-0038 en retard de paiement.",
    timestamp: "2026-03-11T08:00:00Z",
    type: "system",
  },
];

export const CURRENT_USER = {
  id: "cus-001",
  name: "Amina Nguema",
  email: "amina@nguema-import.cm",
  company: "Nguema Import SARL",
  role: "client" as const,
  phone: "+237 6 90 12 34 56",
  city: "Douala",
};

export const CURRENT_ADMIN = {
  id: "adm-001",
  name: "Marie Okala",
  email: "marie.okala@trackflow.cm",
  role: "admin" as const,
};
