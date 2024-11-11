import { Suspense } from "react"
import { CountBadge } from "~/app/(web)/(home)/count-badge"
import { ListingCategories } from "~/app/(web)/(home)/listing-categories"
import { ListingTools } from "~/app/(web)/(home)/listing-tools"
import { CategorySkeleton } from "~/components/web/cards/category-skeleton"
import { ToolSkeleton } from "~/components/web/cards/tool-skeleton"
import { Listing } from "~/components/web/listing"
import { NewsletterForm } from "~/components/web/newsletter-form"
import { Badge } from "~/components/web/ui/badge"
import { Intro, IntroDescription, IntroTitle } from "~/components/web/ui/intro"
import { Ping } from "~/components/web/ui/ping"
import { config } from "~/config"

export default function Home() {
  return (
    <>
      <Intro className="mb-[2.5vh] text-pretty">
        <IntroTitle className="max-w-[47rem]">{config.site.tagline}</IntroTitle>
        <IntroDescription>{config.site.description}</IntroDescription>

        <NewsletterForm
          buttonProps={{ children: "Join our community", size: "md" }}
          className="mt-4 mx-auto"
        >
          <p className="w-full text-xs text-foreground/50">
            Get the latest tools sent directly to your inbox 🎉
          </p>
        </NewsletterForm>

        <Suspense
          fallback={
            <Badge
              size="lg"
              prefix={<Ping />}
              className="min-w-20 order-first pointer-events-none animate-pulse"
            >
              &nbsp;
            </Badge>
          }
        >
          <CountBadge />
        </Suspense>
      </Intro>

      <Suspense
        fallback={
          <Listing>
            {[...Array(6)].map((_, i) => (
              <ToolSkeleton key={i} />
            ))}
          </Listing>
        }
      >
        <ListingTools />
      </Suspense>

      <Suspense
        fallback={
          <Listing title="Browse Categories">
            {[...Array(6)].map((_, index) => (
              <CategorySkeleton key={index} />
            ))}
          </Listing>
        }
      >
        <ListingCategories />
      </Suspense>
    </>
  )
}
