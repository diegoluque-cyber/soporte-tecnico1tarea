import { cn } from '@/lib/utils'

export const Select = ({ className, ...p }) => (
  <select className={cn('h-10 w-full cursor-pointer rounded-lg border-2 border-tinta/30 bg-white px-3 text-sm outline-none focus:border-brasa focus:ring-4 focus:ring-brasa/20', className)} {...p} />
)
