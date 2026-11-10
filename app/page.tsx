
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  SITE_URL,
  COMPANY,
  OWNER,
  BUSINESS_NUMBER,
  PHONE,
  PHONE_DISPLAY,
  SERVICES,
  REGIONS,
  serviceRegionUrl,
  type ServiceSlug,
} from "../lib/dh-data";

const PHONE_LINK = `tel:${PHONE}`;

const DESCRIPTION =
  "DH 종합철거는 경기·충남·충북 지역의 주택·아파트 철거, 상가·매장 철거, 사무실 철거, 내부·부분 철거 및 원상복구를 상담합니다.";

export const metadata: Metadata = {
  title: {
    absolute: "DH 종합철거 | 경기·충남·충북 철거업체",
  },
  description: DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: COMPANY,
    url: SITE_URL,
    title: "DH 종합철거 | 경기·충남·충북 철거업체",
    description: DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/IMG_1102.png`,
        alt: COMPANY,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DH 종합철거 | 경기·충남·충북 철거업체",
    description: DESCRIPTION,
    images: [`${SITE_URL}/IMG_1102.png`],
  },
};

/* =====================================
   메인 서비스 정보
===================================== */

const SERVICE_CARDS: {
  slug: ServiceSlug;
  desc: string;
}[] = [
  {
    slug: "house",
    desc: "주택 및 아파트 리모델링을 위한 주방, 벽체, 천장, 바닥 등 내부 시설물 철거 상담.",
  },
  {
    slug: "commercial",
    desc: "음식점과 상가의 기존 인테리어, 주방 설비 및 마감재 철거 상담.",
  },
  {
    slug: "office",
    desc: "사무실 이전과 리모델링을 위한 칸막이, 천장 및 내부 시설물 철거 상담.",
  },
  {
    slug: "interior",
    desc: "필요한 범위의 천장, 벽체, 바닥 및 내부 마감재 부분 철거 상담.",
  },
  {
    slug: "restoration",
    desc: "임대차 계약 종료와 매장 이전 등에 따른 철거 및 원상복구 상담.",
  },
];

/* =====================================
   철거 전후 사진
===================================== */

const BEFORE_AFTER = [
  {
    title: "주택·아파트 내부 철거",
    before: "/IMG_2381.jpeg",
    after: "/IMG_2380.jpeg",
  },
  {
    title: "상업공간 내부 철거",
    before: "/IMG_2383.jpeg",
    after: "/IMG_2382.jpeg",
  },
];

/* =====================================
   견적 안내
===================================== */

const ESTIMATE_STEPS = [
  {
    title: "01. 현장 위치",
    desc: "철거 현장의 주소와 건물 유형을 알려주세요.",
  },
  {
    title: "02. 철거 범위",
    desc: "철거 대상과 면적, 필요한 작업을 알려주세요.",
  },
  {
    title: "03. 현장 사진",
    desc: "현장 사진과 희망 작업 날짜를 준비해 주세요.",
  },
];

const fullWidthStyle: CSSProperties = {
  width: "100%",
  minWidth: 0,
  maxWidth: "100%",
};

/* =====================================
   메인 홈페이지
===================================== */

export default function Home() {
  const regionEntries = Object.entries(REGIONS);

  const totalDistricts = regionEntries.reduce(
    (total, [, region]) =>
      total + Object.keys(region.districts).length,
    0
  );

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: COMPANY,
      url: SITE_URL,
      logo: `${SITE_URL}/IMG_1102.png`,
      telephone: PHONE_DISPLAY,
      description: DESCRIPTION,
      areaServed: regionEntries.map(([, region]) => ({
        "@type": "AdministrativeArea",
        name: region.name,
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: COMPANY,
      url: SITE_URL,
      description: DESCRIPTION,
      inLanguage: "ko-KR",
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

          <nav
            className="nav-links"
            aria-label="주요 메뉴"
          >
            <a href="#services">철거 서비스</a>
            <a href="#cases">철거 사례</a>
            <a href="#regions">출장 지역</a>
            <a href="#contact">견적 문의</a>
          </nav>
        </div>
      </header>

      <main>
        {/* 메인 소개 */}

        <section className="hero">
          <div className="container hero-inner">
            <div style={fullWidthStyle}>
              <span className="hero-label">
                DH DEMOLITION & REMOVAL
              </span>

              <h1>
                주택부터 상가까지
                <br />
                <strong>DH 종합철거</strong>
              </h1>

              <p>
                주택·아파트·상가·사무실 철거,
                내부철거 및 원상복구 상담
              </p>

              <p>
                경기·충남·충북 전역
                <br />
                총 {totalDistricts}개 시·군 지역별
                철거 상담 안내
              </p>

              <div className="hero-actions">
                <a
                  href={PHONE_LINK}
                  className="btn btn-primary"
                >
                  전화 상담 {PHONE_DISPLAY}
                </a>

                <a
                  href="#services"
                  className="btn btn-outline"
                >
                  철거 서비스 보기
                </a>
              </div>
            </div>

            <div className="hero-image">
              <Image
                src="/IMG_1102.png"
                alt="DH 종합철거 공식 로고"
                width={1000}
                height={750}
                priority
                style={{
                  width: "100%",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </section>

        {/* 철거 서비스 */}

        <section
          id="services"
          className="section"
        >
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                OUR SERVICES
              </span>

              <h2>DH 종합철거 서비스</h2>

              <p>
                철거 대상과 현장 조건에 맞는
                작업 범위를 확인하고 상담합니다.
              </p>
            </div>

            <div className="card-grid">
              {SERVICE_CARDS.map((service) => {
                const item = SERVICES[service.slug];

                return (
                  <article
                    className="card"
                    key={service.slug}
                  >
                    <Image
                      src={item.image}
                      alt={`${item.title} 관련 현장 사진`}
                      width={800}
                      height={600}
                      className="card-image"
                      style={{
                        objectFit: "cover",
                      }}
                    />

                    <div className="card-body">
                      <h3>{item.title}</h3>

                      <p>{service.desc}</p>

                      <Link
                        href={`/services/${service.slug}`}
                        className="card-link"
                      >
                        서비스 자세히 보기 →
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* 철거 전후 사진 */}

        <section
          id="cases"
          className="section section-alt"
        >
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                BEFORE & AFTER
              </span>

              <h2>철거 전후 사진</h2>

              <p>
                철거 전후 현장 상태를
                사진으로 확인할 수 있습니다.
              </p>
            </div>

            <div className="card-grid">
              {BEFORE_AFTER.map((item) => (
                <article
                  className="card"
                  key={item.title}
                >
                  <div className="card-body">
                    <h3>{item.title}</h3>
                  </div>

                  <div style={{ padding: 16 }}>
                    <p
                      style={{
                        fontWeight: 800,
                      }}
                    >
                      철거 전
                    </p>

                    <Image
                      src={item.before}
                      alt={`${item.title} 철거 전`}
                      width={800}
                      height={600}
                      className="card-image"
                    />

                    <p
                      style={{
                        fontWeight: 800,
                        marginTop: 20,
                      }}
                    >
                      철거 후
                    </p>

                    <Image
                      src={item.after}
                      alt={`${item.title} 철거 후`}
                      width={800}
                      height={600}
                      className="card-image"
                    />
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
                ESTIMATE
              </span>

              <h2>철거 견적 상담 안내</h2>

              <p>
                현장 조건과 철거 범위에 따라
                견적이 달라질 수 있습니다.
              </p>
            </div>

            <div className="card-grid">
              {ESTIMATE_STEPS.map((step) => (
                <article
                  className="card"
                  key={step.title}
                >
                  <div className="card-body">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 경기·충남·충북 전체 지역 */}

        <section
          id="regions"
          className="section section-alt"
        >
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                SERVICE AREAS
              </span>

              <h2>지역별 철거 상담</h2>

              <p>
                경기 31개, 충남 15개,
                충북 11개 시·군의
                철거 상담 지역을 안내합니다.
              </p>

              <p>
                지역별 철거 서비스는
                해당 서비스 페이지에서
                선택할 수 있습니다.
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
                      marginBottom: 40,
                    }}
                  >
                    <h3
                      style={{
                        marginBottom: 16,
                      }}
                    >
                      {region.name} 철거
                      {" "}
                      <span
                        style={{
                          fontSize: 14,
                          color: "#666",
                          fontWeight: 500,
                        }}
                      >
                        ({districts.length}개 지역)
                      </span>
                    </h3>

                    <div className="region-grid">
                      {districts.map(
                        ([districtSlug, name]) => (
                          <Link
                            key={districtSlug}
                            href={serviceRegionUrl(
                              "house",
                              regionSlug,
                              districtSlug
                            )}
                            className="region-link"
                            title={`${region.name} ${name} 아파트 철거`}
                          >
                            {name} 아파트 철거
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

        {/* 전화 상담 */}

        <section
          id="contact"
          className="contact-section"
        >
          <div className="container">
            <h2>DH 종합철거 견적 문의</h2>

            <p>
              현장 위치, 철거 범위, 사진과
              희망 일정을 준비해 주시면
              상담에 도움이 됩니다.
            </p>

            <div className="contact-actions">
              <a
                href={PHONE_LINK}
                className="btn btn-primary"
              >
                전화 상담 {PHONE_DISPLAY}
              </a>

              <a
                href="#regions"
                className="btn btn-outline"
              >
                출장 지역 확인
              </a>
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
                주택·아파트·상가·사무실 철거
                및 원상복구
              </p>

              <p>
                경기·충남·충북 지역 철거 상담
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
              © {new Date().getFullYear()} {COMPANY}.
            </p>

            <p>All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
