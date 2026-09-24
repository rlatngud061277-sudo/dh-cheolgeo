
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

/* =====================================
   DH 종합철거 기본 설정
===================================== */

const SITE_URL = "https://www.dhcheolgeo.com";

const COMPANY = "DH 종합철거";

const OWNER = "이덕재";

const PHONE = "01054731244";

const PHONE_DISPLAY = "010-5473-1244";

const PHONE_LINK = `tel:${PHONE}`;

/* =====================================
   철거 서비스별 정보
===================================== */

const SERVICES = {
  house: {
    title: "주택·아파트 철거",
    keyword: "주택철거·아파트철거",
    description:
      "주택 및 아파트의 내부 철거와 리모델링 전 기존 시설물 철거 작업을 상담합니다.",

    details: [
      "주택 및 아파트 내부 철거",
      "리모델링 전 기존 시설물 철거",
      "주방 및 욕실 내부 철거",
      "바닥재 및 천장재 철거",
      "기존 수납장과 붙박이장 철거",
    ],

    checklist: [
      "철거할 주택 또는 아파트의 위치",
      "철거 대상 공간 및 면적",
      "철거를 희망하는 날짜",
      "현장 진입로 및 엘리베이터 이용 가능 여부",
      "철거 범위를 확인할 수 있는 현장 사진",
    ],
  },

  commercial: {
    title: "상가·매장 철거",
    keyword: "상가철거·매장철거",
    description:
      "상가 및 매장의 기존 인테리어와 내부 시설물 철거 작업을 상담합니다.",

    details: [
      "상가 및 매장 내부 철거",
      "기존 인테리어 시설물 철거",
      "매장 내부 칸막이 철거",
      "천장 및 바닥 마감재 철거",
      "상가 이전 및 폐업에 따른 철거 상담",
    ],

    checklist: [
      "상가 및 매장의 위치",
      "철거 대상 공간과 면적",
      "건물 관리 규정 및 작업 가능 시간",
      "철거 및 원상복구 범위",
      "현장 사진과 작업 희망 일정",
    ],
  },

  office: {
    title: "사무실 철거",
    keyword: "사무실철거",
    description:
      "사무실 이전 및 리모델링을 위한 내부 칸막이, 천장, 바닥 등 기존 시설물 철거 작업을 상담합니다.",

    details: [
      "사무실 내부 철거",
      "기존 칸막이 및 파티션 철거",
      "천장 마감재 철거",
      "바닥재 및 기존 시설물 철거",
      "사무실 이전에 따른 철거 상담",
    ],

    checklist: [
      "사무실 위치와 작업 면적",
      "철거 대상 시설물과 구조",
      "건물 관리사무소의 작업 관련 규정",
      "작업 가능 시간 및 희망 일정",
      "철거 범위를 확인할 수 있는 현장 사진",
    ],
  },

  interior: {
    title: "내부·부분 철거",
    keyword: "내부철거·부분철거",
    description:
      "주택, 상가, 사무실 등의 내부 시설물과 필요한 부분의 철거 작업을 상담합니다.",

    details: [
      "실내 기존 시설물 철거",
      "비내력 칸막이 철거 상담",
      "바닥 및 천장 마감재 철거",
      "주방 및 욕실 부분 철거",
      "리모델링을 위한 기존 마감재 철거",
    ],

    checklist: [
      "철거 현장의 위치",
      "철거 대상 시설물과 작업 범위",
      "벽체 등 구조 관련 확인이 필요한 부분",
      "현장 사진 및 작업 공간의 크기",
      "작업 희망 날짜와 현장 출입 조건",
    ],
  },

  restoration: {
    title: "상가·사무실 원상복구",
    keyword:
      "상가원상복구·사무실원상복구",
    description:
      "상가 및 사무실의 계약 종료나 이전에 따른 철거와 원상복구 작업을 상담합니다.",

    details: [
      "상가 및 매장 원상복구 상담",
      "사무실 이전에 따른 원상복구",
      "기존 인테리어 시설물 철거",
      "바닥 및 천장 마감재 철거",
      "계약상 원상복구 범위에 따른 작업 상담",
    ],

    checklist: [
      "상가 또는 사무실의 위치",
      "임대차계약상 원상복구 범위",
      "철거 및 복구 대상 시설물",
      "건물 관리 규정 및 작업 가능 시간",
      "퇴거 일정과 현장 사진",
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
   서비스별 정적 페이지 생성
===================================== */

export function generateStaticParams() {
  return Object.keys(SERVICES).map(
    (service) => ({
      service,
    })
  );
}

export const dynamicParams = false;

/* =====================================
   서비스별 SEO 메타데이터
===================================== */

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    service: string;
  }>;
}): Promise<Metadata> {
  const { service } = await params;

  if (!isServiceSlug(service)) {
    return {};
  }

  const item = SERVICES[service];

  const PAGE_URL =
    `${SITE_URL}/services/${service}`;

  const title =
    `${item.title} | 서울·경기·인천·충남·충북 | ${COMPANY}`;

  const description =
    `${COMPANY} ${item.title} 안내. ` +
    `${item.description} ` +
    `서울·경기·인천·충남·충북 지역 철거 상담 및 그 외 지역 문의.`;

  return {
    title: {
      absolute: title,
    },

    description,

    alternates: {
      canonical: PAGE_URL,
    },

    openGraph: {
      type: "website",
      locale: "ko_KR",
      url: PAGE_URL,
      siteName: COMPANY,
      title,
      description,
    },

    robots: {
      index: true,
      follow: true,
    },
  };
}

/* =====================================
   철거 서비스 상세 페이지
===================================== */

export default async function ServicePage({
  params,
}: {
  params: Promise<{
    service: string;
  }>;
}) {
  const { service } = await params;

  if (!isServiceSlug(service)) {
    notFound();
  }

  const item = SERVICES[service];

  const PAGE_URL =
    `${SITE_URL}/services/${service}`;

  /* =====================================
     서비스 구조화 데이터
  ===================================== */

  const serviceSchema = {
    "@context": "https://schema.org",

    "@type": "Service",

    name: item.title,

    description: item.description,

    serviceType: item.keyword,

    url: PAGE_URL,

    provider: {
      "@type": "Organization",
      name: COMPANY,
      url: SITE_URL,
      telephone: PHONE_DISPLAY,
    },

    areaServed: [
      "서울특별시",
      "경기도",
      "인천광역시",
      "충청남도",
      "충청북도",
    ],
  };

  /* =====================================
     이동 경로 구조화 데이터
  ===================================== */

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
        name: item.title,
        item: PAGE_URL,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            serviceSchema,
            breadcrumbSchema,
          ]).replace(/</g, "\\u003c"),
        }}
      />

      {/* =====================================
          상단 메뉴
      ===================================== */}

      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand">
            <span className="brand-mark">
              DH
            </span>
            종합철거
          </Link>

          <nav className="nav-links">
            <Link href="/">
              홈
            </Link>

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
        {/* =====================================
            상단 대표 화면
        ===================================== */}

        <section className="hero">
          <div className="container">
            <span className="hero-label">
              DH DEMOLITION & REMOVAL
            </span>

            <h1>
              {item.title}
            </h1>

            <p>
              {item.description}
            </p>

            <p>
              서울·경기·인천·충남·충북
              <br />
              그 외 지역 문의
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
                지역별 철거 상담
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================
            서비스 상세 내용
        ===================================== */}

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                SERVICE INFORMATION
              </span>

              <h2>
                {item.title} 작업 안내
              </h2>

              <p>
                작업 범위와 현장 조건에 따라
                필요한 철거 방법이 달라질 수 있습니다.
              </p>
            </div>

            <div className="card-grid">
              {item.details.map(
                (detail, index) => (
                  <article
                    className="card"
                    key={detail}
                  >
                    <div className="card-body">
                      <span className="section-tag">
                        {String(
                          index + 1
                        ).padStart(2, "0")}
                      </span>

                      <h3>
                        {detail}
                      </h3>

                      <p>
                        현장 구조와 철거 범위를
                        확인한 후 작업 가능 여부와
                        진행 방법을 안내합니다.
                      </p>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </section>

        {/* =====================================
            견적 상담 체크리스트
        ===================================== */}

        <section className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                ESTIMATE CHECKLIST
              </span>

              <h2>
                철거 견적 문의 전 확인사항
              </h2>

              <p>
                아래 내용을 알려주시면
                현장 상담에 도움이 됩니다.
              </p>
            </div>

            <div className="card-grid">
              {item.checklist.map(
                (check, index) => (
                  <div
                    className="card"
                    key={check}
                  >
                    <div className="card-body">
                      <span className="section-tag">
                        CHECK{" "}
                        {String(
                          index + 1
                        ).padStart(2, "0")}
                      </span>

                      <h3>
                        {check}
                      </h3>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* =====================================
            지역별 철거 연결
        ===================================== */}

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                SERVICE AREAS
              </span>

              <h2>
                {item.title} 출장 지역
              </h2>

              <p>
                서울·경기·인천·충남·충북
                <br />
                그 외 지역 문의
              </p>
            </div>

            <Link
              href="/#regions"
              className="btn btn-primary"
            >
              지역별 철거 상담 확인하기
            </Link>
          </div>
        </section>

        {/* =====================================
            최종 상담 문의
        ===================================== */}

        <section className="contact-section">
          <div className="container">
            <h2>
              {item.title} 견적 문의
            </h2>

            <p>
              철거 현장의 위치, 작업 범위,
              현장 사진과 희망 일정을
              준비해 주세요.
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

      {/* =====================================
          하단 정보
      ===================================== */}

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <h3>
              {COMPANY}
            </h3>

            <div className="footer-info">
              <p>대표자: {OWNER}</p>

              <p>
                {item.title} 및 철거 상담
              </p>

              <p>
                서울·경기·인천·충남·충북
                그 외 지역 문의
              </p>

              <p>
                전화: {PHONE_DISPLAY}
              </p>
            </div>
          </div>

          <div className="footer-info">
            <p>
              © {new Date().getFullYear()}{" "}
              {COMPANY}.
            </p>

            <p>
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
