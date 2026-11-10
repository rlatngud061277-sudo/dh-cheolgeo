
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,

  poweredByHeader: false,

  async redirects() {
    return [
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
