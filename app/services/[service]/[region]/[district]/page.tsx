
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
  REGIONS,
  getLocation,
  getAllLocations,
  isServiceSlug,
  serviceRegionUrl,
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
   5개 서비스 × 42개 지역
===================================== */

export function generateStaticParams() {
  return Object.keys(SERVICES).flatMap((service) =>
    getAllLocations().map((location) => ({
      service,
      region: location.region,
      district: location.district,
    }))
  );
}

export const dynamicParams = false;

/* =====================================
   지역 + 서비스 SEO
===================================== */

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { service, region, district } =
    await params;

  const location = getLocation(region, district);

  if (!isServiceSlug(service) || !location) {
    return { robots: { index: false } };
  }

  const item = SERVICES[service];
  const title =
    `${location.fullName} ${item.shortTitle} | ${COMPANY}`;

  const description =
    `${location.fullName} ${item.title} 전문 상담. ` +
    "철거 범위, 현장 사진 및 견적 문의 안내.";

  const url =
    SITE_URL +
    serviceRegionUrl(service, region, district);

  return {
    title: { absolute: title },
    description,
    alternates: { canonical: url },
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
          url: `${SITE_URL}${item.image}`,
          alt: `${location.fullName} ${item.title}`,
        },
      ],
    },
  };
}

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
        background: "#eee",
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
   지역 전용페이지
===================================== */

export default async function RegionServicePage({
  params,
}: Props) {
  const { service, region, district } =
    await params;

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
      description: item.description,
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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

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
        {/* 해당 지역 + 해당 서비스만 표시 */}

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
              {locationName} {item.description}
            </p>

            <p>
              현장 위치와 철거 범위를 확인하여
              작업 가능 여부와 견적을 안내합니다.
            </p>

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

        {/* 해당 서비스 사진 */}

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                SERVICE INFORMATION
              </span>

              <h2>{title} 작업 안내</h2>

              <p>
                {locationName}에서 {item.title}을
                문의할 때 확인해야 하는 작업
                범위와 현장 조건을 안내합니다.
              </p>
            </div>

            <Photo
              src={item.image}
              alt={`${item.title} 관련 철거 현장 사진`}
            />

            <p
              style={{
                marginTop: 12,
                fontSize: 13,
                color: "#666",
              }}
            >
              서비스 관련 현장 참고 사진입니다.
              해당 지역에서 촬영한 사진을
              의미하지는 않습니다.
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

                  <h3>
                    {locationName} {work.title}
                  </h3>

                  <p>{work.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 같은 서비스의 철거 전후만 표시 */}

        {item.before && item.after && (
          <section className="section section-alt">
            <div className="container">
              <div className="section-heading">
                <span className="section-tag">
                  BEFORE & AFTER
                </span>

                <h2>{item.title} 철거 전후</h2>

                <p>
                  동일 서비스의 참고 현장
                  전후 사진입니다.
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
                    src={item.before}
                    alt={`${item.title} 철거 전`}
                  />
                </div>

                <div>
                  <h3>철거 후</h3>
                  <Photo
                    src={item.after}
                    alt={`${item.title} 철거 후`}
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* 견적 체크리스트 */}

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
                {locationName} {item.shortTitle}
                견적 안내
              </h2>

              <p>
                정확한 작업 범위 확인을 위해
                아래 정보를 준비해 주세요.
              </p>
            </div>

            <div className="card-grid">
              {[
                {
                  title: "현장 위치",
                  description:
                    `${locationName} 내 현장 주소와 건물 유형`,
                },
                {
                  title: "철거 범위",
                  description:
                    "철거할 시설물과 대략적인 면적",
                },
                {
                  title: "현장 조건",
                  description:
                    "주차, 엘리베이터, 작업 가능 시간과 폐기물 반출 조건",
                },
                {
                  title: "현장 사진",
                  description:
                    "전체 공간과 철거 대상 시설물 사진",
                },
                {
                  title: "희망 일정",
                  description:
                    "작업 희망일과 완료가 필요한 날짜",
                },
              ].map((info) => (
                <article
                  className="card"
                  key={info.title}
                >
                  <div className="card-body">
                    <h3>{info.title}</h3>
                    <p>{info.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 지역 전용 FAQ */}

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
              <details
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
                  {locationName} {item.shortTitle}
                  견적은 어떻게 문의하나요?
                </summary>

                <p>
                  현장 주소, 철거 범위, 면적,
                  사진과 희망 일정을 준비해
                  전화로 문의해 주세요.
                </p>
              </details>

              <details
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
                  철거 비용은 어떻게 결정되나요?
                </summary>

                <p>
                  작업 면적, 철거 대상,
                  폐기물 처리량, 장비 접근성과
                  현장 조건에 따라 달라집니다.
                </p>
              </details>

              <details
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
                  {locationName} 출장 작업이 가능한가요?
                </summary>

                <p>
                  출장 상담 대상 지역이며
                  실제 작업 가능 여부는 현장 위치,
                  작업 범위와 일정에 따라 확인합니다.
                </p>
              </details>
            </div>
          </div>
        </section>

        {/* 다른 카테고리 연결 없음 */}

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
              © {new Date().getFullYear()}{" "}
              {COMPANY}.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
