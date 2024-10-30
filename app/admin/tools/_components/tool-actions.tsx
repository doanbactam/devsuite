"use client"

import type { Tool } from "@prisma/client"
import type { Row } from "@tanstack/react-table"
import { EllipsisIcon } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type React from "react"
import { useState } from "react"
import { toast } from "sonner"
import { useServerAction } from "zsa-react"
import { ToolsDeleteDialog } from "~/app/admin/tools/_components/tools-delete-dialog"
import { ToolsScheduleDialog } from "~/app/admin/tools/_components/tools-schedule-dialog"
import { reuploadToolAssets } from "~/app/admin/tools/_lib/actions"
import { Button } from "~/components/admin/ui/button"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/admin/ui/dropdown-menu"
import { config } from "~/config"
import { cx } from "~/utils/cva"

interface ToolActionsProps extends React.ComponentPropsWithoutRef<typeof Button> {
  tool: Tool
  row?: Row<Tool>
}

export const ToolActions = ({ tool, row, className, ...props }: ToolActionsProps) => {
  const router = useRouter()
  const [dialog, setDialog] = useState<"delete" | "schedule" | null>(null)

  const { execute: reuploadAssetsAction } = useServerAction(reuploadToolAssets, {
    onSuccess: () => {
      toast.success("Tool assets reuploaded")
    },

    onError: ({ err }) => {
      toast.error(err.message)
    },
  })

  const handleDialogSuccess = () => {
    router.push("/admin/tools")
    row?.toggleSelected(false)
  }

  return (
    <>
      <ToolsDeleteDialog
        open={dialog === "delete"}
        onOpenChange={open => setDialog(open ? "delete" : null)}
        tools={[tool]}
        showTrigger={false}
        onSuccess={handleDialogSuccess}
      />

      <ToolsScheduleDialog
        open={dialog === "schedule"}
        onOpenChange={open => setDialog(open ? "schedule" : null)}
        tools={[tool]}
        showTrigger={false}
        onSuccess={handleDialogSuccess}
      />

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            aria-label="Open menu"
            variant="outline"
            size="sm"
            prefix={<EllipsisIcon />}
            className={cx("size-7 data-[state=open]:bg-muted", className)}
            {...props}
          />
        </DropdownMenuTrigger>

        <DropdownMenuContent align="end">
          <DropdownMenuItem asChild>
            <Link href={`/admin/tools/${tool.slug}`}>Edit</Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href={`${config.site.url}/tools/${tool.slug}?preview=${tool.id}`} target="_blank">
              View
            </Link>
          </DropdownMenuItem>

          {!tool.publishedAt && (
            <DropdownMenuItem onSelect={() => setDialog("schedule")} className="text-green-600">
              Schedule
            </DropdownMenuItem>
          )}

          <DropdownMenuItem onSelect={() => reuploadAssetsAction({ id: tool.id })}>
            Reupload Assets
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem asChild>
            <Link href={tool.websiteUrl} target="_blank">
              Visit website
            </Link>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          <DropdownMenuItem onSelect={() => setDialog("delete")} className="text-destructive">
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
