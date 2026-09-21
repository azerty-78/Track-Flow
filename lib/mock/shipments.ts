import {
  TRACKING_STATUS_LABELS,
  TRACKING_STATUSES,
} from "@/lib/constants/brand";
import type { Shipment, TimelineEvent, TrackingStatus } from "@/types";

function buildTimeline(
  currentStatus: TrackingStatus,
  dates: Partial<Record<TrackingStatus, string>>,
): TimelineEvent[] {
  const currentIndex = TRACKING_STATUSES.indexOf(currentStatus);

  return TRACKING_STATUSES.map((status, index) => ({
    status,
    label: TRACKING_STATUS_LABELS[status],
    date: dates[status] ?? null,
    completed: index < currentIndex,
    current: index === currentIndex,
    location:
      status === "received_china" ||
      status === "quality_check" ||
      status === "prepared" ||
      status === "shipped_china"
        ? "Shenzhen, Chine"
        : status === "arrived_cameroon" ||
            status === "customs" ||
            status === "available" ||
            status === "delivered"
          ? "Douala, Cameroun"
          : status === "in_transit"
            ? "En mer"
            : undefined,
  }));
}

export const shipments: Shipment[] = [
  {
    id: "shp-001",
    trackingNumber: "TF-2026-000184",
    customerId: "cus-001",
    customerName: "Amina Nguema",
    product: "50 Smartphones",
    packages: 5,
    weightKg: 128,
    mode: "maritime",
    status: "in_transit",
    origin: "Shenzhen, Chine",
    destination: "Douala, Cameroun",
    estimatedArrival: "2026-04-12",
    createdAt: "2026-02-18T09:00:00Z",
    updatedAt: "2026-03-15T14:30:00Z",
    timeline: buildTimeline("in_transit", {
      order_created: "2026-02-18",
      received_china: "2026-02-22",
      quality_check: "2026-02-24",
      prepared: "2026-02-28",
      shipped_china: "2026-03-02",
      in_transit: "2026-03-05",
    }),
  },
  {
    id: "shp-002",
    trackingNumber: "TF-2026-000191",
    customerId: "cus-002",
    customerName: "Carlos Mbarga",
    product: "Pièces automobiles",
    packages: 12,
    weightKg: 450,
    mode: "maritime",
    status: "customs",
    origin: "Guangzhou, Chine",
    destination: "Douala, Cameroun",
    estimatedArrival: "2026-03-20",
    createdAt: "2026-01-10T11:00:00Z",
    updatedAt: "2026-03-18T08:00:00Z",
    timeline: buildTimeline("customs", {
      order_created: "2026-01-10",
      received_china: "2026-01-15",
      quality_check: "2026-01-17",
      prepared: "2026-01-20",
      shipped_china: "2026-01-25",
      in_transit: "2026-01-28",
      arrived_cameroon: "2026-03-15",
      customs: "2026-03-17",
    }),
  },
  {
    id: "shp-003",
    trackingNumber: "TF-2026-000203",
    customerId: "cus-001",
    customerName: "Amina Nguema",
    product: "Électroménager",
    packages: 8,
    weightKg: 320,
    mode: "air",
    status: "received_china",
    origin: "Shanghai, Chine",
    destination: "Yaoundé, Cameroun",
    estimatedArrival: "2026-04-02",
    createdAt: "2026-03-10T16:00:00Z",
    updatedAt: "2026-03-14T10:00:00Z",
    timeline: buildTimeline("received_china", {
      order_created: "2026-03-10",
      received_china: "2026-03-14",
    }),
  },
  {
    id: "shp-004",
    trackingNumber: "TF-2026-000156",
    customerId: "cus-003",
    customerName: "Société Kribi Trade",
    product: "Textiles & vêtements",
    packages: 40,
    weightKg: 980,
    mode: "maritime",
    status: "delivered",
    origin: "Yiwu, Chine",
    destination: "Douala, Cameroun",
    estimatedArrival: "2026-02-28",
    createdAt: "2025-12-05T08:00:00Z",
    updatedAt: "2026-03-01T17:00:00Z",
    timeline: buildTimeline("delivered", {
      order_created: "2025-12-05",
      received_china: "2025-12-12",
      quality_check: "2025-12-14",
      prepared: "2025-12-18",
      shipped_china: "2025-12-22",
      in_transit: "2025-12-25",
      arrived_cameroon: "2026-02-18",
      customs: "2026-02-20",
      available: "2026-02-25",
      delivered: "2026-02-28",
    }),
  },
  {
    id: "shp-005",
    trackingNumber: "TF-2026-000210",
    customerId: "cus-004",
    customerName: "Fatou Diallo",
    product: "Matériel informatique",
    packages: 3,
    weightKg: 85,
    mode: "air",
    status: "available",
    origin: "Shenzhen, Chine",
    destination: "Douala, Cameroun",
    estimatedArrival: "2026-03-18",
    createdAt: "2026-02-28T12:00:00Z",
    updatedAt: "2026-03-19T09:00:00Z",
    timeline: buildTimeline("available", {
      order_created: "2026-02-28",
      received_china: "2026-03-02",
      quality_check: "2026-03-03",
      prepared: "2026-03-04",
      shipped_china: "2026-03-05",
      in_transit: "2026-03-06",
      arrived_cameroon: "2026-03-14",
      customs: "2026-03-16",
      available: "2026-03-18",
    }),
  },
  {
    id: "shp-006",
    trackingNumber: "TF-2026-000178",
    customerId: "cus-002",
    customerName: "Carlos Mbarga",
    product: "Machines industrielles",
    packages: 2,
    weightKg: 2100,
    mode: "maritime",
    status: "prepared",
    origin: "Ningbo, Chine",
    destination: "Douala, Cameroun",
    estimatedArrival: "2026-05-01",
    createdAt: "2026-03-01T10:00:00Z",
    updatedAt: "2026-03-12T15:00:00Z",
    timeline: buildTimeline("prepared", {
      order_created: "2026-03-01",
      received_china: "2026-03-06",
      quality_check: "2026-03-09",
      prepared: "2026-03-12",
    }),
  },
];

export function getShipmentByTracking(
  trackingNumber: string,
): Shipment | undefined {
  const normalized = trackingNumber.trim().toUpperCase();
  return shipments.find((s) => s.trackingNumber.toUpperCase() === normalized);
}

export function getShipmentById(id: string): Shipment | undefined {
  return shipments.find((s) => s.id === id);
}

export function getShipmentsByCustomer(customerId: string): Shipment[] {
  return shipments.filter((s) => s.customerId === customerId);
}

export function getActiveShipments(): Shipment[] {
  return shipments.filter((s) => s.status !== "delivered");
}
