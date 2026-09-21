import { Logo } from "@/components/layout/Logo";
import { BRAND } from "@/lib/constants/brand";
import Link from "next/link";

const columns = [
  {
    title: "Produit",
    links: [
      { href: "/tracking", label: "Tracking" },
      { href: "/services", label: "Services" },
      { href: "/dashboard", label: "Espace client" },
    ],
  },
  {
    title: "Entreprise",
    links: [
      { href: "/about", label: "À propos" },
      { href: "/contact", label: "Contact" },
      { href: "/login", label: "Connexion" },
    ],
  },
  {
    title: "Admin",
    links: [
      { href: "/admin", label: "Console admin" },
      { href: "/admin/shipments", label: "Expéditions" },
      { href: "/admin/settings", label: "Paramètres" },
    ],
  },
];

export function PublicFooter() {
  return (
    <footer className="border-t border-border bg-sidebar text-sidebar-foreground">
      <div className="tf-container grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo variant="dark" />
          <p className="mt-4 max-w-xs text-sm text-sidebar-muted">
            {BRAND.description}
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="mb-3 text-sm font-semibold text-white">{col.title}</p>
            <ul className="space-y-2">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-sidebar-muted hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10">
        <div className="tf-container flex flex-col gap-2 py-4 text-xs text-sidebar-muted sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. Tous droits réservés.
          </p>
          <p>
            {BRAND.email} · {BRAND.address}
          </p>
        </div>
      </div>
    </footer>
  );
}
