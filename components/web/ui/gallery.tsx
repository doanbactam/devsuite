"use client"

import Image from "next/image"
import { usePathname } from "next/navigation"
import type { HTMLAttributes } from "react"
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "~/components/web/ui/carousel"
import { cva, cx } from "~/utils/cva"

type GalleryImage =
  | string
  | {
      url: string
      alt: string
    }

type GalleryProps = HTMLAttributes<HTMLElement> & {
  images: GalleryImage[]
}

const galleryImageVariants = cva({
  base: "border border-foreground/10 bg-foreground/10 rounded aspect-video object-cover md:rounded-lg",
})

export const Gallery = ({ images, ...props }: GalleryProps) => {
  const pathname = usePathname()

  if (images.length === 0) {
    return null
  }

  if (images.length === 1) {
    if (!images[0]) {
      return <div className={cx(galleryImageVariants())} />
    }

    return (
      <Image
        key={pathname}
        src={typeof images[0] === "string" ? images[0] : images[0].url}
        alt={typeof images[0] === "string" ? "" : images[0].alt}
        height={720}
        width={1280}
        className={cx(galleryImageVariants({ className: "w-full h-auto" }))}
      />
    )
  }

  return (
    <Carousel
      key={pathname}
      className="left-1/2 w-dvw -translate-x-1/2 overflow-x-clip"
      opts={{ align: "center", loop: true }}
      {...props}
    >
      <div className="relative">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem className="basis-4/5 md:basis-[656px]" key={index}>
              <Image
                src={typeof image === "string" ? image : image.url}
                alt={typeof image === "string" ? "" : image.alt}
                height={630}
                width={1200}
                className={cx(galleryImageVariants({ className: "w-auto" }))}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious />
        <CarouselNext />
      </div>

      <CarouselDots className="mt-6" />
    </Carousel>
  )
}
