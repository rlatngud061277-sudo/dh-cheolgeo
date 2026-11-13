
import {
  SERVICES,
  REGIONS,
  getLocation,
  serviceRegionUrl,
  type ServiceSlug,
  type RegionSlug,
} from "./dh-data";

/* =====================================
   DH 종합철거 지역별 SEO 콘텐츠
===================================== */

type SeoContent = {
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

const SERVICE_CONTENT: Record<
  ServiceSlug,
  {
    topics: string[];
    questions: string[];
    answers: string[];
  }
> = {
  house: {
    topics: [
      "주방과 욕실의 기존 마감재를 철거할 때는 유지할 설비와 철거 대상을 먼저 구분하는 것이 중요합니다.",
      "아파트 리모델링 철거는 공용부 보양, 작업 시간, 폐기물 반출 동선을 함께 확인해야 합니다.",
      "주거공간의 부분 철거는 후속 인테리어 공정과 연결되므로 철거 범위를 사전에 정하는 것이 좋습니다.",
      "주택 내부 철거는 기존 벽체와 바닥 구조, 배관과 전기설비 위치를 확인한 뒤 계획해야 합니다.",
    ],
    questions: [
      "아파트 철거 전에 무엇을 준비해야 하나요?",
      "주택 리모델링 철거 범위는 어떻게 정하나요?",
      "욕실과 주방만 부분 철거할 수 있나요?",
      "철거 비용은 어떤 조건에 따라 달라지나요?",
    ],
    answers: [
      "관리사무소 작업 규정, 공용부 보양, 폐기물 반출 방법과 철거 범위를 확인하는 것이 좋습니다.",
      "새로운 인테리어 계획을 기준으로 유지할 구조물과 제거할 마감재를 구분해야 합니다.",
      "부분 철거는 가능 여부를 현장 구조와 주변 시설물 상태에 따라 검토해야 합니다.",
      "철거 면적, 마감재 종류, 작업 환경, 폐기물 양과 반출 조건 등에 따라 달라질 수 있습니다.",
    ],
  },

  commercial: {
    topics: [
      "상가 철거는 기존 인테리어와 건물에 남겨야 할 설비를 구분하는 과정이 중요합니다.",
      "음식점 철거는 주방 설비, 후드, 덕트와 배관의 철거 범위를 구체적으로 확인해야 합니다.",
      "매장 이전이나 폐업 철거는 임대차계약과 퇴거 일정을 함께 검토해야 합니다.",
      "상업시설 철거는 영업시설의 종류와 폐기물 반출 여건에 따라 작업 계획이 달라질 수 있습니다.",
    ],
    questions: [
      "상가 철거 전에 확인할 사항은 무엇인가요?",
      "음식점 주방 설비도 철거할 수 있나요?",
      "폐업한 매장의 철거 범위는 어떻게 결정하나요?",
      "상가 철거 견적에는 어떤 조건이 반영되나요?",
    ],
    answers: [
      "임대차계약, 임대인 협의사항, 건물 작업 규정과 기존 시설물 상태를 확인해야 합니다.",
      "후드와 덕트, 주방 설비의 종류 및 연결 상태를 확인한 후 작업 범위를 상담할 수 있습니다.",
      "계약상 원상복구 범위와 임대인 협의사항을 기준으로 철거 대상을 구분합니다.",
      "면적, 기존 인테리어 구조, 폐기물 종류, 반출 거리와 작업 시간 등을 고려합니다.",
    ],
  },

  office: {
    topics: [
      "사무실 이전 철거는 기존 파티션과 천장, 바닥재의 제거 범위를 먼저 확인해야 합니다.",
      "업무시설 내부 철거에서는 전기와 통신, 공조설비 중 유지할 부분을 구분해야 합니다.",
      "사무실 리모델링을 준비할 때는 후속 공정에 맞는 철거 범위를 설정하는 것이 중요합니다.",
      "건물 내 사무실 철거는 관리규정과 엘리베이터 사용 및 폐기물 반출 조건을 확인해야 합니다.",
    ],
    questions: [
      "사무실 칸막이만 철거할 수 있나요?",
      "사무실 천장 철거 시 주의할 점은 무엇인가요?",
      "사무실 이전 전에 어떤 내용을 확인해야 하나요?",
      "업무시설 철거 비용은 어떻게 산정하나요?",
    ],
    answers: [
      "칸막이 구조와 연결된 설비를 확인한 후 부분 철거 가능 여부를 검토할 수 있습니다.",
      "천장 내부의 전기, 통신, 소방, 공조설비 중 유지해야 할 시설을 먼저 확인해야 합니다.",
      "퇴거 일정, 임대차 조건, 건물 관리규정과 철거 대상 시설물을 정리하는 것이 좋습니다.",
      "철거 면적과 시설물 종류, 반출 조건, 건물 이용 제한 등을 고려해 산정합니다.",
    ],
  },

  interior: {
    topics: [
      "내부 부분 철거는 필요한 구간만 제거하고 유지할 시설물을 보호하는 것이 중요합니다.",
      "벽체 철거를 계획할 때는 구조체 여부와 매립된 전기 및 배관설비를 확인해야 합니다.",
      "바닥 마감재 철거는 기존 재료의 종류와 바탕면 상태에 따라 작업 방법이 달라집니다.",
      "천장 부분 철거는 내부 설비와 주변 마감재의 손상 가능성을 함께 검토해야 합니다.",
    ],
    questions: [
      "벽체 일부만 철거할 수 있나요?",
      "내부 철거 시 기존 시설물을 유지할 수 있나요?",
      "바닥재만 제거하는 작업도 가능한가요?",
      "부분 철거 견적은 어떻게 결정되나요?",
    ],
    answers: [
      "구조벽 여부와 내부 설비 상태를 확인한 후 철거 가능 범위를 검토해야 합니다.",
      "유지할 시설물과 철거 대상을 명확하게 구분하고 보호 방법을 상담할 수 있습니다.",
      "바닥재 종류와 하부 상태를 확인한 후 필요한 작업 범위를 결정합니다.",
      "작업 면적뿐 아니라 철거 난이도, 주변 시설물 보호와 폐기물 처리 조건이 반영됩니다.",
    ],
  },

  restoration: {
    topics: [
      "상가 원상복구는 계약 당시 상태와 임대인 협의사항을 확인하는 것부터 시작합니다.",
      "사무실 원상복구는 임차인이 설치한 칸막이와 마감재 등의 처리 범위를 정해야 합니다.",
      "계약 종료에 따른 원상복구는 퇴거 일정과 건물 작업 규정을 함께 고려해야 합니다.",
      "원상복구 공사는 단순 철거와 달리 유지하거나 복구해야 할 시설물의 범위를 확인해야 합니다.",
    ],
    questions: [
      "상가 원상복구 범위는 어떻게 정하나요?",
      "사무실 퇴거 시 어떤 시설물을 철거해야 하나요?",
      "원상복구 전에 임대인과 무엇을 확인해야 하나요?",
      "원상복구 비용은 어떤 기준으로 산정되나요?",
    ],
    answers: [
      "임대차계약 내용과 입주 당시 상태, 임대인과 협의한 범위를 기준으로 확인합니다.",
      "임차인이 설치한 시설물과 계약상 복구 대상인 마감재 등을 구분해야 합니다.",
      "철거 대상, 유지할 설비, 복구 수준과 완료 일정을 서면으로 확인하는 것이 좋습니다.",
      "철거 및 복구 범위, 마감재 종류, 작업 환경과 폐기물 반출 조건에 따라 달라집니다.",
    ],
  },
};

/* =====================================
   지역별 안내 주제
   실제 시공실적을 주장하지 않음
===================================== */

const REGION_TOPICS: Record<RegionSlug, string[]> = {
  gyeonggi: [
    "공동주택과 상업시설의 철거는 건물별 관리규정과 작업 가능 시간을 확인해야 합니다.",
    "철거 작업을 계획할 때는 차량 접근과 폐기물 반출 여건을 함께 살펴보는 것이 좋습니다.",
    "기존 인테리어의 철거 범위는 건물 구조와 후속 공사 계획에 따라 달라질 수 있습니다.",
    "주거시설과 업무시설은 철거 전 확인해야 할 설비와 관리 조건이 서로 다릅니다.",
  ],
  chungnam: [
    "주택과 상가의 철거는 건물 상태와 폐기물 반출 여건을 먼저 확인하는 것이 중요합니다.",
    "리모델링을 위한 철거에서는 기존 시설물의 상태와 유지할 설비를 구분해야 합니다.",
    "철거 상담 시 작업 위치와 접근 경로를 함께 알려주면 범위 검토에 도움이 됩니다.",
    "건물의 용도와 철거 대상에 따라 작업 준비와 폐기물 처리 방법이 달라질 수 있습니다.",
  ],
  chungbuk: [
    "철거 전에는 현장 접근성, 작업 공간과 폐기물 반출 조건을 확인해야 합니다.",
    "노후 시설물의 철거는 기존 마감재와 설비 상태를 점검한 뒤 계획하는 것이 좋습니다.",
    "부분 철거와 전체 내부 철거는 작업 범위와 후속 공정이 서로 다를 수 있습니다.",
    "상가와 주택의 철거 견적은 면적뿐 아니라 현장 조건을 함께 고려해야 합니다.",
  ],
};

/* =====================================
   문구 선택
   같은 지역·서비스는 항상 동일한 내용
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
   지역별 SEO 콘텐츠 생성
===================================== */

export function getDhSeoContent(
  serviceSlug: string,
  regionSlug: string,
  districtSlug: string
): SeoContent | null {
  if (
    !Object.prototype.hasOwnProperty.call(
      SERVICES,
      serviceSlug
    ) ||
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

  if (!location) return null;

  const service = serviceSlug as ServiceSlug;
  const region = regionSlug as RegionSlug;

  const data = SERVICES[service];
  const content = SERVICE_CONTENT[service];

  const name = location.districtName;
  const area = location.fullName;
  const key = `${regionSlug}-${districtSlug}-${serviceSlug}`;

  const regionIntro = selectText(
    REGION_TOPICS[region],
    `${key}-region`
  );

  const serviceIntro = selectText(
    content.topics,
    `${key}-service`
  );

  const intro = [
    `${area}에서 ${data.title}를 계획하고 계신가요?`,
    regionIntro,
    serviceIntro,
    "DH 종합철거는 철거 대상과 현장 조건을 확인한 후 상담을 진행합니다.",
  ].join(" ");

  const detail = [
    `${name} ${data.shortTitle} 상담에서는 철거 면적뿐 아니라`,
    "기존 시설물의 종류, 유지할 설비, 폐기물 반출 방법과",
    "작업 가능 시간을 함께 확인하는 것이 좋습니다.",
    "현장 사진과 원하는 철거 범위를 알려주시면",
    "작업 조건을 검토하는 데 도움이 됩니다.",
  ].join(" ");

  const questionIndex =
    hashText(`${key}-faq`) %
    content.questions.length;

  const faqOrder = [
    questionIndex,
    (questionIndex + 1) % 4,
    (questionIndex + 2) % 4,
    (questionIndex + 3) % 4,
  ];

  const faqs = faqOrder.map((index) => ({
    question: `${name}에서 ${content.questions[index]}`,
    answer: content.answers[index],
  }));

  const checklist = [
    ...data.work.map((item) => item.text),
    "현장 사진, 작업 희망 일정과 폐기물 반출 여건을 함께 확인합니다.",
  ];

  const title =
    `${name} ${data.shortTitle} | DH 종합철거`;

  const description = [
    `${area} ${data.title} 상담.`,
    serviceIntro,
    "철거 범위와 현장 조건을 확인하고 견적을 안내합니다.",
  ].join(" ");

  const canonical =
    "https://www.dhcheolgeo.com" +
    serviceRegionUrl(
      serviceSlug,
      regionSlug,
      districtSlug
    );

  return {
    title,
    description,
    h1: `${name} ${data.title}`,
    intro,
    detail,
    checklist,
    faqs,
    canonical,
  };
}
