import {
  SITE_URL,
  COMPANY,
  OWNER,
  BUSINESS_NUMBER,
  PHONE_DISPLAY,
  REGIONS,
  type RegionSlug,
  type ServiceSlug,
} from "./dh-data";

/* =====================================
   네이버 검색어 기준 지역·서비스 이름
===================================== */

/* 다른 시·도에도 같은 이름이 있는 지역 → 시·도를 붙여 구분 */
const AMBIGUOUS = new Set(["광주시"]);

/** 천안 · 수원 · 경기 광주 · 가평 */
export function searchName(regionSlug: string, districtName: string) {
  const region = REGIONS[regionSlug as RegionSlug];
  const short = districtName.replace(/(시|군)$/, "");
  return AMBIGUOUS.has(districtName) ? `${region.shortName} ${short}` : short;
}

/** 충남 천안시 */
export function fullName(regionSlug: string, districtName: string) {
  return `${REGIONS[regionSlug as RegionSlug].shortName} ${districtName}`;
}

/** 충청남도 천안시 */
export function officialName(regionSlug: string, districtName: string) {
  return `${REGIONS[regionSlug as RegionSlug].name} ${districtName}`;
}

/* 서비스별 검색 키워드와 제목 뒷부분 */
export const SERVICE_SEO: Record<
  ServiceSlug,
  { keyword: string; tail: string }
> = {
  house: { keyword: "아파트 철거", tail: "주택·빌라 인테리어 철거" },
  commercial: { keyword: "상가 철거", tail: "매장·음식점 폐업 철거" },
  office: { keyword: "사무실 철거", tail: "칸막이·천장 철거" },
  interior: { keyword: "내부 철거", tail: "벽체·바닥 부분 철거" },
  restoration: { keyword: "원상복구", tail: "상가·사무실 원상복구 철거" },
};

/* =====================================
   시·군별 현장 특징 (페이지마다 다른 문단)
===================================== */

const PROVINCE_TEXT: Record<RegionSlug, string> = {
  gyeonggi:
    "경기도는 신도시 대단지 아파트 리모델링, 구도심 빌라·상가 철거, 산업단지 공장·창고 사무동 정리까지 현장 유형이 가장 다양한 지역입니다.",
  chungnam:
    "충남은 천안·아산의 아파트·상가 밀집 지역과 서산·당진의 산업단지, 군 지역 단독주택이 함께 있어 현장마다 장비와 폐기물 반출 방법이 달라집니다.",
  chungbuk:
    "충북은 청주 도심 아파트·상가와 충주·제천 같은 중소도시, 군 지역 단독주택·농가 현장이 섞여 있어 이동 거리와 반출 차량 동선을 미리 계획합니다.",
};

const KIND_TEXT = {
  si: "시 지역은 아파트 단지 관리규정(작업 시간·엘리베이터 보양·소음)과 상가 건물 관리 조건을 먼저 확인하는 것이 중요합니다.",
  gun: "군 지역은 단독주택·농가·소규모 상가 현장이 많아 차량 진입로, 폐기물 적재 공간, 작업 일정 조율을 미리 확인합니다.",
};

const SPECIAL_TEXT: Record<string, string> = {
  suwon:
    "수원은 영통·광교 같은 아파트 단지와 팔달·장안 구도심 상가가 함께 있어 아파트 내부 철거와 상가 원상복구 상담이 고르게 있습니다.",
  seongnam:
    "성남은 분당 노후 아파트 리모델링과 판교 사무실 이전, 수정·중원 구도심 상가 철거까지 현장 유형이 다양합니다.",
  yongin:
    "용인은 수지·기흥 대단지 아파트가 많아 관리사무소 규정에 맞춘 주방·욕실·바닥 철거 일정 조율이 중요합니다.",
  goyang:
    "고양은 일산 신도시 아파트와 상가 건물이 많아 리모델링 전 내부 철거와 상가 퇴거 원상복구 상담이 많은 지역입니다.",
  hwaseong:
    "화성은 동탄 신도시 아파트·상가와 외곽 공장·창고가 함께 있어 주거 철거와 산업시설 사무동 철거를 나눠 상담합니다.",
  pyeongtaek:
    "평택은 고덕국제신도시 신축 상가와 구도심 상가가 함께 있어 매장 철거와 원상복구 범위를 계약서 기준으로 정리합니다.",
  bucheon:
    "부천은 상가·오피스텔 밀집 지역이 많아 작업 가능 시간과 건물 내 반출 동선 확인이 특히 중요합니다.",
  ansan:
    "안산은 반월·시화 산업단지와 주거 단지가 함께 있어 공장 사무동·식당 철거와 아파트 철거를 모두 진행합니다.",
  cheonan:
    "천안은 불당·신방 아파트 단지와 두정·신부동 상권이 커서 아파트 리모델링 철거와 상가 폐업 철거 문의가 꾸준한 지역입니다.",
  asan:
    "아산은 배방·탕정 신도시 아파트와 산업단지 주변 상가가 함께 있어 신축 아파트 인테리어 철거와 상가 원상복구를 모두 상담합니다.",
  dangjin:
    "당진은 산업단지 주변 원룸·상가와 읍면 단독주택이 함께 있어 현장 유형에 맞춰 장비와 인원을 조정합니다.",
  seosan:
    "서산은 대산 산업단지와 시내 상가·아파트 현장이 떨어져 있어 이동 동선과 폐기물 반출 일정을 함께 계획합니다.",
  cheongju:
    "청주는 오송·오창 신도시와 성안길 등 구도심 상권이 함께 있어 아파트 내부 철거와 상가·사무실 원상복구 상담이 고르게 있습니다.",
  chungju:
    "충주는 시내 상가와 외곽 단독주택 현장이 함께 있어 철거 범위와 진입 여건을 사진으로 먼저 확인합니다.",
};

export function localParagraphs(regionSlug: string, districtSlug: string, districtName: string) {
  const list = [PROVINCE_TEXT[regionSlug as RegionSlug]];
  if (SPECIAL_TEXT[districtSlug]) list.push(SPECIAL_TEXT[districtSlug]);
  list.push(districtName.endsWith("군") ? KIND_TEXT.gun : KIND_TEXT.si);
  return list.filter(Boolean);
}

/* =====================================
   같은 도 안의 가까운 순서 지역 (내부 링크용)
===================================== */

export function nearbyDistricts(regionSlug: string, districtSlug: string, count = 8) {
  const entries = Object.entries(
    REGIONS[regionSlug as RegionSlug].districts as Record<string, string>
  );
  const index = entries.findIndex(([slug]) => slug === districtSlug);
  const result: { slug: string; name: string }[] = [];

  for (let step = 1; result.length < count && step < entries.length; step += 1) {
    const next = entries[index + step];
    const prev = entries[index - step];
    if (next) result.push({ slug: next[0], name: next[1] });
    if (prev && result.length < count) result.push({ slug: prev[0], name: prev[1] });
  }

  return result;
}

export function areaUrl(regionSlug: string, districtSlug: string) {
  return `/areas/${regionSlug}/${districtSlug}`;
}

/* =====================================
   구조화 데이터
===================================== */

export function businessSchema(areaServed: string) {
  return {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${SITE_URL}/#business`,
    name: COMPANY,
    url: SITE_URL,
    telephone: `+82-${PHONE_DISPLAY.slice(1)}`,
    image: `${SITE_URL}/IMG_2382.jpeg`,
    logo: `${SITE_URL}/IMG_1102.png`,
    founder: OWNER,
    taxID: BUSINESS_NUMBER,
    priceRange: "현장 견적",
    areaServed: { "@type": "AdministrativeArea", name: areaServed },
  };
}

export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
