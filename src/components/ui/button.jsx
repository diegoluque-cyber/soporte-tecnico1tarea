import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 rounded-lg text-sm font-bold transition-all active:translate-y-px disabled:opacity-50 cursor-pointer',
  {
    variants: {
      variant: {
        default: 'bg-tinta text-hoja shadow-[3px_3px_0_0_var(--color-brasa)] hover:shadow-[1px_1px_0_0_var(--color-brasa)]',
        outline: 'border-2 border-tinta bg-hoja hover:bg-tinta hover:text-hoja',
        ghost: 'hover:bg-tinta/10',
        destructive: 'text-brasa hover:bg-brasa hover:text-hoja',
      },
      size: { default: 'h-10 px-4', sm: 'h-8 px-3 text-xs', icon: 'h-8 w-8' },
    },
    defaultVariants: { variant: 'default', size: 'default' },
  }
)

export function Button({ className, variant, size, ...props }) {
  return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
}
