"use client";

import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, type FormEvent } from "react";

export interface TrackingSearchProps {
  initialValue?: string;
  variant?: "hero" | "page";
  className?: string;
}

export function TrackingSearch({
  initialValue = "",
  variant = "page",
  className,
}: TrackingSearchProps) {
  const router = useRouter();
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState("");

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    const trimmed = value.trim().toUpperCase();
    if (!trimmed) {
      setError("Veuillez saisir un numéro de tracking.");
      return;
    }
    setError("");
    router.push(`/tracking/${encodeURIComponent(trimmed)}`);
  }

  return (
    <form
      onSubmit={onSubmit}
      className={className}
      aria-label="Recherche de tracking"
    >
      <div
        className={
          variant === "hero"
            ? "flex flex-col gap-3 sm:flex-row"
            : "flex flex-col gap-3 sm:flex-row sm:items-end"
        }
      >
        <div className="flex-1">
          <Input
            name="tracking"
            label={variant === "page" ? "Numéro de tracking" : undefined}
            placeholder="Ex. TF-2026-000184"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
              if (error) setError("");
            }}
            error={error}
            aria-label="Numéro de tracking"
            className={
              variant === "hero"
                ? "h-12 border-0 bg-white/95 text-foreground shadow-sm"
                : undefined
            }
          />
        </div>
        <Button
          type="submit"
          size={variant === "hero" ? "lg" : "md"}
          leftIcon={<Search className="size-4" />}
          className={variant === "hero" ? "h-12 shrink-0" : "shrink-0"}
        >
          Suivre
        </Button>
      </div>
    </form>
  );
}
