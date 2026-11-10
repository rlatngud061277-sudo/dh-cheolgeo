
import type { MetadataRoute } from "next";

import {
  SITE_URL,
  SERVICES,
  getAllLocations,
  serviceRegionUrl,
} from "../lib/dh-data";

/* =====================================
   DH 종합철거 사이트맵
   경기·충남·충북 전체 지역
===================================== */

export default function sitemap(): MetadataRoute.Sitemap {
  const locations = getAllLocations();

  const serviceSlugs = Object.keys(SERVICES);

  /* 메인 홈페이지 */

  const home: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];

  /* 철거 서비스별 메인 페이지 */

  const servicePages: MetadataRoute.Sitemap =
    serviceSlugs.map((service) => ({
      url: `${SITE_URL}/services/${service}`,
      changeFrequency: "monthly",
      priority: 0.9,
    }));

  /* 서비스별 지역 개별페이지 */

  const regionPages: MetadataRoute.Sitemap =
    serviceSlugs.flatMap((service) =>
      locations.map(({ region, district }) => ({
        url: `${SITE_URL}${serviceRegionUrl(
          service,
          region,
          district
        )}`,
        changeFrequency: "monthly" as const,
        priority: 0.8,
      }))
    );

  return [
    ...home,
    ...servicePages,
    ...regionPages,
  ];
}
