
import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://dhcheolgeo.com";
const SITE_NAME = "DH 종합철거";
const FAVICON = "/IMG_1102.png";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "DH 종합철거 | 철거공사·상가철거·원상복구",
    template: "%s | DH 종합철거",
  },

  description:
    "DH 종합철거는 상가철거, 내부철거, 원상복구 등 다양한 철거공사를 상담합니다. 현장 상황에 맞춘 철거 작업 범위와 견적을 안내합니다.",

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
    title: "DH 종합철거 | 철거공사·상가철거·원상복구",
    description:
      "상가철거, 내부철거, 원상복구 등 철거공사 상담. DH 종합철거에서 현장 상황에 맞는 작업을 안내합니다.",
    images: [
      {
        url: FAVICON,
        width: 1200,
        height: 1200,
        alt: "DH 종합철거 공식 로고",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "DH 종합철거",
    description: "철거공사·상가철거·내부철거·원상복구",
    images: [FAVICON],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

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
