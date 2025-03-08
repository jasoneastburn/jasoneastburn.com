import { clsx } from 'clsx'

export function GradientDivider({ className }: { className?: string }) {
  return (
    <div
      className={clsx([
        'h-0.5 w-full rounded-md',
        'bg-gradient-to-r from-red-500 via-green-500 to-purple-500',
        className,
      ])}
    />
  )
}
