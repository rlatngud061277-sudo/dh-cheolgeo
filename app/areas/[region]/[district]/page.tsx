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
  serviceRegionUrl,
  type ServiceSlug,
} from "../../../../lib/dh-data";
import {
  SERVICE_SEO,
  searchName,
  officialName,
  localParagraphs,
  nearbyDistricts,
  areaUrl,
  businessSchema,
  faqSchema,
} from "../../../../lib/dh-local";

/* =====================================
   지역 대표 페이지
   "천안 철거업체" 같은 지역+철거 검색어 전용
   /areas/chungnam/cheonan
===================================== */

type Props = {
  params: Promise<{ region: string; district: string }>;
};

export function generateStaticParams() {
  return getAllLocations();
}

export const dynamicParams = false;

const SERVICE_KEYS = Object.keys(SERVICES) as ServiceSlug[];

function buildText(region: string, district: string) {
  const location = getLocation(region, district);
  if (!location) return null;

  const search = searchName(region, location.districtName);
  const official = officialName(region, location.districtName);

  return {
    location,
    search,
    official,
    title: `${search} 철거업체 | ${location.fullName} 아파트·상가·사무실 철거·원상복구 - ${COMPANY}`,
    description:
      `${official} 철거 전문 ${COMPANY}. 아파트·주택 인테리어 철거, 상가·음식점 폐업 철거, ` +
      `사무실 칸막이 철거, 내부 부분 철거, 원상복구까지 현장 사진으로 먼저 견적 상담합니다. ☎ ${PHONE_DISPLAY}`,
    url: `${SITE_URL}${areaUrl(region, district)}`,
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { region, district } = await params;
  const text = buildText(region, district);

  if (!text) {
    return { robots: { index: false, follow: false } };
  }

  return {
    title: { absolute: text.title },
    description: text.description,
    keywords: [
      `${text.search} 철거`,
      `${text.search} 철거업체`,
      `${text.search} 원상복구`,
      `${text.search} 아파트 철거`,
      `${text.search} 상가 철거`,
    ],
    alternates: { canonical: text.url },
    robots: { index: true, follow: true },
    openGraph: {
      type: "website",
      locale: "ko_KR",
      siteName: COMPANY,
      url: text.url,
      title: text.title,
      description: text.description,
      images: [
        {
          url: `${SITE_URL}/IMG_2382.jpeg`,
          alt: `${text.location.fullName} 철거 작업 참고 사진`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: text.title,
      description: text.description,
      images: [`${SITE_URL}/IMG_2382.jpeg`],
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { region, district } = await params;
  const text = buildText(region, district);

  if (!text) {
    return notFound();
  }

  const { location, search, official, url } = text;
  const local = localParagraphs(region, district, location.districtName);
  const nearby = nearbyDistricts(region, district, 10);

  const faqs = [
    {
      question: `${search} 철거 출장 가능한가요?`,
      answer: `네, ${official} 전 지역 철거 상담이 가능합니다. 현장 주소와 사진을 보내주시면 작업 가능 일정과 범위를 안내해드립니다.`,
    },
    {
      question: `${search} 철거 견적은 어떻게 받나요?`,
      answer:
        "철거할 공간 전체 사진, 면적(평수), 층수와 엘리베이터 유무, 희망 일정을 알려주시면 폐기물 양과 인원을 계산해 예상 견적을 드립니다.",
    },
    {
      question: "철거 후 폐기물 처리도 포함되나요?",
      answer:
        "철거 폐기물 반출·처리를 포함해 견적을 드리는 것이 기본입니다. 건물 반출 동선과 차량 주차 가능 여부를 함께 확인합니다.",
    },
    {
      question: "아파트 철거 전 관리사무소 신고가 필요한가요?",
      answer:
        "대부분의 아파트는 공사 전 관리사무소 신고와 이웃 동의, 엘리베이터 보양이 필요합니다. 단지마다 규정이 달라 미리 확인하시길 권해드립니다.",
    },
  ];

  const schema = [
    businessSchema(official),
    faqSchema(faqs),
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: `${search} 철거`, item: url },
      ],
    },
  ];

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

          <nav className="nav-links">
            <Link href="/">홈</Link>
            <a href="#services">철거 종류</a>
            <a href="#contact">전화 상담</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <span className="hero-label">{official} 철거</span>

            <h1>
              {location.fullName} 철거업체
              <br />
              <strong>{COMPANY}</strong>
            </h1>

            <p>
              {official} 아파트·주택 인테리어 철거부터 상가·음식점 폐업 철거,
              사무실 칸막이 철거, 퇴거 원상복구까지 한 번에 상담합니다. 현장
              사진과 주소를 보내주시면 철거 범위와 폐기물 반출 방법, 예상
              견적을 안내해드립니다.
            </p>

            <div className="hero-actions">
              <a href={`tel:${PHONE}`} className="btn btn-primary">
                전화 상담 {PHONE_DISPLAY}
              </a>
              <a href="#services" className="btn btn-outline">
                철거 종류 보기
              </a>
            </div>
          </div>
        </section>

        {/* 서비스별 지역 페이지 */}

        <section id="services" className="section" style={{ scrollMarginTop: 90 }}>
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">SERVICES</span>
              <h2>{search} 철거 종류</h2>
              <p>필요한 철거를 누르면 {search} 지역 작업 안내와 견적 기준을 볼 수 있습니다.</p>
            </div>

            <div className="card-grid">
              {SERVICE_KEYS.map((key) => (
                <Link
                  key={key}
                  href={serviceRegionUrl(key, region, district)}
                  className="card"
                >
                  <div
                    style={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "16 / 10",
                    }}
                  >
                    <Image
                      src={SERVICES[key].image}
                      alt={`${location.fullName} ${SERVICES[key].title} 참고 사진`}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="card-body">
                    <h3>
                      {search} {SERVICE_SEO[key].keyword}
                    </h3>
                    <p>{SERVICES[key].description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 지역 특징 */}

        <section className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">LOCAL GUIDE</span>
              <h2>{location.fullName} 철거 현장 특징</h2>
            </div>

            {local.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </section>

        {/* FAQ */}

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">FAQ</span>
              <h2>{search} 철거 자주 묻는 질문</h2>
            </div>

            <div style={{ display: "grid", gap: 14 }}>
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
                  <summary style={{ cursor: "pointer", fontWeight: 800 }}>
                    {faq.question}
                  </summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 근처 지역 */}

        <section className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">SERVICE AREA</span>
              <h2>{search} 근처 철거 지역</h2>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {nearby.map((item) => (
                <Link
                  key={item.slug}
                  href={areaUrl(region, item.slug)}
                  className="btn btn-outline"
                >
                  {searchName(region, item.name)} 철거
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container">
            <h2>{search} 철거 견적 문의</h2>
            <p>현장 주소와 철거 범위, 사진과 희망 일정을 알려주세요.</p>
            <div className="contact-actions">
              <a href={`tel:${PHONE}`} className="btn btn-primary">
                전화 상담 {PHONE_DISPLAY}
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
              <p>사업자등록번호: {BUSINESS_NUMBER}</p>
              <p>{official} 철거 상담</p>
              <p>
                전화: <a href={`tel:${PHONE}`}>{PHONE_DISPLAY}</a>
              </p>
            </div>
          </div>
          <div className="footer-info">
            <p>© {new Date().getFullYear()} {COMPANY}.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
