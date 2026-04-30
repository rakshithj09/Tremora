import Link from 'next/link'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'outline' | 'ghost'
  href?: string
}

export default function Button({ variant = 'primary', href, children, ...rest }: React.PropsWithChildren<ButtonProps>) {
  const base = 'inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-semibold transition'
  const variants: Record<'primary'|'outline'|'ghost', string> = {
    primary: `${base} bg-[var(--accent)] !text-[#101113] shadow-[0_10px_24px_rgba(184,255,101,0.12)] hover:bg-[var(--accent-strong)]`,
    outline: `${base} border border-[rgba(184,255,101,0.4)] bg-[rgba(255,255,255,0.02)] !text-[var(--text-primary)] hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]`,
    ghost: `${base} bg-transparent text-[var(--accent)] hover:bg-[var(--accent-soft)]`
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
