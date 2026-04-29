import Link from 'next/link'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline' | 'ghost'
  href?: string
}

export default function Button({ variant = 'primary', href, children, ...rest }: React.PropsWithChildren<ButtonProps>) {
  const base = 'inline-flex items-center justify-center font-medium rounded-full px-6 py-2 transition'
  const variants: Record<string,string> = {
    primary: `${base} bg-[var(--meta-blue)] text-white hover:bg-[var(--meta-blue-hover)]`,
    outline: `${base} bg-transparent border border-gray-300 text-[var(--dolly-text-primary)]`,
    ghost: `${base} bg-transparent text-[var(--meta-blue)]`
  }

  const className = variants[variant] + (rest.className ? ` ${rest.className}` : '')

  if (href) {
    return (
      <Link href={href} className={className} {...(rest as any)}>
        {children}
      </Link>
    )
  }

  return (
    <button className={className} {...rest}>
      {children}
    </button>
  )
}
