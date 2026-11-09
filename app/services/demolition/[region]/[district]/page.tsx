
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

/* =====================================
   DH 종합철거 기본 정보
===================================== */

const SITE_URL = "https://www.dhcheolgeo.com";
const COMPANY = "DH 종합철거";
const OWNER = "이덕재";
const PHONE = "01054731244";
const PHONE_DISPLAY = "010-5473-1244";
const PHONE_LINK = `tel:${PHONE}`;

const LOGO = "/IMG_1102.png";

/* =====================================
   유지 지역 50개
   경기 31 / 충남 15 / 충북 4
===================================== */

const REGIONS = {
  gyeonggi: {
    name: "경기도",
    shortName: "경기",
    districts: {
      suwon: "수원시",
      seongnam: "성남시",
      goyang: "고양시",
      yongin: "용인시",
      hwaseong: "화성시",
      pyeongtaek: "평택시",
      ansan: "안산시",
      anyang: "안양시",
      bucheon: "부천시",
      siheung: "시흥시",
      gimpo: "김포시",
      gwangmyeong: "광명시",
      gunpo: "군포시",
      uiwang: "의왕시",
      gwacheon: "과천시",
      gwangju: "광주시",
      hanam: "하남시",
      namyangju: "남양주시",
      guri: "구리시",
      uijeongbu: "의정부시",
      paju: "파주시",
      yangju: "양주시",
      dongducheon: "동두천시",
      pocheon: "포천시",
      icheon: "이천시",
      yeoju: "여주시",
      anseong: "안성시",
      osan: "오산시",
      yangpyeong: "양평군",
      gapyeong: "가평군",
      yeoncheon: "연천군",
    },
  },

  chungnam: {
    name: "충청남도",
    shortName: "충남",
    districts: {
      cheonan: "천안시",
      asan: "아산시",
      gongju: "공주시",
      boryeong: "보령시",
      seosan: "서산시",
      nonsan: "논산시",
      gyeryong: "계룡시",
      dangjin: "당진시",
      geumsan: "금산군",
      buyeo: "부여군",
      seocheon: "서천군",
      cheongyang: "청양군",
      hongseong: "홍성군",
      yesan: "예산군",
      taean: "태안군",
    },
  },

  chungbuk: {
    name: "충청북도",
    shortName: "충북",
    districts: {
      cheongju: "청주시",
      jincheon: "진천군",
      jeungpyeong: "증평군",
      eumseong: "음성군",
    },
  },
} as const;

type RegionSlug = keyof typeof REGIONS;

type PageParams = Promise<{
  region: string;
  district: string;
}>;

/* =====================================
   지역 데이터 확인
===================================== */

function getLocation(
  regionSlug: string,
  districtSlug: string
) {
  if (
    !Object.prototype.hasOwnProperty.call(
      REGIONS,
      regionSlug
    )
  ) {
    return null;
  }

  const region =
    REGIONS[regionSlug as RegionSlug];

  const districts =
    region.districts as Record<string, string>;

  const districtName = districts[districtSlug];

  if (!districtName) return null;

  return {
    regionSlug,
    districtSlug,
    regionName: region.name,
    regionShortName: region.shortName,
    districtName,
    name: `${region.shortName} ${districtName}`,
  };
}

function getPageUrl(
  region: string,
  district: string
) {
  return (
    `${SITE_URL}/services/demolition/` +
    `${region}/${district}`
  );
}

/* =====================================
   정적 페이지 50개 생성
===================================== */

export function generateStaticParams() {
  return Object.entries(REGIONS).flatMap(
    ([region, data]) =>
      Object.keys(data.districts).map(
        (district) => ({
          region,
          district,
        })
      )
  );
}

export const dynamicParams = false;

/* =====================================
   지역별 설명
===================================== */

const REGION_GUIDES: Record<
  RegionSlug,
  {
    intro: string;
    focus: string;
    access: string;
  }
> = {
  gyeonggi: {
    intro:
      "경기도의 주택, 아파트, 상가, 사무실 등 다양한 건물 유형에 맞춰 철거 범위와 현장 조건을 확인합니다.",
    focus:
      "리모델링 전 철거에서는 남겨야 할 시설과 철거할 마감재를 구분하고, 상가 원상복구는 임대차계약의 복구 기준을 확인하는 것이 중요합니다.",
    access:
      "현장 진입로, 차량 접근, 폐기물 반출 위치, 건물 관리규정 및 작업 가능 시간을 확인해 주세요.",
  },

  chungnam: {
    intro:
      "충남 지역의 주택, 아파트, 상가, 사무실 철거는 건물 형태와 철거 목적에 따라 작업 범위를 검토합니다.",
    focus:
      "주택 리모델링 전 철거와 상가 원상복구는 작업 대상이 다르므로 기존 시설물 상태와 철거 면적을 확인해야 합니다.",
    access:
      "현장 진입로, 폐기물 반출 위치, 작업 공간과 희망 일정을 확인해 주세요.",
  },

  chungbuk: {
    intro:
      "천안 인근 충북 지역의 주거 및 상업시설 철거는 기존 시설물 상태와 작업 범위를 확인하여 상담합니다.",
    focus:
      "아파트 내부철거, 상가철거, 사무실철거 및 원상복구는 철거 대상과 유지할 시설을 명확하게 구분해야 합니다.",
    access:
      "현장 주소, 면적, 차량 접근 조건, 폐기물 처리 범위와 작업 희망 날짜를 알려주세요.",
  },
};

const LOCAL_GUIDES: Record<string, string> = {
  "chungnam/cheonan":
    "천안시의 아파트 리모델링, 상가 이전 및 사무실 내부 철거에서는 기존 마감재와 설비 철거 범위를 구분합니다. 공동주택은 관리사무소의 공사 규정과 작업 가능 시간을 확인하는 것이 좋습니다.",

  "chungnam/asan":
    "아산시의 주택, 아파트 및 상업시설 철거에서는 기존 시설물 상태, 철거 대상과 현장 진입 조건을 확인합니다.",

  "chungnam/gongju":
    "공주시의 주택 및 상가 철거는 건물 유형과 철거 목적에 따라 필요한 작업 범위와 폐기물 반출 조건을 검토합니다.",

  "chungnam/dangjin":
    "당진시의 주거시설과 상업시설 철거는 현장 위치, 철거 면적, 기존 시설물 및 작업 가능 일정을 확인합니다.",

  "gyeonggi/pyeongtaek":
    "평택시의 아파트, 주택 및 상가 철거에서는 내부 마감재, 칸막이, 바닥 등 철거 대상과 폐기물 반출 조건을 확인합니다.",

  "gyeonggi/hwaseong":
    "화성시의 주택과 상가 철거는 건물 유형, 작업 공간, 차량 진입 및 철거 후 정리 범위를 함께 검토합니다.",

  "gyeonggi/anseong":
    "안성시의 주택 및 상업시설 철거는 기존 마감재와 시설물 상태, 철거 면적, 현장 접근 조건을 확인합니다.",

  "gyeonggi/os an":
    "오산시의 아파트 및 상가 철거에서는 작업 시간과 기존 시설물의 철거 범위를 구분합니다.",

  "chungbuk/cheongju":
    "청주시의 주택, 아파트, 상가 철거는 리모델링 여부와 기존 시설물 상태에 따라 작업 범위를 확인합니다.",

  "chungbuk/jincheon":
    "진천군의 주택 및 상업시설 철거는 철거 대상과 현장 진입 조건, 폐기물 반출 범위를 확인합니다.",

  "chungbuk/jeungpyeong":
    "증평군의 주거 및 상업시설 철거는 철거 면적과 기존 시설물 상태를 확인하여 상담합니다.",

  "chungbuk/eumseong":
    "음성군의 주택 및 상가 철거는 현장 위치, 작업 공간과 폐기물 반출 조건을 확인합니다.",
};

function getGuide(
  region: string,
  district: string
) {
  const location = getLocation(region, district);

  if (!location) return null;

  const regionGuide =
    REGION_GUIDES[region as RegionSlug];

  const custom =
    LOCAL_GUIDES[`${region}/${district}`];

  return {
    intro:
      custom ??
      `${location.name}에서 주택·아파트·상가·사무실 철거를 계획하고 있다면 철거 목적과 면적, 기존 시설물 상태를 먼저 확인하는 것이 좋습니다. ${regionGuide.intro}`,

    focus: regionGuide.focus,
    access: regionGuide.access,
  };
}

/* =====================================
   지역별 SEO 메타데이터
===================================== */

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { region, district } = await params;

  const location = getLocation(region, district);

  if (!location) {
    return {
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const url = getPageUrl(region, district);
  const guide = getGuide(region, district)!;

  const title =
    `${location.name} 철거업체 | ` +
    `상가철거·내부철거·원상복구 | ${COMPANY}`;

  const description =
    `${location.name} 철거 상담. ` +
    `주택·아파트·상가·사무실 철거, ` +
    `내부철거 및 원상복구 안내. ` +
    `${guide.focus} 전화 ${PHONE_DISPLAY}.`;

  return {
    title: {
      absolute: title,
    },

    description,

    alternates: {
      canonical: url,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      type: "website",
      locale: "ko_KR",
      siteName: COMPANY,
      url,
      title,
      description,
      images: [
        {
          url: LOGO,
          alt: `${COMPANY} 공식 로고`,
        },
      ],
    },
  };
}

/* =====================================
   철거 서비스와 사진
===================================== */

const SERVICES = [
  {
    name: "주택·아파트 철거",
    slug: "house",
    image: "/IMG_2381.jpeg",
    alt: "아파트 주방 및 내부 시설물 철거 후 사진",
    detail:
      "주택과 아파트 리모델링 전 기존 주방 시설, 바닥재, 벽체, 천장 마감재 등 철거 대상과 유지할 시설물을 구분합니다.",
  },
  {
    name: "상가·매장 철거",
    slug: "commercial",
    image: "/IMG_2386.jpeg",
    alt: "상가 주방 내부 시설물 철거 사진",
    detail:
      "음식점, 카페, 매장 등의 기존 인테리어와 주방 설비, 바닥 및 천장 시설물 철거 범위를 상담합니다.",
  },
  {
    name: "사무실 철거",
    slug: "office",
    image: "/IMG_2385.jpeg",
    alt: "사무실 천장 및 내부 마감재 철거 현장",
    detail:
      "사무실 이전과 리모델링을 위한 칸막이, 천장, 바닥 및 기존 시설물 철거 범위를 확인합니다.",
  },
  {
    name: "내부·부분 철거",
    slug: "interior",
    image: "/IMG_2384.jpeg",
    alt: "상업시설 내부 천장 철거 현장",
    detail:
      "전체 철거가 아닌 벽체, 바닥, 천장, 주방 등 필요한 공간의 부분 철거를 상담합니다.",
  },
  {
    name: "원상복구",
    slug: "restoration",
    image: "/IMG_2382.jpeg",
    alt: "상업시설 내부 시설물 철거 후 현장",
    detail:
      "상가 및 사무실 임대차 종료에 따른 시설물 철거와 원상복구 범위를 확인합니다.",
  },
];

const CHECKLIST = [
  {
    title: "현장 위치",
    description:
      "현장 주소와 주택, 아파트, 상가, 사무실 등 건물 유형을 알려주세요.",
  },
  {
    title: "철거 면적과 범위",
    description:
      "대략적인 면적과 철거할 벽체, 바닥, 천장, 주방, 집기 등을 알려주세요.",
  },
  {
    title: "현장 사진",
    description:
      "전체 공간과 주요 철거 대상이 보이는 사진을 준비해 주세요.",
  },
  {
    title: "작업 및 반출 조건",
    description:
      "엘리베이터, 계단, 차량 진입, 폐기물 반출 위치와 작업 가능 시간을 확인해 주세요.",
  },
  {
    title: "희망 일정",
    description:
      "철거 희망 날짜와 원상복구 또는 다음 공사 시작 일정을 알려주세요.",
  },
];

const cardStyle: CSSProperties = {
  minWidth: 0,
  width: "100%",
  overflow: "hidden",
  wordBreak: "keep-all",
  overflowWrap: "break-word",
};

function jsonLd(data: object) {
  return JSON.stringify(data).replace(
    /</g,
    "\\u003c"
  );
}

/* =====================================
   지역별 개별 페이지
===================================== */

export default async function RegionPage({
  params,
}: {
  params: PageParams;
}) {
  const { region, district } = await params;

  const location = getLocation(region, district);

  if (!location) notFound();

  const guide = getGuide(region, district)!;
  const name = location.name;
  const pageUrl = getPageUrl(region, district);

  const relatedDistricts = Object.entries(
    REGIONS[region as RegionSlug].districts
  )
    .filter(([slug]) => slug !== district)
    .slice(0, 12);

  const faqs = [
    {
      question: `${name} 철거 견적은 어떻게 문의하나요?`,
      answer:
        `${PHONE_DISPLAY}으로 현장 위치, 철거 면적, 철거 대상과 희망 일정을 알려주시면 상담에 도움이 됩니다. 현장 조건에 따라 추가 확인이 필요할 수 있습니다.`,
    },
    {
      question: `${name} 상가철거와 원상복구를 함께 상담할 수 있나요?`,
      answer:
        "상가 내부 시설물 철거와 원상복구 범위를 함께 상담할 수 있습니다. 계약서의 원상복구 기준과 현장 사진을 준비해 주세요.",
    },
    {
      question: `${name} 아파트 내부철거 전 확인할 사항은 무엇인가요?`,
      answer:
        "관리사무소 공사 신고 여부, 작업 가능 시간, 공용부 보호, 폐기물 반출 동선과 철거 대상 범위를 확인하는 것이 좋습니다.",
    },
    {
      question: `${name} 부분철거도 문의할 수 있나요?`,
      answer:
        "바닥, 벽체, 천장 등 필요한 부분의 철거 상담이 가능합니다. 실제 작업 가능 여부는 구조와 설비 및 현장 조건에 따라 확인합니다.",
    },
    {
      question: `${name} 철거 비용은 무엇에 따라 달라지나요?`,
      answer:
        "철거 면적, 마감재 종류, 작업 난이도, 폐기물 양, 반출 거리, 차량 진입 조건 및 작업 일정에 따라 달라질 수 있습니다.",
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "홈",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "출장 지역",
        item: `${SITE_URL}/#regions`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${name} 철거`,
        item: pageUrl,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${name} 철거 및 원상복구 상담`,
    serviceType:
      "주택철거, 아파트철거, 상가철거, 사무실철거, 내부철거, 원상복구",
    description: guide.intro,
    url: pageUrl,
    provider: {
      "@type": "Organization",
      name: COMPANY,
      url: SITE_URL,
      telephone: PHONE_DISPLAY,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd([
            breadcrumbSchema,
            serviceSchema,
          ]),
        }}
      />

      <header className="site-header">
        <div className="container header-inner">
          <Link
            href="/"
            className="brand"
            aria-label="DH 종합철거 홈페이지"
          >
            <span className="brand-mark">
              DH
            </span>
            종합철거
          </Link>

          <nav
            className="nav-links"
            aria-label="주요 메뉴"
          >
            <Link href="/">홈</Link>
            <Link href="/#services">
              철거 서비스
            </Link>
            <Link href="/#regions">
              출장 지역
            </Link>
            <Link href="/#contact">
              견적 문의
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <span className="hero-label">
              DH DEMOLITION & REMOVAL
            </span>

            <h1>
              {name} 철거업체
              <br />
              <strong>{COMPANY}</strong>
            </h1>

            <p>
              {name} 주택·아파트 철거,
              상가철거, 사무실철거,
              내부철거 및 원상복구 상담
            </p>

            <p>
              현장 위치와 철거 범위를 확인하여
              작업 가능 여부와 견적을 안내합니다.
            </p>

            <div className="hero-actions">
              <a
                href={PHONE_LINK}
                className="btn btn-primary"
              >
                전화 상담 {PHONE_DISPLAY}
              </a>

              <Link
                href="/#regions"
                className="btn btn-outline"
              >
                다른 지역 확인
              </Link>
            </div>
          </div>
        </section>

        {/* 지역 안내 */}

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                LOCAL GUIDE
              </span>
              <h2>{name} 철거 상담 안내</h2>
              <p>
                건물 유형과 철거 목적에 따라
                확인해야 할 사항이 달라집니다.
              </p>
            </div>

            <div className="card-grid">
              {[
                {
                  title: `${name} 철거 작업 범위`,
                  desc: guide.intro,
                },
                {
                  title: "철거 전 확인 사항",
                  desc: guide.focus,
                },
                {
                  title: "현장 접근 및 폐기물 반출",
                  desc: guide.access,
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="card"
                  style={cardStyle}
                >
                  <div className="card-body">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 철거 서비스 사진 */}

        <section className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                DEMOLITION SERVICES
              </span>
              <h2>{name} 철거 서비스</h2>
              <p>
                주거공간부터 상업시설까지
                철거 대상에 맞는 상담을 안내합니다.
              </p>
            </div>

            <div className="card-grid">
              {SERVICES.map((service) => (
                <article
                  key={service.slug}
                  className="card"
                  style={cardStyle}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      height: 220,
                      overflow: "hidden",
                      background: "#eeeeee",
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{
                        objectFit: "cover",
                      }}
                    />
                  </div>

                  <div className="card-body">
                    <h3>
                      {name} {service.name}
                    </h3>
                    <p>{service.detail}</p>

                    <Link
                      href={`/services/${service.slug}`}
                      className="card-link"
                    >
                      서비스 자세히 보기 →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 견적 안내 */}

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                ESTIMATE CHECKLIST
              </span>
              <h2>{name} 철거 견적 준비사항</h2>
              <p>
                아래 정보를 준비하시면
                상담에 도움이 됩니다.
              </p>
            </div>

            <div className="card-grid">
              {CHECKLIST.map((item) => (
                <article
                  key={item.title}
                  className="card"
                  style={cardStyle}
                >
                  <div className="card-body">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}

        <section className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2>{name} 철거 자주 묻는 질문</h2>
            </div>

            <div
              style={{
                display: "grid",
                gap: 14,
              }}
            >
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="card"
                  style={{
                    padding: 20,
                  }}
                >
                  <summary
                    style={{
                      cursor: "pointer",
                      fontWeight: 700,
                      wordBreak: "keep-all",
                    }}
                  >
                    {faq.question}
                  </summary>

                  <p
                    style={{
                      marginTop: 14,
                      lineHeight: 1.8,
                      wordBreak: "keep-all",
                    }}
                  >
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 다른 지역 */}

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                SERVICE AREAS
              </span>
              <h2>
                {location.regionName} 다른 철거 지역
              </h2>
              <p>
                같은 시·도 내 다른 지역의
                철거 상담 페이지를 확인하세요.
              </p>
            </div>

            <div className="region-grid">
              {relatedDistricts.map(
                ([slug, districtName]) => (
                  <Link
                    key={slug}
                    href={`/services/demolition/${region}/${slug}`}
                    className="region-link"
                  >
                    {location.regionShortName}{" "}
                    {districtName} 철거
                  </Link>
                )
              )}
            </div>

            <div style={{ marginTop: 24 }}>
              <Link
                href="/#regions"
                className="btn btn-outline"
              >
                전체 출장 지역 보기
              </Link>
            </div>
          </div>
        </section>

        {/* 최종 상담 */}

        <section className="contact-section">
          <div className="container">
            <h2>{name} 철거 견적 문의</h2>

            <p>
              철거 현장 위치, 면적, 철거 대상,
              현장 사진과 희망 일정을 준비해 주시면
              상담에 도움이 됩니다.
            </p>

            <div className="contact-actions">
              <a
                href={PHONE_LINK}
                className="btn btn-primary"
              >
                전화 상담 {PHONE_DISPLAY}
              </a>

              <Link
                href="/"
                className="btn btn-outline"
              >
                메인 홈페이지
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <h3>{COMPANY}</h3>

            <div className="footer-info">
              <p>대표자: {OWNER}</p>
              <p>{name} 철거 상담</p>
              <p>
                주택·아파트·상가·사무실 철거
                및 원상복구
              </p>
              <p>
                전화:{" "}
                <a href={PHONE_LINK}>
                  {PHONE_DISPLAY}
                </a>
              </p>
            </div>
          </div>

          <div className="footer-info">
            <p>
              © {new Date().getFullYear()}{" "}
              {COMPANY}.
            </p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
