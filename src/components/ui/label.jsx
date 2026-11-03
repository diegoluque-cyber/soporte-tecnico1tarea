import { cn } from '@/lib/utils'

export const Label = ({ className, ...p }) => (
  <label className={cn('font-mono text-xs font-bold uppercase tracking-wider', className)} {...p} />
)
