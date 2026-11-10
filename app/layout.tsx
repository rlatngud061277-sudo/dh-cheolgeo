
import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

const SITE_URL = "https://www.dhcheolgeo.com";
const SITE_NAME = "DH 종합철거";
const FAVICON = "/IMG_1102.png";

const SITE_TITLE =
  "DH 종합철거 | 경기·충남·충북 철거업체";

const SITE_DESCRIPTION =
  "경기·충남·충북 철거 전문 DH 종합철거. 주택·아파트·상가·사무실 철거, 내부철거 및 원상복구 상담.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: SITE_TITLE,
    template: "%s | DH 종합철거",
  },

  description: SITE_DESCRIPTION,

  applicationName: SITE_NAME,

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: [
      {
        url: FAVICON,
        type: "image/png",
      },
    ],
    shortcut: FAVICON,
    apple: FAVICON,
  },

  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: SITE_NAME,
    title:
      "DH 종합철거 | 경기·충남·충북 철거 전문업체",
    description:
      "경기·충남·충북 전 지역 주택·아파트·상가·사무실 철거 및 원상복구 상담.",
    images: [
      {
        url: `${SITE_URL}${FAVICON}`,
        alt: "DH 종합철거 공식 로고",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [`${SITE_URL}${FAVICON}`],
  },

  alternates: {
    canonical: SITE_URL,
  },

  category: "철거공사",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
