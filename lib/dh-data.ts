
/* =====================================
   DH 종합철거 기본 정보
===================================== */

export const SITE_URL = "https://www.dhcheolgeo.com";
export const COMPANY = "DH 종합철거";
export const OWNER = "이덕재";
export const BUSINESS_NUMBER = "882-06-03153";
export const PHONE = "01054731244";
export const PHONE_DISPLAY = "010-5473-1244";

/* =====================================
   철거 서비스 5개
===================================== */

export const SERVICES = {
  house: {
    title: "주택·아파트 철거",
    shortTitle: "아파트 철거",
    description:
      "주택·아파트 리모델링을 위한 주방, 욕실, 바닥, 천장 및 기존 시설물 철거를 상담합니다.",
    image: "/IMG_2380.jpeg",
    before: "/IMG_2381.jpeg",
    after: "/IMG_2380.jpeg",
    work: [
      {
        title: "주방 및 가구 철거",
        text: "싱크대, 붙박이장, 수납장 등 기존 주방 시설물의 철거 범위를 확인합니다.",
      },
      {
        title: "욕실 내부 철거",
        text: "기존 욕실 타일, 위생도기와 마감재 철거 범위를 상담합니다.",
      },
      {
        title: "바닥 및 천장 철거",
        text: "리모델링 계획에 맞춰 기존 바닥재와 천장 마감재의 철거 범위를 정합니다.",
      },
      {
        title: "아파트 공사 준비",
        text: "관리사무소 규정, 공용부 보양, 작업 가능 시간과 폐기물 반출 조건을 확인합니다.",
      },
    ],
  },

  commercial: {
    title: "상가·매장 철거",
    shortTitle: "상가 철거",
    description:
      "상가, 음식점, 카페, 매장 등의 기존 인테리어와 내부 시설물 철거를 상담합니다.",
    image: "/IMG_2386.jpeg",
    before: "/IMG_2383.jpeg",
    after: "/IMG_2382.jpeg",
    work: [
      {
        title: "상가 인테리어 철거",
        text: "매장 내부 칸막이, 천장, 바닥과 기존 인테리어 시설물 철거 범위를 확인합니다.",
      },
      {
        title: "음식점 주방 철거",
        text: "주방 후드, 덕트와 기존 주방 시설물 중 철거할 대상을 구분합니다.",
      },
      {
        title: "폐업 및 이전 철거",
        text: "폐업이나 매장 이전 일정에 맞춰 필요한 철거 범위를 상담합니다.",
      },
      {
        title: "임대차 조건 확인",
        text: "임대인과 협의한 철거 범위, 작업 시간과 폐기물 반출 조건을 확인합니다.",
      },
    ],
  },

  office: {
    title: "사무실 철거",
    shortTitle: "사무실 철거",
    description:
      "사무실 이전과 리모델링을 위한 칸막이, 천장, 바닥재 및 기존 시설물 철거를 상담합니다.",
    image: "/IMG_2385.jpeg",
    before: null,
    after: null,
    work: [
      {
        title: "칸막이 및 파티션 철거",
        text: "사무실 내부 칸막이와 파티션의 구조 및 철거 범위를 확인합니다.",
      },
      {
        title: "천장 마감재 철거",
        text: "천장재와 유지해야 할 전기·공조 설비를 구분합니다.",
      },
      {
        title: "바닥재 철거",
        text: "기존 바닥 마감재의 종류와 후속 공사 계획을 확인합니다.",
      },
      {
        title: "사무실 이전 철거",
        text: "이전 일정과 건물 관리규정에 맞춰 철거 범위를 상담합니다.",
      },
    ],
  },

  interior: {
    title: "내부·부분 철거",
    shortTitle: "내부 철거",
    description:
      "주택, 상가, 사무실의 벽체, 바닥, 천장 등 필요한 부분의 내부철거를 상담합니다.",
    image: "/IMG_2384.jpeg",
    before: null,
    after: null,
    work: [
      {
        title: "천장 부분철거",
        text: "천장 구조와 설비 상태를 확인하고 필요한 철거 범위를 정합니다.",
      },
      {
        title: "벽체 및 칸막이 철거",
        text: "구조체 여부와 매립 설비를 확인한 뒤 철거 가능 여부를 검토합니다.",
      },
      {
        title: "바닥 마감재 철거",
        text: "기존 바닥재와 주변 시설물 상태를 확인합니다.",
      },
      {
        title: "기존 시설물 보호",
        text: "유지할 설비와 철거 대상을 구분하여 작업 범위를 상담합니다.",
      },
    ],
  },

  restoration: {
    title: "상가·사무실 원상복구",
    shortTitle: "원상복구",
    description:
      "상가와 사무실의 계약 종료 또는 이전에 따른 기존 인테리어 철거와 원상복구를 상담합니다.",
    image: "/IMG_2382.jpeg",
    before: "/IMG_2383.jpeg",
    after: "/IMG_2382.jpeg",
    work: [
      {
        title: "상가 원상복구",
        text: "임대차계약과 임대인 협의사항을 기준으로 복구 범위를 확인합니다.",
      },
      {
        title: "사무실 원상복구",
        text: "기존 칸막이, 천장, 바닥 등 철거 또는 복구할 시설물을 확인합니다.",
      },
      {
        title: "기존 인테리어 철거",
        text: "임차인이 설치한 시설물과 유지해야 할 설비를 구분합니다.",
      },
      {
        title: "퇴거 일정 확인",
        text: "계약 종료일과 건물 작업 규정, 폐기물 반출 조건을 확인합니다.",
      },
    ],
  },
} as const;

export type ServiceSlug = keyof typeof SERVICES;

export function isServiceSlug(
  value: string
): value is ServiceSlug {
  return Object.prototype.hasOwnProperty.call(
    SERVICES,
    value
  );
}

/* =====================================
   경기·충남·충북 전체 지역
===================================== */

export const REGIONS = {
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
      tae안: "태안군",
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

export type RegionSlug = keyof typeof REGIONS;

/* =====================================
   지역 조회
===================================== */

export function getLocation(
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

  const region = REGIONS[regionSlug as RegionSlug];

  const districts: Record<string, string> =
    region.districts;

  const districtName = districts[districtSlug];

  if (!districtName) return null;

  return {
    regionName: region.name,
    districtName,
    fullName: `${region.shortName} ${districtName}`,
  };
}

/* =====================================
   전체 지역 목록
===================================== */

export function getAllLocations() {
  return Object.entries(REGIONS).flatMap(
    ([region, data]) =>
      Object.keys(data.districts).map((district) => ({
        region,
        district,
      }))
  );
}

/* =====================================
   서비스별 지역 URL
===================================== */

export function serviceRegionUrl(
  service: string,
  region: string,
  district: string
) {
  return `/services/${service}/${region}/${district}`;
}
