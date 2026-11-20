import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
    ],
    sitemap: [
      "https://mohamed-riham.github.io/who-is-riham/sitemap.xml",
      "https://mohamed-riham.github.io/who-is-riham/sitemap_index.xml",
    ],
    host: "https://mohamed-riham.github.io/who-is-riham",
  };
}
