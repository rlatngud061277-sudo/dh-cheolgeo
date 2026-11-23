
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  poweredByHeader: false,

  async redirects() {
    return [
      /* 예전 태안 주소(한글 섞인 slug) → 새 주소 */
      {
        source: "/services/:service/chungnam/tae%EC%95%88",
        destination: "/services/:service/chungnam/taean",
        permanent: true,
      },
      {
        source: "/services/demolition/:region/:district",
        destination:
          "/services/house/:region/:district",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
