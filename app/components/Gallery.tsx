import { HTMLAttributes } from "react"
import {
    Carousel,
    CarouselContent,
    CarouselDots,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./Carousel"
import { useLocation } from "@remix-run/react"

type GalleryProps = HTMLAttributes<HTMLElement> & {
  images: string[]
}

export const Gallery = ({ images, ...props }: GalleryProps) => {
  const { key } = useLocation()

  if (images.length === 0) {
    return null
  }

  if (images.length === 1) {
    return (
      <img
        key={key}
        src={images[0]}
        alt=""
        className="w-full h-auto rounded aspect-[1200/630] object-cover md:rounded-lg"
      />
    )
  }

  return (
    <Carousel
      key={key}
      className="left-1/2 w-dvw -translate-x-1/2 overflow-x-clip"
      opts={{ align: "center", loop: true }}
      {...props}
    >
      <div className="relative">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem className="basis-4/5 md:basis-[656px]" key={index}>
              <img
                src={image}
                alt=""
                className="w-auto rounded aspect-[1200/630] object-cover md:rounded-lg"
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
