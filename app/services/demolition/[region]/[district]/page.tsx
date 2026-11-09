
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

const SITE = "https://www.dhcheolgeo.com";
const COMPANY = "DH 종합철거";
const OWNER = "이덕재";
const PHONE = "010-5473-1244";
const TEL = "tel:01054731244";

const REGIONS = {
  gyeonggi: {
    name: "경기도",
    short: "경기",
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
    short: "충남",
    districts: {
      cheonan: "천안시",
      asan: "아산시",
      gongju: "공주시",
      boryeong: "보령시",
      seosan: "서산시",
      nonsan: "논산시",
      gyeryong: "계룡시",
      dangjin: "당진시",
      geumsan: "금산군",
      buyeo: "부여군",
      seocheon: "서천군",
      cheongyang: "청양군",
      hongseong: "홍성군",
      yesan: "예산군",
      taean: "태안군",
    },
  },
  chungbuk: {
    name: "충청북도",
    short: "충북",
    districts: {
      cheongju: "청주시",
      jincheon: "진천군",
      jeungpyeong: "증평군",
      eumseong: "음성군",
    },
  },
} as const;

type RegionKey = keyof typeof REGIONS;

type Params = Promise<{
  region: string;
  district: string;
}>;

function getLocation(
  regionSlug: string,
  districtSlug: string
) {
  if (
    !Object.prototype.hasOwnProperty.call(
      REGIONS,
      regionSlug
    )
  ) {
    return null;
  }

  const region = REGIONS[regionSlug as RegionKey];

  const districts =
    region.districts as Record<string, string>;

  const districtName = districts[districtSlug];

  if (!districtName) return null;

  return {
    regionSlug,
    districtSlug,
    regionName: region.name,
    short: region.short,
    districtName,
    name: `${region.short} ${districtName}`,
  };
}

export function generateStaticParams() {
  return Object.entries(REGIONS).flatMap(
    ([region, data]) =>
      Object.keys(data.districts).map(
        (district) => ({
          region,
          district,
        })
      )
  );
}

export const dynamicParams = false;

const SERVICES = [
  {
    slug: "house",
    name: "주택·아파트 철거",
    image: "/IMG_2381.jpeg",
    alt: "아파트 주방 시설물 철거 후 모습",
    desc:
      "아파트와 주택 리모델링 전 기존 주방 가구, 바닥재, 벽체 마감재, 천장 및 내부 시설물의 철거 범위를 확인합니다.",
    detail:
      "아파트 내부철거는 관리사무소 공사 규정, 엘리베이터 보양, 소음 발생 시간과 폐기물 반출 동선을 사전에 확인하는 것이 중요합니다.",
  },
  {
    slug: "commercial",
    name: "상가·매장 철거",
    image: "/IMG_2386.jpeg",
    alt: "음식점 상가 주방 내부 철거 현장",
    desc:
      "음식점, 카페, 매장 등 상업시설의 주방 설비, 기존 인테리어, 벽체, 바닥 및 천장 마감재 철거를 상담합니다.",
    detail:
      "상가철거는 임대차계약서의 원상복구 범위, 기존 설비의 철거 여부, 공용부 사용 조건 및 폐기물 처리 범위를 확인해야 합니다.",
  },
  {
    slug: "office",
    name: "사무실 철거",
    image: "/IMG_2385.jpeg",
    alt: "사무실 천장과 내부 시설물 철거 현장",
    desc:
      "사무실 이전과 리모델링을 위한 칸막이, 천장재, 바닥재 및 기존 사무공간 시설물 철거를 안내합니다.",
    detail:
      "사무실 철거 시에는 기존 전기·통신 설비와 공조시설의 유지 여부를 구분하고, 건물 관리규정에 따른 작업 시간을 확인해야 합니다.",
  },
  {
    slug: "interior",
    name: "내부·부분 철거",
    image: "/IMG_2384.jpeg",
    alt: "상업시설 내부 천장 마감재 철거 모습",
    desc:
      "전체 공간을 철거하지 않고 벽체, 천장, 바닥 등 필요한 부분만 철거하는 작업을 상담합니다.",
    detail:
      "부분철거는 철거 대상과 유지할 시설물의 경계를 확인하고, 구조체와 매립 배관 및 전기설비 손상 가능성을 검토해야 합니다.",
  },
  {
    slug: "restoration",
    name: "상가·사무실 원상복구",
    image: "/IMG_2382.jpeg",
    alt: "상업시설 내부 철거 후 공간",
    desc:
      "임대차 종료 또는 이전에 따라 기존 인테리어와 시설물을 철거하고 원상복구가 필요한 범위를 상담합니다.",
    detail:
      "원상복구 범위는 임대차계약 내용과 임대인 협의사항에 따라 달라질 수 있으므로 계약서와 기존 시설물 상태를 함께 확인해야 합니다.",
  },
];

const CASES = [
  {
    title: "아파트 주방 철거 전후",
    before: "/IMG_2380.jpeg",
    after: "/IMG_2381.jpeg",
    desc:
      "주방 가구와 내부 시설물을 철거하기 전과 철거한 후의 공간 비교입니다.",
  },
  {
    title: "상업시설 내부 철거 전후",
    before: "/IMG_2383.jpeg",
    after: "/IMG_2382.jpeg",
    desc:
      "상업시설 기존 인테리어와 내부 시설물 철거 전후의 공간을 비교할 수 있습니다.",
  },
];

const LOCAL_INFO: Record<
  string,
  {
    focus: string;
    advice: string;
  }
> = {
  "chungnam/cheonan": {
    focus:
      "천안시의 아파트 리모델링, 상가 이전, 사무실 내부철거 및 원상복구를 위한 상담 정보를 안내합니다.",
    advice:
      "공동주택에서는 관리사무소 공사 신고와 작업 가능 시간을, 상가에서는 임대차계약의 원상복구 기준을 우선 확인하세요.",
  },
  "chungnam/asan": {
    focus:
      "아산시의 주택, 아파트, 상업시설을 대상으로 철거 범위와 현장 조건에 따른 상담 정보를 안내합니다.",
    advice:
      "기존 시설물의 상태, 철거 대상, 폐기물 반출 위치와 현장 진입 조건을 확인해 주세요.",
  },
  "gyeonggi/yongin": {
    focus:
      "용인시의 아파트, 주택, 상가 및 사무실 내부철거와 원상복구를 위한 작업 범위 확인 방법을 안내합니다.",
    advice:
      "공동주택은 관리규정과 공용부 보양을, 상업시설은 시설물 철거 범위와 반출 동선을 확인하는 것이 좋습니다.",
  },
  "gyeonggi/pyeongtaek": {
    focus:
      "평택시의 주택, 아파트 및 상가 내부철거와 원상복구 상담에 필요한 정보를 안내합니다.",
    advice:
      "철거 면적, 현장 접근 조건, 폐기물 반출 방법과 작업 희망 날짜를 함께 확인해 주세요.",
  },
  "gyeonggi/hwaseong": {
    focus:
      "화성시의 주거공간 및 상업시설 철거에서 필요한 작업 범위와 현장 조건을 안내합니다.",
    advice:
      "철거 대상과 유지할 시설물, 차량 접근 및 폐기물 반출 위치를 확인해 주세요.",
  },
  "chungbuk/cheongju": {
    focus:
      "청주시의 주택, 아파트, 상가 및 사무실 철거 상담에 필요한 정보를 안내합니다.",
    advice:
      "건물 관리규정, 철거 면적, 기존 설비의 유지 여부와 폐기물 반출 조건을 확인해 주세요.",
  },
};

function getLocalInfo(
  region: string,
  district: string,
  name: string
) {
  return (
    LOCAL_INFO[`${region}/${district}`] ?? {
      focus:
        `${name}에서 주택·아파트·상가·사무실 철거 또는 원상복구를 계획할 때 확인해야 할 작업 범위와 상담 정보를 안내합니다.`,
      advice:
        "철거 면적, 기존 시설물 상태, 건물 관리규정, 차량 진입 및 폐기물 반출 조건을 사전에 확인하는 것이 좋습니다.",
    }
  );
}

function getUrl(region: string, district: string) {
  return `${SITE}/services/demolition/${region}/${district}`;
}

export async function generateMetadata({
  params,
}: {
  params: Params;
}): Promise<Metadata> {
  const { region, district } = await params;
  const location = getLocation(region, district);

  if (!location) {
    return {
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const url = getUrl(region, district);

  const title =
    `${location.name} 철거업체 | 상가철거·아파트철거·원상복구 | ${COMPANY}`;

  const description =
    `${location.name} 주택·아파트 철거, 상가철거, 사무실철거, 내부철거 및 원상복구 상담. 실제 철거 전후 사진, 작업 범위, 견적 준비사항 안내. ${PHONE}`;

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
      googleBot: {
        index: true,
        follow: true,
      },
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
          url: `${SITE}/IMG_2381.jpeg`,
          alt: "DH 종합철거 내부 철거 현장",
        },
      ],
    },
  };
}

function jsonLd(data: object) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function Photo({
  src,
  alt,
  height = 220,
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
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
}

export default async function RegionPage({
  params,
}: {
  params: Params;
}) {
  const { region, district } = await params;
  const location = getLocation(region, district);

  if (!location) notFound();

  const name = location.name;
  const url = getUrl(region, district);
  const info = getLocalInfo(region, district, name);

  const related = Object.entries(
    REGIONS[region as RegionKey].districts
  )
    .filter(([slug]) => slug !== district)
    .slice(0, 12);

  const faqs = [
    {
      question: `${name} 철거 비용은 어떻게 결정되나요?`,
      answer:
        "철거 면적, 마감재 종류, 폐기물 발생량, 반출 조건, 현장 접근성 및 작업 일정 등에 따라 달라집니다. 현장 사진과 철거 범위를 확인한 후 상담합니다.",
    },
    {
      question: `${name} 아파트 내부철거도 상담할 수 있나요?`,
      answer:
        "아파트 주방, 바닥, 벽체, 천장 등 내부철거 범위를 상담할 수 있습니다. 공동주택 관리규정과 작업 가능 시간을 확인해 주세요.",
    },
    {
      question: "상가철거와 원상복구는 어떻게 다른가요?",
      answer:
        "상가철거는 기존 시설물을 제거하는 작업이며, 원상복구는 임대차계약 등에 따라 필요한 상태로 복구하는 작업까지 포함할 수 있습니다.",
    },
    {
      question: "철거 견적 문의 시 무엇이 필요한가요?",
      answer:
        "현장 주소, 대략적인 면적, 철거 대상, 현장 사진, 희망 일정과 폐기물 반출 조건을 알려주시면 상담에 도움이 됩니다.",
    },
  ];

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "홈",
          item: SITE,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "출장 지역",
          item: `${SITE}/#regions`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: `${name} 철거`,
          item: url,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: `${name} 철거 및 원상복구 상담`,
      description: info.focus,
      serviceType: [
        "주택철거",
        "아파트철거",
        "상가철거",
        "사무실철거",
        "내부철거",
        "원상복구",
      ],
      url,
      provider: {
        "@type": "Organization",
        name: COMPANY,
        url: SITE,
        telephone: PHONE,
      },
      areaServed: {
        "@type": "AdministrativeArea",
        name,
      },
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: jsonLd(structuredData),
        }}
      />

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
            <Link href="/">홈</Link>
            <Link href="/#services">철거 서비스</Link>
            <Link href="/#regions">출장 지역</Link>
            <Link href="/#contact">견적 문의</Link>
          </nav>
        </div>
      </header>

      <main>
        {/* 지역별 대표 화면 */}

        <section className="hero">
          <div className="container">
            <span className="hero-label">
              DH DEMOLITION & REMOVAL
            </span>

            <h1>
              {name} 철거업체
              <br />
              <strong>{COMPANY}</strong>
            </h1>

            <p>
              {info.focus}
            </p>

            <div className="hero-actions">
              <a
                href={TEL}
                className="btn btn-primary"
              >
                전화 상담 {PHONE}
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

        {/* 지역별 작업 안내 */}

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                LOCAL DEMOLITION GUIDE
              </span>

              <h2>{name} 철거 작업 안내</h2>

              <p>{info.advice}</p>
            </div>

            <p
              style={{
                lineHeight: 1.9,
                wordBreak: "keep-all",
              }}
            >
              {name}에서 철거를 계획할 때는
              건물 유형, 철거 대상, 유지할 시설물,
              폐기물 반출 조건과 작업 가능 시간을
              먼저 확인해야 합니다. 특히 아파트
              내부철거와 상가 원상복구는 작업
              목적이 다르므로 철거 범위를
              구체적으로 정하는 것이 중요합니다.
            </p>
          </div>
        </section>

        {/* 카테고리별 사진과 설명 */}

        <section className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                DEMOLITION SERVICES
              </span>

              <h2>{name} 철거 서비스</h2>

              <p>
                실제 철거 현장 사진과 함께
                작업 유형별 내용을 확인하세요.
              </p>
            </div>

            <div className="card-grid">
              {SERVICES.map((service) => (
                <article
                  key={service.slug}
                  className="card"
                  style={{
                    overflow: "hidden",
                    minWidth: 0,
                  }}
                >
                  <Photo
                    src={service.image}
                    alt={service.alt}
                  />

                  <div className="card-body">
                    <h3>
                      {name} {service.name}
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

            <p
              style={{
                marginTop: 22,
                fontSize: 13,
                opacity: 0.75,
                lineHeight: 1.7,
              }}
            >
              사진은 DH 종합철거의 작업 유형을
              안내하기 위한 참고 현장 사진이며,
              해당 지역에서 촬영한 사례를
              의미하지는 않습니다.
            </p>
          </div>
        </section>

        {/* 철거 전후 비교 */}

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                BEFORE & AFTER
              </span>

              <h2>철거 전후 비교 사진</h2>

              <p>
                실제 현장의 철거 전후 모습을
                비교해 보세요.
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gap: 30,
              }}
            >
              {CASES.map((item) => (
                <article
                  key={item.title}
                  className="card"
                  style={{ overflow: "hidden" }}
                >
                  <div style={{ padding: 20 }}>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(min(100%, 260px), 1fr))",
                      gap: 14,
                      padding: 14,
                    }}
                  >
                    {[
                      {
                        label: "철거 전 BEFORE",
                        image: item.before,
                      },
                      {
                        label: "철거 후 AFTER",
                        image: item.after,
                      },
                    ].map((photo) => (
                      <div key={photo.label}>
                        <strong
                          style={{
                            display: "block",
                            marginBottom: 10,
                            color: "#ff7900",
                          }}
                        >
                          {photo.label}
                        </strong>

                        <Photo
                          src={photo.image}
                          alt={`${item.title} ${photo.label}`}
                          height={250}
                        />
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>

            <p
              style={{
                marginTop: 20,
                fontSize: 13,
                opacity: 0.75,
              }}
            >
              위 사진은 작업 유형을 보여주는
              참고 사례이며 현재 지역의
              시공 실적을 의미하지 않습니다.
            </p>
          </div>
        </section>

        {/* 견적 정보 */}

        <section className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                ESTIMATE
              </span>

              <h2>{name} 철거 견적 안내</h2>

              <p>
                현장 조건에 따라 작업 비용이
                달라질 수 있습니다.
              </p>
            </div>

            <div className="card-grid">
              {[
                {
                  title: "철거 면적",
                  desc:
                    "철거할 공간의 면적과 작업 구역을 확인합니다.",
                },
                {
                  title: "철거 대상",
                  desc:
                    "벽체, 바닥, 천장, 주방, 집기 등 철거할 시설물을 확인합니다.",
                },
                {
                  title: "폐기물 반출",
                  desc:
                    "폐기물의 양과 차량 접근, 엘리베이터 및 반출 동선을 확인합니다.",
                },
                {
                  title: "작업 일정",
                  desc:
                    "작업 가능 시간과 희망 날짜, 후속 공사 일정을 확인합니다.",
                },
              ].map((item) => (
                <article
                  key={item.title}
                  className="card"
                >
                  <div className="card-body">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                FAQ
              </span>

              <h2>{name} 철거 자주 묻는 질문</h2>
            </div>

            <div
              style={{
                display: "grid",
                gap: 14,
              }}
            >
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="card"
                  style={{ padding: 20 }}
                >
                  <summary
                    style={{
                      cursor: "pointer",
                      fontWeight: 700,
                      wordBreak: "keep-all",
                    }}
                  >
                    {faq.question}
                  </summary>

                  <p
                    style={{
                      marginTop: 15,
                      lineHeight: 1.8,
                    }}
                  >
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 내부 링크 */}

        <section className="section section-alt">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                SERVICE AREAS
              </span>

              <h2>
                {location.regionName} 다른 철거 지역
              </h2>

              <p>
                다른 지역의 철거 상담 정보도
                확인할 수 있습니다.
              </p>
            </div>

            <div className="region-grid">
              {related.map(([slug, districtName]) => (
                <Link
                  key={slug}
                  href={`/services/demolition/${region}/${slug}`}
                  className="region-link"
                >
                  {location.short} {districtName} 철거
                </Link>
              ))}
            </div>

            <div style={{ marginTop: 24 }}>
              <Link
                href="/#regions"
                className="btn btn-outline"
              >
                전체 출장 지역 확인
              </Link>
            </div>
          </div>
        </section>

        {/* 전화 상담 */}

        <section className="contact-section">
          <div className="container">
            <h2>{name} 철거 견적 문의</h2>

            <p>
              현장 주소, 철거 면적, 작업 범위,
              사진과 희망 일정을 준비해 주시면
              상담에 도움이 됩니다.
            </p>

            <div className="contact-actions">
              <a
                href={TEL}
                className="btn btn-primary"
              >
                전화 상담 {PHONE}
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
              <p>{name} 철거 상담</p>
              <p>
                주택·아파트·상가·사무실 철거
                및 원상복구
              </p>
              <p>
                전화:{" "}
                <a href={TEL}>{PHONE}</a>
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
