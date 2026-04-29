"use client"
import { useEffect, useState } from 'react'
import Link from 'next/link'
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
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" className="text-xl font-semibold text-dolly-text">
          Tremora
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="/products" className="text-sm text-gray-700">Shop</Link>
          <Link href="#" className="text-sm text-gray-700">Collections</Link>
          <Link href="#" className="text-sm text-gray-700">Support</Link>
          {user ? (
            <button onClick={signOut} className="btn-pill">Sign out</button>
          ) : (
            <Link href="/signin" className="btn-pill">Sign in</Link>
          )}
        </nav>
      </div>
    </header>
  )
}
