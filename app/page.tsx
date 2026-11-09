
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

/* =====================================
   DH 종합철거 기본 설정
===================================== */

const SITE_URL = "https://www.dhcheolgeo.com";

const COMPANY = "DH 종합철거";
const OWNER = "이덕재";
const PHONE = "01054731244";
const PHONE_DISPLAY = "010-5473-1244";
const PHONE_LINK = `tel:${PHONE}`;

const LOGO = "/IMG_1102.png";

/* =====================================
   메인 홈페이지 SEO
===================================== */

export const metadata: Metadata = {
  title: {
    absolute:
      "DH 종합철거 | 철거업체·상가철거·내부철거·원상복구",
  },

  description:
    "DH 종합철거 공식 홈페이지. 주택·아파트 철거, 상가철거, 사무실철거, 내부철거 및 원상복구 상담. 철거 전후 사진과 작업 안내, 지역별 철거 상담 정보를 확인하세요.",

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
    title:
      "DH 종합철거 | 철거공사·상가철거·원상복구",
    description:
      "주택·아파트·상가·사무실 철거 및 원상복구 상담. 철거 현장 사진과 서비스 안내.",
    images: [
      {
        url: LOGO,
        alt: "DH 종합철거 공식 로고",
      },
    ],
  },
};

/* =====================================
   시공 사진 설정
===================================== */

const IMAGES = {
  apartmentBefore: "/IMG_2380.jpeg",
  apartmentAfter: "/IMG_2381.jpeg",

  commercialBefore: "/IMG_2383.jpeg",
  commercialAfter: "/IMG_2382.jpeg",

  interior: "/IMG_2384.jpeg",
  office: "/IMG_2385.jpeg",
  kitchen: "/IMG_2386.jpeg",
};

/* =====================================
   철거 서비스 카테고리
===================================== */

const SERVICES = [
  {
    title: "주택·아파트 철거",
    slug: "house",
    image: IMAGES.apartmentAfter,
    imageAlt: "아파트 주방 및 내부 시설물 철거 현장",
    desc:
      "아파트 리모델링 전 주방, 바닥, 벽체, 천장 및 기존 시설물의 철거 범위를 확인합니다. 주택과 공동주택의 현장 조건에 맞춰 철거 작업을 상담합니다.",
    icon: "🏠",
  },
  {
    title: "상가·매장 철거",
    slug: "commercial",
    image: IMAGES.kitchen,
    imageAlt: "상가 주방 내부 시설물 철거 현장",
    desc:
      "음식점, 카페, 매장 등 상업시설의 기존 인테리어와 주방 설비, 바닥, 천장 및 내부 시설물 철거를 상담합니다.",
    icon: "🏢",
  },
  {
    title: "사무실 철거",
    slug: "office",
    image: IMAGES.office,
    imageAlt: "사무실 천장과 내부 마감재 철거 현장",
    desc:
      "사무실 이전이나 리모델링을 위한 칸막이, 천장 마감재, 바닥재 및 기존 시설물 철거 범위를 확인합니다.",
    icon: "🏬",
  },
  {
    title: "내부·부분 철거",
    slug: "interior",
    image: IMAGES.interior,
    imageAlt: "상업시설 내부 천장 및 마감재 철거 현장",
    desc:
      "벽체, 바닥, 천장, 주방 등 필요한 공간의 부분 철거를 상담합니다. 유지할 시설물과 철거할 부분을 구분하여 작업 범위를 확인합니다.",
    icon: "🔨",
  },
  {
    title: "원상복구",
    slug: "restoration",
    image: IMAGES.commercialAfter,
    imageAlt: "상업시설 내부 철거 및 정리 현장",
    desc:
      "상가와 사무실의 임대차 종료에 따른 기존 시설물 철거 및 원상복구 작업을 상담합니다. 계약서상 복구 기준과 현장 상태를 확인합니다.",
    icon: "🛠️",
  },
];

/* =====================================
   Before & After 사진
===================================== */

const BEFORE_AFTER = [
  {
    id: "apartment",
    title: "아파트 주방 철거",
    description:
      "주방 가구와 기존 시설물 철거 전후 공간을 비교할 수 있는 사진입니다.",
    before: IMAGES.apartmentBefore,
    after: IMAGES.apartmentAfter,
    beforeAlt:
      "아파트 주방 가구 및 기존 시설물이 있는 철거 전 모습",
    afterAlt:
      "아파트 주방 가구와 시설물이 철거된 후 모습",
  },
  {
    id: "commercial",
    title: "상업시설 내부 철거",
    description:
      "상업시설의 기존 인테리어와 내부 시설물 철거 전후 공간을 비교할 수 있는 사진입니다.",
    before: IMAGES.commercialBefore,
    after: IMAGES.commercialAfter,
    beforeAlt:
      "상업시설 기존 인테리어와 내부 시설물이 있는 철거 전 모습",
    afterAlt:
      "상업시설 내부 마감재 및 시설물이 철거된 후 모습",
  },
];

/* =====================================
   출장 지역
   기존 URL 유지
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
   견적 상담 단계
===================================== */

const ESTIMATE_STEPS = [
  {
    title: "01. 현장 위치",
    desc:
      "철거 현장의 주소와 건물 유형을 알려주세요.",
  },
  {
    title: "02. 철거 범위",
    desc:
      "철거할 공간의 면적과 철거 대상 시설물을 알려주세요.",
  },
  {
    title: "03. 현장 사진",
    desc:
      "철거 대상이 보이는 사진과 작업 희망 날짜를 준비해 주세요.",
  },
];

/* =====================================
   공통 스타일
===================================== */

const fullWidthStyle: CSSProperties = {
  width: "100%",
  minWidth: 0,
  maxWidth: "100%",
};

const cardStyle: CSSProperties = {
  ...fullWidthStyle,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
};

const cardBodyStyle: CSSProperties = {
  ...fullWidthStyle,
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "flex-start",
  textAlign: "left",
};

const imageWrapStyle: CSSProperties = {
  position: "relative",
  width: "100%",
  height: 230,
  overflow: "hidden",
  background: "#eeeeee",
};

const imageStyle: CSSProperties = {
  objectFit: "cover",
};

const cardTitleStyle: CSSProperties = {
  width: "100%",
  wordBreak: "keep-all",
  overflowWrap: "break-word",
};

const cardTextStyle: CSSProperties = {
  width: "100%",
  wordBreak: "keep-all",
  overflowWrap: "break-word",
  lineHeight: 1.8,
};

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
    logo: `${SITE_URL}${LOGO}`,
    description:
      "주택·아파트·상가·사무실 철거 및 원상복구 상담",
    areaServed: [
      "서울특별시",
      "경기도",
      "인천광역시",
      "충청남도",
      "충청북도",
    ],
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

      {/* 상단 메뉴 */}

      <header className="site-header">
        <div className="container header-inner">
          <Link
            href="/"
            className="brand"
            aria-label="DH 종합철거 메인 홈페이지"
          >
            <span className="brand-mark">DH</span>
            종합철거
          </Link>

          <nav
            className="nav-links"
            aria-label="주요 메뉴"
          >
            <a href="#services">철거 서비스</a>
            <a href="#before-after">철거 전후</a>
            <a href="#regions">출장 지역</a>
            <a href="#contact">견적 문의</a>
          </nav>
        </div>
      </header>

      <main>
        {/* 메인 대표 화면 */}

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
                  aria-label={`전화 상담 ${PHONE_DISPLAY}`}
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

            <div
              className="hero-image"
              style={fullWidthStyle}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  minHeight: 300,
                  aspectRatio: "4 / 3",
                  overflow: "hidden",
                  background: "#111111",
                  border: "1px solid #444",
                }}
              >
                <Image
                  src={LOGO}
                  alt="DH 종합철거 공식 로고"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 철거 서비스 */}

        <section
          id="services"
          className="section"
          aria-labelledby="services-heading"
        >
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                OUR SERVICES
              </span>

              <h2 id="services-heading">
                DH 종합철거 서비스
              </h2>

              <p>
                주거공간과 상업시설의
                철거 목적에 맞춰 작업 범위를 상담합니다.
              </p>
            </div>

            <div
              className="card-grid"
              style={fullWidthStyle}
            >
              {SERVICES.map((service) => (
                <article
                  key={service.slug}
                  className="card"
                  style={cardStyle}
                >
                  <div style={imageWrapStyle}>
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={imageStyle}
                    />
                  </div>

                  <div
                    className="card-body"
                    style={cardBodyStyle}
                  >
                    <h3 style={cardTitleStyle}>
                      {service.title}
                    </h3>

                    <p style={cardTextStyle}>
                      {service.desc}
                    </p>

                    <Link
                      href={`/services/${service.slug}`}
                      className="card-link"
                      style={{
                        marginTop: "auto",
                        display: "inline-block",
                        maxWidth: "100%",
                        wordBreak: "keep-all",
                      }}
                    >
                      자세히 보기 →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 철거 전후 비교 */}

        <section
          id="before-after"
          className="section section-alt"
          aria-labelledby="before-after-heading"
        >
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                BEFORE & AFTER
              </span>

              <h2 id="before-after-heading">
                철거 전후 비교 사진
              </h2>

              <p>
                기존 시설물 철거 전과
                철거 후 공간의 변화를 확인하세요.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gap: 34,
                width: "100%",
              }}
            >
              {BEFORE_AFTER.map((item) => (
                <article
                  key={item.id}
                  className="card"
                  style={{
                    overflow: "hidden",
                    width: "100%",
                    minWidth: 0,
                  }}
                >
                  <div
                    style={{
                      padding: "24px 24px 8px",
                    }}
                  >
                    <h3
                      style={{
                        marginBottom: 10,
                        wordBreak: "keep-all",
                      }}
                    >
                      {item.title}
                    </h3>

                    <p
                      style={{
                        lineHeight: 1.8,
                        wordBreak: "keep-all",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
                      gap: 16,
                      padding: 16,
                    }}
                  >
                    <div style={{ minWidth: 0 }}>
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          aspectRatio: "4 / 3",
                          overflow: "hidden",
                          background: "#eeeeee",
                          borderRadius: 8,
                        }}
                      >
                        <Image
                          src={item.before}
                          alt={item.beforeAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          style={{
                            objectFit: "cover",
                          }}
                        />

                        <span
                          style={{
                            position: "absolute",
                            top: 12,
                            left: 12,
                            zIndex: 2,
                            background: "#202020",
                            color: "#ffffff",
                            padding: "8px 14px",
                            borderRadius: 5,
                            fontSize: 13,
                            fontWeight: 800,
                          }}
                        >
                          철거 전 BEFORE
                        </span>
                      </div>
                    </div>

                    <div style={{ minWidth: 0 }}>
                      <div
                        style={{
                          position: "relative",
                          width: "100%",
                          aspectRatio: "4 / 3",
                          overflow: "hidden",
                          background: "#eeeeee",
                          borderRadius: 8,
                        }}
                      >
                        <Image
                          src={item.after}
                          alt={item.afterAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          style={{
                            objectFit: "cover",
                          }}
                        />

                        <span
                          style={{
                            position: "absolute",
                            top: 12,
                            left: 12,
                            zIndex: 2,
                            background: "#ff7900",
                            color: "#ffffff",
                            padding: "8px 14px",
                            borderRadius: 5,
                            fontSize: 13,
                            fontWeight: 800,
                          }}
                        >
                          철거 후 AFTER
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 견적 상담 안내 */}

        <section
          className="section"
          aria-labelledby="estimate-heading"
        >
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                ESTIMATE
              </span>

              <h2 id="estimate-heading">
                철거 견적 상담 안내
              </h2>

              <p>
                철거 면적, 작업 범위, 현장 조건에 따라
                견적이 달라질 수 있습니다.
              </p>
            </div>

            <div
              className="card-grid"
              style={fullWidthStyle}
            >
              {ESTIMATE_STEPS.map((item) => (
                <article
                  key={item.title}
                  className="card"
                  style={cardStyle}
                >
                  <div
                    className="card-body"
                    style={cardBodyStyle}
                  >
                    <h3 style={cardTitleStyle}>
                      {item.title}
                    </h3>

                    <p style={cardTextStyle}>
                      {item.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 지역별 철거 상담 */}

        <section
          id="regions"
          className="section section-alt"
          aria-labelledby="regions-heading"
        >
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                SERVICE AREAS
              </span>

              <h2 id="regions-heading">
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
                  width: "100%",
                  minWidth: 0,
                }}
              >
                <h3
                  style={{
                    marginBottom: 16,
                    wordBreak: "keep-all",
                  }}
                >
                  {region.name} 철거
                </h3>

                <div
                  className="region-grid"
                  style={fullWidthStyle}
                >
                  {region.districts.map(
                    ([district, slug]) => (
                      <Link
                        key={`${region.slug}-${slug}`}
                        href={`/services/demolition/${region.slug}/${slug}`}
                        className="region-link"
                        style={{
                          minWidth: 0,
                          maxWidth: "100%",
                          wordBreak: "keep-all",
                          overflowWrap: "break-word",
                          textAlign: "center",
                        }}
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

        {/* 최종 견적 문의 */}

        <section
          id="contact"
          className="contact-section"
          aria-labelledby="contact-heading"
        >
          <div className="container">
            <h2 id="contact-heading">
              DH 종합철거 견적 문의
            </h2>

            <p>
              철거 현장의 위치, 작업 범위,
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
                주택·아파트·상가·사무실 철거
                및 원상복구 상담
              </p>

              <p>
                서울·경기·인천·충남·충북
                그 외 지역 문의
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
