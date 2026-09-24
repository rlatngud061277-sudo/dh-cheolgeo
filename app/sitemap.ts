
import type { MetadataRoute } from "next";

/* =====================================
   DH 종합철거 사이트맵 기본 설정
===================================== */

const SITE_URL = "https://www.dhcheolgeo.com";

/* =====================================
   철거 서비스 상세 페이지

   실제 app/services/[service]/page.tsx
   파일에 등록된 주소와 동일하게 설정
===================================== */

const SERVICES = [
  "house",
  "commercial",
  "office",
  "interior",
  "restoration",
] as const;

/* =====================================
   서울·경기·인천·충남·충북 지역 데이터

   실제 지역별 철거 페이지의
   region 및 district 주소와 동일
===================================== */

const REGIONS: Record<string, string[]> = {
  seoul: [
    "gangnam",
    "gangdong",
    "gangbuk",
    "gangseo",
    "gwanak",
    "gwangjin",
    "guro",
    "geumcheon",
    "nowon",
    "dobong",
    "dongdaemun",
    "dongjak",
    "mapo",
    "seodaemun",
    "seocho",
    "seongdong",
    "seongbuk",
    "songpa",
    "yangcheon",
    "yeongdeungpo",
    "yongsan",
    "eunpyeong",
    "jongno",
    "jung",
    "jungnang",
  ],

  gyeonggi: [
    "suwon",
    "seongnam",
    "goyang",
    "yongin",
    "hwaseong",
    "pyeongtaek",
    "ansan",
    "anyang",
    "bucheon",
    "siheung",
    "gimpo",
    "gwangmyeong",
    "gunpo",
    "uiwang",
    "gwacheon",
    "gwangju",
    "hanam",
    "namyangju",
    "guri",
    "uijeongbu",
    "paju",
    "yangju",
    "dongducheon",
    "pocheon",
    "icheon",
    "yeoju",
    "anseong",
    "osan",
    "yangpyeong",
    "gapyeong",
    "yeoncheon",
  ],

  incheon: [
    "jung",
    "dong",
    "michuhol",
    "yeonsu",
    "namdong",
    "bupyeong",
    "gyeyang",
    "seo",
    "ganghwa",
    "ongjin",
  ],

  chungnam: [
    "cheonan",
    "asan",
    "gongju",
    "boryeong",
    "seosan",
    "nonsan",
    "gyeryong",
    "dangjin",
    "geumsan",
    "buyeo",
    "seocheon",
    "cheongyang",
    "hongseong",
    "yesan",
    "taean",
  ],

  chungbuk: [
    "cheongju",
    "chungju",
    "jecheon",
    "boeun",
    "okcheon",
    "yeongdong",
    "jeungpyeong",
    "jincheon",
    "goesan",
    "eumseong",
    "danyang",
  ],
};

/* =====================================
   사이트맵 자동 생성
===================================== */

export default function sitemap(): MetadataRoute.Sitemap {
  /* =====================================
     1. 메인 홈페이지
  ===================================== */

  const homePage: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,

      changeFrequency: "weekly",

      priority: 1,
    },
  ];

  /* =====================================
     2. 철거 서비스별 상세 페이지
  ===================================== */

  const servicePages: MetadataRoute.Sitemap =
    SERVICES.map((service) => ({
      url: `${SITE_URL}/services/${service}`,

      changeFrequency: "monthly",

      priority: 0.8,
    }));

  /* =====================================
     3. 지역별 철거 상세 페이지
  ===================================== */

  const regionPages: MetadataRoute.Sitemap =
    Object.entries(REGIONS).flatMap(
      ([region, districts]) =>
        districts.map((district) => ({
          url:
            `${SITE_URL}/services/demolition/` +
            `${region}/${district}`,

          changeFrequency: "monthly" as const,

          priority: 0.6,
        }))
    );

  /* =====================================
     4. 전체 URL 합치기
  ===================================== */

  return [
    ...homePage,
    ...servicePages,
    ...regionPages,
  ];
}
