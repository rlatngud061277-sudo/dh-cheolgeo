
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const SITE_URL = "https://www.dhcheolgeo.com";
const COMPANY = "DH 종합철거";
const OWNER = "이덕재";
const BUSINESS_NUMBER = "882-06-03153";
const PHONE = "01054731244";
const PHONE_DISPLAY = "010-5473-1244";
const PHONE_LINK = `tel:${PHONE}`;

const SERVICE_AREA =
  "경기 전역·충남 주요 지역·충북 인접 지역";

/* =====================================
   서비스 정보
===================================== */

const SERVICES = {
  house: {
    title: "주택·아파트 철거",
    keyword: "주택철거·아파트철거·내부철거",
    seoDescription:
      "DH 종합철거 주택·아파트 철거 안내. 주방·욕실·바닥·천장 철거와 리모델링 전 내부철거 견적 상담.",
    description:
      "주택과 아파트 리모델링 전 기존 주방, 욕실, 바닥, 벽체, 천장 및 내부 시설물의 철거 범위를 확인하고 상담합니다.",
    image: "/IMG_2380.jpeg",
    details: [
      {
        title: "주방 및 기존 가구 철거",
        description:
          "싱크대, 수납장, 붙박이장 등 기존 주방 시설물과 마감재의 철거 범위를 확인합니다.",
      },
      {
        title: "욕실 내부 철거",
        description:
          "기존 위생도기, 타일 및 욕실 마감재 철거 범위를 상담합니다.",
      },
      {
        title: "바닥 및 천장 철거",
        description:
          "기존 바닥재와 천장 마감재의 종류와 작업 범위를 확인합니다.",
      },
      {
        title: "공동주택 공사 준비",
        description:
          "관리사무소 공사 규정, 작업 시간, 공용부 보양 및 폐기물 반출 동선을 확인합니다.",
      },
    ],
    beforeAfter: {
      title: "주택·아파트 주방 철거 전후",
      before: "/IMG_2381.jpeg",
      after: "/IMG_2380.jpeg",
    },
    faqs: [
      {
        q: "아파트 내부철거는 어떤 작업이 가능한가요?",
        a: "주방, 욕실, 바닥, 천장 등 기존 시설물 철거 범위를 상담합니다.",
      },
      {
        q: "아파트 철거 전에 무엇을 확인해야 하나요?",
        a: "관리사무소 규정, 작업 시간, 엘리베이터 사용과 보양 조건을 확인해야 합니다.",
      },
      {
        q: "주택 철거 비용은 어떻게 결정되나요?",
        a: "철거 면적, 마감재 종류, 폐기물 발생량과 작업 난이도에 따라 달라집니다.",
      },
    ],
  },

  commercial: {
    title: "상가·매장 철거",
    keyword: "상가철거·매장철거·음식점철거",
    seoDescription:
      "DH 종합철거 상가·매장 철거 안내. 음식점·카페·매장 내부철거, 기존 인테리어 철거 및 견적 상담.",
    description:
      "상가, 음식점, 카페, 매장 등 상업시설의 기존 인테리어와 내부 시설물 철거를 상담합니다.",
    image: "/IMG_2386.jpeg",
    details: [
      {
        title: "상가 내부 인테리어 철거",
        description:
          "기존 인테리어, 칸막이, 천장과 바닥 마감재 철거 범위를 확인합니다.",
      },
      {
        title: "음식점 주방 시설물 철거",
        description:
          "후드, 덕트, 주방 시설물 등 철거 대상과 유지할 설비를 구분합니다.",
      },
      {
        title: "폐업 및 매장 이전 철거",
        description:
          "폐업 또는 이전 일정에 맞춰 기존 시설물 철거를 상담합니다.",
      },
      {
        title: "상가 원상복구 범위 확인",
        description:
          "임대차계약과 임대인 협의사항을 기준으로 철거 범위를 확인합니다.",
      },
    ],
    beforeAfter: {
      title: "상업시설 내부 철거 전후",
      before: "/IMG_2383.jpeg",
      after: "/IMG_2382.jpeg",
    },
    faqs: [
      {
        q: "상가 폐업 시 내부철거가 가능한가요?",
        a: "기존 인테리어와 내부 시설물의 철거 범위를 확인해 상담합니다.",
      },
      {
        q: "음식점 주방 설비도 철거하나요?",
        a: "주방 설비의 철거 범위를 상담하며 가스·전기 설비는 안전조치를 먼저 확인해야 합니다.",
      },
      {
        q: "상가철거와 원상복구는 다른가요?",
        a: "철거는 시설물 제거가 중심이며 원상복구는 계약상 필요한 복구 작업까지 포함할 수 있습니다.",
      },
    ],
  },

  office: {
    title: "사무실 철거",
    keyword: "사무실철거·사무실내부철거",
    seoDescription:
      "DH 종합철거 사무실 철거 안내. 칸막이·천장·바닥재 철거, 사무실 이전 및 내부철거 견적 상담.",
    description:
      "사무실 이전과 리모델링을 위한 칸막이, 천장, 바닥재 및 기존 시설물 철거를 상담합니다.",
    image: "/IMG_2385.jpeg",
    details: [
      {
        title: "사무실 칸막이 철거",
        description:
          "파티션과 비내력 칸막이의 구조를 확인하고 철거 범위를 정합니다.",
      },
      {
        title: "천장 마감재 철거",
        description:
          "천장재와 기존 설비의 유지 여부를 구분합니다.",
      },
      {
        title: "사무실 바닥 철거",
        description:
          "기존 바닥 마감재와 후속 공사에 필요한 철거 범위를 확인합니다.",
      },
      {
        title: "사무실 이전 철거",
        description:
          "이전 일정과 건물 관리규정에 맞춰 철거를 상담합니다.",
      },
    ],
    beforeAfter: null,
    faqs: [
      {
        q: "사무실 칸막이만 철거할 수 있나요?",
        a: "칸막이 구조와 설비 위치를 확인한 후 부분철거를 상담합니다.",
      },
      {
        q: "전기설비는 어떻게 처리하나요?",
        a: "유지할 설비와 철거할 설비를 구분하고 안전조치 여부를 확인해야 합니다.",
      },
      {
        q: "견적에 필요한 정보는 무엇인가요?",
        a: "현장 위치, 면적, 철거 대상, 사진과 희망 일정이 필요합니다.",
      },
    ],
  },

  interior: {
    title: "내부·부분 철거",
    keyword: "내부철거·부분철거·천장철거",
    seoDescription:
      "DH 종합철거 내부·부분 철거 안내. 벽체·바닥·천장·주방 등 필요한 부분의 철거 및 견적 상담.",
    description:
      "주택, 상가, 사무실의 기존 시설물 중 필요한 부분을 구분하여 내부철거 범위를 상담합니다.",
    image: "/IMG_2384.jpeg",
    details: [
      {
        title: "천장 부분철거",
        description:
          "천장 구조와 설비 상태를 확인하여 철거 범위를 정합니다.",
      },
      {
        title: "벽체 및 칸막이 철거",
        description:
          "벽체의 구조적 역할과 철거 가능 여부를 확인합니다.",
      },
      {
        title: "바닥 마감재 철거",
        description:
          "기존 바닥재의 종류와 시공 상태를 확인합니다.",
      },
      {
        title: "주변 시설물 보호",
        description:
          "유지할 시설물과 매립 배관, 전기설비 위치를 확인합니다.",
      },
    ],
    beforeAfter: null,
    faqs: [
      {
        q: "천장만 부분적으로 철거할 수 있나요?",
        a: "천장 구조와 설비 상태를 확인한 후 상담합니다.",
      },
      {
        q: "벽체 철거도 가능한가요?",
        a: "내력벽 등 구조체는 별도의 안전 검토와 관련 절차가 필요합니다.",
      },
      {
        q: "부분철거 비용은 어떻게 결정되나요?",
        a: "작업 범위, 철거 대상과 폐기물 처리량 등에 따라 달라집니다.",
      },
    ],
  },

  restoration: {
    title: "상가·사무실 원상복구",
    keyword: "상가원상복구·사무실원상복구",
    seoDescription:
      "DH 종합철거 상가·사무실 원상복구 안내. 임대차 종료에 따른 내부철거, 시설물 정리 및 견적 상담.",
    description:
      "상가와 사무실의 계약 종료 또는 이전에 따라 기존 인테리어 철거와 원상복구 범위를 상담합니다.",
    image: "/IMG_2382.jpeg",
    details: [
      {
        title: "상가 원상복구",
        description:
          "임대차계약과 임대인 협의사항을 확인하여 작업 범위를 정합니다.",
      },
      {
        title: "사무실 원상복구",
        description:
          "칸막이, 바닥, 천장 등 철거와 복구가 필요한 부분을 확인합니다.",
      },
      {
        title: "기존 시설물 철거",
        description:
          "임차인이 설치한 시설물과 유지할 설비를 구분합니다.",
      },
      {
        title: "퇴거 일정 및 현장 정리",
        description:
          "계약 종료 일정과 폐기물 반출 조건을 확인합니다.",
      },
    ],
    beforeAfter: {
      title: "상업시설 내부 철거 전후",
      before: "/IMG_2383.jpeg",
      after: "/IMG_2382.jpeg",
    },
    faqs: [
      {
        q: "상가 원상복구 범위는 어떻게 정하나요?",
        a: "임대차계약서와 임대인 협의사항을 기준으로 확인합니다.",
      },
      {
        q: "철거와 원상복구를 함께 상담할 수 있나요?",
        a: "기존 시설물 철거와 필요한 복구 범위를 함께 상담할 수 있습니다.",
      },
      {
        q: "퇴거 일정에 맞춰 작업할 수 있나요?",
        a: "작업량과 현장 조건에 따라 가능 여부를 확인합니다.",
      },
    ],
  },
} as const;

/* =====================================
   지역 선택 데이터
   기존 지역 URL과 동일하게 유지
===================================== */

const REGIONS = [
  {
    name: "경기도",
    slug: "gyeonggi",
    districts: [
      ["수원시", "suwon"],
      ["성남시", "seongnam"],
      ["고양시", "goyang"],
      ["용인시", "yongin"],
      ["화성시", "hwaseong"],
      ["평택시", "pyeongtaek"],
      ["안산시", "ansan"],
      ["안양시", "anyang"],
      ["부천시", "bucheon"],
      ["시흥시", "siheung"],
      ["김포시", "gimpo"],
      ["광명시", "gwangmyeong"],
      ["군포시", "gunpo"],
      ["의왕시", "uiwang"],
      ["과천시", "gwacheon"],
      ["광주시", "gwangju"],
      ["하남시", "hanam"],
      ["남양주시", "namyangju"],
      ["구리시", "guri"],
      ["의정부시", "uijeongbu"],
      ["파주시", "paju"],
      ["양주시", "yangju"],
      ["동두천시", "dongducheon"],
      ["포천시", "pocheon"],
      ["이천시", "icheon"],
      ["여주시", "yeoju"],
      ["안성시", "anseong"],
      ["오산시", "osan"],
      ["양평군", "yangpyeong"],
      ["가평군", "gapyeong"],
      ["연천군", "yeoncheon"],
    ],
  },
  {
    name: "충청남도",
    slug: "chungnam",
    districts: [
      ["천안시", "cheonan"],
      ["아산시", "asan"],
      ["공주시", "gongju"],
      ["당진시", "dangjin"],
      ["예산군", "yesan"],
      ["홍성군", "hongseong"],
      ["청양군", "cheongyang"],
    ],
  },
  {
    name: "충청북도",
    slug: "chungbuk",
    districts: [
      ["청주시", "cheongju"],
      ["진천군", "jincheon"],
      ["증평군", "jeungpyeong"],
      ["음성군", "eumseong"],
    ],
  },
] as const;

/* =====================================
   타입 및 정적 생성
===================================== */

type ServiceSlug = keyof typeof SERVICES;

function isServiceSlug(
  slug: string
): slug is ServiceSlug {
  return Object.prototype.hasOwnProperty.call(
    SERVICES,
    slug
  );
}

export function generateStaticParams() {
  return Object.keys(SERVICES).map((service) => ({
    service,
  }));
}

export const dynamicParams = false;

/* =====================================
   서비스별 메타데이터
===================================== */

export async function generateMetadata({
  params,
}: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service } = await params;

  if (!isServiceSlug(service)) {
    return {
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const item = SERVICES[service];
  const pageUrl = `${SITE_URL}/services/${service}`;
  const title = `${item.title} | ${COMPANY}`;

  return {
    title: {
      absolute: title,
    },
    description: item.seoDescription,
    alternates: {
      canonical: pageUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      siteName: COMPANY,
      url: pageUrl,
      title,
      description: item.seoDescription,
      images: [
        {
          url: `${SITE_URL}${item.image}`,
          alt: item.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: item.seoDescription,
      images: [`${SITE_URL}${item.image}`],
    },
  };
}

/* =====================================
   공통 사진
===================================== */

function ServiceImage({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16 / 10",
        overflow: "hidden",
        borderRadius: 14,
        background: "#eeeeee",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 900px"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

/* =====================================
   서비스 상세 페이지
===================================== */

export default async function ServicePage({
  params,
}: {
  params: Promise<{ service: string }>;
}) {
  const { service } = await params;

  if (!isServiceSlug(service)) {
    notFound();
  }

  const item = SERVICES[service];
  const pageUrl = `${SITE_URL}/services/${service}`;

  const structuredData = [
    {
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
          name: item.title,
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: item.title,
      description: item.description,
      serviceType: item.keyword,
      url: pageUrl,
      image: `${SITE_URL}${item.image}`,
      provider: {
        "@type": "Organization",
        name: COMPANY,
        url: SITE_URL,
        telephone: PHONE_DISPLAY,
      },
      areaServed: REGIONS.map((region) => ({
        "@type": "AdministrativeArea",
        name: region.name,
      })),
    },
  ];

  const estimateItems = [
    {
      title: "현장 위치",
      description:
        "철거 현장의 주소와 건물 유형을 알려주세요.",
    },
    {
      title: "철거 범위",
      description:
        "철거 대상 시설물과 대략적인 면적을 알려주세요.",
    },
    {
      title: "현장 사진",
      description:
        "전체 공간과 철거할 시설물의 사진을 준비해 주세요.",
    },
    {
      title: "작업 일정",
      description:
        "희망 작업 날짜와 폐기물 반출 조건을 알려주세요.",
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            structuredData
          ).replace(/</g, "\\u003c"),
        }}
      />

      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand">
            <span className="brand-mark">DH</span>
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
        {/* 대표 화면 */}

        <section className="hero">
          <div className="container">
            <span className="hero-label">
              DH DEMOLITION & REMOVAL
            </span>

            <h1>{item.title}</h1>

            <p>{item.description}</p>
            <p>{SERVICE_AREA}</p>

            <div className="hero-actions">
              <a
                href={PHONE_LINK}
                className="btn btn-primary"
              >
                전화 상담 {PHONE_DISPLAY}
              </a>

              <a
                href="#service-regions"
                className="btn btn-outline"
              >
                지역 선택하기
              </a>
            </div>
          </div>
        </section>

        {/* 서비스 사진과 설명 */}

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                SERVICE INFORMATION
              </span>

              <h2>{item.title} 작업 안내</h2>

              <p>
                철거 현장 사진과 함께
                작업 범위 및 확인사항을 안내합니다.
              </p>
            </div>

            <ServiceImage
              src={item.image}
              alt={`${item.title} 관련 철거 현장 사진`}
            />

            <div style={{ marginTop: 30 }}>
              {item.details.map((detail, index) => (
                <article
                  key={detail.title}
                  style={{
                    padding: "22px 0",
                    borderBottom:
                      "1px solid #e5e7eb",
                  }}
                >
                  <span className="section-tag">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{detail.title}</h3>

                  <p
                    style={{
                      lineHeight: 1.85,
                      wordBreak: "keep-all",
                    }}
                  >
                    {detail.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 철거 전후 사진 */}

        {item.beforeAfter && (
          <section className="section section-alt">
            <div className="container">
              <div className="section-heading">
                <span className="section-tag">
                  BEFORE & AFTER
                </span>

                <h2>{item.beforeAfter.title}</h2>

                <p>
                  철거 전후 현장 사진을
                  비교해 보세요.
                </p>
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
                  gap: 20,
                }}
              >
                <div>
                  <h3>철거 전 BEFORE</h3>
                  <ServiceImage
                    src={item.beforeAfter.before}
                    alt={`${item.title} 철거 전`}
                  />
                </div>

                <div>
                  <h3>철거 후 AFTER</h3>
                  <ServiceImage
                    src={item.beforeAfter.after}
                    alt={`${item.title} 철거 후`}
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =====================================
            지역 선택 버튼
            모든 서비스 카테고리에 표시
        ===================================== */}

        <section
          id="service-regions"
          className="section section-alt"
          style={{ scrollMarginTop: 90 }}
        >
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                SERVICE AREAS
              </span>

              <h2>{item.title} 지역 선택</h2>

              <p>
                시공을 희망하는 지역을 선택하면
                해당 지역의 철거 안내 페이지로
                이동합니다.
              </p>
            </div>

            {REGIONS.map((region) => (
              <div
                key={region.slug}
                style={{ marginBottom: 40 }}
              >
                <h3
                  style={{
                    marginBottom: 18,
                    fontSize: "1.2rem",
                    fontWeight: 800,
                  }}
                >
                  {region.name}
                </h3>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns:
                      "repeat(auto-fit, minmax(min(100%, 145px), 1fr))",
                    gap: 10,
                    width: "100%",
                  }}
                >
                  {region.districts.map(
                    ([districtName, districtSlug]) => (
                      <Link
                        key={districtSlug}
                        href={`/services/demolition/${region.slug}/${districtSlug}`}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          minHeight: 52,
                          padding: "12px 8px",
                          background: "#ffffff",
                          border: "1px solid #e5e7eb",
                          borderRadius: 10,
                          color: "#222222",
                          fontSize: 14,
                          fontWeight: 700,
                          textAlign: "center",
                          textDecoration: "none",
                          wordBreak: "keep-all",
                        }}
                      >
                        {districtName} 철거
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}

            <p
              style={{
                marginTop: 20,
                color: "#666666",
                lineHeight: 1.8,
              }}
            >
              지역 및 현장 조건에 따라
              작업 가능 여부가 달라질 수 있습니다.
              자세한 사항은 전화로 문의해 주세요.
            </p>
          </div>
        </section>

        {/* 견적 안내 */}

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                ESTIMATE GUIDE
              </span>

              <h2>{item.title} 견적 안내</h2>

              <p>
                철거 범위, 폐기물 발생량,
                현장 접근성과 작업 난이도에 따라
                견적이 달라질 수 있습니다.
              </p>
            </div>

            <div className="card-grid">
              {estimateItems.map((estimate) => (
                <article
                  className="card"
                  key={estimate.title}
                >
                  <div className="card-body">
                    <h3>{estimate.title}</h3>
                    <p>{estimate.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 자주 묻는 질문 */}

        <section className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                FAQ
              </span>

              <h2>{item.title} 자주 묻는 질문</h2>
            </div>

            <div
              style={{
                display: "grid",
                gap: 14,
              }}
            >
              {item.faqs.map((faq) => (
                <details
                  key={faq.q}
                  style={{
                    padding: 20,
                    border:
                      "1px solid #e5e7eb",
                    borderRadius: 12,
                    background: "#ffffff",
                  }}
                >
                  <summary
                    style={{
                      cursor: "pointer",
                      fontWeight: 800,
                      wordBreak: "keep-all",
                    }}
                  >
                    {faq.q}
                  </summary>

                  <p
                    style={{
                      marginTop: 16,
                      marginBottom: 0,
                      lineHeight: 1.85,
                    }}
                  >
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 전화 상담 */}

        <section className="contact-section">
          <div className="container">
            <h2>{item.title} 견적 문의</h2>

            <p>
              현장 주소, 철거 범위,
              현장 사진과 희망 일정을
              준비해 주세요.
            </p>

            <p>{SERVICE_AREA}</p>

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

      {/* 하단 정보 */}

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <h3>{COMPANY}</h3>

            <div className="footer-info">
              <p>대표자: {OWNER}</p>
              <p>
                사업자등록번호: {BUSINESS_NUMBER}
              </p>
              <p>{item.title} 상담</p>
              <p>{SERVICE_AREA}</p>
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
