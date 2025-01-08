import { env } from "~/env"

export const linksConfig = {
  feed: `${env.NEXT_PUBLIC_SITE_URL}/rss.xml`,
  author: "https://m4v.vn",
  twitter: "https://x.com/",
  github: "https://github.com/",
  producthunt: "https://www.producthunt.com/",
  family: [
    {
      title: "Google",
      href: "https://google.com",
      description: "Open Source Alternatives to Popular Software",
    },
    {
      title: "ChatGPT",
      href: "https://chatgpt.com",
      description: "No-code directory website builder",
    },
    {
      title: "Llama",
      href: "https://llama.com",
      description: "Build directory websites in WordPress",
    },
  ],
}
