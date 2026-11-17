import { MetadataRoute } from "next";
import { projects } from "@/content/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://mohamed-riham.github.io/who-is-riham";

  const profileImages = [
    `${baseUrl}/images/profile/mohamed-riham-portrait-cutout.webp`,
    `${baseUrl}/images/profile/mohamed-riham-colombo-portrait.webp`,
    `${baseUrl}/images/profile/mohamed-riham-lifestyle.webp`,
    `${baseUrl}/images/profile/mohamed-riham-campus.webp`,
    `${baseUrl}/images/profile/mohamed-riham-diploma.webp`,
    `${baseUrl}/images/profile/random/colombo-urban-candid.webp`,
    `${baseUrl}/images/profile/random/addalaichenai-motorbike-candid.webp`,
    `${baseUrl}/images/profile/random/motorbike-sunset-portrait.webp`,
    `${baseUrl}/images/profile/random/formal-sunglasses-portrait.webp`,
    `${baseUrl}/images/profile/random/formal-tie-adjust.webp`,
    `${baseUrl}/images/profile/random/diploma-awards-convocation.webp`,
    `${baseUrl}/images/experience/bcas-bits-honour.webp`,
    `${baseUrl}/images/experience/bcas-pc-clinic-team.webp`,
    `${baseUrl}/images/certifications/bcas-pc-clinic-award-stage.webp`,
    `${baseUrl}/images/experience/pcclinic-hardware-repairs.webp`,
    `${baseUrl}/images/experience/pcclinic-team-monitor.webp`,
    `${baseUrl}/images/workspace/mohamed-riham-craft-studio.webp`,
    `${baseUrl}/og-image.png`,
  ];

  const projectRoutes = projects.map((p) => {
    const projectImages: string[] = [];
    if (p.image) {
      projectImages.push(`${baseUrl}${p.image}`);
    }
    if (p.diagram) {
      projectImages.push(`${baseUrl}${p.diagram}`);
    }
    return {
      url: `${baseUrl}/projects/${p.slug}/`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: p.featured ? 0.9 : 0.7,
      images: projectImages.length > 0 ? projectImages : undefined,
    };
  });

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1.0,
      images: profileImages,
    },
    ...projectRoutes,
  ];
}
