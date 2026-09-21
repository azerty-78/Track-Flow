import type { NavItem } from "@/components/layout/Sidebar";
import {
  Bell,
  Boxes,
  FileText,
  LayoutDashboard,
  Package,
  Settings,
  Ship,
  ShoppingCart,
  Truck,
  Users,
  Warehouse,
  Wallet,
} from "lucide-react";

export const clientNavItems: NavItem[] = [
  { label: "Vue d'ensemble", href: "/dashboard", icon: LayoutDashboard },
  { label: "Expéditions", href: "/dashboard/shipments", icon: Package },
  { label: "Commandes", href: "/dashboard/orders", icon: ShoppingCart },
  { label: "Factures", href: "/dashboard/invoices", icon: FileText },
  { label: "Paiements", href: "/dashboard/payments", icon: Wallet },
  { label: "Documents", href: "/dashboard/documents", icon: FileText },
  { label: "Notifications", href: "/dashboard/notifications", icon: Bell },
  { label: "Profil", href: "/dashboard/profile", icon: Users },
];

export const adminNavItems: NavItem[] = [
  { label: "Vue d'ensemble", href: "/admin", icon: LayoutDashboard },
  { label: "Expéditions", href: "/admin/shipments", icon: Package },
  { label: "Clients", href: "/admin/customers", icon: Users },
  { label: "Commandes", href: "/admin/orders", icon: ShoppingCart },
  { label: "Entrepôts", href: "/admin/warehouses", icon: Warehouse },
  { label: "Conteneurs", href: "/admin/containers", icon: Boxes },
  { label: "Transit", href: "/admin/transit", icon: Ship },
  { label: "Livraisons", href: "/admin/deliveries", icon: Truck },
  { label: "Paiements", href: "/admin/payments", icon: Wallet },
  { label: "Factures", href: "/admin/invoices", icon: FileText },
  { label: "Documents", href: "/admin/documents", icon: FileText },
  { label: "Notifications", href: "/admin/notifications", icon: Bell },
  { label: "Paramètres", href: "/admin/settings", icon: Settings },
];
