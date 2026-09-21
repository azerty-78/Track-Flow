import { BRAND } from "@/lib/constants/brand";
import { cn } from "@/lib/utils/cn";
import Image from "next/image";
import Link from "next/link";

const LOGO = {
  /** Logo transparent — idéal sur fonds colorés / sombres */
  transparent: "/brand/logo.png",
  /** Logo sur fond blanc — idéal sur fonds clairs */
  onWhite: "/brand/logo-on-white.png",
} as const;

export function Logo({
  variant = "light",
  className,
  showWordmark = true,
}: {
  variant?: "light" | "dark";
  className?: string;
  /** Conservé pour compatibilité ; le fichier logo inclut déjà le wordmark */
  showWordmark?: boolean;
}) {
  const src = variant === "dark" ? LOGO.transparent : LOGO.onWhite;

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
        width={160}
        height={56}
        className={cn(
          "h-9 w-auto object-contain sm:h-10",
          !showWordmark && "h-8 w-8 object-cover object-top",
        )}
        priority
      />
    </Link>
  );
}

export const BRAND_ASSETS = LOGO;
