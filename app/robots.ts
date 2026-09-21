import { BRAND } from "@/lib/constants/brand";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const base = BRAND.url.replace(/\/$/, "");

  return {
    rules: [
      {
        userAgent: "*",
        allow: ["/", "/tracking", "/services", "/about", "/contact"],
        disallow: ["/dashboard", "/admin", "/login", "/forgot-password"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}
