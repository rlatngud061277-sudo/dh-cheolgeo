
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

const DESCRIPTION =
  "DH 종합철거는 경기·충남·충북 지역의 주택·아파트·상가·사무실 철거, 내부철거 및 원상복구를 상담합니다.";

export const metadata: Metadata = {
  title: {
    absolute: "DH 종합철거 | 경기·충남·충북 철거업체",
  },
  description: DESCRIPTION,
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    siteName: COMPANY,
    url: SITE_URL,
    title: "DH 종합철거 | 철거 전문업체",
    description: DESCRIPTION,
    images: [
      {
        url: `${SITE_URL}/IMG_1102.png`,
        alt: COMPANY,
      },
    ],
  },
};

const SERVICES = [
  {
    title: "주택·아파트 철거",
    slug: "house",
    image: "/IMG_2380.jpeg",
    desc: "주택 및 아파트 리모델링을 위한 주방, 벽체, 천장, 바닥 등 내부 시설물 철거 상담.",
  },
  {
    title: "상가·매장 철거",
    slug: "commercial",
    image: "/IMG_2386.jpeg",
    desc: "음식점과 상가의 기존 인테리어, 주방 설비 및 마감재 철거 상담.",
  },
  {
    title: "사무실 철거",
    slug: "office",
    image: "/IMG_2385.jpeg",
    desc: "사무실 이전과 리모델링을 위한 칸막이, 천장 및 내부 시설물 철거 상담.",
  },
  {
    title: "내부·부분 철거",
    slug: "interior",
    image: "/IMG_2384.jpeg",
    desc: "필요한 범위의 천장, 벽체, 바닥 및 내부 마감재 부분 철거 상담.",
  },
  {
    title: "원상복구",
    slug: "restoration",
    image: "/IMG_2382.jpeg",
    desc: "임대차 계약 종료와 매장 이전 등에 따른 철거 및 원상복구 상담.",
  },
];

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

const REGIONS = [
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
    name: "충청남도",
    slug: "chungnam",
    districts: [
      ["천안시", "cheonan"],
      ["아산시", "asan"],
      ["공주시", "gongju"],
      ["당진시", "dangjin"],
      ["예산군", "yesan"],
      ["홍성군", "hongseong"],
      ["청양군", "cheongyang"],
    ],
  },
  {
    name: "충청북도",
    slug: "chungbuk",
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

export default function Home() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY,
    url: SITE_URL,
    logo: `${SITE_URL}/IMG_1102.png`,
    telephone: PHONE_DISPLAY,
    description: DESCRIPTION,
    areaServed: REGIONS.map((region) => region.name),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
        }}
      />

      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand">
            <span className="brand-mark">DH</span>
            종합철거
          </Link>

          <nav className="nav-links" aria-label="주요 메뉴">
            <a href="#services">철거 서비스</a>
            <a href="#cases">철거 사례</a>
            <a href="#regions">출장 지역</a>
            <a href="#contact">견적 문의</a>
          </nav>
        </div>
      </header>

      <main>
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
                경기 전역·충남 주요 지역·충북 인접 지역
              </p>

              <div className="hero-actions">
                <a href={PHONE_LINK} className="btn btn-primary">
                  전화 상담 {PHONE_DISPLAY}
                </a>
                <a href="#services" className="btn btn-outline">
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

        <section id="services" className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">OUR SERVICES</span>
              <h2>DH 종합철거 서비스</h2>
              <p>
                철거 대상과 현장 조건에 맞는 작업 범위를
                확인하고 상담합니다.
              </p>
            </div>

            <div className="card-grid">
              {SERVICES.map((service) => (
                <article className="card" key={service.slug}>
                  <Image
                    src={service.image}
                    alt={`${service.title} 관련 현장 사진`}
                    width={800}
                    height={600}
                    className="card-image"
                    style={{ objectFit: "cover" }}
                  />

                  <div className="card-body">
                    <h3>{service.title}</h3>
                    <p>{service.desc}</p>
                    <Link
                      href={`/services/${service.slug}`}
                      className="card-link"
                    >
                      서비스 자세히 보기 →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="cases" className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">BEFORE & AFTER</span>
              <h2>철거 전후 사진</h2>
              <p>
                철거 전후 현장 상태를 사진으로 확인할 수
                있습니다.
              </p>
            </div>

            <div className="card-grid">
              {BEFORE_AFTER.map((item) => (
                <article className="card" key={item.title}>
                  <div className="card-body">
                    <h3>{item.title}</h3>
                  </div>

                  <div style={{ padding: 16 }}>
                    <p style={{ fontWeight: 800 }}>철거 전</p>
                    <Image
                      src={item.before}
                      alt={`${item.title} 철거 전`}
                      width={800}
                      height={600}
                      className="card-image"
                    />

                    <p style={{ fontWeight: 800, marginTop: 20 }}>
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

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">ESTIMATE</span>
              <h2>철거 견적 상담 안내</h2>
              <p>
                현장 조건과 철거 범위에 따라 견적이
                달라질 수 있습니다.
              </p>
            </div>

            <div className="card-grid">
              {ESTIMATE_STEPS.map((step) => (
                <article className="card" key={step.title}>
                  <div className="card-body">
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="regions" className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">SERVICE AREAS</span>
              <h2>지역별 철거 상담</h2>
              <p>
                경기 전역과 충남·충북 일부 지역의 철거
                상담을 안내합니다.
              </p>
            </div>

            {REGIONS.map((region) => (
              <div
                key={region.slug}
                style={{ marginBottom: 40 }}
              >
                <h3>{region.name} 철거</h3>

                <div className="region-grid">
                  {region.districts.map(([name, slug]) => (
                    <Link
                      key={slug}
                      href={`/services/demolition/${region.slug}/${slug}`}
                      className="region-link"
                    >
                      {name} 철거
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <h2>DH 종합철거 견적 문의</h2>
            <p>
              현장 위치, 철거 범위, 사진과 희망 일정을
              준비해 주시면 상담에 도움이 됩니다.
            </p>

            <div className="contact-actions">
              <a href={PHONE_LINK} className="btn btn-primary">
                전화 상담 {PHONE_DISPLAY}
              </a>
              <a href="#regions" className="btn btn-outline">
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
              <p>사업자등록번호: 882-06-03153</p>
              <p>
                주택·아파트·상가·사무실 철거 및 원상복구
              </p>
              <p>경기·충남·충북 지역 철거 상담</p>
              <p>
                전화: <a href={PHONE_LINK}>{PHONE_DISPLAY}</a>
              </p>
            </div>
          </div>
          <div className="footer-info">
            <p>© {new Date().getFullYear()} {COMPANY}.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
