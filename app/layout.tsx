
import type { Metadata, Viewport } from "next";
import "./globals.css";

/* =====================================
   DH 종합철거 기본 정보
===================================== */

const SITE_URL = "https://www.dhcheolgeo.com";

const SITE_NAME = "DH 종합철거";

const SITE_TITLE =
  "DH 종합철거 | 서울·경기·인천·충남·충북 철거 전문업체";

const SITE_DESCRIPTION =
  "DH 종합철거는 주택·아파트 철거, 상가 철거, 사무실 철거, 내부 철거 및 원상복구 상담을 진행합니다. 서울·경기·인천·충남·충북 지역 철거 문의 및 출장 상담. 그 외 지역도 문의 가능합니다.";

/* =====================================
   검색엔진 메타데이터
===================================== */

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,

  /* =====================================
     네이버 서치어드바이저 소유확인
  ===================================== */

  verification: {
    other: {
      "naver-site-verification":
        "9da1cd6fecafeb3639287b55718ce2ba6d1eff62",
    },
  },

  /* =====================================
     검색로봇 수집 설정
  ===================================== */

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
    },
  },

  /* =====================================
     SNS 및 대표 이미지
  ===================================== */

  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "DH 종합철거 공식 홈페이지",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },

  /* =====================================
     대표 홈페이지 주소
  ===================================== */

  alternates: {
    canonical: SITE_URL,
  },

  /* =====================================
     홈페이지 아이콘
  ===================================== */

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

/* =====================================
   모바일 화면 설정
===================================== */

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#111111",
};

/* =====================================
   전체 홈페이지 레이아웃
===================================== */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
