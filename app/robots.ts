
import type { MetadataRoute } from "next";

/* =====================================
   DH 종합철거 검색엔진 수집 설정
===================================== */

const SITE_URL = "https://www.dhcheolgeo.com";

/* =====================================
   robots.txt 자동 생성
===================================== */

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
        ],
      },
      {
        userAgent: "Yeti",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: [
          "/api/",
          "/admin/",
          "/_next/",
        ],
      },
    ],

    sitemap: `${SITE_URL}/sitemap.xml`,

    host: SITE_URL,
  };
}
