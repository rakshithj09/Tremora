"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Button from './Button'
import { useRouter } from 'next/navigation'
import { createClient as createBrowserClient } from '../utils/supabase/client'

export default function Header() {
  type User = { id: string; email?: string | null }
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()
  const supabase = createBrowserClient()

  useEffect(() => {
    let mounted = true
    supabase.auth.getUser().then(({ data }) => {
      if (!mounted) return
      setUser(data.user)
    })
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })
    const subscription = data?.subscription
    return () => { mounted = false; try { subscription?.unsubscribe() } catch {} }
  }, [supabase.auth])

  async function signOut() {
    await supabase.auth.signOut()
    setUser(null)
    router.push('/')
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[var(--border-subtle)] bg-[rgba(15,17,19,0.82)] backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center">
          <Image
            src="/tremora-logo-transparent.png"
            alt="Tremora"
            width={320}
            height={89}
            priority
            className="h-10 w-auto object-contain md:h-12"
          />
        </Link>
        <nav className="flex items-center gap-2 md:gap-4">
          <div className="hidden items-center gap-5 md:flex">
            <Link href="/#problem" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Problem</Link>
            <Link href="/#technology" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Technology</Link>
            <Link href="/#market" className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)]">Market</Link>
          </div>
          {user ? (
            <Button onClick={signOut} variant="primary">Sign out</Button>
          ) : (
            <Button href="/signin" variant="primary">Sign in</Button>
          )}
        </nav>
      </div>
    </header>
  )
}
