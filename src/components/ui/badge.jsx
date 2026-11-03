import { cn } from '@/lib/utils'

export const Badge = ({ className, ...p }) => (
  <span className={cn('inline-flex items-center rounded-md border-2 border-tinta px-2 py-0.5 font-mono text-[11px] font-bold uppercase', className)} {...p} />
)
