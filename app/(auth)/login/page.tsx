"use client";

import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";
import { useToast } from "@/components/ui/Toast";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

export default function LoginPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);
    window.setTimeout(() => {
      toast({
        title: "Connexion simulée",
        description: "Redirection vers le dashboard client.",
        variant: "success",
      });
      router.push("/dashboard");
    }, 600);
  }

  return (
    <Card className="p-6 sm:p-8">
      <div className="mb-6 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Connexion</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Accédez à votre espace TrackFlow
        </p>
      </div>
      <form onSubmit={onSubmit} className="space-y-4">
        <Input
          label="Email"
          name="email"
          type="email"
          required
          defaultValue="amina@nguema-import.cm"
          autoComplete="email"
        />
        <Input
          label="Mot de passe"
          name="password"
          type="password"
          required
          defaultValue="••••••••"
          autoComplete="current-password"
        />
        <div className="flex justify-end">
          <Link
            href="/forgot-password"
            className="text-sm text-primary hover:underline"
          >
            Mot de passe oublié ?
          </Link>
        </div>
        <Button type="submit" className="w-full" loading={loading}>
          Se connecter
        </Button>
      </form>
      <p className="mt-6 text-center text-sm text-muted-foreground">
        Accès admin démo :{" "}
        <Link href="/admin" className="font-medium text-primary hover:underline">
          /admin
        </Link>
      </p>
    </Card>
  );
}
