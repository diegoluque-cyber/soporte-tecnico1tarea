import { cn } from '@/lib/utils'

export const Textarea = ({ className, ...p }) => (
  <textarea
    className={cn('min-h-24 w-full rounded-lg border-2 border-tinta/30 bg-white px-3 py-2 text-sm outline-none transition focus:border-brasa focus:ring-4 focus:ring-brasa/20 aria-invalid:border-brasa', className)}
    {...p}
  />
)
