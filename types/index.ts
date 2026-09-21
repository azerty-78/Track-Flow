export type TrackingStatus =
  | "order_created"
  | "received_china"
  | "quality_check"
  | "prepared"
  | "shipped_china"
  | "in_transit"
  | "arrived_cameroon"
  | "customs"
  | "available"
  | "delivered";

export type TransportMode = "maritime" | "air" | "road";

export type InvoiceStatus = "draft" | "sent" | "paid" | "overdue" | "cancelled";
export type PaymentStatus = "pending" | "completed" | "failed" | "refunded";
export type OrderStatus =
  | "pending"
  | "confirmed"
  | "processing"
  | "shipped"
  | "completed"
  | "cancelled";
export type NotificationType = "info" | "success" | "warning" | "error";

export interface TimelineEvent {
  status: TrackingStatus;
  label: string;
  description?: string;
  location?: string;
  date: string | null;
  completed: boolean;
  current: boolean;
}

export interface Shipment {
  id: string;
  trackingNumber: string;
  customerId: string;
  customerName: string;
  product: string;
  packages: number;
  weightKg: number;
  mode: TransportMode;
  status: TrackingStatus;
  origin: string;
  destination: string;
  estimatedArrival: string;
  createdAt: string;
  updatedAt: string;
  timeline: TimelineEvent[];
}

export interface Customer {
  id: string;
  name: string;
  company: string;
  email: string;
  phone: string;
  city: string;
  country: string;
  shipmentsCount: number;
  status: "active" | "inactive";
  createdAt: string;
}

export interface Order {
  id: string;
  reference: string;
  customerId: string;
  customerName: string;
  product: string;
  quantity: number;
  amount: number;
  currency: string;
  status: OrderStatus;
  createdAt: string;
}

export interface Invoice {
  id: string;
  number: string;
  customerId: string;
  customerName: string;
  shipmentId?: string;
  amount: number;
  currency: string;
  status: InvoiceStatus;
  dueDate: string;
  issuedAt: string;
}

export interface Payment {
  id: string;
  reference: string;
  customerId: string;
  customerName: string;
  invoiceId?: string;
  amount: number;
  currency: string;
  method: "mobile_money" | "bank_transfer" | "card" | "cash";
  status: PaymentStatus;
  paidAt: string | null;
  createdAt: string;
}

export interface DocumentItem {
  id: string;
  name: string;
  type: "invoice" | "packing_list" | "bill_of_lading" | "customs" | "other";
  shipmentId?: string;
  trackingNumber?: string;
  sizeKb: number;
  uploadedAt: string;
}

export interface AppNotification {
  id: string;
  title: string;
  message: string;
  type: NotificationType;
  read: boolean;
  createdAt: string;
  href?: string;
}

export interface Warehouse {
  id: string;
  name: string;
  city: string;
  country: string;
  capacity: number;
  occupied: number;
  status: "operational" | "maintenance" | "closed";
}

export interface Container {
  id: string;
  code: string;
  type: "20ft" | "40ft" | "40ft_hc";
  status: "loading" | "in_transit" | "arrived" | "unloading" | "empty";
  origin: string;
  destination: string;
  shipmentCount: number;
  estimatedArrival: string;
}

export interface ActivityItem {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: "shipment" | "payment" | "document" | "system";
}

export interface StatMetric {
  label: string;
  value: string | number;
  change?: string;
  trend?: "up" | "down" | "neutral";
  href?: string;
}
