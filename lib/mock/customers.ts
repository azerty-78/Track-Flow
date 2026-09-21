import type { Customer } from "@/types";

export const customers: Customer[] = [
  {
    id: "cus-001",
    name: "Amina Nguema",
    company: "Nguema Import SARL",
    email: "amina@nguema-import.cm",
    phone: "+237 6 90 12 34 56",
    city: "Douala",
    country: "Cameroun",
    shipmentsCount: 12,
    status: "active",
    createdAt: "2025-06-12T10:00:00Z",
  },
  {
    id: "cus-002",
    name: "Carlos Mbarga",
    company: "Mbarga Auto Parts",
    email: "carlos@mbarga-auto.cm",
    phone: "+237 6 77 88 99 00",
    city: "Yaoundé",
    country: "Cameroun",
    shipmentsCount: 8,
    status: "active",
    createdAt: "2025-08-03T14:00:00Z",
  },
  {
    id: "cus-003",
    name: "Jean Fotso",
    company: "Société Kribi Trade",
    email: "j.fotso@kribi-trade.cm",
    phone: "+237 6 55 44 33 22",
    city: "Kribi",
    country: "Cameroun",
    shipmentsCount: 24,
    status: "active",
    createdAt: "2024-11-20T09:00:00Z",
  },
  {
    id: "cus-004",
    name: "Fatou Diallo",
    company: "Diallo Tech",
    email: "fatou@diallo-tech.cm",
    phone: "+237 6 11 22 33 44",
    city: "Douala",
    country: "Cameroun",
    shipmentsCount: 5,
    status: "active",
    createdAt: "2026-01-15T11:00:00Z",
  },
  {
    id: "cus-005",
    name: "Paul Essomba",
    company: "Essomba Distribution",
    email: "paul@essomba-dist.cm",
    phone: "+237 6 98 76 54 32",
    city: "Bafoussam",
    country: "Cameroun",
    shipmentsCount: 0,
    status: "inactive",
    createdAt: "2025-03-08T16:00:00Z",
  },
];

export function getCustomerById(id: string): Customer | undefined {
  return customers.find((c) => c.id === id);
}
