import createMDX from "@next/mdx"
import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  pageExtensions: ["md", "mdx", "ts", "tsx"],

  images: {
    remotePatterns: [
      { hostname: `${process.env.S3_BUCKET}.s3.${process.env.S3_REGION}.amazonaws.com` },
    ],
  },

  async rewrites() {
    return [
      // for posthog proxy
      {
        source: "/_proxy/posthog/ingest/static/:path*",
        destination: `${process.env.NEXT_PUBLIC_POSTHOG_HOST?.replace("us", "us-assets")}/static/:path*`,
      },
      {
        source: "/_proxy/posthog/ingest/:path*",
        destination: `${process.env.NEXT_PUBLIC_POSTHOG_HOST}/:path*`,
      },
      // for plausible proxy
      {
        source: "/_proxy/plausible/script.js",
        destination: `${process.env.NEXT_PUBLIC_PLAUSIBLE_HOST}/js/script.js`,
      },
      {
        source: "/_proxy/plausible/event",
        destination: `${process.env.NEXT_PUBLIC_PLAUSIBLE_HOST}/api/event`,
      },
    ]
  },
}

export default createMDX({})(nextConfig)
