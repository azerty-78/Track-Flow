"use client";

import { Alert } from "@/components/ui/Alert";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { useToast } from "@/components/ui/Toast";
import { BRAND } from "@/lib/constants/brand";
import { useState, type FormEvent } from "react";

export default function ContactPage() {
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
    toast({
      title: "Message envoyé",
      description: "Nous vous répondrons sous 24 heures ouvrées.",
      variant: "success",
    });
  }

  return (
    <section className="py-12 sm:py-16">
      <div className="tf-container grid gap-10 lg:grid-cols-2">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Contactez-nous
          </h1>
          <p className="mt-3 text-muted-foreground">
            Une question sur une expédition, un devis ou un partenariat ?
            Écrivez-nous.
          </p>
          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="text-muted-foreground">Email</dt>
              <dd className="font-medium">{BRAND.email}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Téléphone</dt>
              <dd className="font-medium">{BRAND.phone}</dd>
            </div>
            <div>
              <dt className="text-muted-foreground">Adresse</dt>
              <dd className="font-medium">{BRAND.address}</dd>
            </div>
          </dl>
        </div>
        <Card>
          {submitted ? (
            <Alert variant="success" title="Merci pour votre message">
              Votre demande a bien été enregistrée (simulation frontend).
            </Alert>
          ) : null}
          <form onSubmit={onSubmit} className="mt-0 space-y-4">
            <Input label="Nom complet" name="name" required />
            <Input label="Email" name="email" type="email" required />
            <Select
              label="Sujet"
              name="subject"
              required
              defaultValue="tracking"
              options={[
                { value: "tracking", label: "Suivi d'expédition" },
                { value: "quote", label: "Demande de devis" },
                { value: "partnership", label: "Partenariat" },
                { value: "other", label: "Autre" },
              ]}
            />
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-lg border border-border bg-card px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              />
            </div>
            <Button type="submit" className="w-full sm:w-auto">
              Envoyer
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}
