
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

/* =====================================
   DH 종합철거 기본 정보
===================================== */

const SITE_URL = "https://www.dhcheolgeo.com";
const COMPANY = "DH 종합철거";
const OWNER = "이덕재";
const BUSINESS_NUMBER = "882-06-03153";

const PHONE = "01054731244";
const PHONE_DISPLAY = "010-5473-1244";
const PHONE_LINK = `tel:${PHONE}`;

const SERVICE_AREA =
  "경기 전역·충남 주요 지역·천안 인근 충북 지역";

/* =====================================
   서비스별 상세 데이터

   SEO 설명은 80자 이내로 설정
   사진은 public 폴더 기준
===================================== */

const SERVICES = {
  house: {
    title: "주택·아파트 철거",
    keyword: "주택철거·아파트철거·내부철거",

    seoDescription:
      "DH 종합철거 주택·아파트 철거 안내. 주방·욕실·바닥·천장 철거와 리모델링 전 내부철거 견적 상담.",

    description:
      "주택과 아파트 리모델링 전 기존 주방, 욕실, 바닥, 벽체, 천장 및 내부 시설물의 철거 범위를 확인하고 상담합니다.",

    image: "/IMG_2381.jpeg",
    imageAlt: "주택 아파트 주방 내부 철거 후 현장",

    details: [
      {
        title: "주방 및 기존 가구 철거",
        description:
          "싱크대, 수납장, 붙박이장 등 기존 가구와 주방 마감재의 철거 범위를 확인합니다.",
      },
      {
        title: "욕실 내부 철거",
        description:
          "욕실 리모델링을 위한 기존 위생도기, 타일 및 마감재 철거 범위를 상담합니다.",
      },
      {
        title: "바닥 및 천장 철거",
        description:
          "기존 바닥재와 천장 마감재를 확인하고 후속 리모델링 계획에 맞춰 철거 범위를 정합니다.",
      },
      {
        title: "공동주택 공사 준비",
        description:
          "관리사무소 공사 규정, 작업 가능 시간, 공용부 보양과 폐기물 반출 동선을 확인합니다.",
      },
    ],

    beforeAfter: {
      title: "주택·아파트 주방 철거 전후",
      before: "/IMG_2380.jpeg",
      after: "/IMG_2381.jpeg",
    },

    faqs: [
      {
        q: "아파트 내부철거는 어떤 작업이 가능한가요?",
        a: "주방 가구, 욕실, 바닥재, 천장재 등 내부 시설물의 철거 범위를 상담합니다. 구조체 관련 작업은 별도 검토가 필요합니다.",
      },
      {
        q: "아파트 철거 전에 무엇을 확인해야 하나요?",
        a: "관리사무소의 공사 규정, 작업 가능 시간, 엘리베이터 사용과 공용부 보양 조건을 확인해야 합니다.",
      },
      {
        q: "주택 철거 비용은 어떻게 결정되나요?",
        a: "철거 면적, 마감재 종류, 폐기물 발생량, 반출 조건과 작업 난이도에 따라 달라집니다.",
      },
    ],
  },

  commercial: {
    title: "상가·매장 철거",
    keyword: "상가철거·매장철거·음식점철거",

    seoDescription:
      "DH 종합철거 상가·매장 철거 안내. 음식점·카페·매장 내부철거, 기존 인테리어 철거 및 견적 상담.",

    description:
      "상가, 음식점, 카페, 매장 등 상업시설의 기존 인테리어와 주방 설비, 벽체 및 바닥 마감재 철거를 상담합니다.",

    image: "/IMG_2386.jpeg",
    imageAlt: "상가 음식점 주방 내부 시설물 철거 현장",

    details: [
      {
        title: "상가 내부 인테리어 철거",
        description:
          "매장 내부 칸막이, 기존 인테리어 시설물, 천장 및 바닥 마감재 철거 범위를 확인합니다.",
      },
      {
        title: "음식점 주방 시설물 철거",
        description:
          "주방 후드, 덕트, 조리시설 주변 설비 등 철거 대상과 유지할 시설물을 구분합니다.",
      },
      {
        title: "폐업 및 매장 이전 철거",
        description:
          "폐업 또는 이전 일정에 맞춰 기존 집기와 내부 시설물 철거 범위를 상담합니다.",
      },
      {
        title: "상가 원상복구 범위 확인",
        description:
          "임대차계약서와 임대인 협의사항을 기준으로 철거와 복구가 필요한 부분을 확인합니다.",
      },
    ],

    beforeAfter: {
      title: "상업시설 내부 철거 전후",
      before: "/IMG_2383.jpeg",
      after: "/IMG_2382.jpeg",
    },

    faqs: [
      {
        q: "상가 폐업 시 내부철거도 가능한가요?",
        a: "기존 인테리어, 칸막이, 바닥 및 천장 마감재 등 철거 대상과 현장 조건을 확인해 상담합니다.",
      },
      {
        q: "음식점 주방 설비도 철거하나요?",
        a: "후드, 덕트 등 주방 설비의 철거 범위를 상담할 수 있으며 가스와 전기 설비는 안전조치 여부를 먼저 확인해야 합니다.",
      },
      {
        q: "상가철거와 원상복구는 다른가요?",
        a: "상가철거는 기존 시설물 제거가 중심이며 원상복구는 계약상 필요한 복구 작업까지 포함할 수 있습니다.",
      },
    ],
  },

  office: {
    title: "사무실 철거",
    keyword: "사무실철거·사무실내부철거",

    seoDescription:
      "DH 종합철거 사무실 철거 안내. 칸막이·천장·바닥재 철거, 사무실 이전 및 내부철거 견적 상담.",

    description:
      "사무실 이전과 리모델링을 위한 기존 칸막이, 천장, 바닥재 및 내부 시설물 철거 범위를 상담합니다.",

    image: "/IMG_2385.jpeg",
    imageAlt: "사무실 천장과 내부 시설물 철거 현장",

    details: [
      {
        title: "사무실 칸막이 철거",
        description:
          "기존 파티션과 비내력 칸막이의 구조를 확인하고 필요한 철거 범위를 상담합니다.",
      },
      {
        title: "천장 마감재 철거",
        description:
          "천장재와 기존 마감재 철거 시 유지할 전기 및 공조 설비를 구분합니다.",
      },
      {
        title: "사무실 바닥 철거",
        description:
          "기존 바닥 마감재와 설치 상태를 확인하고 후속 공사에 필요한 철거 범위를 정합니다.",
      },
      {
        title: "사무실 이전 철거",
        description:
          "사무실 이전 일정과 건물 관리규정에 맞춰 시설물 철거 및 현장 정리 범위를 상담합니다.",
      },
    ],

    beforeAfter: null,

    faqs: [
      {
        q: "사무실 칸막이만 부분 철거할 수 있나요?",
        a: "철거 대상 칸막이의 구조와 기존 설비 위치를 확인한 뒤 부분철거 가능 여부를 상담합니다.",
      },
      {
        q: "사무실 철거 시 전기설비는 어떻게 하나요?",
        a: "유지할 설비와 철거할 설비를 구분하고 전기 관련 작업은 적절한 안전조치를 확인해야 합니다.",
      },
      {
        q: "사무실 철거 견적에 필요한 정보는 무엇인가요?",
        a: "현장 위치, 면적, 칸막이와 천장 등 철거 대상, 현장 사진과 희망 일정이 필요합니다.",
      },
    ],
  },

  interior: {
    title: "내부·부분 철거",
    keyword: "내부철거·부분철거·천장철거",

    seoDescription:
      "DH 종합철거 내부·부분 철거 안내. 벽체·바닥·천장·주방 등 필요한 부분의 철거 및 견적 상담.",

    description:
      "주택, 상가, 사무실의 기존 시설물 중 필요한 부분을 구분하여 벽체, 바닥, 천장 등 내부철거 범위를 상담합니다.",

    image: "/IMG_2384.jpeg",
    imageAlt: "실내 천장 마감재 및 내부 부분철거 현장",

    details: [
      {
        title: "천장 부분철거",
        description:
          "기존 천장 마감재와 철거 대상 설비를 확인하여 필요한 부분의 철거 범위를 상담합니다.",
      },
      {
        title: "벽체 및 칸막이 철거",
        description:
          "철거할 벽체가 구조체에 해당하는지 확인하고 비내력 칸막이 등의 작업 범위를 검토합니다.",
      },
      {
        title: "바닥 마감재 철거",
        description:
          "기존 바닥재의 종류와 시공 상태를 확인하고 후속 공사에 필요한 철거 범위를 정합니다.",
      },
      {
        title: "기존 시설물 보호",
        description:
          "철거하지 않는 주변 시설물과 매립 배관, 전기설비의 손상 가능성을 확인합니다.",
      },
    ],

    beforeAfter: null,

    faqs: [
      {
        q: "천장만 부분적으로 철거할 수 있나요?",
        a: "천장 구조와 설비 상태, 철거 범위를 확인한 후 작업 가능 여부를 상담합니다.",
      },
      {
        q: "벽체 철거도 가능한가요?",
        a: "벽체의 구조적 역할을 먼저 확인해야 하며 내력벽 등 구조체의 철거는 별도 안전 검토와 관련 절차가 필요합니다.",
      },
      {
        q: "부분철거 비용은 어떻게 결정되나요?",
        a: "작업 범위, 철거 대상의 종류, 주변 시설물 보호 조건, 폐기물 처리량 등에 따라 달라집니다.",
      },
    ],
  },

  restoration: {
    title: "상가·사무실 원상복구",
    keyword: "상가원상복구·사무실원상복구",

    seoDescription:
      "DH 종합철거 상가·사무실 원상복구 안내. 임대차 종료에 따른 내부철거, 시설물 정리 및 견적 상담.",

    description:
      "상가와 사무실의 계약 종료 또는 이전에 따라 기존 인테리어 철거와 원상복구가 필요한 범위를 상담합니다.",

    image: "/IMG_2382.jpeg",
    imageAlt: "상업시설 내부 철거 후 원상복구 관련 현장",

    details: [
      {
        title: "상가 원상복구",
        description:
          "임대차계약과 임대인 협의사항을 확인하여 기존 인테리어 철거 및 복구 범위를 상담합니다.",
      },
      {
        title: "사무실 원상복구",
        description:
          "기존 칸막이, 바닥, 천장과 내부 시설물 중 철거 또는 복구가 필요한 부분을 확인합니다.",
      },
      {
        title: "기존 시설물 철거",
        description:
          "임차인이 설치한 시설물과 유지해야 하는 설비를 구분하고 작업 범위를 정합니다.",
      },
      {
        title: "퇴거 일정 및 현장 정리",
        description:
          "계약 종료 일정과 건물 관리규정, 폐기물 반출 조건을 확인합니다.",
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
        a: "임대차계약서와 임대인 협의사항, 기존 시설물 상태를 기준으로 필요한 작업 범위를 확인합니다.",
      },
      {
        q: "원상복구와 철거를 함께 상담할 수 있나요?",
        a: "기존 인테리어 철거와 필요한 복구 범위를 함께 확인해 상담할 수 있습니다.",
      },
      {
        q: "퇴거 일정에 맞춰 작업할 수 있나요?",
        a: "현장 조건, 작업량과 일정에 따라 가능 여부가 달라지므로 희망 날짜를 알려주세요.",
      },
    ],
  },
} as const;

/* =====================================
   서비스 주소 확인
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

/* =====================================
   정적 페이지 생성
===================================== */

export function generateStaticParams() {
  return Object.keys(SERVICES).map((service) => ({
    service,
  }));
}

export const dynamicParams = false;

/* =====================================
   SEO 메타데이터
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
  const description = item.seoDescription;

  return {
    title: {
      absolute: title,
    },

    description,

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
      description,
      images: [
        {
          url: `${SITE_URL}${item.image}`,
          alt: item.imageAlt,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}${item.image}`],
    },
  };
}

/* =====================================
   공통 사진 컴포넌트
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
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
}

/* =====================================
   서비스 개별페이지
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
      areaServed: [
        {
          "@type": "AdministrativeArea",
          name: "경기도",
        },
        {
          "@type": "AdministrativeArea",
          name: "충청남도",
        },
        {
          "@type": "AdministrativeArea",
          name: "청주시",
        },
        {
          "@type": "AdministrativeArea",
          name: "진천군",
        },
        {
          "@type": "AdministrativeArea",
          name: "증평군",
        },
        {
          "@type": "AdministrativeArea",
          name: "음성군",
        },
      ],
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

      {/* 상단 메뉴 */}

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

              <Link
                href="/"
                className="btn btn-outline"
              >
                메인 홈페이지
              </Link>
            </div>
          </div>
        </section>

        {/* 선택한 서비스 사진 및 작업 설명 */}

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                SERVICE INFORMATION
              </span>

              <h2>{item.title} 작업 안내</h2>

              <p>
                실제 철거 현장 사진과 함께
                작업 범위와 확인사항을 안내합니다.
              </p>
            </div>

            <ServiceImage
              src={item.image}
              alt={item.imageAlt}
            />

            <div
              style={{
                marginTop: 32,
                display: "grid",
                gap: 0,
              }}
            >
              {item.details.map((detail, index) => (
                <article
                  key={detail.title}
                  style={{
                    width: "100%",
                    minWidth: 0,
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
                      color: "#666666",
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

                <h2>
                  {item.beforeAfter.title}
                </h2>

                <p>
                  철거 전후 공간 변화를
                  사진으로 비교해 보세요.
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
                    alt={`${item.beforeAfter.title} 철거 전`}
                  />
                </div>

                <div>
                  <h3>철거 후 AFTER</h3>
                  <ServiceImage
                    src={item.beforeAfter.after}
                    alt={`${item.beforeAfter.title} 철거 후`}
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 견적 안내 */}

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                ESTIMATE GUIDE
              </span>

              <h2>{item.title} 견적 안내</h2>

              <p>
                철거 면적, 폐기물 발생량,
                현장 접근성과 작업 범위에 따라
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

        {/* 서비스별 FAQ */}

        <section className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                FREQUENTLY ASKED QUESTIONS
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
                    width: "100%",
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
                      color: "#666666",
                    }}
                  >
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 상담 */}

        <section className="contact-section">
          <div className="container">
            <h2>{item.title} 견적 문의</h2>

            <p>
              현장 위치, 철거 범위,
              현장 사진과 희망 일정을
              준비해 주시면 상담에 도움이 됩니다.
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
                href="/#regions"
                className="btn btn-outline"
              >
                출장 지역 확인
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
              <p>사업자등록번호: {BUSINESS_NUMBER}</p>
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
