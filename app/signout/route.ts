import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  // Redirect to home. Client-side sign out should call supabase.auth.signOut().
  const res = NextResponse.redirect(new URL('/', request.url))
  return res
}
