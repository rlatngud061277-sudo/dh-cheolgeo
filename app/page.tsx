
import type { Metadata } from "next";
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

/* =====================================
   SEO
===================================== */

export const metadata: Metadata = {
  title: {
    absolute:
      "DH 종합철거 | 주택·아파트·상가·사무실 철거 전문",
  },
  description:
    "DH 종합철거는 주택·아파트 철거, 상가 철거, 사무실 철거, 내부철거 및 원상복구 상담을 제공합니다. 경기·충남·충북 지역 철거 견적 문의.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title:
      "DH 종합철거 | 철거부터 원상복구까지",
    description:
      "철거 범위 검토부터 현장 조건 확인, 철거 작업과 폐기물 반출까지. DH 종합철거.",
    url: SITE_URL,
    siteName: COMPANY,
    locale: "ko_KR",
    type: "website",
    images: [
      {
        url: `${SITE_URL}/IMG_2382.jpeg`,
        alt: "DH 종합철거 철거 작업 참고 사진",
      },
    ],
  },
};

/* =====================================
   기본 데이터
===================================== */

const SERVICE_KEYS = Object.keys(
  SERVICES
) as ServiceSlug[];

const SERVICE_DESCRIPTIONS: Record<
  ServiceSlug,
  string
> = {
  house:
    "아파트·빌라·단독주택의 주방, 욕실, 바닥, 천장 등 내부 철거",
  commercial:
    "음식점·카페·매장 등의 시설물 철거와 폐업 및 퇴거 관련 작업",
  office:
    "사무실 칸막이, 파티션, 천장재, 바닥재 및 내부 시설 철거",
  interior:
    "필요한 부분만 범위를 정해 진행하는 내부·부분 철거",
  restoration:
    "임대차 종료와 공간 재사용을 위한 철거 및 원상복구",
};

const SERVICE_NUMBERS: Record<
  ServiceSlug,
  string
> = {
  house: "01",
  commercial: "02",
  office: "03",
  interior: "04",
  restoration: "05",
};

const PROCESS = [
  {
    number: "01",
    title: "현장 상담",
    description:
      "철거 위치, 면적, 건물 유형과 희망 일정을 확인합니다.",
  },
  {
    number: "02",
    title: "작업 범위 검토",
    description:
      "철거 대상과 유지할 설비, 반출 동선 및 현장 조건을 검토합니다.",
  },
  {
    number: "03",
    title: "견적 및 일정 협의",
    description:
      "작업 조건에 맞춰 견적과 진행 일정을 안내합니다.",
  },
  {
    number: "04",
    title: "철거 및 정리",
    description:
      "협의된 작업 범위에 따라 철거와 현장 정리를 진행합니다.",
  },
];

const CHECKLIST = [
  "철거 대상과 유지할 시설물 구분",
  "건물 관리규정 및 작업 가능 시간",
  "엘리베이터·계단·폐기물 반출 동선",
  "전기·가스·수도 등 설비 관련 사항",
  "현장 사진 및 작업 희망 일정",
];

const REGIONS_LIST = Object.entries(
  REGIONS
).map(([slug, region]) => ({
  slug,
  name: region.name,
  districts: Object.entries(region.districts).map(
    ([districtSlug, districtName]) => ({
      slug: districtSlug,
      name: districtName,
    })
  ),
}));

/* =====================================
   공통
===================================== */

function ArrowIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}

function SectionTitle({
  eyebrow,
  title,
  description,
  light = false,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
}) {
  return (
    <div
      className={`section-heading ${
        light ? "heading-light" : ""
      }`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

/* =====================================
   메인 홈페이지
===================================== */

export default function HomePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: COMPANY,
    url: SITE_URL,
    telephone: PHONE_DISPLAY,
    description:
      "주택·아파트·상가·사무실 철거 및 원상복구 상담",
    areaServed: REGIONS_LIST.map(
      (region) => region.name
    ),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "철거 서비스",
      itemListElement: SERVICE_KEYS.map(
        (key) => ({
          "@type": "OfferCatalog",
          name: SERVICES[key].title,
          url: `${SITE_URL}/services/${key}`,
        })
      ),
    },
  };

  return (
    <div className="dh-home">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      {/* ==============================
          HEADER
      ============================== */}

      <header className="dh-header">
        <div className="wrap header-inner">
          <Link href="/" className="logo">
            <span className="logo-symbol">DH</span>
            <span className="logo-text">
              <strong>종합철거</strong>
              <small>DEMOLITION SPECIALIST</small>
            </span>
          </Link>

          <nav className="desktop-nav">
            <a href="#services">시공 분야</a>
            <a href="#projects">시공 사례</a>
            <a href="#process">진행 절차</a>
            <a href="#regions">시공 지역</a>
          </nav>

          <a
            href={`tel:${PHONE}`}
            className="header-call"
          >
            <span>견적 상담</span>
            <strong>{PHONE_DISPLAY}</strong>
          </a>
        </div>
      </header>

      <main>
        {/* ==============================
            HERO
        ============================== */}

        <section className="hero">
          <div className="hero-image">
            <Image
              src="/IMG_2383.jpeg"
              alt="철거 작업 대상 실내 공간 참고 사진"
              fill
              priority
              sizes="100vw"
              style={{ objectFit: "cover" }}
            />
          </div>

          <div className="hero-overlay" />

          <div className="wrap hero-content">
            <div className="hero-label">
              <span className="label-line" />
              DH DEMOLITION
            </div>

            <h1>
              철거의 시작부터
              <br />
              <span>마무리까지.</span>
            </h1>

            <p className="hero-lead">
              주택·아파트·상가·사무실 철거
              <br />
              공간에 맞는 철거 계획과 견적 상담
            </p>

            <p className="hero-description">
              철거는 단순히 부수는 작업이 아닙니다.
              철거 범위와 현장 조건을 정확히 확인하고,
              유지할 시설물과 작업 동선을 고려하는
              과정이 중요합니다.
            </p>

            <div className="hero-buttons">
              <a
                href={`tel:${PHONE}`}
                className="btn btn-orange"
              >
                전화로 견적 문의
                <ArrowIcon />
              </a>

              <a
                href="#services"
                className="btn btn-transparent"
              >
                시공 분야 살펴보기
                <ArrowIcon />
              </a>
            </div>

            <div className="hero-bottom">
              <div>
                <strong>RESIDENTIAL</strong>
                <span>주택·아파트 철거</span>
              </div>
              <div>
                <strong>COMMERCIAL</strong>
                <span>상가·사무실 철거</span>
              </div>
              <div>
                <strong>RESTORATION</strong>
                <span>원상복구</span>
              </div>
            </div>
          </div>
        </section>

        {/* ==============================
            INTRO
        ============================== */}

        <section className="intro-section">
          <div className="wrap intro-grid">
            <div className="intro-left">
              <span className="eyebrow">
                ABOUT DH DEMOLITION
              </span>

              <h2>
                철거는
                <br />
                <span>계획부터 달라야</span>
                <br />
                합니다.
              </h2>
            </div>

            <div className="intro-right">
              <p className="intro-emphasis">
                공간마다 구조가 다르고,
                철거해야 할 범위도 다릅니다.
              </p>

              <p>
                DH 종합철거는 주택, 아파트,
                상가, 사무실 등 다양한 공간의
                철거 및 원상복구 상담을 제공합니다.
              </p>

              <p>
                철거 대상, 유지 시설, 작업 가능
                시간과 폐기물 반출 조건까지
                확인하여 현장에 맞는 작업 방향을
                안내합니다.
              </p>

              <a
                href={`tel:${PHONE}`}
                className="text-link"
              >
                현장 견적 상담하기
                <ArrowIcon />
              </a>
            </div>
          </div>
        </section>

        {/* ==============================
            SERVICES
        ============================== */}

        <section
          className="services-section"
          id="services"
        >
          <div className="wrap">
            <SectionTitle
              eyebrow="OUR SERVICES"
              title="철거 시공 분야"
              description="공간 유형과 철거 목적에 따라 필요한 작업 범위를 확인해 보세요."
            />

            <div className="service-grid">
              {SERVICE_KEYS.map((key) => {
                const service = SERVICES[key];

                return (
                  <Link
                    key={key}
                    href={`/services/${key}`}
                    className="service-card"
                  >
                    <div className="service-image">
                      <Image
                        src={service.image}
                        alt={`${service.title} 참고 사진`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        style={{
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <div className="service-shade" />

                    <div className="service-top">
                      <span>
                        {SERVICE_NUMBERS[key]}
                      </span>
                      <span className="service-arrow">
                        <ArrowIcon />
                      </span>
                    </div>

                    <div className="service-info">
                      <h3>{service.title}</h3>
                      <p>
                        {SERVICE_DESCRIPTIONS[key]}
                      </p>
                      <span className="service-more">
                        자세히 보기
                        <ArrowIcon />
                      </span>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ==============================
            WHY DH
        ============================== */}

        <section className="strength-section">
          <div className="wrap">
            <SectionTitle
              eyebrow="WORK PRINCIPLES"
              title="현장 조건을 먼저 확인합니다"
              description="철거 전 확인해야 할 요소를 검토하여 작업 범위와 견적을 안내합니다."
            />

            <div className="strength-grid">
              <article>
                <span className="strength-number">
                  01
                </span>
                <h3>철거 범위 확인</h3>
                <p>
                  철거할 시설물과 남겨야 할
                  시설물을 구분하여 작업 범위를
                  검토합니다.
                </p>
              </article>

              <article>
                <span className="strength-number">
                  02
                </span>
                <h3>현장 조건 검토</h3>
                <p>
                  층수, 반출 동선, 작업 시간,
                  건물 관리규정 등을 확인합니다.
                </p>
              </article>

              <article>
                <span className="strength-number">
                  03
                </span>
                <h3>작업 일정 협의</h3>
                <p>
                  입주, 이전, 폐업 및 퇴거
                  일정에 맞춰 가능한 작업 일정을
                  협의합니다.
                </p>
              </article>

              <article>
                <span className="strength-number">
                  04
                </span>
                <h3>철거 후 정리</h3>
                <p>
                  협의된 범위에 따라 철거와
                  폐기물 반출 및 현장 정리
                  사항을 안내합니다.
                </p>
              </article>
            </div>
          </div>
        </section>

        {/* ==============================
            BEFORE AFTER
        ============================== */}

        <section
          className="project-section"
          id="projects"
        >
          <div className="wrap">
            <SectionTitle
              eyebrow="PROJECT GALLERY"
              title="철거 작업 사진"
              description="작업 전후의 공간 변화를 사진으로 확인해 보세요."
            />

            <div className="project-grid">
              <article className="project-card">
                <div className="project-photo">
                  <Image
                    src="/IMG_2381.jpeg"
                    alt="주택 내부 철거 전 사진"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                  <span className="photo-label">
                    BEFORE
                  </span>
                </div>
                <div className="project-caption">
                  <strong>주택 내부 철거 전</strong>
                  <span>주택·아파트 철거</span>
                </div>
              </article>

              <article className="project-card">
                <div className="project-photo">
                  <Image
                    src="/IMG_2380.jpeg"
                    alt="주택 내부 철거 후 사진"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                  <span className="photo-label">
                    AFTER
                  </span>
                </div>
                <div className="project-caption">
                  <strong>주택 내부 철거 후</strong>
                  <span>주택·아파트 철거</span>
                </div>
              </article>

              <article className="project-card">
                <div className="project-photo">
                  <Image
                    src="/IMG_2383.jpeg"
                    alt="상업시설 내부 철거 전 참고 사진"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                  <span className="photo-label">
                    WORK PHOTO
                  </span>
                </div>
                <div className="project-caption">
                  <strong>상업시설 내부</strong>
                  <span>상가 철거 참고 사진</span>
                </div>
              </article>

              <article className="project-card">
                <div className="project-photo">
                  <Image
                    src="/IMG_2382.jpeg"
                    alt="상업시설 철거 작업 참고 사진"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                  <span className="photo-label">
                    WORK PHOTO
                  </span>
                </div>
                <div className="project-caption">
                  <strong>상업시설 내부 철거</strong>
                  <span>철거 작업 참고 사진</span>
                </div>
              </article>
            </div>

            <p className="gallery-note">
              사진은 작업 사례 및 참고 사진이며,
              특정 지역의 시공 실적을 의미하지 않습니다.
            </p>
          </div>
        </section>

        {/* ==============================
            PROCESS
        ============================== */}

        <section
          className="process-section"
          id="process"
        >
          <div className="wrap">
            <SectionTitle
              eyebrow="WORK PROCESS"
              title="철거 진행 절차"
              description="현장 상황과 작업 범위에 따라 세부 진행 방식은 달라질 수 있습니다."
              light
            />

            <div className="process-grid">
              {PROCESS.map((step) => (
                <article
                  key={step.number}
                  className="process-item"
                >
                  <span className="process-number">
                    {step.number}
                  </span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ==============================
            CHECKLIST
        ============================== */}

        <section className="check-section">
          <div className="wrap check-grid">
            <div>
              <span className="eyebrow">
                ESTIMATE CHECKLIST
              </span>

              <h2>
                철거 견적 전,
                <br />
                확인해 주세요.
              </h2>

              <p>
                현장 사진과 기본 정보를
                준비해 주시면 상담 시
                작업 범위를 파악하는 데
                도움이 됩니다.
              </p>

              <a
                href={`tel:${PHONE}`}
                className="btn btn-orange"
              >
                견적 상담하기
                <ArrowIcon />
              </a>
            </div>

            <div className="check-list">
              {CHECKLIST.map((item, index) => (
                <div
                  key={item}
                  className="check-item"
                >
                  <span>
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </span>
                  <strong>{item}</strong>
                  <span className="check-mark">
                    ✓
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==============================
            REGIONS
        ============================== */}

        <section
          className="regions-section"
          id="regions"
        >
          <div className="wrap">
            <SectionTitle
              eyebrow="SERVICE AREAS"
              title="철거 상담 가능 지역"
              description="경기·충남·충북 지역별 철거 상담 페이지를 확인할 수 있습니다. 실제 작업 가능 여부는 현장 조건과 일정에 따라 달라집니다."
            />

            <div className="region-groups">
              {REGIONS_LIST.map((region) => (
                <div
                  key={region.slug}
                  className="region-group"
                >
                  <div className="region-heading">
                    <h3>{region.name}</h3>
                    <span>
                      {region.districts.length}개
                      시·군
                    </span>
                  </div>

                  <div className="district-list">
                    {region.districts.map(
                      (district) => (
                        <Link
                          key={district.slug}
                          href={serviceRegionUrl(
                            "house",
                            region.slug,
                            district.slug
                          )}
                        >
                          {district.name}
                          <ArrowIcon />
                        </Link>
                      )
                    )}
                  </div>
                </div>
              ))}
            </div>

            <p className="region-note">
              지역 버튼은 주택·아파트 철거
              개별페이지로 연결됩니다. 다른
              철거 분야는 시공 분야 메뉴에서
              확인할 수 있습니다.
            </p>
          </div>
        </section>

        {/* ==============================
            FINAL CTA
        ============================== */}

        <section className="final-cta">
          <div className="wrap cta-inner">
            <div>
              <span className="eyebrow">
                CONTACT DH DEMOLITION
              </span>

              <h2>
                철거가 필요하다면
                <br />
                현장부터 상담하세요.
              </h2>

              <p>
                주택·아파트·상가·사무실 철거
                및 원상복구 견적 문의
              </p>
            </div>

            <a
              href={`tel:${PHONE}`}
              className="cta-phone"
            >
              <span>전화 상담 바로 연결</span>
              <strong>{PHONE_DISPLAY}</strong>
              <ArrowIcon />
            </a>
          </div>
        </section>
      </main>

      {/* ==============================
          FOOTER
      ============================== */}

      <footer className="dh-footer">
        <div className="wrap footer-grid">
          <div>
            <div className="footer-brand">
              <span>DH</span>
              <strong>종합철거</strong>
            </div>

            <p>
              철거 범위 검토부터
              원상복구 상담까지.
              <br />
              현장 조건에 맞는 철거 상담을
              제공합니다.
            </p>
          </div>

          <div className="footer-company">
            <p>상호: {COMPANY}</p>
            <p>대표자: {OWNER}</p>
            <p>
              사업자등록번호: {BUSINESS_NUMBER}
            </p>
            <p>
              대표전화:{" "}
              <a href={`tel:${PHONE}`}>
                {PHONE_DISPLAY}
              </a>
            </p>
            <p>상담 지역: 경기·충남·충북</p>
          </div>
        </div>

        <div className="wrap copyright">
          © {new Date().getFullYear()} {COMPANY}.
          All rights reserved.
        </div>
      </footer>

      {/* 모바일 전화 버튼 */}

      <a
        href={`tel:${PHONE}`}
        className="mobile-call"
      >
        <span>철거 견적 상담</span>
        <strong>{PHONE_DISPLAY}</strong>
        <ArrowIcon />
      </a>

      {/* ==============================
          STYLES
      ============================== */}

      <style>{`
        .dh-home {
          --orange: #ff7900;
          --dark: #111315;
          --text: #191b1d;
          --muted: #6b7076;
          color: var(--text);
          background: #fff;
          font-family:
            Pretendard,
            "Noto Sans KR",
            Arial,
            sans-serif;
          word-break: keep-all;
        }

        .dh-home * {
          box-sizing: border-box;
        }

        .dh-home a {
          text-decoration: none;
          color: inherit;
        }

        .dh-home .wrap {
          width: min(1180px, calc(100% - 40px));
          margin: 0 auto;
        }

        .dh-home .eyebrow {
          display: inline-block;
          color: var(--orange);
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 2px;
          margin-bottom: 20px;
        }

        .dh-header {
          height: 86px;
          background: #fff;
          border-bottom: 1px solid #e9eaec;
          position: relative;
          z-index: 20;
        }

        .header-inner {
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-shrink: 0;
        }

        .logo-symbol {
          width: 48px;
          height: 48px;
          display: grid;
          place-items: center;
          background: var(--orange);
          color: #fff;
          font-size: 22px;
          font-weight: 950;
          letter-spacing: -1px;
        }

        .logo-text {
          display: flex;
          flex-direction: column;
          gap: 3px;
        }

        .logo-text strong {
          font-size: 22px;
          font-weight: 900;
          letter-spacing: -1px;
        }

        .logo-text small {
          color: #8a8d91;
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 1px;
        }

        .desktop-nav {
          display: flex;
          align-items: center;
          gap: 30px;
        }

        .desktop-nav a {
          font-size: 14px;
          font-weight: 800;
        }

        .desktop-nav a:hover {
          color: var(--orange);
        }

        .header-call {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 4px;
        }

        .header-call span {
          font-size: 11px;
          color: #777;
        }

        .header-call strong {
          font-size: 19px;
          font-weight: 900;
          color: var(--orange);
        }

        .hero {
          min-height: 690px;
          position: relative;
          background: #161616;
          color: #fff;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .hero-image {
          position: absolute;
          inset: 0;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(9, 11, 13, .95) 0%,
              rgba(9, 11, 13, .86) 40%,
              rgba(9, 11, 13, .35) 100%
            ),
            linear-gradient(
              0deg,
              rgba(0,0,0,.55),
              transparent 50%
            );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding-top: 92px;
          padding-bottom: 65px;
        }

        .hero-label {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #ff9a3e;
          font-size: 12px;
          font-weight: 900;
          letter-spacing: 3px;
          margin-bottom: 28px;
        }

        .label-line {
          display: block;
          width: 28px;
          height: 2px;
          background: var(--orange);
        }

        .hero h1 {
          font-size: clamp(45px, 6.5vw, 88px);
          font-weight: 950;
          letter-spacing: -4px;
          line-height: 1.18;
          margin: 0 0 30px;
        }

        .hero h1 span {
          color: var(--orange);
        }

        .hero-lead {
          font-size: clamp(18px, 2.1vw, 24px);
          font-weight: 800;
          line-height: 1.65;
          margin: 0 0 18px;
        }

        .hero-description {
          max-width: 510px;
          font-size: 15px;
          color: #d0d1d2;
          line-height: 1.9;
          margin: 0;
        }

        .hero-buttons {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
          margin-top: 36px;
        }

        .dh-home .btn {
          display: inline-flex;
          justify-content: center;
          align-items: center;
          gap: 18px;
          min-height: 56px;
          padding: 0 24px;
          font-size: 14px;
          font-weight: 900;
          transition: .2s;
        }

        .btn-orange {
          background: var(--orange);
          color: #fff !important;
        }

        .btn-orange:hover {
          background: #e56c00;
        }

        .btn-transparent {
          border: 1px solid rgba(255,255,255,.55);
          color: #fff !important;
        }

        .btn-transparent:hover {
          background: rgba(255,255,255,.12);
        }

        .hero-bottom {
          display: flex;
          flex-wrap: wrap;
          gap: 45px;
          margin-top: 75px;
          padding-top: 25px;
          border-top: 1px solid rgba(255,255,255,.25);
        }

        .hero-bottom div {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .hero-bottom strong {
          color: #ff9940;
          font-size: 11px;
          letter-spacing: 1px;
        }

        .hero-bottom span {
          font-size: 14px;
          font-weight: 800;
        }

        .intro-section {
          padding: 115px 0;
        }

        .intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 90px;
          align-items: center;
        }

        .intro-left h2 {
          font-size: clamp(35px, 4vw, 58px);
          line-height: 1.3;
          font-weight: 950;
          letter-spacing: -2px;
          margin: 0;
        }

        .intro-left h2 span {
          color: var(--orange);
        }

        .intro-right p {
          color: #656a70;
          line-height: 2;
          font-size: 15px;
        }

        .intro-right .intro-emphasis {
          font-size: 22px;
          color: #1d1e20;
          font-weight: 900;
          line-height: 1.65;
        }

        .text-link {
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: var(--orange) !important;
          font-weight: 900;
          margin-top: 20px;
          border-bottom: 2px solid var(--orange);
          padding-bottom: 8px;
        }

        .services-section,
        .project-section,
        .regions-section {
          padding: 110px 0;
        }

        .services-section {
          background: #f4f5f6;
        }

        .section-heading {
          margin-bottom: 45px;
        }

        .section-heading h2 {
          font-size: clamp(30px, 4vw, 48px);
          font-weight: 950;
          letter-spacing: -2px;
          margin: 0 0 18px;
          line-height: 1.3;
        }

        .section-heading p {
          color: #6c7177;
          font-size: 15px;
          line-height: 1.8;
          margin: 0;
        }

        .service-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
        }

        .service-card {
          grid-column: span 2;
          position: relative;
          min-height: 380px;
          overflow: hidden;
          background: #171717;
          color: #fff !important;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 26px;
        }

        .service-card:nth-child(1),
        .service-card:nth-child(2) {
          grid-column: span 3;
          min-height: 420px;
        }

        .service-image,
        .service-shade {
          position: absolute;
          inset: 0;
        }

        .service-image img {
          transition: transform .4s;
        }

        .service-card:hover .service-image img {
          transform: scale(1.05);
        }

        .service-shade {
          background: linear-gradient(
            0deg,
            rgba(0,0,0,.92),
            rgba(0,0,0,.35) 55%,
            rgba(0,0,0,.25)
          );
        }

        .service-top,
        .service-info {
          position: relative;
          z-index: 2;
        }

        .service-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-weight: 900;
          font-size: 15px;
        }

        .service-arrow {
          width: 36px;
          height: 36px;
          border: 1px solid rgba(255,255,255,.7);
          display: grid;
          place-items: center;
        }

        .service-info h3 {
          font-size: 25px;
          font-weight: 950;
          margin: 0 0 12px;
        }

        .service-info p {
          font-size: 13px;
          line-height: 1.8;
          color: #ddd;
          margin: 0 0 18px;
        }

        .service-more {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          color: #ff9b45;
          font-size: 12px;
          font-weight: 900;
        }

        .strength-section {
          padding: 110px 0;
        }

        .strength-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 18px;
        }

        .strength-grid article {
          padding: 32px 24px;
          border: 1px solid #e6e7e9;
          background: #fff;
        }

        .strength-number {
          font-size: 14px;
          color: var(--orange);
          font-weight: 950;
        }

        .strength-grid h3 {
          font-size: 19px;
          margin: 38px 0 14px;
          font-weight: 900;
        }

        .strength-grid p {
          color: #73777c;
          font-size: 13px;
          line-height: 1.9;
          margin: 0;
        }

        .project-section {
          background: #f4f5f6;
        }

        .project-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }

        .project-card {
          background: #fff;
        }

        .project-photo {
          position: relative;
          aspect-ratio: 16 / 10;
          overflow: hidden;
          background: #ddd;
        }

        .photo-label {
          position: absolute;
          top: 18px;
          left: 18px;
          padding: 10px 14px;
          background: var(--orange);
          color: #fff;
          font-size: 11px;
          font-weight: 950;
          letter-spacing: 1px;
        }

        .project-caption {
          display: flex;
          justify-content: space-between;
          gap: 12px;
          padding: 22px;
        }

        .project-caption strong {
          font-size: 16px;
        }

        .project-caption span {
          color: #888;
          font-size: 12px;
        }

        .gallery-note {
          margin-top: 20px;
          color: #85898d;
          font-size: 12px;
          line-height: 1.8;
        }

        .process-section {
          background: #151719;
          color: #fff;
          padding: 110px 0;
        }

        .heading-light p {
          color: #a8adb2;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
        }

        .process-item {
          border-top: 2px solid #555;
          padding-top: 28px;
        }

        .process-number {
          font-size: 36px;
          font-weight: 950;
          color: var(--orange);
        }

        .process-item h3 {
          font-size: 20px;
          font-weight: 900;
          margin: 28px 0 12px;
        }

        .process-item p {
          font-size: 13px;
          color: #b5b8bc;
          line-height: 1.9;
        }

        .check-section {
          padding: 110px 0;
        }

        .check-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 80px;
          align-items: center;
        }

        .check-grid h2 {
          font-size: clamp(32px, 4vw, 48px);
          line-height: 1.35;
          letter-spacing: -2px;
          margin: 0 0 20px;
          font-weight: 950;
        }

        .check-grid p {
          color: #73777b;
          font-size: 15px;
          line-height: 1.9;
          margin-bottom: 30px;
        }

        .check-list {
          border-top: 2px solid #151515;
        }

        .check-item {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 22px 0;
          border-bottom: 1px solid #e3e4e6;
        }

        .check-item > span:first-child {
          font-size: 12px;
          color: var(--orange);
          font-weight: 900;
        }

        .check-item strong {
          flex: 1;
          font-size: 15px;
          font-weight: 800;
        }

        .check-mark {
          color: var(--orange);
          font-weight: 900;
        }

        .regions-section {
          background: #f4f5f6;
        }

        .region-groups {
          display: grid;
          gap: 28px;
        }

        .region-group {
          padding: 30px;
          background: #fff;
          border: 1px solid #e7e8ea;
        }

        .region-heading {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          margin-bottom: 24px;
          padding-bottom: 18px;
          border-bottom: 2px solid #151515;
        }

        .region-heading h3 {
          font-size: 22px;
          margin: 0;
          font-weight: 950;
        }

        .region-heading span {
          font-size: 12px;
          color: #999;
        }

        .district-list {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 9px;
        }

        .district-list a {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 6px;
          min-height: 45px;
          padding: 10px 12px;
          background: #f5f6f7;
          font-size: 12px;
          font-weight: 800;
          transition: .2s;
        }

        .district-list a:hover {
          background: var(--orange);
          color: #fff;
        }

        .district-list svg {
          width: 14px;
          height: 14px;
          flex-shrink: 0;
        }

        .region-note {
          font-size: 12px;
          color: #898d91;
          margin-top: 24px;
          line-height: 1.8;
        }

        .final-cta {
          background: var(--orange);
          padding: 85px 0;
          color: #fff;
        }

        .cta-inner {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 30px;
        }

        .final-cta .eyebrow {
          color: #ffe2c4;
        }

        .final-cta h2 {
          font-size: clamp(30px, 4vw, 46px);
          line-height: 1.3;
          font-weight: 950;
          margin: 0 0 18px;
          letter-spacing: -2px;
        }

        .final-cta p {
          margin: 0;
          font-size: 15px;
        }

        .cta-phone {
          display: flex;
          flex-direction: column;
          gap: 10px;
          min-width: 280px;
          background: #141414;
          padding: 28px 32px;
          color: #fff !important;
        }

        .cta-phone span {
          font-size: 12px;
          color: #bbb;
        }

        .cta-phone strong {
          font-size: 26px;
          font-weight: 950;
        }

        .cta-phone svg {
          align-self: flex-end;
        }

        .dh-footer {
          background: #111315;
          color: #fff;
          padding: 65px 0 25px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          padding-bottom: 50px;
        }

        .footer-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 24px;
          font-weight: 950;
        }

        .footer-brand span {
          color: var(--orange);
        }

        .footer-grid p {
          color: #aaaeb2;
          font-size: 13px;
          line-height: 1.9;
        }

        .footer-company p {
          margin: 0 0 8px;
        }

        .copyright {
          border-top: 1px solid #353739;
          padding-top: 24px;
          color: #777;
          font-size: 12px;
        }

        .mobile-call {
          display: none;
        }

        @media (max-width: 900px) {
          .desktop-nav {
            display: none;
          }

          .intro-grid,
          .check-grid {
            gap: 40px;
          }

          .strength-grid,
          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .district-list {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        @media (max-width: 640px) {
          .dh-home .wrap {
            width: calc(100% - 36px);
          }

          .dh-header {
            height: 72px;
          }

          .logo-symbol {
            width: 40px;
            height: 40px;
            font-size: 18px;
          }

          .logo-text strong {
            font-size: 19px;
          }

          .logo-text small {
            font-size: 7px;
          }

          .header-call span {
            font-size: 10px;
          }

          .header-call strong {
            font-size: 13px;
          }

          .hero {
            min-height: 690px;
          }

          .hero-overlay {
            background: linear-gradient(
              90deg,
              rgba(0,0,0,.91),
              rgba(0,0,0,.66)
            );
          }

          .hero-content {
            padding-top: 75px;
            padding-bottom: 45px;
          }

          .hero h1 {
            font-size: 45px;
            letter-spacing: -2px;
          }

          .hero-lead {
            font-size: 18px;
          }

          .hero-description {
            font-size: 13px;
          }

          .hero-buttons {
            flex-direction: column;
          }

          .hero-buttons .btn {
            width: 100%;
          }

          .hero-bottom {
            gap: 18px;
            margin-top: 55px;
          }

          .hero-bottom div {
            width: calc(50% - 10px);
          }

          .hero-bottom strong {
            font-size: 9px;
          }

          .hero-bottom span {
            font-size: 12px;
          }

          .intro-section,
          .services-section,
          .strength-section,
          .project-section,
          .process-section,
          .check-section,
          .regions-section {
            padding: 75px 0;
          }

          .intro-grid,
          .check-grid,
          .footer-grid {
            grid-template-columns: 1fr;
          }

          .intro-left h2 {
            font-size: 38px;
          }

          .intro-right .intro-emphasis {
            font-size: 19px;
          }

          .section-heading h2 {
            font-size: 32px;
          }

          .service-grid {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .service-card,
          .service-card:nth-child(1),
          .service-card:nth-child(2) {
            grid-column: auto;
            min-height: 330px;
          }

          .service-info h3 {
            font-size: 23px;
          }

          .strength-grid,
          .process-grid {
            grid-template-columns: 1fr;
          }

          .strength-grid article {
            padding: 25px;
          }

          .strength-grid h3 {
            margin-top: 22px;
          }

          .project-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }

          .project-caption {
            flex-direction: column;
            gap: 6px;
          }

          .check-grid {
            gap: 35px;
          }

          .region-group {
            padding: 20px 15px;
          }

          .district-list {
            grid-template-columns: repeat(2, 1fr);
          }

          .district-list a {
            font-size: 12px;
          }

          .cta-inner {
            flex-direction: column;
            align-items: stretch;
          }

          .cta-phone {
            min-width: 0;
          }

          .dh-footer {
            padding-bottom: 105px;
          }

          .mobile-call {
            display: flex;
            position: fixed;
            z-index: 100;
            left: 12px;
            right: 12px;
            bottom: max(
              12px,
              env(safe-area-inset-bottom)
            );
            align-items: center;
            justify-content: space-between;
            gap: 12px;
            padding: 15px 20px;
            background: var(--orange);
            color: #fff !important;
            box-shadow: 0 8px 28px rgba(0,0,0,.28);
          }

          .mobile-call span {
            font-size: 13px;
            font-weight: 800;
          }

          .mobile-call strong {
            font-size: 16px;
            font-weight: 950;
          }

          .mobile-call svg {
            width: 18px;
            flex-shrink: 0;
          }
        }
      `}</style>
    </div>
  );
}
