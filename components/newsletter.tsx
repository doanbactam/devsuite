import type { HTMLAttributes } from "react"
import { NewsletterForm } from "~/components/newsletter-form"
import { Card } from "~/components/ui/card"
import { H3 } from "~/components/ui/heading"
import { cx } from "~/utils/cva"

type NewsletterProps = HTMLAttributes<HTMLElement> & {
  title?: string
  description?: string
}

export const Newsletter = ({ className, title, description, ...props }: NewsletterProps) => {
  return (
    <div className={cx("overflow-clip", className)} {...props}>
      <Card hover={false} isRevealed={false} className="bg-background lg:p-8">
        <div className="relative z-10 flex flex-col gap-4 max-w-md">
          {title && <H3 as="strong">{title}</H3>}
          {description && <p className="text-foreground/50 text-pretty">{description}</p>}

          <NewsletterForm
            size="lg"
            className="max-w-xs"
            buttonProps={{ children: "Join DevSuite" }}
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-background to-foreground/[2.5%] rounded-lg pointer-events-none" />

        <div className="absolute -inset-y-px -right-px w-1/2 rounded-lg overflow-clip select-none pointer-events-none max-md:hidden">
          <img
            src="/3d-panels.webp"
            alt="Newsletter"
            className="h-auto w-full mix-blend-exclusion"
          />
        </div>
      </Card>
    </div>
  )
}
