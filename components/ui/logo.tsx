import Link from "next/link"
import type { HTMLAttributes } from "react"
import { Stack } from "~/components/ui/stack"
import { SITE_NAME } from "~/utils/constants"
import { cx } from "~/utils/cva"

export const Logo = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <Stack size="sm" className={cx("group/logo text-foreground", className)} asChild {...props}>
      <Link href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 200 200"
          width="200"
          height="200"
          role="img"
          aria-label="Logo"
          className="h-5 w-auto !duration-300 !ease-in-out will-change-transform group-hover/logo:rotate-90"
        >
          <path
            fill="currentColor"
            d="M103.14 0a4 4 0 0 1 4 4v38.67c0 4.4 6.06 5.58 7.71 1.5l14.49-35.86a4 4 0 0 1 5.2-2.2l5.84 2.35a4 4 0 0 1 2.2 5.2L127.15 51.9c-1.63 4.05 3.45 7.41 6.54 4.33l29.15-29.15a4 4 0 0 1 5.66 0l4.44 4.44a4 4 0 0 1 0 5.66l-26.18 26.18c-3.12 3.12.38 8.26 4.43 6.5l33.93-14.83a4 4 0 0 1 5.27 2.06l2.51 5.76a4 4 0 0 1-2.06 5.27l-39.1 17.08c-3.97 1.74-2.73 7.67 1.6 7.67H196a4 4 0 0 1 4 4v6.28a4 4 0 0 1-4 4h-42.66c-4.34 0-5.58 5.93-1.6 7.67l39.09 17.08a4 4 0 0 1 2.06 5.27l-2.51 5.76a4 4 0 0 1-5.27 2.06l-33.93-14.82c-4.05-1.77-7.55 3.37-4.43 6.5l26.18 26.17a4 4 0 0 1 0 5.66l-4.44 4.44a4 4 0 0 1-5.66 0l-29.15-29.15c-3.09-3.08-8.17.28-6.54 4.32l15.45 38.23a4 4 0 0 1-2.22 5.21l-5.82 2.36a4 4 0 0 1-5.21-2.22l-14.49-35.85c-1.64-4.08-7.7-2.9-7.7 1.5V196a4 4 0 0 1-4 4h-6.3a4 4 0 0 1-4-4v-38.68c0-4.4-6.05-5.57-7.7-1.5L70.66 191.7a4 4 0 0 1-5.2 2.2l-5.83-2.35a4 4 0 0 1-2.22-5.2l15.45-38.24c1.63-4.03-3.46-7.4-6.54-4.32l-29.15 29.15a4 4 0 0 1-5.66 0l-4.44-4.44a4 4 0 0 1 0-5.66l26.18-26.18c3.12-3.13-.38-8.26-4.43-6.5l-33.93 14.83a4 4 0 0 1-5.27-2.06l-2.51-5.76a4 4 0 0 1 2.06-5.27l39.1-17.08c3.97-1.74 2.73-7.67-1.6-7.67H4a4 4 0 0 1-4-4v-6.28a4 4 0 0 1 4-4h42.66c4.34 0 5.58-5.93 1.6-7.67L9.18 68.11a4 4 0 0 1-2.06-5.27l2.51-5.76a4 4 0 0 1 5.27-2.06l33.93 14.82c4.05 1.77 7.55-3.37 4.43-6.5L27.07 37.18a4 4 0 0 1 0-5.66l4.44-4.44a4 4 0 0 1 5.66 0l29.15 29.15c3.08 3.08 8.17-.28 6.54-4.33L57.41 13.67a4 4 0 0 1 2.22-5.21l5.82-2.36a4 4 0 0 1 5.21 2.21l14.49 35.86c1.65 4.08 7.7 2.9 7.7-1.5V4a4 4 0 0 1 4-4h6.3ZM100 142.86a42.86 42.86 0 1 0 0-85.72 42.86 42.86 0 0 0 0 85.72Z"
          />
        </svg>
        <span className="font-medium text-sm">{SITE_NAME}</span>
      </Link>
    </Stack>
  )
}
