import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"
import plur from "plur"
import type { ComponentProps } from "react"
import { H5 } from "~/components/common/heading"
import { Card, CardDescription } from "~/components/web/ui/card"
import type { CategoryMany } from "~/server/categories/payloads"
import type { CollectionMany } from "~/server/collections/payloads"

type CategoryCardProps = ComponentProps<typeof Link> & {
  category: CategoryMany | CollectionMany
}

export const CategoryCard = ({ category, ...props }: CategoryCardProps) => {
  return (
    <Card asChild>
      <Link prefetch {...props}>
        <div className="w-full flex gap-3 items-start justify-between">
          <div className="flex flex-col gap-1 min-w-0">
            <H5 className="!leading-snug flex-1 truncate">{category.name}</H5>

            <span className="text-xs text-foreground/50">
              {category._count.tools} {plur("tool", category._count.tools)}
            </span>
          </div>

          <span className="size-9 grid place-items-center mt-1 bg-foreground/10 rounded-full shrink-0">
            <ArrowRightIcon />
          </span>
        </div>

        <CardDescription>{category.description}</CardDescription>
      </Link>
    </Card>
  )
}
