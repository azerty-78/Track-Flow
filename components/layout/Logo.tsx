import { BRAND, BRAND_ASSETS } from "@/lib/constants/brand";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import Link from "next/link";

export function Logo({
  variant = "light",
  className,
}: {
  variant?: "light" | "dark";
  className?: string;
}) {
  // Fond clair → logo sur blanc ; fond sombre → version transparente
  const src =
    variant === "dark" ? BRAND_ASSETS.logo : BRAND_ASSETS.logoOnWhite;

  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center focus-visible:rounded-md",
        className,
      )}
      aria-label={`${BRAND.name} — Accueil`}
    >
      <Image
        src={src}
        alt={`${BRAND.name} — ${BRAND.slogan}`}
        width={180}
        height={64}
        className="h-10 w-auto object-contain sm:h-11"
        priority
      />
    </Link>
  );
}
