import { Avatar } from "@/components/ui/Avatar";
import { Button } from "@/components/ui/Button";
import { Card, CardHeader } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { CURRENT_USER } from "@/lib/mock/notifications";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Profil" };

export default function ClientProfilePage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">Profil</h1>
        <p className="text-sm text-muted-foreground">
          Informations de votre compte client (édition visuelle).
        </p>
      </div>
      <Card>
        <CardHeader title="Identité" />
        <div className="mb-6 flex items-center gap-4">
          <Avatar name={CURRENT_USER.name} size="lg" />
          <div>
            <p className="font-semibold">{CURRENT_USER.name}</p>
            <p className="text-sm text-muted-foreground">{CURRENT_USER.email}</p>
          </div>
        </div>
        <form className="space-y-4">
          <Input label="Nom" name="name" defaultValue={CURRENT_USER.name} />
          <Input
            label="Entreprise"
            name="company"
            defaultValue={CURRENT_USER.company}
          />
          <Input
            label="Email"
            name="email"
            type="email"
            defaultValue={CURRENT_USER.email}
          />
          <Input
            label="Téléphone"
            name="phone"
            defaultValue={CURRENT_USER.phone}
          />
          <Input label="Ville" name="city" defaultValue={CURRENT_USER.city} />
          <Button type="button">Enregistrer (simulation)</Button>
        </form>
      </Card>
    </div>
  );
}
