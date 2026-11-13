
import {
  SITE_URL,
  COMPANY,
  SERVICES,
  REGIONS,
  getLocation,
  serviceRegionUrl,
  isServiceSlug,
  type ServiceSlug,
  type RegionSlug,
} from "./dh-data";

/* =====================================
   DH 종합철거 지역별 SEO 시스템

   기존 URL 유지
   지역별 문구 차별화
   서비스별 전문 설명
   지역별 FAQ
   canonical 자동 생성
===================================== */

export type DhSeoContent = {
  title: string;
  description: string;
  h1: string;
  intro: string;
  detail: string;
  checklist: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
  canonical: string;
};

/* =====================================
   서비스별 전문 콘텐츠
===================================== */

type ServiceContent = {
  introductions: string[];
  details: string[];
  checks: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

const SERVICE_CONTENT: Record<
  ServiceSlug,
  ServiceContent
> = {
  house: {
    introductions: [
      "주택과 아파트의 리모델링 철거는 기존 마감재와 유지할 설비를 구분하는 과정이 중요합니다.",
      "아파트 내부 철거는 관리사무소 규정과 공용부 보양, 폐기물 반출 조건을 함께 확인해야 합니다.",
      "주거공간 철거는 주방, 욕실, 바닥과 천장 등 작업 범위에 따라 준비 과정이 달라집니다.",
      "노후 주택의 내부 철거는 기존 벽체와 배관, 전기설비 상태를 확인한 뒤 계획해야 합니다.",
      "아파트 리모델링을 위한 철거는 후속 인테리어 공정과 연결되도록 범위를 정하는 것이 좋습니다.",
    ],

    details: [
      "주방 싱크대와 붙박이장, 욕실 타일, 바닥재 및 천장 마감재 중 철거할 부분을 확인합니다.",
      "공동주택에서는 작업 시간과 엘리베이터 이용, 공용부 보양 및 폐기물 이동 경로를 확인해야 합니다.",
      "철거 이후 진행할 인테리어 계획에 맞춰 유지할 설비와 제거할 마감재를 구분합니다.",
      "단독주택과 빌라는 건물 구조와 작업 공간, 차량 접근 여건 등을 함께 살펴봐야 합니다.",
    ],

    checks: [
      "아파트·빌라·단독주택 등 건물 유형",
      "주방·욕실·바닥·천장 철거 범위",
      "기존 배관과 전기설비 유지 여부",
      "관리사무소 작업 규정 및 보양 조건",
      "폐기물 반출 경로와 작업 가능 시간",
    ],

    faqs: [
      {
        question: "아파트 내부 철거 전에 무엇을 준비해야 하나요?",
        answer:
          "관리사무소 작업 규정과 공용부 보양, 폐기물 반출 방법을 확인하고 철거 범위를 정리하는 것이 좋습니다.",
      },
      {
        question: "주방과 욕실만 부분 철거할 수 있나요?",
        answer:
          "부분 철거는 현장 구조와 기존 시설물 상태를 확인한 뒤 작업 가능 여부와 범위를 검토할 수 있습니다.",
      },
      {
        question: "주택 철거 비용은 무엇에 따라 달라지나요?",
        answer:
          "철거 면적, 마감재 종류, 폐기물 처리량, 층수와 작업 환경 등에 따라 비용이 달라질 수 있습니다.",
      },
      {
        question: "철거 후 인테리어 공사도 고려해야 하나요?",
        answer:
          "후속 인테리어 공정에 따라 유지할 설비와 철거할 부분이 달라지므로 사전에 공사 계획을 공유하는 것이 좋습니다.",
      },
    ],
  },

  commercial: {
    introductions: [
      "상가 철거는 기존 인테리어와 임대차계약에 따른 철거 범위를 먼저 확인해야 합니다.",
      "음식점과 카페의 철거는 주방 설비, 후드, 덕트와 바닥 마감재의 상태를 함께 확인합니다.",
      "매장 이전이나 폐업을 위한 철거는 퇴거 일정과 건물 관리규정을 고려해야 합니다.",
      "상업시설 내부 철거는 매장 구조와 기존 시설물 종류에 따라 작업 범위가 달라질 수 있습니다.",
      "상가 리모델링 철거는 새 인테리어 계획에 맞춰 유지할 시설과 제거할 시설을 구분해야 합니다.",
    ],

    details: [
      "매장 내부 칸막이, 천장, 바닥재와 기존 인테리어 시설물의 철거 범위를 확인합니다.",
      "음식점의 경우 주방 설비와 후드, 덕트 및 배관 연결 상태를 검토해야 합니다.",
      "임대인과 협의한 원상복구 범위와 계약 종료 일정을 확인하는 것이 중요합니다.",
      "폐기물 종류와 반출 동선, 건물 작업 가능 시간을 고려해 철거 범위를 상담합니다.",
    ],

    checks: [
      "상가·음식점·카페 등 기존 매장 업종",
      "천장·바닥·벽체 및 인테리어 철거 범위",
      "주방 설비와 덕트 철거 여부",
      "임대차계약 및 원상복구 조건",
      "폐업일·퇴거일과 작업 가능 시간",
    ],

    faqs: [
      {
        question: "상가 철거 범위는 어떻게 결정하나요?",
        answer:
          "기존 시설물 상태와 임대차계약, 임대인 협의사항을 기준으로 철거 대상을 구분합니다.",
      },
      {
        question: "음식점 주방 시설도 철거할 수 있나요?",
        answer:
          "주방 설비와 후드, 덕트 등의 구조 및 연결 상태를 확인한 후 작업 범위를 상담할 수 있습니다.",
      },
      {
        question: "폐업 매장의 철거 비용은 어떻게 계산하나요?",
        answer:
          "면적과 시설물 종류, 폐기물 처리량, 반출 조건 및 작업 일정 등을 고려해 견적을 검토합니다.",
      },
      {
        question: "상가 철거 전에 임대인과 협의해야 하나요?",
        answer:
          "계약상 원상복구 범위와 유지해야 할 설비를 사전에 확인하면 불필요한 철거를 줄이는 데 도움이 됩니다.",
      },
    ],
  },

  office: {
    introductions: [
      "사무실 철거는 기존 칸막이와 파티션, 천장 및 바닥재의 제거 범위를 확인하는 것이 중요합니다.",
      "업무시설 철거는 전기·통신·공조설비 중 유지할 부분을 구분해야 합니다.",
      "사무실 이전을 위한 철거는 퇴거 일정과 건물 관리규정을 함께 고려해야 합니다.",
      "사무공간 리모델링은 후속 공사에 맞춰 기존 인테리어의 철거 범위를 정해야 합니다.",
      "사무실 내부 철거는 건물 이용 조건과 폐기물 반출 경로를 함께 확인해야 합니다.",
    ],

    details: [
      "사무실 파티션과 칸막이, 천장재 및 바닥 마감재의 철거 범위를 구분합니다.",
      "전기·통신·소방·공조설비 중 유지해야 할 시설을 사전에 확인해야 합니다.",
      "건물 관리규정과 엘리베이터 사용 조건, 작업 가능 시간을 검토합니다.",
      "이전 일정과 후속 인테리어 계획에 맞춰 필요한 철거 범위를 상담합니다.",
    ],

    checks: [
      "사무실 면적과 층수",
      "칸막이·파티션·천장·바닥 철거 범위",
      "전기·통신·공조설비 유지 여부",
      "건물 관리규정과 엘리베이터 이용 조건",
      "이전 일정과 폐기물 반출 계획",
    ],

    faqs: [
      {
        question: "사무실 칸막이만 철거할 수 있나요?",
        answer:
          "칸막이 구조와 연결된 설비를 확인한 후 부분 철거 가능 여부를 검토할 수 있습니다.",
      },
      {
        question: "사무실 천장 철거 시 주의할 점은 무엇인가요?",
        answer:
          "천장 내부의 전기·통신·소방·공조설비 중 유지할 시설을 확인해야 합니다.",
      },
      {
        question: "사무실 이전 철거는 언제 준비하는 것이 좋나요?",
        answer:
          "퇴거 일정과 건물 작업 규정을 확인하고 필요한 철거 범위를 미리 정리하는 것이 좋습니다.",
      },
      {
        question: "사무실 철거 견적은 어떻게 결정되나요?",
        answer:
          "철거 면적, 시설물 종류, 폐기물 반출 조건과 작업 환경 등을 고려합니다.",
      },
    ],
  },

  interior: {
    introductions: [
      "내부 부분 철거는 필요한 구간을 제거하면서 유지할 시설물을 보호하는 것이 중요합니다.",
      "벽체 철거는 구조체 여부와 내부 배관 및 전기설비 상태를 먼저 확인해야 합니다.",
      "바닥재 부분 철거는 기존 마감재 종류와 바탕면 상태에 따라 작업 범위가 달라집니다.",
      "천장 부분 철거는 내부 설비와 주변 마감재 상태를 함께 검토해야 합니다.",
      "리모델링을 위한 부분 철거는 후속 공사와 연결되는 작업 범위를 사전에 정해야 합니다.",
    ],

    details: [
      "철거할 벽체와 바닥, 천장 등 필요한 구간을 확인합니다.",
      "유지할 시설물과 철거 대상을 구분하고 주변 마감재 보호 방법을 검토합니다.",
      "벽체 내부 설비와 구조체 여부를 확인해 철거 가능 범위를 판단해야 합니다.",
      "부분 철거는 작업 면적뿐 아니라 주변 시설물 보호와 폐기물 처리 조건도 고려해야 합니다.",
    ],

    checks: [
      "벽체·천장·바닥 등 철거 위치",
      "전체 철거 또는 부분 철거 여부",
      "구조체와 매립 설비 확인",
      "유지할 시설물과 주변 마감재 보호",
      "작업 공간과 폐기물 반출 조건",
    ],

    faqs: [
      {
        question: "벽체 일부만 철거할 수 있나요?",
        answer:
          "구조벽 여부와 내부 설비 상태를 확인한 뒤 철거 가능 범위를 검토해야 합니다.",
      },
      {
        question: "기존 시설물을 유지하면서 철거할 수 있나요?",
        answer:
          "유지할 시설물과 철거 대상을 명확하게 구분한 뒤 보호 방법을 상담할 수 있습니다.",
      },
      {
        question: "바닥 마감재만 제거할 수 있나요?",
        answer:
          "기존 바닥재 종류와 하부 상태를 확인한 후 필요한 작업 범위를 결정합니다.",
      },
      {
        question: "부분 철거 비용은 어떻게 정해지나요?",
        answer:
          "작업 면적, 철거 난이도, 주변 시설물 보호와 폐기물 처리 조건 등에 따라 달라질 수 있습니다.",
      },
    ],
  },

  restoration: {
    introductions: [
      "상가 원상복구는 임대차계약과 임대인 협의사항을 기준으로 범위를 확인해야 합니다.",
      "사무실 원상복구는 임차인이 설치한 칸막이와 마감재의 처리 범위를 정하는 것이 중요합니다.",
      "계약 종료에 따른 원상복구는 퇴거 일정과 건물 작업 규정을 함께 고려해야 합니다.",
      "원상복구 공사는 단순 철거와 달리 유지하거나 복구할 시설물을 구분해야 합니다.",
      "상가와 사무실의 원상복구는 입주 당시 상태와 계약 조건을 함께 검토하는 것이 좋습니다.",
    ],

    details: [
      "임대차계약과 임대인 협의사항을 기준으로 철거 및 복구 범위를 확인합니다.",
      "임차인이 설치한 인테리어 시설물과 유지할 설비를 구분합니다.",
      "퇴거 일정과 건물 작업 가능 시간, 폐기물 반출 조건을 확인합니다.",
      "기존 마감재 철거와 복구가 필요한 구간을 구분해 상담합니다.",
    ],

    checks: [
      "임대차계약상 원상복구 범위",
      "입주 당시 상태와 임대인 협의사항",
      "철거할 인테리어 시설물",
      "유지하거나 복구할 설비",
      "퇴거일과 작업 완료 희망일",
    ],

    faqs: [
      {
        question: "상가 원상복구 범위는 어떻게 정하나요?",
        answer:
          "임대차계약 내용과 입주 당시 상태, 임대인과 협의한 범위를 기준으로 확인합니다.",
      },
      {
        question: "사무실 퇴거 시 어떤 시설물을 철거해야 하나요?",
        answer:
          "임차인이 설치한 시설물과 계약상 복구 대상인 마감재 등을 구분해야 합니다.",
      },
      {
        question: "원상복구 전에 임대인과 무엇을 확인해야 하나요?",
        answer:
          "철거 대상, 유지할 설비, 복구 수준과 완료 일정을 사전에 확인하는 것이 좋습니다.",
      },
      {
        question: "원상복구 비용은 어떤 기준으로 산정되나요?",
        answer:
          "철거 및 복구 범위, 마감재 종류, 작업 환경과 폐기물 처리 조건에 따라 달라집니다.",
      },
    ],
  },
};

/* =====================================
   지역별 상담 안내 문구
===================================== */

const REGION_CONTENT: Record<
  RegionSlug,
  string[]
> = {
  gyeonggi: [
    "공동주택과 상업시설은 건물별 관리규정과 작업 가능 시간을 확인해야 합니다.",
    "철거 작업을 계획할 때 차량 접근과 폐기물 반출 여건을 함께 살펴보는 것이 좋습니다.",
    "기존 인테리어 철거 범위는 건물 구조와 후속 공사 계획에 따라 달라질 수 있습니다.",
    "주거시설과 업무시설은 철거 전 확인해야 할 설비와 관리 조건이 다릅니다.",
    "현장 위치와 건물 구조에 따라 작업 장비와 폐기물 반출 방법을 검토해야 합니다.",
  ],

  chungnam: [
    "주택과 상가의 철거는 건물 상태와 폐기물 반출 여건을 먼저 확인하는 것이 중요합니다.",
    "리모델링을 위한 철거에서는 기존 시설물과 유지할 설비를 구분해야 합니다.",
    "철거 상담 시 작업 위치와 접근 경로를 함께 알려주면 범위 검토에 도움이 됩니다.",
    "건물 용도와 철거 대상에 따라 작업 준비와 폐기물 처리 방법이 달라질 수 있습니다.",
    "기존 마감재 종류와 작업 공간을 확인한 뒤 철거 범위를 상담하는 것이 좋습니다.",
  ],

  chungbuk: [
    "철거 전에는 현장 접근성과 작업 공간, 폐기물 반출 조건을 확인해야 합니다.",
    "노후 시설물의 철거는 기존 마감재와 설비 상태를 점검한 뒤 계획하는 것이 좋습니다.",
    "부분 철거와 전체 내부 철거는 작업 범위와 후속 공정이 다를 수 있습니다.",
    "상가와 주택의 철거 견적은 면적뿐 아니라 현장 조건을 함께 고려해야 합니다.",
    "현장 구조와 주변 시설물 상태에 따라 필요한 철거 준비가 달라질 수 있습니다.",
  ],
};

/* =====================================
   고정형 문구 선택 함수

   같은 URL은 항상 같은 문구 사용
   서버 렌더링 결과 안정화
===================================== */

function hashText(value: string): number {
  let hash = 2166136261;

  for (let i = 0; i < value.length; i++) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }

  return hash >>> 0;
}

function selectText<T>(
  values: readonly T[],
  key: string
): T {
  return values[hashText(key) % values.length];
}

/* =====================================
   지역별 SEO 데이터 생성
===================================== */

export function getDhSeoContent(
  serviceSlug: string,
  regionSlug: string,
  districtSlug: string
): DhSeoContent | null {
  if (!isServiceSlug(serviceSlug)) {
    return null;
  }

  if (
    !Object.prototype.hasOwnProperty.call(
      REGIONS,
      regionSlug
    )
  ) {
    return null;
  }

  const location = getLocation(
    regionSlug,
    districtSlug
  );

  if (!location) {
    return null;
  }

  const service = serviceSlug as ServiceSlug;
  const region = regionSlug as RegionSlug;

  const item = SERVICES[service];
  const content = SERVICE_CONTENT[service];

  const area = location.fullName;
  const districtName = location.districtName;

  const key =
    `${regionSlug}-${districtSlug}-${serviceSlug}`;

  /* 지역별 소개 문구 */

  const regionIntro = selectText(
    REGION_CONTENT[region],
    `${key}-region`
  );

  /* 서비스별 소개 문구 */

  const serviceIntro = selectText(
    content.introductions,
    `${key}-intro`
  );

  /* 서비스별 상세 설명 */

  const serviceDetail = selectText(
    content.details,
    `${key}-detail`
  );

  /* 메인 소개 */

  const intro = [
    `${area}에서 ${item.title}를 계획하고 계신가요?`,
    regionIntro,
    serviceIntro,
    `${COMPANY}는 철거 대상과 현장 조건을 확인한 뒤 상담을 진행합니다.`,
  ].join(" ");

  /* 상세 설명 */

  const detail = [
    `${districtName} ${item.shortTitle} 상담에서는`,
    serviceDetail,
    "철거 면적과 폐기물 반출 방법, 작업 가능 시간을 함께 확인하는 것이 좋습니다.",
    "현장 사진과 원하는 철거 범위를 알려주시면 작업 조건을 검토하는 데 도움이 됩니다.",
  ].join(" ");

  /* 지역별 체크리스트 */

  const checklist = [
    ...content.checks,
    `${districtName} 현장의 접근 경로와 폐기물 반출 여건`,
    "철거 희망 일정과 현장 사진 준비",
  ];

  /* FAQ 순서 지역별 차별화 */

  const faqStart =
    hashText(`${key}-faq`) %
    content.faqs.length;

  const faqs = Array.from(
    { length: content.faqs.length },
    (_, index) => {
      const faq =
        content.faqs[
          (faqStart + index) %
            content.faqs.length
        ];

      return {
        question:
          `${districtName} ${faq.question}`,
        answer: faq.answer,
      };
    }
  );

  /* SEO 제목 */

  const title =
    `${districtName} ${item.shortTitle} | ${COMPANY}`;

  /* 메타 설명 */

  const description = [
    `${area} ${item.title} 상담.`,
    serviceIntro,
    "철거 범위, 현장 조건과 견적 상담을 안내합니다.",
  ].join(" ");

  /* canonical */

  const canonical =
    SITE_URL +
    serviceRegionUrl(
      serviceSlug,
      regionSlug,
      districtSlug
    );

  return {
    title,
    description,
    h1: `${area} ${item.title}`,
    intro,
    detail,
    checklist,
    faqs,
    canonical,
  };
}
