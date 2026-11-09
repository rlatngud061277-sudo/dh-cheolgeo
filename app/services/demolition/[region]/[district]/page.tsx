
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const SITE_URL = "https://www.dhcheolgeo.com";
const COMPANY = "DH 종합철거";
const OWNER = "이덕재";
const PHONE = "01054731244";
const PHONE_DISPLAY = "010-5473-1244";

const REGIONS = {
  gyeonggi: {
    name: "경기도",
    shortName: "경기",
    districts: {
      suwon: "수원시",
      seongnam: "성남시",
      goyang: "고양시",
      yongin: "용인시",
      hwaseong: "화성시",
      pyeongtaek: "평택시",
      ansan: "안산시",
      anyang: "안양시",
      bucheon: "부천시",
      siheung: "시흥시",
      gimpo: "김포시",
      gwangmyeong: "광명시",
      gunpo: "군포시",
      uiwang: "의왕시",
      gwacheon: "과천시",
      gwangju: "광주시",
      hanam: "하남시",
      namyangju: "남양주시",
      guri: "구리시",
      uijeongbu: "의정부시",
      paju: "파주시",
      yangju: "양주시",
      dongducheon: "동두천시",
      pocheon: "포천시",
      icheon: "이천시",
      yeoju: "여주시",
      anseong: "안성시",
      osan: "오산시",
      yangpyeong: "양평군",
      gapyeong: "가평군",
      yeoncheon: "연천군",
    },
  },
  chungnam: {
    name: "충청남도",
    shortName: "충남",
    districts: {
      cheonan: "천안시",
      asan: "아산시",
      gongju: "공주시",
      dangjin: "당진시",
      yesan: "예산군",
      hongseong: "홍성군",
      cheongyang: "청양군",
    },
  },
  chungbuk: {
    name: "충청북도",
    shortName: "충북",
    districts: {
      cheongju: "청주시",
      jincheon: "진천군",
      jeungpyeong: "증평군",
      eumseong: "음성군",
    },
  },
} as const;

type RegionSlug = keyof typeof REGIONS;

type PageParams = {
  region: string;
  district: string;
};

function getLocation(regionSlug: string, districtSlug: string) {
  if (!Object.prototype.hasOwnProperty.call(REGIONS, regionSlug)) {
    return null;
  }

  const region = REGIONS[regionSlug as RegionSlug];
  const districts: Record<string, string> = region.districts;
  const districtName = districts[districtSlug];

  if (!districtName) return null;

  return {
    regionName: region.name,
    shortName: region.shortName,
    districtName,
    locationName: `${region.shortName} ${districtName}`,
  };
}

export function generateStaticParams() {
  return Object.entries(REGIONS).flatMap(([region, data]) =>
    Object.keys(data.districts).map((district) => ({
      region,
      district,
    }))
  );
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>;
}): Promise<Metadata> {
  const { region, district } = await params;
  const location = getLocation(region, district);

  if (!location) return {};

  const name = location.locationName;
  const url =
    `${SITE_URL}/services/demolition/${region}/${district}`;

  const title = `${name} 철거업체 | ${COMPANY}`;

  const description =
    `${name} 철거업체 DH 종합철거. ` +
    "주택·아파트·상가·사무실 철거, 내부철거 및 원상복구 견적 상담 안내.";

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
          url: `${SITE_URL}/IMG_1102.png`,
          alt: COMPANY,
        },
      ],
    },
  };
}

const SERVICES = [
  {
    title: "주택·아파트 철거",
    slug: "house",
    image: "/IMG_2380.jpeg",
    desc: "주택과 아파트 리모델링을 위한 주방 가구, 벽체 마감재, 천장 및 바닥 등 내부 시설물의 철거 범위를 확인합니다.",
    detail:
      "공동주택의 경우 관리사무소 공사 규정, 엘리베이터 보양, 작업 가능 시간과 폐기물 반출 동선을 사전에 확인하는 것이 중요합니다.",
  },
  {
    title: "상가·매장 철거",
    slug: "commercial",
    image: "/IMG_2386.jpeg",
    desc: "음식점, 카페, 매장 등 상업시설의 주방 설비, 기존 인테리어, 벽체 및 바닥 마감재 철거를 상담합니다.",
    detail:
      "임대차계약서의 원상복구 범위, 공용부 사용 조건, 기존 설비 철거 여부와 폐기물 처리 범위를 확인해야 합니다.",
  },
  {
    title: "사무실 철거",
    slug: "office",
    image: "/IMG_2385.jpeg",
    desc: "사무실 이전과 리모델링을 위한 칸막이, 천장, 바닥재 및 내부 시설물 철거 범위를 확인합니다.",
    detail:
      "전기·통신 설비와 냉난방 설비의 유지 여부를 구분하고, 건물 관리 규정 및 작업 가능 시간을 확인합니다.",
  },
  {
    title: "내부·부분 철거",
    slug: "interior",
    image: "/IMG_2384.jpeg",
    desc: "벽체, 바닥, 천장 등 필요한 부분만 철거하는 작업의 범위와 현장 조건을 상담합니다.",
    detail:
      "철거 대상이 구조체인지 비내력벽인지 확인하고, 매립 배관과 전기 설비의 위치를 사전에 검토해야 합니다.",
  },
  {
    title: "원상복구",
    slug: "restoration",
    image: "/IMG_2382.jpeg",
    desc: "상가와 사무실의 계약 종료 또는 이전에 따른 기존 시설물 철거와 원상복구 범위를 상담합니다.",
    detail:
      "임대인과 합의한 복구 기준, 잔존 설비의 처리 여부, 계약 종료 일정 등을 기준으로 작업 범위를 정리합니다.",
  },
];

const FAQ = [
  {
    question: "철거 견적은 어떻게 문의하나요?",
    answer:
      "현장 주소, 건물 유형, 철거 범위, 면적, 사진과 희망 일정을 준비한 뒤 전화로 문의해 주세요.",
  },
  {
    question: "철거 비용은 어떻게 결정되나요?",
    answer:
      "철거 대상과 면적, 작업 난이도, 장비 접근성, 폐기물 처리량 및 현장 조건에 따라 달라집니다.",
  },
  {
    question: "부분 철거도 상담할 수 있나요?",
    answer:
      "벽체, 바닥, 천장, 주방 설비 등 필요한 범위의 부분 철거도 현장 조건을 확인해 상담합니다.",
  },
  {
    question: "철거 전 확인할 사항은 무엇인가요?",
    answer:
      "관리사무소 공사 규정, 작업 가능 시간, 철거 대상, 설비 차단 여부와 폐기물 반출 조건을 확인하는 것이 좋습니다.",
  },
];

export default async function RegionPage({
  params,
}: {
  params: Promise<PageParams>;
}) {
  const { region, district } = await params;
  const location = getLocation(region, district);

  if (!location) notFound();

  const name = location.locationName;
  const pageUrl =
    `${SITE_URL}/services/demolition/${region}/${district}`;

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
        name: `${name} 철거`,
        item: pageUrl,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${name} 철거 상담`,
    description:
      `${name} 주택·아파트·상가·사무실 철거 및 원상복구 상담`,
    serviceType: "철거 및 원상복구",
    url: pageUrl,
    provider: {
      "@type": "Organization",
      name: COMPANY,
      url: SITE_URL,
      telephone: PHONE_DISPLAY,
    },
    areaServed: {
      "@type": "AdministrativeArea",
      name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            breadcrumbSchema,
            serviceSchema,
          ]).replace(/</g, "\\u003c"),
        }}
      />

      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand">
            <span className="brand-mark">DH</span>
            종합철거
          </Link>

          <nav className="nav-links" aria-label="주요 메뉴">
            <Link href="/">홈</Link>
            <Link href="/#services">철거 서비스</Link>
            <Link href="/#regions">출장 지역</Link>
            <Link href="/#contact">견적 문의</Link>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="container">
            <span className="hero-label">
              DH DEMOLITION & REMOVAL
            </span>

            <h1>
              {name} 철거업체
              <br />
              <strong>DH 종합철거</strong>
            </h1>

            <p>
              {name} 주택·아파트 철거, 상가 철거,
              사무실 철거, 내부철거 및 원상복구 상담
            </p>

            <p>
              현장 위치와 철거 범위를 확인하여 작업 가능
              여부와 견적을 안내합니다.
            </p>

            <div className="hero-actions">
              <a
                href={`tel:${PHONE}`}
                className="btn btn-primary"
              >
                전화 상담 {PHONE_DISPLAY}
              </a>
              <Link
                href="/#regions"
                className="btn btn-outline"
              >
                다른 지역 확인
              </Link>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                DEMOLITION SERVICES
              </span>
              <h2>{name} 철거 서비스 안내</h2>
              <p>
                철거 대상과 현장 조건에 따라 필요한 작업
                범위를 확인합니다.
              </p>
            </div>

            <div className="card-grid">
              {SERVICES.map((service) => (
                <article
                  className="card"
                  key={service.slug}
                >
                  <Image
                    src={service.image}
                    alt={`${name} ${service.title} 관련 현장 사진`}
                    width={800}
                    height={600}
                    className="card-image"
                  />

                  <div className="card-body">
                    <h3>
                      {name} {service.title}
                    </h3>
                    <p>{service.desc}</p>
                    <p>{service.detail}</p>

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

        <section className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                ESTIMATE GUIDE
              </span>
              <h2>{name} 철거 견적 안내</h2>
              <p>
                견적 문의 전에 아래 사항을 확인해 주세요.
              </p>
            </div>

            <div className="card-grid">
              {[
                {
                  title: "현장 위치",
                  desc: `${name} 내 현장 주소와 건물 유형을 알려주세요.`,
                },
                {
                  title: "철거 범위",
                  desc: "철거 대상, 면적, 유지할 시설물을 구분해 주세요.",
                },
                {
                  title: "현장 조건",
                  desc: "엘리베이터, 주차, 장비 진입 및 작업 가능 시간을 확인해 주세요.",
                },
                {
                  title: "현장 사진",
                  desc: "철거할 공간의 전체 사진과 세부 사진을 준비해 주세요.",
                },
                {
                  title: "희망 일정",
                  desc: "작업 희망일과 철거 완료가 필요한 날짜를 알려주세요.",
                },
              ].map((item) => (
                <article className="card" key={item.title}>
                  <div className="card-body">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">FAQ</span>
              <h2>{name} 철거 자주 묻는 질문</h2>
            </div>

            <div className="card-grid">
              {FAQ.map((item) => (
                <article className="card" key={item.question}>
                  <div className="card-body">
                    <h3>{item.question}</h3>
                    <p>{item.answer}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section">
          <div className="container">
            <h2>{name} 철거 견적 문의</h2>
            <p>
              현장 주소, 철거 범위, 사진과 희망 일정을
              준비해 주시면 상담에 도움이 됩니다.
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

      <footer className="site-footer">
        <div className="container footer-inner">
          <div>
            <h3>{COMPANY}</h3>
            <div className="footer-info">
              <p>대표자: {OWNER}</p>
              <p>사업자등록번호: 882-06-03153</p>
              <p>{name} 철거 상담</p>
              <p>
                주택·아파트·상가·사무실 철거 및 원상복구
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
              © {new Date().getFullYear()} {COMPANY}.
            </p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
