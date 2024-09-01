import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://rodweleo.vercel.app",
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1,
    },
    {
      url: "https://rodweleo.vercel.app/projects",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: "https://rodweleo.vercel.app/blog",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.75,
    },
   {
      url: "https://rodweleo.vercel.app/services",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.75,
    },
    {
      url: "https://rodweleo.vercel.app/contact",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.75,
    },
  ];
}
