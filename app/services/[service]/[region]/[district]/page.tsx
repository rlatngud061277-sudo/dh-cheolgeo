
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  SITE_URL,
  COMPANY,
  OWNER,
  BUSINESS_NUMBER,
  PHONE,
  PHONE_DISPLAY,
  SERVICES,
  getLocation,
  getAllLocations,
  isServiceSlug,
  serviceRegionUrl,
  type ServiceSlug,
} from "../../../../../lib/dh-data";

type Params = {
  service: string;
  region: string;
  district: string;
};

type Props = {
  params: Promise<Params>;
};

/* =====================================
   정적 지역페이지 생성
   5개 서비스 × 57개 지역 = 285개
===================================== */

export function generateStaticParams() {
  return Object.keys(SERVICES).flatMap((service) =>
    getAllLocations().map(({ region, district }) => ({
      service,
      region,
      district,
    }))
  );
}

export const dynamicParams = false;

/* =====================================
   지역별 사진 설정

   경기: 기존 서비스 사진 유지

   충남:
   대표 IMG_2386
   철거 전 IMG_2385
   철거 후 IMG_2384

   충북:
   대표 IMG_2382
   철거 전 IMG_2382
   철거 후 IMG_2386
===================================== */

type PhotoSet = {
  main: string;
  before: string | null;
  after: string | null;
};

function getPhotos(
  service: ServiceSlug,
  region: string
): PhotoSet {
  const item = SERVICES[service];

  if (region === "chungnam") {
    return {
      main: "/IMG_2386.jpeg",
      before: "/IMG_2385.jpeg",
      after: "/IMG_2384.jpeg",
    };
  }

  if (region === "chungbuk") {
    return {
      main: "/IMG_2382.jpeg",
      before: "/IMG_2382.jpeg",
      after: "/IMG_2386.jpeg",
    };
  }

  return {
    main: item.image,
    before: item.before ?? null,
    after: item.after ?? null,
  };
}

/* =====================================
   서비스별 견적 안내
===================================== */

type EstimateGuide = {
  title: string;
  text: string;
};

const ESTIMATE_GUIDES: Record<
  ServiceSlug,
  EstimateGuide[]
> = {
  house: [
    {
      title: "주택 유형",
      text: "아파트, 빌라, 단독주택 등 건물 유형과 층수",
    },
    {
      title: "철거 범위",
      text: "주방, 욕실, 바닥, 천장 등 철거 대상",
    },
    {
      title: "공사 조건",
      text: "관리사무소 규정, 엘리베이터, 보양 및 반출 조건",
    },
    {
      title: "현장 사진",
      text: "철거할 공간 전체와 주요 시설물 사진",
    },
  ],

  commercial: [
    {
      title: "매장 업종",
      text: "음식점, 카페, 소매점 등 기존 영업 형태",
    },
    {
      title: "철거 범위",
      text: "천장, 바닥, 칸막이, 주방 시설 및 덕트",
    },
    {
      title: "임대차 조건",
      text: "임대인이 요구하는 철거 및 원상복구 범위",
    },
    {
      title: "작업 일정",
      text: "폐업일, 퇴거일, 건물 작업 가능 시간",
    },
  ],

  office: [
    {
      title: "사무실 면적",
      text: "대략적인 면적과 층수, 엘리베이터 유무",
    },
    {
      title: "철거 대상",
      text: "파티션, 칸막이, 바닥재, 천장재 등",
    },
    {
      title: "유지 설비",
      text: "철거하지 않을 전기·통신·공조 시설",
    },
    {
      title: "이전 일정",
      text: "사무실 이전일과 철거 완료 희망일",
    },
  ],

  interior: [
    {
      title: "부분철거 위치",
      text: "벽체, 바닥, 천장 등 작업이 필요한 위치",
    },
    {
      title: "철거 범위",
      text: "전체 철거인지 일부 마감재 철거인지 구분",
    },
    {
      title: "유지 시설",
      text: "보호해야 할 설비와 주변 마감재",
    },
    {
      title: "현장 사진",
      text: "철거 대상과 주변 구조가 보이는 사진",
    },
  ],

  restoration: [
    {
      title: "계약 조건",
      text: "임대차계약서상 원상복구 범위와 협의사항",
    },
    {
      title: "기존 시설",
      text: "철거 대상 인테리어와 유지해야 할 설비",
    },
    {
      title: "현장 규모",
      text: "매장 또는 사무실 면적과 건물 조건",
    },
    {
      title: "퇴거 일정",
      text: "계약 종료일과 원상복구 완료 희망일",
    },
  ],
};

/* =====================================
   SEO 제목과 설명
===================================== */

function getSeo(
  service: ServiceSlug,
  locationName: string
) {
  const item = SERVICES[service];

  return {
    title:
      `${locationName} ${item.shortTitle} | ${COMPANY}`,

    description:
      `${locationName} ${item.title} 상담. ` +
      "철거 범위, 현장 조건, 비용 견적 및 작업 일정 안내.",
  };
}

/* =====================================
   SEO 메타데이터
===================================== */

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { service, region, district } = await params;

  const location = getLocation(region, district);

  if (!isServiceSlug(service) || !location) {
    return {
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const { title, description } = getSeo(
    service,
    location.fullName
  );

  const url =
    SITE_URL +
    serviceRegionUrl(service, region, district);

  const photos = getPhotos(service, region);

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
          url: `${SITE_URL}${photos.main}`,
          alt: `${SERVICES[service].title} 작업 참고 사진`,
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}${photos.main}`],
    },
  };
}

/* =====================================
   사진 컴포넌트
===================================== */

function Photo({
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
   지역별 서비스 개별페이지
===================================== */

export default async function RegionServicePage({
  params,
}: Props) {
  const { service, region, district } = await params;

  const location = getLocation(region, district);

  if (!isServiceSlug(service) || !location) {
    notFound();
  }

  const item = SERVICES[service];

  const locationName = location.fullName;

  const title =
    `${locationName} ${item.title}`;

  const pageUrl =
    SITE_URL +
    serviceRegionUrl(service, region, district);

  const { description } = getSeo(
    service,
    locationName
  );

  const estimateItems = ESTIMATE_GUIDES[service];

  const photos = getPhotos(service, region);

  /* =====================================
     구조화 데이터
  ===================================== */

  const schema = [
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
          item: `${SITE_URL}/services/${service}`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: title,
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: title,
      description,
      serviceType: item.shortTitle,
      url: pageUrl,
      provider: {
        "@type": "Organization",
        name: COMPANY,
        url: SITE_URL,
        telephone: PHONE_DISPLAY,
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name: locationName,
      },
    },
  ];

  /* =====================================
     FAQ
  ===================================== */

  const faqs = [
    {
      question:
        `${locationName} ${item.shortTitle} 견적은 어떻게 받나요?`,
      answer:
        "현장 주소, 철거 범위, 면적, 사진과 희망 일정을 준비해 전화로 문의해 주세요. 현장 조건을 확인한 뒤 견적을 안내합니다.",
    },
    {
      question:
        `${item.shortTitle} 비용은 어떻게 결정되나요?`,
      answer:
        "작업 면적, 철거 대상, 폐기물 처리량, 장비 접근성, 건물 관리규정과 현장 조건에 따라 달라집니다.",
    },
    {
      question:
        `${locationName} 출장 작업이 가능한가요?`,
      answer:
        "상담 대상 지역에 포함됩니다. 실제 작업 가능 여부는 현장 위치, 작업 범위와 일정에 따라 확인합니다.",
    },
    {
      question:
        `${item.shortTitle} 작업 전에 무엇을 확인해야 하나요?`,
      answer:
        "철거할 시설물과 유지할 설비를 구분하고, 작업 가능 시간과 폐기물 반출 조건을 확인하는 것이 좋습니다.",
    },
  ];

  return (
    <>
      {/* 구조화 데이터 */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* 상단 메뉴 */}

      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand">
            <span className="brand-mark">DH</span>
            종합철거
          </Link>

          <nav className="nav-links">
            <Link href="/">홈</Link>

            <Link href={`/services/${service}`}>
              {item.shortTitle}
            </Link>

            <a href="#estimate">견적 안내</a>
            <a href="#contact">전화 상담</a>
          </nav>
        </div>
      </header>

      <main>
        {/* 메인 소개 */}

        <section className="hero">
          <div className="container">
            <span className="hero-label">
              DH DEMOLITION & REMOVAL
            </span>

            <h1>
              {locationName} {item.shortTitle}
              <br />
              <strong>{COMPANY}</strong>
            </h1>

            <p>
              {locationName}에서 {item.title}을
              알아보고 계신다면 현장 상황과
              철거 범위를 먼저 확인해 주세요.
            </p>

            <p>{item.description}</p>

            <div className="hero-actions">
              <a
                href={`tel:${PHONE}`}
                className="btn btn-primary"
              >
                전화 상담 {PHONE_DISPLAY}
              </a>

              <Link
                href={`/services/${service}#regions`}
                className="btn btn-outline"
              >
                다른 지역 확인
              </Link>
            </div>
          </div>
        </section>

        {/* 서비스 작업 안내 */}

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                SERVICE INFORMATION
              </span>

              <h2>
                {locationName} {item.title} 작업 안내
              </h2>

              <p>
                {item.title}을 진행할 때
                확인해야 할 작업 범위와
                현장 조건을 안내합니다.
              </p>
            </div>

            <Photo
              src={photos.main}
              alt={`${item.title} 작업 참고 사진`}
            />

            <p
              style={{
                marginTop: 12,
                fontSize: 13,
                color: "#666",
              }}
            >
              위 사진은 작업 참고 사진이며,
              해당 지역에서 촬영한 사진이라는
              의미는 아닙니다.
            </p>

            <div style={{ marginTop: 28 }}>
              {item.work.map((work, index) => (
                <article
                  key={work.title}
                  style={{
                    padding: "22px 0",
                    borderBottom:
                      "1px solid #e5e7eb",
                  }}
                >
                  <span className="section-tag">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <h3>{work.title}</h3>

                  <p>{work.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 철거 전후 사진 */}

        {photos.before && photos.after && (
          <section className="section section-alt">
            <div className="container">
              <div className="section-heading">
                <span className="section-tag">
                  BEFORE & AFTER
                </span>

                <h2>
                  {item.title} 철거 전후 참고 사진
                </h2>

                <p>
                  철거 작업 참고 사진입니다.
                  해당 지역에서 촬영한 사진이라는
                  의미는 아닙니다.
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
                  <h3>철거 전</h3>

                  <Photo
                    src={photos.before}
                    alt="철거 전 참고 사진"
                  />
                </div>

                <div>
                  <h3>철거 후</h3>

                  <Photo
                    src={photos.after}
                    alt="철거 후 참고 사진"
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 견적 안내 */}

        <section
          id="estimate"
          className="section"
          style={{ scrollMarginTop: 90 }}
        >
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                ESTIMATE GUIDE
              </span>

              <h2>
                {locationName} {item.shortTitle} 견적 안내
              </h2>

              <p>
                현장에 맞는 견적 상담을 위해
                아래 정보를 준비해 주세요.
              </p>
            </div>

            <div className="card-grid">
              {estimateItems.map((info) => (
                <article
                  className="card"
                  key={info.title}
                >
                  <div className="card-body">
                    <h3>{info.title}</h3>
                    <p>{info.text}</p>
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

              <h2>
                {locationName} {item.shortTitle}
                자주 묻는 질문
              </h2>
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
                  style={{
                    padding: 20,
                    border: "1px solid #e5e7eb",
                    borderRadius: 12,
                    background: "#fff",
                  }}
                >
                  <summary
                    style={{
                      cursor: "pointer",
                      fontWeight: 800,
                    }}
                  >
                    {faq.question}
                  </summary>

                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 전화 상담 */}

        <section
          id="contact"
          className="contact-section"
        >
          <div className="container">
            <h2>
              {locationName} {item.shortTitle}
              견적 문의
            </h2>

            <p>
              현장 주소와 철거 범위,
              사진과 희망 일정을 알려주세요.
            </p>

            <div className="contact-actions">
              <a
                href={`tel:${PHONE}`}
                className="btn btn-primary"
              >
                전화 상담 {PHONE_DISPLAY}
              </a>

              <Link
                href={`/services/${service}#regions`}
                className="btn btn-outline"
              >
                같은 서비스 다른 지역
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* 하단 업체 정보 */}

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <h3>{COMPANY}</h3>

            <div className="footer-info">
              <p>대표자: {OWNER}</p>

              <p>
                사업자등록번호: {BUSINESS_NUMBER}
              </p>

              <p>
                {locationName} {item.title} 상담
              </p>

              <p>
                전화:{" "}
                <a href={`tel:${PHONE}`}>
                  {PHONE_DISPLAY}
                </a>
              </p>
            </div>
          </div>

          <div className="footer-info">
            <p>
              © {new Date().getFullYear()} {COMPANY}.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
