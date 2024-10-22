import type { HTMLAttributes } from "react"
import { forwardRef } from "react"
import { type VariantProps, cva, cx } from "~/utils/cva"

const containerVariants = cva({
  base: "relative w-full max-w-screen-lg mx-auto px-6 lg:px-8 xl:max-w-screen-xl",
})

type ContainerProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof containerVariants>

export const Container = forwardRef<HTMLDivElement, ContainerProps>((props, ref) => {
  const { className, ...rest } = props

  return <div ref={ref} className={cx(containerVariants({ className }))} {...rest} />
})

Container.displayName = "Container"
