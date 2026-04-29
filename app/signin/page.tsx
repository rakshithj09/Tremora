"use client"
import { useState } from 'react'
import { createClient as createBrowserClient } from '../../utils/supabase/client'
import Container from '../../components/Container'
import Button from '../../components/Button'

export default function SignInPage() {
  const supabase = createBrowserClient()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function signInWithPassword() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    setLoading(false)
    if (error) alert(error.message)
    else window.location.href = '/dashboard'
  }

  return (
    <Container>
      <div className="max-w-md mx-auto py-20">
        <h2 className="text-2xl font-medium mb-4">Sign in</h2>
        <label className="block mb-2">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full p-2 border rounded mb-4" />
        <label className="block mb-2">Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="w-full p-2 border rounded mb-4" />
        <div className="flex gap-4">
          <Button onClick={signInWithPassword} variant="primary" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</Button>
        </div>
      </div>
    </Container>
  )
}
