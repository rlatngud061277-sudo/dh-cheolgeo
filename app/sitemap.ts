
import type { MetadataRoute } from "next";

import {
  SITE_URL,
  SERVICES,
  getAllLocations,
  serviceRegionUrl,
} from "../lib/dh-data";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const home: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  const servicePages: MetadataRoute.Sitemap =
    Object.keys(SERVICES).map((service) => ({
      url: `${SITE_URL}/services/${service}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    }));

  const locations = getAllLocations();

  const regionPages: MetadataRoute.Sitemap =
    Object.keys(SERVICES).flatMap((service) =>
      locations.map(({ region, district }) => ({
        url:
          SITE_URL +
          serviceRegionUrl(
            service,
            region,
            district
          ),
        lastModified: now,
        changeFrequency: "monthly" as const,
        priority: 0.7,
      }))
    );

  return [
    ...home,
    ...servicePages,
    ...regionPages,
  ];
}
