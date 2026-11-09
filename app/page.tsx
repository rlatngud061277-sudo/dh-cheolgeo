
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

const SITE_URL = "https://www.dhcheolgeo.com";
const COMPANY = "DH 종합철거";
const OWNER = "이덕재";
const PHONE = "01054731244";
const PHONE_DISPLAY = "010-5473-1244";
const PHONE_LINK = `tel:${PHONE}`;
const LOGO = "/IMG_1102.png";

export const metadata: Metadata = {
  title: {
    absolute:
      "DH 종합철거 | 경기·충남 철거업체·상가철거·원상복구",
  },
  description:
    "DH 종합철거. 경기 전역, 충남 전역 및 천안 인근 충북 지역의 주택철거, 아파트철거, 상가철거, 사무실철거, 내부철거, 원상복구 상담. 철거 전후 사진과 지역별 상담 안내.",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: COMPANY,
    url: SITE_URL,
    title: "DH 종합철거 | 경기·충남 철거업체",
    description:
      "주택·아파트·상가·사무실 철거 및 원상복구 상담. 경기·충남 및 천안 인근 충북 지역.",
    images: [
      {
        url: LOGO,
        alt: "DH 종합철거 로고",
      },
    ],
  },
};

const IMAGES = {
  apartmentBefore: "/IMG_2380.jpeg",
  apartmentAfter: "/IMG_2381.jpeg",
  commercialBefore: "/IMG_2383.jpeg",
  commercialAfter: "/IMG_2382.jpeg",
  interior: "/IMG_2384.jpeg",
  office: "/IMG_2385.jpeg",
  kitchen: "/IMG_2386.jpeg",
};

const SERVICES = [
  {
    title: "주택·아파트 철거",
    slug: "house",
    image: IMAGES.apartmentAfter,
    alt: "아파트 주방 시설물 철거 후 현장",
    desc:
      "주택과 아파트 리모델링 전 주방, 바닥, 벽체, 천장 등 기존 시설물의 철거 범위를 확인합니다.",
  },
  {
    title: "상가·매장 철거",
    slug: "commercial",
    image: IMAGES.kitchen,
    alt: "상가 주방 내부 시설물 철거 현장",
    desc:
      "음식점, 카페, 매장 등 상업시설의 기존 인테리어, 주방 설비 및 내부 시설물 철거를 상담합니다.",
  },
  {
    title: "사무실 철거",
    slug: "office",
    image: IMAGES.office,
    alt: "사무실 천장 및 내부 철거 현장",
    desc:
      "사무실 이전이나 리모델링을 위한 칸막이, 천장, 바닥재 및 기존 시설물 철거를 상담합니다.",
  },
  {
    title: "내부·부분 철거",
    slug: "interior",
    image: IMAGES.interior,
    alt: "상업시설 내부 천장 및 마감재 철거 현장",
    desc:
      "벽체, 바닥, 천장 등 필요한 공간의 부분 철거를 상담하고 유지할 시설물과 철거 대상을 구분합니다.",
  },
  {
    title: "원상복구",
    slug: "restoration",
    image: IMAGES.commercialAfter,
    alt: "상업시설 내부 철거 후 현장",
    desc:
      "상가 및 사무실 임대차 종료에 따른 기존 시설물 철거와 계약 기준에 맞춘 원상복구 범위를 상담합니다.",
  },
];

const BEFORE_AFTER = [
  {
    id: "apartment",
    title: "아파트 주방 철거 전후",
    description:
      "주방 가구와 기존 시설물 철거 전후 공간 비교",
    before: IMAGES.apartmentBefore,
    after: IMAGES.apartmentAfter,
  },
  {
    id: "commercial",
    title: "상업시설 내부 철거 전후",
    description:
      "상업시설 기존 인테리어 및 내부 시설물 철거 전후 비교",
    before: IMAGES.commercialBefore,
    after: IMAGES.commercialAfter,
  },
];

/* =====================================
   출장 지역
   경기 전체 + 충남 전체 + 충북 인근
===================================== */

const REGIONS = [
  {
    name: "경기도",
    slug: "gyeonggi",
    description:
      "경기도 31개 시·군 철거 상담 지역",
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
    description:
      "천안·아산을 포함한 충남 15개 시·군 철거 상담 지역",
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
    description:
      "천안 인근 충북 지역 철거 상담",
    districts: [
      ["청주시", "cheongju"],
      ["진천군", "jincheon"],
      ["증평군", "jeungpyeong"],
      ["음성군", "eumseong"],
    ],
  },
] as const;

const ESTIMATE_STEPS = [
  {
    title: "01. 현장 위치",
    desc:
      "철거 현장의 주소와 건물 유형을 알려주세요.",
  },
  {
    title: "02. 철거 범위",
    desc:
      "철거할 공간의 면적과 대상 시설물을 알려주세요.",
  },
  {
    title: "03. 현장 사진",
    desc:
      "철거 대상 사진과 작업 희망 날짜를 준비해 주세요.",
  },
];

const fullWidth: CSSProperties = {
  width: "100%",
  minWidth: 0,
  maxWidth: "100%",
};

const cardStyle: CSSProperties = {
  ...fullWidth,
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
};

const bodyStyle: CSSProperties = {
  ...fullWidth,
  display: "flex",
  flex: 1,
  flexDirection: "column",
  alignItems: "flex-start",
  textAlign: "left",
};

const textStyle: CSSProperties = {
  width: "100%",
  wordBreak: "keep-all",
  overflowWrap: "break-word",
  lineHeight: 1.8,
};

function Photo({
  src,
  alt,
  height = 230,
}: {
  src: string;
  alt: string;
  height?: number;
}) {
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height,
        overflow: "hidden",
        background: "#eeeeee",
      }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

export default function Home() {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY,
    url: SITE_URL,
    telephone: PHONE_DISPLAY,
    logo: `${SITE_URL}${LOGO}`,
    description:
      "경기·충남 및 천안 인근 충북 지역의 주택·아파트·상가·사무실 철거 및 원상복구 상담",
    areaServed: REGIONS.map((region) => region.name),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />

      <header className="site-header">
        <div className="container header-inner">
          <Link
            href="/"
            className="brand"
            aria-label="DH 종합철거 홈페이지"
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
        {/* 대표 화면 */}

        <section className="hero">
          <div className="container hero-inner">
            <div style={fullWidth}>
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
                경기 전역 · 충남 전역
                <br />
                천안 인근 충북 지역
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

            <div
              className="hero-image"
              style={fullWidth}
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
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* 서비스 */}

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
                철거 목적과 현장 조건에 맞춰
                필요한 작업 범위를 상담합니다.
              </p>
            </div>

            <div className="card-grid" style={fullWidth}>
              {SERVICES.map((service) => (
                <article
                  key={service.slug}
                  className="card"
                  style={cardStyle}
                >
                  <Photo
                    src={service.image}
                    alt={service.alt}
                  />

                  <div
                    className="card-body"
                    style={bodyStyle}
                  >
                    <h3 style={textStyle}>
                      {service.title}
                    </h3>

                    <p style={textStyle}>
                      {service.desc}
                    </p>

                    <Link
                      href={`/services/${service.slug}`}
                      className="card-link"
                      style={{
                        marginTop: "auto",
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

        {/* 철거 전후 */}

        <section
          id="before-after"
          className="section section-alt"
        >
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                BEFORE & AFTER
              </span>

              <h2>철거 전후 비교 사진</h2>

              <p>
                기존 시설물 철거 전과
                철거 후 공간을 비교해 보세요.
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
                    width: "100%",
                    minWidth: 0,
                    overflow: "hidden",
                  }}
                >
                  <div style={{ padding: 24 }}>
                    <h3 style={textStyle}>
                      {item.title}
                    </h3>
                    <p style={textStyle}>
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
                    {[
                      {
                        label: "철거 전 BEFORE",
                        src: item.before,
                        color: "#222222",
                      },
                      {
                        label: "철거 후 AFTER",
                        src: item.after,
                        color: "#ff7900",
                      },
                    ].map((photo) => (
                      <div
                        key={photo.label}
                        style={{
                          position: "relative",
                          width: "100%",
                          aspectRatio: "4 / 3",
                          overflow: "hidden",
                          borderRadius: 8,
                          background: "#eeeeee",
                        }}
                      >
                        <Image
                          src={photo.src}
                          alt={`${item.title} ${photo.label}`}
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
                            background: photo.color,
                            color: "#ffffff",
                            padding: "8px 14px",
                            borderRadius: 5,
                            fontSize: 13,
                            fontWeight: 800,
                          }}
                        >
                          {photo.label}
                        </span>
                      </div>
                    ))}
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
                철거 면적, 작업 범위, 현장 조건에
                따라 견적이 달라질 수 있습니다.
              </p>
            </div>

            <div className="card-grid" style={fullWidth}>
              {ESTIMATE_STEPS.map((item) => (
                <article
                  key={item.title}
                  className="card"
                  style={cardStyle}
                >
                  <div
                    className="card-body"
                    style={bodyStyle}
                  >
                    <h3 style={textStyle}>
                      {item.title}
                    </h3>
                    <p style={textStyle}>
                      {item.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 출장 지역 */}

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
                경기 전역 · 충남 전역
                <br />
                천안 인근 충북 지역
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
                    marginBottom: 10,
                    wordBreak: "keep-all",
                  }}
                >
                  {region.name} 철거
                </h3>

                <p
                  style={{
                    marginBottom: 18,
                    ...textStyle,
                  }}
                >
                  {region.description}
                </p>

                <div
                  className="region-grid"
                  style={fullWidth}
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

        {/* 상담 */}

        <section
          id="contact"
          className="contact-section"
        >
          <div className="container">
            <h2>DH 종합철거 견적 문의</h2>

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
                경기 전역 · 충남 전역 ·
                천안 인근 충북 지역
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
