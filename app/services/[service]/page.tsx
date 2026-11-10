
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
  isServiceSlug,
  serviceRegionUrl,
} from "../../../lib/dh-data";

type Props = {
  params: Promise<{ service: string }>;
};

/* =====================================
   5개 서비스 정적 페이지
===================================== */

export function generateStaticParams() {
  return Object.keys(SERVICES).map((service) => ({
    service,
  }));
}

export const dynamicParams = false;

/* =====================================
   서비스별 SEO 메타데이터
===================================== */

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
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
  const url = `${SITE_URL}/services/${service}`;

  const title = `${item.title} | 경기·충남·충북 ${COMPANY}`;

  const description =
    `${COMPANY} ${item.title} 상담. ` +
    `${item.description} ` +
    "경기도·충청남도·충청북도 지역별 철거 견적 안내.";

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
          url: `${SITE_URL}${item.image}`,
          alt: `${item.title} 현장 참고 사진`,
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
   서비스별 메인 페이지
===================================== */

export default async function ServicePage({
  params,
}: Props) {
  const { service } = await params;

  if (!isServiceSlug(service)) {
    notFound();
  }

  const item = SERVICES[service];

  const pageUrl = `${SITE_URL}/services/${service}`;

  const regionEntries = Object.entries(REGIONS);

  const totalDistricts = regionEntries.reduce(
    (total, [, region]) =>
      total + Object.keys(region.districts).length,
    0
  );

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
          item: pageUrl,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: item.title,
      description: item.description,
      serviceType: item.shortTitle,
      url: pageUrl,
      provider: {
        "@type": "Organization",
        name: COMPANY,
        url: SITE_URL,
        telephone: PHONE_DISPLAY,
      },
      areaServed: regionEntries.map(([, region]) => ({
        "@type": "AdministrativeArea",
        name: region.name,
      })),
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

      {/* =====================================
          상단 메뉴
      ===================================== */}

      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand">
            <span className="brand-mark">DH</span>
            종합철거
          </Link>

          <nav className="nav-links">
            <Link href="/">홈</Link>
            <Link href="/#services">
              철거 서비스
            </Link>
            <a href="#regions">지역 선택</a>
            <a href="#contact">견적 문의</a>
          </nav>
        </div>
      </header>

      <main>
        {/* =====================================
            메인 소개
        ===================================== */}

        <section className="hero">
          <div className="container">
            <span className="hero-label">
              DH DEMOLITION & REMOVAL
            </span>

            <h1>{item.title}</h1>

            <p>{item.description}</p>

            <p>
              경기·충남·충북 전역
              <br />
              총 {totalDistricts}개 시·군 지역별
              철거 상담 안내
            </p>

            <div className="hero-actions">
              <a
                href={`tel:${PHONE}`}
                className="btn btn-primary"
              >
                전화 상담 {PHONE_DISPLAY}
              </a>

              <a
                href="#regions"
                className="btn btn-outline"
              >
                지역 선택하기
              </a>
            </div>
          </div>
        </section>

        {/* =====================================
            서비스 작업 안내
        ===================================== */}

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                SERVICE INFORMATION
              </span>

              <h2>{item.title} 작업 안내</h2>

              <p>{item.description}</p>
            </div>

            <Photo
              src={item.image}
              alt={`${item.title} 현장 참고 사진`}
            />

            <p
              style={{
                marginTop: 12,
                fontSize: 13,
                color: "#666",
              }}
            >
              위 사진은 해당 철거 서비스의 참고
              사진입니다. 모든 지역에서 촬영한
              사진을 의미하지는 않습니다.
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

        {/* =====================================
            철거 전후 사진
        ===================================== */}

        {item.before && item.after && (
          <section className="section section-alt">
            <div className="container">
              <div className="section-heading">
                <span className="section-tag">
                  BEFORE & AFTER
                </span>

                <h2>{item.title} 철거 전후</h2>

                <p>
                  동일 서비스와 관련된 참고
                  현장의 철거 전후 사진입니다.
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
                    alt={`${item.title} 철거 전 참고 사진`}
                  />
                </div>

                <div>
                  <h3>철거 후</h3>

                  <Photo
                    src={item.after}
                    alt={`${item.title} 철거 후 참고 사진`}
                  />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* =====================================
            경기·충남·충북 지역 선택
        ===================================== */}

        <section
          id="regions"
          className="section"
          style={{
            scrollMarginTop: 90,
          }}
        >
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                SERVICE AREAS
              </span>

              <h2>
                {item.title} 지역 선택
              </h2>

              <p>
                경기·충남·충북 총
                {" "}{totalDistricts}개 지역에서
                상담 지역을 선택할 수 있습니다.
                지역 버튼을 누르면 해당 지역의
                {item.title} 전용페이지로 이동합니다.
              </p>
            </div>

            {regionEntries.map(
              ([regionSlug, region]) => {
                const districts = Object.entries(
                  region.districts
                );

                return (
                  <div
                    key={regionSlug}
                    style={{
                      marginBottom: 38,
                    }}
                  >
                    <h3
                      style={{
                        marginBottom: 16,
                      }}
                    >
                      {region.name}
                      {" "}
                      <span
                        style={{
                          fontSize: 14,
                          fontWeight: 500,
                          color: "#666",
                        }}
                      >
                        ({districts.length}개 지역)
                      </span>
                    </h3>

                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns:
                          "repeat(auto-fit, minmax(min(100%, 145px), 1fr))",
                        gap: 10,
                      }}
                    >
                      {districts.map(
                        ([districtSlug, name]) => (
                          <Link
                            key={districtSlug}
                            href={serviceRegionUrl(
                              service,
                              regionSlug,
                              districtSlug
                            )}
                            title={`${region.name} ${name} ${item.title}`}
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              minHeight: 52,
                              padding: "12px 8px",
                              border:
                                "1px solid #e5e7eb",
                              borderRadius: 10,
                              color: "#222",
                              background: "#fff",
                              fontSize: 14,
                              fontWeight: 700,
                              textAlign: "center",
                              textDecoration: "none",
                              wordBreak: "keep-all",
                            }}
                          >
                            {name}
                            {" "}
                            {item.shortTitle}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </section>

        {/* =====================================
            견적 안내
        ===================================== */}

        <section className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                ESTIMATE
              </span>

              <h2>{item.title} 견적 안내</h2>

              <p>
                작업 범위와 현장 조건에 따라
                견적이 달라질 수 있습니다.
              </p>
            </div>

            <div className="card-grid">
              {[
                {
                  title: "현장 주소",
                  description:
                    "철거할 현장의 위치와 건물 유형",
                },
                {
                  title: "철거 범위",
                  description:
                    "철거 대상과 면적, 유지할 시설물",
                },
                {
                  title: "현장 사진",
                  description:
                    "전체 공간과 철거 대상 사진",
                },
                {
                  title: "희망 일정",
                  description:
                    "작업 희망일과 현장 출입 조건",
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

        {/* =====================================
            전화 상담
        ===================================== */}

        <section
          id="contact"
          className="contact-section"
        >
          <div className="container">
            <h2>{item.title} 견적 문의</h2>

            <p>
              현장 주소와 철거 범위를 알려주시면
              작업 가능 여부를 상담합니다.
            </p>

            <div className="contact-actions">
              <a
                href={`tel:${PHONE}`}
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

      {/* =====================================
          하단 업체 정보
      ===================================== */}

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
