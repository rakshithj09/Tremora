import Link from 'next/link'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline' | 'ghost'
  href?: string
}

export default function Button({ variant = 'primary', href, children, ...rest }: React.PropsWithChildren<ButtonProps>) {
  const base = 'inline-flex items-center justify-center font-medium rounded-full px-6 py-2 transition'
  const variants: Record<'primary'|'outline'|'ghost', string> = {
    primary: `${base} bg-[var(--meta-blue)] text-white hover:bg-[var(--meta-blue-hover)]`,
    outline: `${base} bg-transparent border border-gray-300 text-[var(--dolly-text-primary)]`,
    ghost: `${base} bg-transparent text-[var(--meta-blue)]`
  }

  const { className: extraClassName, ...otherProps } = rest as React.ButtonHTMLAttributes<HTMLButtonElement>
  const className = variants[variant] + (extraClassName ? ` ${extraClassName}` : '')

  if (href) {
    // When rendering as a link, cast rest to anchor attributes instead of `any` to satisfy types/linting
    const anchorProps = otherProps as unknown as React.AnchorHTMLAttributes<HTMLAnchorElement>
    return (
      <Link href={href} className={className} {...anchorProps}>
        {children}
      </Link>
    )
  }

  return (
    <button className={className} {...(otherProps as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
