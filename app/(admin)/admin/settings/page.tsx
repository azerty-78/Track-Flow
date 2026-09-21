import { Button } from "@/components/ui/Button";
import { Card, CardHeader } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { BRAND } from "@/lib/constants/brand";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Admin · Paramètres" };

export default function AdminSettingsPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Paramètres</h1>
        <p className="text-sm text-muted-foreground">
          Configuration visuelle de la plateforme (sans persistance).
        </p>
      </div>
      <Card>
        <CardHeader title="Identité produit" />
        <form className="space-y-4">
          <Input label="Nom" name="name" defaultValue={BRAND.name} />
          <Input
            label="Email support"
            name="email"
            type="email"
            defaultValue={BRAND.email}
          />
          <Select
            label="Devise par défaut"
            name="currency"
            defaultValue="XAF"
            options={[
              { value: "XAF", label: "XAF — Franc CFA" },
              { value: "EUR", label: "EUR — Euro" },
              { value: "USD", label: "USD — Dollar" },
            ]}
          />
          <Select
            label="Fuseau horaire"
            name="timezone"
            defaultValue="Africa/Douala"
            options={[
              { value: "Africa/Douala", label: "Africa/Douala" },
              { value: "Asia/Shanghai", label: "Asia/Shanghai" },
            ]}
          />
          <Button type="button">Enregistrer (simulation)</Button>
        </form>
      </Card>
    </div>
  );
}
