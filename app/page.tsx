
import type { Metadata } from "next";
import Link from "next/link";

/* =====================================
   DH 종합철거 기본 정보
===================================== */

const SITE_URL = "https://www.dhcheolgeo.com";

const COMPANY = "DH 종합철거";

const PHONE = "01094134686";

const PHONE_DISPLAY = "010-9413-4686";

const PHONE_LINK = `tel:${PHONE}`;

/* =====================================
   메인 홈페이지 SEO
===================================== */

export const metadata: Metadata = {
  title: {
    absolute:
      "DH 종합철거 | 서울·경기·인천·충남·충북 철거업체",
  },

  description:
    "DH 종합철거 공식 홈페이지. 주택·아파트 철거, 상가 철거, 사무실 철거, 내부 철거 및 원상복구 상담을 안내합니다. 서울·경기·인천·충남·충북 지역 철거 문의.",

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    title: "DH 종합철거 | 철거 전문업체",
    description:
      "주택·아파트·상가·사무실 철거 및 원상복구 상담. 서울·경기·인천·충남·충북 지역 철거 문의.",
    url: SITE_URL,
    type: "website",
  },
};

/* =====================================
   철거 서비스
===================================== */

const SERVICES = [
  {
    title: "주택·아파트 철거",
    desc:
      "주택과 아파트 내부 철거 및 리모델링 전 철거 작업을 상담합니다.",
    slug: "house",
    icon: "🏠",
  },
  {
    title: "상가·매장 철거",
    desc:
      "상가 및 매장의 내부 시설물 철거와 공간 정리 작업을 안내합니다.",
    slug: "commercial",
    icon: "🏢",
  },
  {
    title: "사무실 철거",
    desc:
      "사무실 내부 칸막이와 기존 시설물 철거 등 현장 상황에 맞는 작업을 상담합니다.",
    slug: "office",
    icon: "🏬",
  },
  {
    title: "내부·부분 철거",
    desc:
      "벽체, 바닥, 천장 등 현장에 필요한 부분 철거 작업을 안내합니다.",
    slug: "interior",
    icon: "🔨",
  },
  {
    title: "원상복구",
    desc:
      "상가와 사무실의 계약 종료 및 이전에 따른 원상복구 작업을 상담합니다.",
    slug: "restoration",
    icon: "🛠️",
  },
];

/* =====================================
   출장 지역
===================================== */

const REGIONS = [
  {
    name: "서울특별시",
    slug: "seoul",
    districts: [
      ["강남구", "gangnam"],
      ["강동구", "gangdong"],
      ["강북구", "gangbuk"],
      ["강서구", "gangseo"],
      ["관악구", "gwanak"],
      ["광진구", "gwangjin"],
      ["구로구", "guro"],
      ["금천구", "geumcheon"],
      ["노원구", "nowon"],
      ["도봉구", "dobong"],
      ["동대문구", "dongdaemun"],
      ["동작구", "dongjak"],
      ["마포구", "mapo"],
      ["서대문구", "seodaemun"],
      ["서초구", "seocho"],
      ["성동구", "seongdong"],
      ["성북구", "seongbuk"],
      ["송파구", "songpa"],
      ["양천구", "yangcheon"],
      ["영등포구", "yeongdeungpo"],
      ["용산구", "yongsan"],
      ["은평구", "eunpyeong"],
      ["종로구", "jongno"],
      ["중구", "jung"],
      ["중랑구", "jungnang"],
    ],
  },
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
    name: "인천광역시",
    slug: "incheon",
    districts: [
      ["중구", "jung"],
      ["동구", "dong"],
      ["미추홀구", "michuhol"],
      ["연수구", "yeonsu"],
      ["남동구", "namdong"],
      ["부평구", "bupyeong"],
      ["계양구", "gyeyang"],
      ["서구", "seo"],
      ["강화군", "ganghwa"],
      ["옹진군", "ongjin"],
    ],
  },
  {
    name: "충청남도",
    slug: "chungnam",
    districts: [
      ["천안시", "cheonan"],
      ["아산시", "asan"],
      ["공주시", "gongju"],
      ["보령시", "boryeong"],
      ["서산시", "seosan"],
      ["논산시", "nonsan"],
      ["계룡시", "gyeryong"],
      ["당진시", "dangjin"],
      ["금산군", "geumsan"],
      ["부여군", "buyeo"],
      ["서천군", "seocheon"],
      ["청양군", "cheongyang"],
      ["홍성군", "hongseong"],
      ["예산군", "yesan"],
      ["태안군", "taean"],
    ],
  },
  {
    name: "충청북도",
    slug: "chungbuk",
    districts: [
      ["청주시", "cheongju"],
      ["충주시", "chungju"],
      ["제천시", "jecheon"],
      ["보은군", "boeun"],
      ["옥천군", "okcheon"],
      ["영동군", "yeongdong"],
      ["증평군", "jeungpyeong"],
      ["진천군", "jincheon"],
      ["괴산군", "goesan"],
      ["음성군", "eumseong"],
      ["단양군", "danyang"],
    ],
  },
];

/* =====================================
   메인 홈페이지
===================================== */

export default function Home() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY,
    url: SITE_URL,
    telephone: PHONE_DISPLAY,
    description:
      "주택·아파트·상가·사무실 철거 및 원상복구 상담",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            businessSchema
          ).replace(/</g, "\\u003c"),
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
            <a href="#services">
              철거 서비스
            </a>

            <a href="#regions">
              출장 지역
            </a>

            <a href="#contact">
              견적 문의
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* =====================================
            메인 대표 화면
        ===================================== */}

        <section className="hero">
          <div className="container hero-inner">
            <div>
              <span className="hero-label">
                DH DEMOLITION & REMOVAL
              </span>

              <h1>
                주택부터 상가까지
                <br />
                <strong>
                  DH 종합철거
                </strong>
              </h1>

              <p>
                주택·아파트·상가·사무실 철거 및
                원상복구 상담
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

                <a
                  href="#services"
                  className="btn btn-outline"
                >
                  철거 서비스 보기
                </a>
              </div>
            </div>

            <div className="hero-image">
              <div
                style={{
                  minHeight: 300,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 30,
                  textAlign: "center",
                  background:
                    "linear-gradient(135deg, #242424, #111111)",
                  border: "1px solid #444",
                }}
              >
                <span
                  style={{
                    fontSize: 72,
                    fontWeight: 900,
                    color: "#ff7900",
                    lineHeight: 1,
                  }}
                >
                  DH
                </span>

                <span
                  style={{
                    marginTop: 14,
                    fontSize: 26,
                    fontWeight: 900,
                    color: "#ffffff",
                  }}
                >
                  종합철거
                </span>

                <span
                  style={{
                    marginTop: 10,
                    color: "#dddddd",
                    fontSize: 12,
                    letterSpacing: 2,
                  }}
                >
                  DEMOLITION & REMOVAL
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================
            철거 서비스
        ===================================== */}

        <section
          id="services"
          className="section"
        >
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                OUR SERVICES
              </span>

              <h2>
                DH 종합철거 서비스
              </h2>

              <p>
                현장 상황과 철거 범위를 확인하여
                필요한 작업을 상담합니다.
              </p>
            </div>

            <div className="card-grid">
              {SERVICES.map((service) => (
                <article
                  key={service.slug}
                  className="card"
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      minHeight: 150,
                      background: "#f6f7f9",
                      fontSize: 52,
                    }}
                    aria-hidden="true"
                  >
                    {service.icon}
                  </div>

                  <div className="card-body">
                    <h3>
                      {service.title}
                    </h3>

                    <p>
                      {service.desc}
                    </p>

                    <Link
                      href={`/services/${service.slug}`}
                      className="card-link"
                    >
                      자세히 보기 →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================
            견적 상담 안내
        ===================================== */}

        <section className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                ESTIMATE
              </span>

              <h2>
                철거 견적 상담 안내
              </h2>

              <p>
                현장 조건에 따라 작업 방법과
                견적이 달라질 수 있습니다.
              </p>
            </div>

            <div className="card-grid">
              {[
                {
                  title: "01. 현장 위치",
                  desc:
                    "철거 현장의 지역과 주소를 알려주세요.",
                },
                {
                  title: "02. 철거 범위",
                  desc:
                    "철거할 공간과 작업 범위를 알려주세요.",
                },
                {
                  title: "03. 현장 사진",
                  desc:
                    "현장 사진과 작업 희망 날짜를 준비해 주세요.",
                },
              ].map((item) => (
                <div
                  className="card"
                  key={item.title}
                >
                  <div className="card-body">
                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================
            출장 지역
        ===================================== */}

        <section
          id="regions"
          className="section"
        >
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                SERVICE AREAS
              </span>

              <h2>
                지역별 철거 상담
              </h2>

              <p>
                서울·경기·인천·충남·충북
                <br />
                그 외 지역 문의
              </p>
            </div>

            {REGIONS.map((region) => (
              <div
                key={region.slug}
                style={{
                  marginBottom: 42,
                }}
              >
                <h3
                  style={{
                    marginBottom: 16,
                  }}
                >
                  {region.name} 철거
                </h3>

                <div className="region-grid">
                  {region.districts.map(
                    ([district, slug]) => (
                      <Link
                        key={slug}
                        href={`/services/demolition/${region.slug}/${slug}`}
                        className="region-link"
                      >
                        {district} 철거
                      </Link>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* =====================================
            상담 문의
        ===================================== */}

        <section
          id="contact"
          className="contact-section"
        >
          <div className="container">
            <h2>
              DH 종합철거 견적 문의
            </h2>

            <p>
              철거 현장의 위치, 작업 범위,
              현장 사진 등을 준비해 주시면
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

      {/* =====================================
          하단 업체 정보
      ===================================== */}

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <h3>
              {COMPANY}
            </h3>

            <div className="footer-info">
              <p>
                주택·아파트·상가·사무실 철거
                및 원상복구 상담
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
