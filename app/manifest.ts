import { BRAND, BRAND_ASSETS } from "@/lib/constants/brand";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BRAND.name,
    short_name: BRAND.name,
    description: BRAND.description,
    start_url: "/",
    display: "standalone",
    background_color: "#f4f7f8",
    theme_color: "#0b6e6e",
    lang: "fr",
    icons: [
      {
        src: BRAND_ASSETS.logo,
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: BRAND_ASSETS.logoOnWhite,
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
