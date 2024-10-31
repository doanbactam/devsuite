import type { HTMLAttributes } from "react"
import { cx } from "~/utils/cva"

export const Grid = ({ className, ...props }: HTMLAttributes<HTMLElement>) => {
  return <div className={cx("grid grid-auto-fill-lg gap-5 w-full", className)} {...props} />
}
