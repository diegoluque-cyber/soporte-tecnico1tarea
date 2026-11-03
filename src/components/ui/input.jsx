import { cn } from '@/lib/utils'

const base = 'w-full rounded-lg border-2 border-tinta/30 bg-white px-3 text-sm outline-none transition focus:border-brasa focus:ring-4 focus:ring-brasa/20 aria-invalid:border-brasa'
export const Input = ({ className, ...p }) => <input className={cn(base, 'h-10', className)} {...p} />
