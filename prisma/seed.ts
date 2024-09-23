import { slugify } from "@curiousleaf/utils"
import { prisma } from "~/services.server/prisma"
import { getMetaTags } from "~/utils/metatags"

const categories = [
  {
    name: "Analytics",
    description: "Track web/app visitors and events.",
  },
  {
    name: "API Development",
    description: "Creating, managing, and testing APIs.",
  },
  {
    name: "APIs",
    description: "Protocols and tools that let apps communicate and interact.",
  },
  {
    name: "Authentication",
    description: "Products that handle authentication and user identity for you.",
  },
  {
    name: "Backend-as-a-Service",
    description: "Abstract away all the backend hassles with a suite of backend solutions.",
  },
  {
    name: "Background Jobs",
    description: "Schedule and manage background tasks.",
  },
  {
    name: "CI/CD",
    description: "Continuous Integration/Delivery.",
  },
  {
    name: "Cloud Cost Management",
    description: "Monitor and control cloud costs.",
  },
  {
    name: "Code Boilerplates",
    description: "Pre-written code segments for starting projects.",
  },
  {
    name: "Copilots & Autopilots",
    description: "AI assistants for coding help and automation.",
  },
  {
    name: "Databases & Spreadsheets",
    description: "Storing data and processing it.",
  },
  {
    name: "Debug & Get Help",
    description: "Bug tracking, fixing, and getting help.",
  },
  {
    name: "Deployment & Hosting",
    description: "Products that help you deploy your app/website.",
  },
  {
    name: "Developer Portal",
    description: "Central resource hubs for developers.",
  },
  {
    name: "Documentation",
    description: "Documentation solutions.",
  },
  {
    name: "Environment & Secret Management",
    description: "Manage environment variables and secrets for multiple apps or projects.",
  },
  {
    name: "Feature Flags",
    description: "Control production features with conditional flags in your code.",
  },
  {
    name: "IDEs & Environment",
    description: "Products that extend your IDE and help with development.",
  },
  {
    name: "Internal Tooling",
    description: "Creating and managing in-house software.",
  },
  {
    name: "Issue Tracking",
    description: "Systems for managing project issues.",
  },
  {
    name: "Localization",
    description: "Translating your product (also denoted i18n).",
  },
  {
    name: "Mail",
    description: "Sending and verifying emails as a service.",
  },
  {
    name: "Media",
    description: "Media APIs (optimization, CDN).",
  },
  {
    name: "Messaging",
    description: "Messaging APIs - SMS, notifications, chats, and VoIP.",
  },
  {
    name: "Monitoring",
    description: "Observing system or application performance.",
  },
  {
    name: "Mono Fonts",
    description: "Fixed-width fonts for readable coding.",
  },
  {
    name: "Observability",
    description: "Insights into internal system state.",
  },
  {
    name: "Onboarding",
    description: "Tools to introduce new team members to a project.",
  },
  {
    name: "Payment & Pricing",
    description: "Handling payments, credit card processing, and invoices.",
  },
  {
    name: "Realtime API",
    description: "APIs for live data transmission.",
  },
  {
    name: "Repository Management",
    description: "Repository and pull request management.",
  },
  {
    name: "Search API",
    description: "Index and search your content as a service API.",
  },
  {
    name: "Workflow Automation",
    description: "Automating tasks within a workflow.",
  },
]

const tools = [
  {
    name: "Knock",
    websiteUrl: "https://knock.app",
    category: "Messaging",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Arcade",
    websiteUrl: "https://arcade.software",
    category: "Onboarding",
    isOpenSource: false,
    tagline: "Create effortlessly beautiful demos in minutes.",
    description: "",
    content: "",
  },
  {
    name: "Retool",
    websiteUrl: "https://retool.com",
    category: "Internal Tooling",
    isOpenSource: false,
    tagline: "The fastest way to develop effective software.",
    description: "",
    content: "",
  },
  {
    name: "Iosevka",
    websiteUrl: "https://typeof.net/Iosevka",
    category: "Mono Fonts",
    isOpenSource: false,
    tagline: "Versatile typeface for code, from code.",
    description: "",
    content:
      "Iosevka is an open-source, sans-serif + slab-serif, monospace + quasi‑proportional typeface family, designed for writing code, using in terminals, and preparing technical documents.",
  },
  {
    name: "Zenaton",
    websiteUrl: "https://zenaton.com",
    category: "Workflow Automation",
    isOpenSource: false,
    tagline: "Workflow Builder for Developers",
    description: "",
    content: "",
  },
  {
    name: "Mintlify",
    websiteUrl: "https://mintlify.com",
    category: "Documentation",
    isOpenSource: true,
    tagline: "Build the documentation you've always wanted",
    description: "",
    content: "",
  },
  {
    name: "Inngest",
    websiteUrl: "https://inngest.com",
    category: "Background Jobs",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Relay",
    websiteUrl: "https://relay.app",
    category: "Workflow Automation",
    isOpenSource: false,
    tagline: "The next generation of workflow automation",
    description: "",
    content: "",
  },
  {
    name: "Frigade",
    websiteUrl: "https://frigade.com",
    category: "Onboarding",
    isOpenSource: false,
    tagline: "Product growth and onboarding for modern software companies",
    description: "",
    content: "",
  },
  {
    name: "Commit Mono",
    websiteUrl: "https://commitmono.com",
    category: "Mono Fonts",
    isOpenSource: false,
    tagline: "Neutral programming typeface.",
    description: "",
    content:
      "Commit Mono is an anonymous and neutral coding font focused on creating a better reading experience.",
  },
  {
    name: "Graphite",
    websiteUrl: "https://graphite.dev",
    category: "Repository Management",
    isOpenSource: false,
    tagline: "Never wait for a code review again.",
    description: "",
    content: "",
  },
  {
    name: "Trigger",
    websiteUrl: "https://trigger.dev",
    category: "Background Jobs",
    isOpenSource: true,
    tagline: "The open source Background Jobs framework for TypeScript",
    description: "",
    content: "",
  },
  {
    name: "Resend",
    websiteUrl: "https://resend.com",
    category: "Mail",
    isOpenSource: false,
    tagline: "Deliver transactional and marketing emails at scale.",
    description: "",
    content: "",
  },
  {
    name: "Sentry",
    websiteUrl: "https://sentry.io",
    category: "Monitoring",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Highlight",
    websiteUrl: "https://highlight.io",
    category: "Monitoring",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "PostHog",
    websiteUrl: "https://posthog.com",
    category: "Analytics",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "ClickHouse",
    websiteUrl: "https://clickhouse.com",
    category: "Analytics",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Meilisearch",
    websiteUrl: "https://meilisearch.com",
    category: "Search API",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Algolia",
    websiteUrl: "https://algolia.com",
    category: "Search API",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Typesense",
    websiteUrl: "https://typesense.org",
    category: "Search API",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Elastic",
    websiteUrl: "https://elastic.co",
    category: "Search API,Observability",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Novu",
    websiteUrl: "https://novu.co",
    category: "Messaging",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "PocketBase",
    websiteUrl: "https://pocketbase.io",
    category: "Backend-as-a-Service",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Vercel",
    websiteUrl: "https://vercel.com",
    category: "Deployment & Hosting",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Netlify",
    websiteUrl: "https://netlify.com",
    category: "Deployment & Hosting",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Render",
    websiteUrl: "https://render.com",
    category: "Deployment & Hosting",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Fly.io",
    websiteUrl: "https://fly.io",
    category: "Deployment & Hosting",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Railway",
    websiteUrl: "https://railway.app",
    category: "Deployment & Hosting",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Planar",
    websiteUrl: "https://useplanar.com",
    category: "Repository Management",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Stenography",
    websiteUrl: "https://stenography.dev",
    category: "Documentation",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Redocly",
    websiteUrl: "https://redocly.com",
    category: "Documentation",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Swimm",
    websiteUrl: "https://swimm.io",
    category: "Documentation",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Readme",
    websiteUrl: "https://readme.com",
    category: "Documentation",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Grit",
    websiteUrl: "https://grit.io",
    category: "Copilots & Autopilots",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Second",
    websiteUrl: "https://second.dev",
    category: "Copilots & Autopilots",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Tabnine",
    websiteUrl: "https://tabnine.com",
    category: "Copilots & Autopilots",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "GitHub Copilot",
    websiteUrl: "https://github.com/features/copilot",
    category: "Copilots & Autopilots",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Codeium",
    websiteUrl: "https://codeium.com",
    category: "Copilots & Autopilots",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Codium",
    websiteUrl: "https://codium.ai",
    category: "Copilots & Autopilots",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Sourcegraph",
    websiteUrl: "https://sourcegraph.com",
    category: "Copilots & Autopilots",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Supermaven",
    websiteUrl: "https://supermaven.com",
    category: "Copilots & Autopilots",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Mutable",
    websiteUrl: "https://mutable.ai",
    category: "Copilots & Autopilots",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Release",
    websiteUrl: "https://release.com",
    category: "IDEs & Environment",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Coder",
    websiteUrl: "https://coder.com",
    category: "IDEs & Environment",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Gitpod",
    websiteUrl: "https://gitpod.io",
    category: "IDEs & Environment",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Replit",
    websiteUrl: "https://replit.com",
    category: "IDEs & Environment",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Cursor",
    websiteUrl: "https://cursor.com",
    category: "IDEs & Environment",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Zed",
    websiteUrl: "https://zed.dev",
    category: "IDEs & Environment",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Linear",
    websiteUrl: "https://linear.app",
    category: "Issue Tracking",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Huly",
    websiteUrl: "https://huly.io",
    category: "Issue Tracking",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "LaunchDarkly",
    websiteUrl: "https://launchdarkly.com",
    category: "Feature Flags",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Statsig",
    websiteUrl: "https://statsig.com",
    category: "Feature Flags",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Harness",
    websiteUrl: "https://harness.io",
    category: "CI/CD",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Cortex",
    websiteUrl: "https://cortex.io",
    category: "Developer Portal",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Backstage",
    websiteUrl: "https://backstage.io",
    category: "Developer Portal",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Replay",
    websiteUrl: "https://replay.io",
    category: "Debug & Get Help",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Adrenaline",
    websiteUrl: "https://useadrenaline.com",
    category: "Debug & Get Help",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "ChatGPT",
    websiteUrl: "https://chat.openai.com",
    category: "Debug & Get Help",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "AskCodi",
    websiteUrl: "https://askcodi.com",
    category: "Debug & Get Help",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "AWS Q Developer",
    websiteUrl: "https://aws.amazon.com/q/developer",
    category: "Copilots & Autopilots",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Liveblocks",
    websiteUrl: "https://liveblocks.io",
    category: "Realtime API",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "LiveKit",
    websiteUrl: "https://livekit.io",
    category: "Realtime API",
    isOpenSource: false,
    tagline: "The Realtime Cloud. Build and scale voice and video applications.",
    description: "",
    content: "",
  },
  {
    name: "Flox",
    websiteUrl: "https://flox.dev",
    category: "IDEs & Environment",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Storylane",
    websiteUrl: "https://storylane.io",
    category: "Onboarding",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "AuthKit",
    websiteUrl: "https://authkit.com",
    category: "Authentication",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Clerk",
    websiteUrl: "https://clerk.com",
    category: "Authentication",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Kinde",
    websiteUrl: "https://kinde.com",
    category: "Authentication",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Auth0",
    websiteUrl: "https://auth0.com",
    category: "Authentication",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "AWS Cognito",
    websiteUrl: "https://aws.amazon.com/cognito",
    category: "Authentication",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "FrontEgg",
    websiteUrl: "https://frontegg.com",
    category: "Authentication",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "FusionAuth",
    websiteUrl: "https://fusionauth.io",
    category: "Authentication",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Kitemaker",
    websiteUrl: "https://kitemaker.co",
    category: "Issue Tracking",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Antimetal",
    websiteUrl: "https://antimetal.com",
    category: "Cloud Cost Management",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Plane",
    websiteUrl: "https://plane.so",
    category: "Issue Tracking",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Uploadcare",
    websiteUrl: "https://uploadcare.com",
    category: "Media",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Checkly",
    websiteUrl: "https://checklyhq.com",
    category: "CI/CD",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Bucket",
    websiteUrl: "https://bucket.co",
    category: "Feature Flags",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Folio",
    websiteUrl: "https://folio.la",
    category: "Onboarding",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Volta",
    websiteUrl: "https://volta.net",
    category: "Repository Management",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "KloudMate",
    websiteUrl: "https://kloudmate.com",
    category: "Observability",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Axiom",
    websiteUrl: "https://axiom.co",
    category: "Observability",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Urlbox",
    websiteUrl: "https://urlbox.com",
    category: "APIs",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "ScreenshotOne",
    websiteUrl: "https://screenshotone.com",
    category: "APIs",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "MailerSend",
    websiteUrl: "https://mailersend.com",
    category: "Mail",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Aide",
    websiteUrl: "https://aide.dev",
    category: "Copilots & Autopilots",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Postmark",
    websiteUrl: "https://postmarkapp.com",
    category: "Mail",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Pusher",
    websiteUrl: "https://pusher.com",
    category: "Realtime API",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "GrowthBook",
    websiteUrl: "https://growthbook.io",
    category: "Feature Flags",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Unleash",
    websiteUrl: "https://getunleash.io",
    category: "Feature Flags",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Corbado",
    websiteUrl: "https://corbado.com",
    category: "Authentication",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "SuperTokens",
    websiteUrl: "https://supertokens.com",
    category: "Authentication",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Stytch",
    websiteUrl: "https://stytch.com",
    category: "Authentication",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Ory",
    websiteUrl: "https://ory.sh",
    category: "Authentication",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Hanko",
    websiteUrl: "https://hanko.io",
    category: "Authentication",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Magic.link",
    websiteUrl: "https://magic.link",
    category: "Authentication",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Ably",
    websiteUrl: "https://ably.com",
    category: "Messaging",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "MagicBell",
    websiteUrl: "https://magicbell.com",
    category: "Messaging",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Stream",
    websiteUrl: "https://getstream.io",
    category: "Messaging",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Twilio",
    websiteUrl: "https://twilio.com",
    category: "Messaging",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Bytescale",
    websiteUrl: "https://bytescale.com",
    category: "Media",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Cloudinary",
    websiteUrl: "https://cloudinary.com",
    category: "Media",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Dyte",
    websiteUrl: "https://dyte.io",
    category: "Media",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Flatfile",
    websiteUrl: "https://flatfile.com",
    category: "Media",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Pintura",
    websiteUrl: "https://pqina.nl/pintura",
    category: "Media",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Mux",
    websiteUrl: "https://mux.com",
    category: "Media",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Imgix",
    websiteUrl: "https://imgix.com",
    category: "Media",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "ImageKit",
    websiteUrl: "https://imagekit.io",
    category: "Media",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Loops",
    websiteUrl: "https://loops.so",
    category: "Mail",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Mailgun",
    websiteUrl: "https://mailgun.com",
    category: "Mail",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "SendGrid",
    websiteUrl: "https://sendgrid.com",
    category: "Mail",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Lob",
    websiteUrl: "https://lob.com",
    category: "Mail",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Hunter",
    websiteUrl: "https://hunter.io",
    category: "Mail",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Anymail Finder",
    websiteUrl: "https://anymailfinder.com",
    category: "Mail",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Weglot",
    websiteUrl: "https://weglot.com",
    category: "Localization",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Tolgee",
    websiteUrl: "https://tolgee.io",
    category: "Localization",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Doppler",
    websiteUrl: "https://doppler.com",
    category: "Environment & Secret Management",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Vault",
    websiteUrl: "https://vaultproject.io",
    category: "Environment & Secret Management",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Ubiq",
    websiteUrl: "https://ubiqsecurity.com",
    category: "Environment & Secret Management",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Unkey",
    websiteUrl: "https://unkey.com",
    category: "Environment & Secret Management,API Development",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "DeveloperHub",
    websiteUrl: "https://developerhub.io",
    category: "Documentation",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Bump",
    websiteUrl: "https://bump.sh",
    category: "Documentation",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Apidog",
    websiteUrl: "https://apidog.com",
    category: "Documentation,API Development",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Rely",
    websiteUrl: "https://rely.io",
    category: "Developer Portal",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Zeabur",
    websiteUrl: "https://zeabur.com",
    category: "Deployment & Hosting",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Platform.sh",
    websiteUrl: "https://platform.sh",
    category: "Deployment & Hosting",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Neon",
    websiteUrl: "https://neon.tech",
    category: "Databases & Spreadsheets",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "PlanetScale",
    websiteUrl: "https://planetscale.com",
    category: "Databases & Spreadsheets",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Upstash",
    websiteUrl: "https://upstash.com",
    category: "Databases & Spreadsheets,Background Jobs",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Supabase",
    websiteUrl: "https://supabase.com",
    category: "Backend-as-a-Service",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Appwrite",
    websiteUrl: "https://appwrite.io",
    category: "Backend-as-a-Service",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Spacelift",
    websiteUrl: "https://spacelift.io",
    category: "CI/CD",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Depot",
    websiteUrl: "https://depot.dev",
    category: "CI/CD",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Tinybird",
    websiteUrl: "https://tinybird.co",
    category: "Analytics",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Pirsch",
    websiteUrl: "https://pirsch.io",
    category: "Analytics",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Mixpanel",
    websiteUrl: "https://mixpanel.com",
    category: "Analytics",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Plausible",
    websiteUrl: "https://plausible.io",
    category: "Analytics",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Segment",
    websiteUrl: "https://segment.com",
    category: "Analytics",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "OpenPanel",
    websiteUrl: "https://openpanel.dev",
    category: "Analytics",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "DocuSign",
    websiteUrl: "https://developers.docusign.com",
    category: "APIs",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Documenso",
    websiteUrl: "https://documenso.com",
    category: "APIs",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Interval",
    websiteUrl: "https://interval.com",
    category: "Internal Tooling",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Refine",
    websiteUrl: "https://refine.dev",
    category: "Internal Tooling",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Illa",
    websiteUrl: "https://illacloud.com",
    category: "Internal Tooling",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Appsmith",
    websiteUrl: "https://appsmith.com",
    category: "Internal Tooling",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Airbrake",
    websiteUrl: "https://airbrake.io",
    category: "Monitoring",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "BetterStack",
    websiteUrl: "https://betterstack.com",
    category: "Monitoring",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "LogRocket",
    websiteUrl: "https://logrocket.com",
    category: "Monitoring",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Pagerly",
    websiteUrl: "https://pagerly.io",
    category: "Monitoring",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Rollbar",
    websiteUrl: "https://rollbar.com",
    category: "Monitoring",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "OpenReplay",
    websiteUrl: "https://openreplay.com",
    category: "Monitoring",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "OpenMeter",
    websiteUrl: "https://openmeter.io",
    category: "Monitoring,Cloud Cost Management",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "NetData",
    websiteUrl: "https://netdata.cloud",
    category: "Monitoring,Observability",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Braintree",
    websiteUrl: "https://braintreepayments.com",
    category: "Payment & Pricing",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Increase",
    websiteUrl: "https://increase.com",
    category: "Payment & Pricing",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "LemonSqueezy",
    websiteUrl: "https://lemonsqueezy.com",
    category: "Payment & Pricing",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Paddle",
    websiteUrl: "https://paddle.com",
    category: "Payment & Pricing",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Plaid",
    websiteUrl: "https://plaid.com",
    category: "Payment & Pricing",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Stigg",
    websiteUrl: "https://stigg.io",
    category: "Payment & Pricing",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Stripe",
    websiteUrl: "https://stripe.com",
    category: "Payment & Pricing",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Swiftype",
    websiteUrl: "https://swiftype.com",
    category: "Search API",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Infiscal",
    websiteUrl: "https://infisical.com",
    category: "Environment & Secret Management",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "OneSignal",
    websiteUrl: "https://onesignal.com",
    category: "Messaging",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "AWS OpenSearch",
    websiteUrl: "https://aws.amazon.com/opensearch-service",
    category: "Search API",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "LaunchFast",
    websiteUrl: "https://launchfa.st",
    category: "Code Boilerplates",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "MakerKit",
    websiteUrl: "https://makerkit.dev",
    category: "Code Boilerplates",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "ShipFast",
    websiteUrl: "https://shipfa.st",
    category: "Code Boilerplates",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "SaaS UI",
    websiteUrl: "https://saas-ui.dev",
    category: "Code Boilerplates",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Shipixen",
    websiteUrl: "https://shipixen.com",
    category: "Code Boilerplates",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Supastarter",
    websiteUrl: "https://supastarter.dev",
    category: "Code Boilerplates",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "SaasRock",
    websiteUrl: "https://saasrock.com",
    category: "Code Boilerplates",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "LaraFast",
    websiteUrl: "https://larafast.com",
    category: "Code Boilerplates",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Shipped",
    websiteUrl: "https://shipped.club",
    category: "Code Boilerplates",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Pipedream",
    websiteUrl: "https://pipedream.com",
    category: "Workflow Automation",
    isOpenSource: false,
    tagline: "Connect APIs, AI, databases and more.",
    description: "",
    content: "",
  },
  {
    name: "Engagespot",
    websiteUrl: "https://engagespot.co",
    category: "Messaging",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Dragonfly",
    websiteUrl: "https://dragonflydb.io",
    category: "Databases & Spreadsheets",
    isOpenSource: true,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "CodeRabbit",
    websiteUrl: "https://coderabbit.ai",
    category: "Repository Management",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
  {
    name: "Fern",
    websiteUrl: "https://buildwithfern.com",
    category: "Documentation",
    isOpenSource: false,
    tagline: "",
    description: "",
    content: "",
  },
]

async function seed() {
  await Promise.all(
    categories.map(category =>
      prisma.category.create({
        data: {
          name: category.name,
          slug: slugify(category.name),
          description: category.description,
        },
      }),
    ),
  )

  for (const tool of tools) {
    const metadata = await getMetaTags(tool.websiteUrl)

    await prisma.tool.create({
      data: {
        name: tool.name,
        slug: slugify(tool.name),
        websiteUrl: tool.websiteUrl,
        tagline: tool.tagline,
        description: tool.description || metadata.description,
        content: tool.content,
        isOpenSource: tool.isOpenSource,
        images: metadata.imageUrl ? [metadata.imageUrl] : undefined,
        publishedAt: new Date(),
        faviconUrl: `https://www.google.com/s2/favicons?sz=128&domain_url=${tool.websiteUrl}`,
        categories: {
          connect: tool.category.split(",").map(category => ({
            name: category,
          })),
        },
      },
    })
  }
}

seed()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
