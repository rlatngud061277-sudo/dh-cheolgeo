
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

/* =====================================
   DH 종합철거 기본 설정
===================================== */

const SITE_URL = "https://www.dhcheolgeo.com";

const COMPANY = "DH 종합철거";

const PHONE = "01094134686";

const PHONE_DISPLAY = "010-9413-4686";

const PHONE_LINK = `tel:${PHONE}`;

/* =====================================
   지역별 데이터
===================================== */

const REGIONS = {
  seoul: {
    name: "서울특별시",
    shortName: "서울",

    districts: {
      gangnam: "강남구",
      gangdong: "강동구",
      gangbuk: "강북구",
      gangseo: "강서구",
      gwanak: "관악구",
      gwangjin: "광진구",
      guro: "구로구",
      geumcheon: "금천구",
      nowon: "노원구",
      dobong: "도봉구",
      dongdaemun: "동대문구",
      dongjak: "동작구",
      mapo: "마포구",
      seodaemun: "서대문구",
      seocho: "서초구",
      seongdong: "성동구",
      seongbuk: "성북구",
      songpa: "송파구",
      yangcheon: "양천구",
      yeongdeungpo: "영등포구",
      yongsan: "용산구",
      eunpyeong: "은평구",
      jongno: "종로구",
      jung: "중구",
      jungnang: "중랑구",
    },
  },

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

  incheon: {
    name: "인천광역시",
    shortName: "인천",

    districts: {
      jung: "중구",
      dong: "동구",
      michuhol: "미추홀구",
      yeonsu: "연수구",
      namdong: "남동구",
      bupyeong: "부평구",
      gyeyang: "계양구",
      seo: "서구",
      ganghwa: "강화군",
      ongjin: "옹진군",
    },
  },

  chungnam: {
    name: "충청남도",
    shortName: "충남",

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
    shortName: "충북",

    districts: {
      cheongju: "청주시",
      chungju: "충주시",
      jecheon: "제천시",
      boeun: "보은군",
      okcheon: "옥천군",
      yeongdong: "영동군",
      jeungpyeong: "증평군",
      jincheon: "진천군",
      goesan: "괴산군",
      eumseong: "음성군",
      danyang: "단양군",
    },
  },
} as const;

/* =====================================
   지역 및 시군구 확인 함수
===================================== */

type RegionSlug = keyof typeof REGIONS;

function getRegionData(
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

  const region =
    REGIONS[regionSlug as RegionSlug];

  const districts: Record<string, string> =
    region.districts;

  const districtName =
    districts[districtSlug];

  if (!districtName) {
    return null;
  }

  return {
    regionName: region.name,
    regionShortName: region.shortName,
    districtName,
    regionSlug,
    districtSlug,
  };
}

/* =====================================
   정적 지역 페이지 생성
===================================== */

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

/* =====================================
   지역별 검색엔진 메타데이터
===================================== */

export async function generateMetadata({
  params,
}: {
  params: Promise<{
    region: string;
    district: string;
  }>;
}): Promise<Metadata> {
  const { region, district } = await params;

  const location = getRegionData(
    region,
    district
  );

  if (!location) {
    return {};
  }

  const locationName =
    `${location.regionShortName} ${location.districtName}`;

  const PAGE_URL =
    `${SITE_URL}/services/demolition/${region}/${district}`;

  const title =
    `${locationName} 철거업체·상가철거·내부철거 | ${COMPANY}`;

  const description =
    `${locationName} 철거 상담 안내. ` +
    `${COMPANY}의 주택·아파트 철거, ` +
    `상가 철거, 사무실 철거, 내부 철거 및 ` +
    `원상복구 서비스와 견적 상담 정보를 확인하세요.`;

  return {
    title: {
      absolute: title,
    },

    description,

    alternates: {
      canonical: PAGE_URL,
    },

    robots: {
      index: true,
      follow: true,
    },

    openGraph: {
      type: "website",
      locale: "ko_KR",
      url: PAGE_URL,
      siteName: COMPANY,
      title,
      description,
    },
  };
}

/* =====================================
   지역별 철거 상세 페이지
===================================== */

export default async function RegionPage({
  params,
}: {
  params: Promise<{
    region: string;
    district: string;
  }>;
}) {
  const { region, district } = await params;

  const location = getRegionData(
    region,
    district
  );

  if (!location) {
    notFound();
  }

  const locationName =
    `${location.regionShortName} ${location.districtName}`;

  const PAGE_URL =
    `${SITE_URL}/services/demolition/${region}/${district}`;

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
        name: `${location.regionName} 철거`,
        item: `${SITE_URL}/#regions`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `${locationName} 철거`,
        item: PAGE_URL,
      },
    ],
  };

  /* =====================================
     지역별 철거 구조화 데이터
  ===================================== */

  const serviceSchema = {
    "@context": "https://schema.org",

    "@type": "Service",

    name: `${locationName} 철거 상담`,

    serviceType: [
      "주택 철거",
      "아파트 철거",
      "상가 철거",
      "사무실 철거",
      "내부 철거",
      "원상복구",
    ],

    description:
      `${locationName} 지역의 주택·아파트·상가·사무실 철거 및 원상복구 상담 안내`,

    url: PAGE_URL,

    provider: {
      "@type": "Organization",
      name: COMPANY,
      url: SITE_URL,
      telephone: PHONE_DISPLAY,
    },

    areaServed: {
      "@type": "AdministrativeArea",
      name: locationName,
    },
  };

  /* =====================================
     지역별 철거 서비스
  ===================================== */

  const SERVICES = [
    {
      title: `${locationName} 주택·아파트 철거`,
      desc:
        "주택 및 아파트의 리모델링 전 기존 시설물과 내부 마감재 철거를 상담합니다.",
      href: "/services/house",
    },
    {
      title: `${locationName} 상가 철거`,
      desc:
        "상가와 매장의 기존 인테리어, 내부 시설물 및 마감재 철거를 상담합니다.",
      href: "/services/commercial",
    },
    {
      title: `${locationName} 사무실 철거`,
      desc:
        "사무실 이전 및 리모델링을 위한 칸막이와 기존 시설물 철거를 상담합니다.",
      href: "/services/office",
    },
    {
      title: `${locationName} 내부·부분 철거`,
      desc:
        "벽체와 바닥 및 천장 등 필요한 부분의 철거 범위를 확인하고 상담합니다.",
      href: "/services/interior",
    },
    {
      title: `${locationName} 원상복구`,
      desc:
        "상가 및 사무실의 계약 종료에 따른 철거와 원상복구 범위를 상담합니다.",
      href: "/services/restoration",
    },
  ];

  /* =====================================
     지역별 견적 체크리스트
  ===================================== */

  const CHECKLIST = [
    {
      title: "현장 위치",
      desc:
        `${locationName} 내 철거 현장의 위치와 건물 유형을 알려주세요.`,
    },
    {
      title: "철거 범위",
      desc:
        "철거할 공간의 면적과 철거 대상 시설물을 알려주세요.",
    },
    {
      title: "작업 조건",
      desc:
        "엘리베이터 이용 여부, 현장 진입로, 작업 가능 시간 등을 확인해 주세요.",
    },
    {
      title: "현장 사진",
      desc:
        "철거 대상 공간을 확인할 수 있는 사진을 준비해 주세요.",
    },
    {
      title: "작업 일정",
      desc:
        "철거를 희망하는 날짜와 원상복구가 필요한 일정을 알려주세요.",
    },
  ];

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
            지역별 대표 화면
        ===================================== */}

        <section className="hero">
          <div className="container">
            <span className="hero-label">
              DH DEMOLITION & REMOVAL
            </span>

            <h1>
              {locationName} 철거업체
              <br />

              <strong>
                DH 종합철거
              </strong>
            </h1>

            <p>
              {locationName} 주택·아파트 철거,
              상가 철거, 사무실 철거,
              내부 철거 및 원상복구 상담
            </p>

            <p>
              현장 위치와 철거 범위에 따라
              작업 가능 여부와 견적을 안내합니다.
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
                다른 지역 확인
              </Link>
            </div>
          </div>
        </section>

        {/* =====================================
            지역별 서비스
        ===================================== */}

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                DEMOLITION SERVICES
              </span>

              <h2>
                {locationName} 철거 서비스 안내
              </h2>

              <p>
                철거 대상 공간과 현장 조건에 따라
                필요한 작업 범위를 확인합니다.
              </p>
            </div>

            <div className="card-grid">
              {SERVICES.map((service) => (
                <article
                  key={service.href}
                  className="card"
                >
                  <div className="card-body">
                    <h3>
                      {service.title}
                    </h3>

                    <p>
                      {service.desc}
                    </p>

                    <Link
                      href={service.href}
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
                {locationName} 철거 견적 문의
              </h2>

              <p>
                현장 상황에 따라 견적이
                달라질 수 있으므로 아래 정보를
                준비해 주세요.
              </p>
            </div>

            <div className="card-grid">
              {CHECKLIST.map((item) => (
                <article
                  key={item.title}
                  className="card"
                >
                  <div className="card-body">
                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* =====================================
            지역 및 다른 서비스 연결
        ===================================== */}

        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="section-tag">
                SERVICE AREAS
              </span>

              <h2>
                다른 지역 철거 상담
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
              전체 출장 지역 확인
            </Link>
          </div>
        </section>

        {/* =====================================
            최종 상담 문의
        ===================================== */}

        <section className="contact-section">
          <div className="container">
            <h2>
              {locationName} 철거 견적 문의
            </h2>

            <p>
              철거 현장의 위치, 작업 범위,
              현장 사진 및 희망 일정을
              준비해 주시면 상담에 도움이 됩니다.
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
                {locationName} 철거 상담
              </p>

              <p>
                주택·아파트·상가·사무실 철거
                및 원상복구
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
