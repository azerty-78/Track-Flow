import { BRAND } from "@/lib/constants/brand";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = BRAND.url.replace(/\/$/, "");
  const lastModified = new Date();

  const publicRoutes: Array<{
    path: string;
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
    priority: number;
  }> = [
    { path: "/", changeFrequency: "weekly", priority: 1 },
    { path: "/tracking", changeFrequency: "weekly", priority: 0.9 },
    { path: "/services", changeFrequency: "monthly", priority: 0.8 },
    { path: "/about", changeFrequency: "monthly", priority: 0.7 },
    { path: "/contact", changeFrequency: "monthly", priority: 0.7 },
    { path: "/login", changeFrequency: "yearly", priority: 0.3 },
  ];

  return publicRoutes.map((route) => ({
    url: `${base}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
