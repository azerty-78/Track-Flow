import { ActivityFeed } from "@/components/dashboard/ActivityFeed";
import { RecentShipments } from "@/components/dashboard/RecentShipments";
import { ShipmentStatusChart } from "@/components/dashboard/ShipmentStatusChart";
import { StatCard } from "@/components/dashboard/StatCard";
import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { activities, CURRENT_USER } from "@/lib/mock/notifications";
import { payments } from "@/lib/mock/invoices";
import { getShipmentsByCustomer } from "@/lib/mock/shipments";
import { formatDate } from "@/lib/utils/format";
import {
  Clock,
  Package,
  PackageCheck,
  Ship,
  Wallet,
} from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function ClientDashboardPage() {
  const shipments = getShipmentsByCustomer(CURRENT_USER.id);
  const active = shipments.filter((s) => s.status !== "delivered");
  const inTransit = shipments.filter((s) => s.status === "in_transit");
  const arrived = shipments.filter(
    (s) =>
      s.status === "arrived_cameroon" ||
      s.status === "available" ||
      s.status === "customs",
  );
  const pendingPayments = payments.filter(
    (p) => p.customerId === CURRENT_USER.id && p.status === "pending",
  );
  const nextEvent = active[0]?.timeline.find((e) => e.current);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Bonjour, {CURRENT_USER.name.split(" ")[0]}
          </h1>
          <p className="text-sm text-muted-foreground">
            Voici l&apos;état de vos opérations logistiques.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href="/tracking">
            <Button variant="outline" size="sm">
              Tracking public
            </Button>
          </Link>
          <Link href="/dashboard/orders">
            <Button size="sm">Nouvelle commande</Button>
          </Link>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Expéditions actives"
          value={active.length}
          change="+1 ce mois"
          trend="up"
          icon={Package}
          href="/dashboard/shipments"
        />
        <StatCard
          label="En transit"
          value={inTransit.length}
          icon={Ship}
          href="/dashboard/shipments"
        />
        <StatCard
          label="Colis arrivés"
          value={arrived.length}
          icon={PackageCheck}
        />
        <StatCard
          label="Paiements en attente"
          value={pendingPayments.length}
          change={pendingPayments.length ? "Action requise" : "À jour"}
          trend={pendingPayments.length ? "down" : "neutral"}
          icon={Wallet}
          href="/dashboard/payments"
        />
      </div>

      {nextEvent ? (
        <Alert variant="info" title="Prochain événement prévu">
          <span className="inline-flex items-center gap-2">
            <Clock className="size-4" aria-hidden />
            {nextEvent.label} — {active[0]?.trackingNumber}
            {nextEvent.date ? ` · ${formatDate(nextEvent.date)}` : ""}
          </span>
        </Alert>
      ) : null}

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="space-y-4 lg:col-span-2">
          <RecentShipments shipments={shipments.slice(0, 5)} />
          <Card className="flex flex-wrap gap-3">
            <p className="w-full text-sm font-medium">Raccourcis</p>
            {[
              { href: "/dashboard/shipments", label: "Mes expéditions" },
              { href: "/dashboard/invoices", label: "Factures" },
              { href: "/dashboard/documents", label: "Documents" },
              { href: "/dashboard/notifications", label: "Notifications" },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <Button variant="outline" size="sm">
                  {item.label}
                </Button>
              </Link>
            ))}
          </Card>
        </div>
        <div className="space-y-4">
          <ShipmentStatusChart shipments={shipments} />
          <ActivityFeed activities={activities.slice(0, 4)} />
        </div>
      </div>
    </div>
  );
}
