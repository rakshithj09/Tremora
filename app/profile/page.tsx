import { createClient } from '../../utils/supabase/server'
import { cookies } from 'next/headers'

export default async function ProfilePage() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: user } = await supabase.auth.getUser()

  return (
    <div className="max-w-3xl mx-auto py-12">
      <h1 className="text-2xl font-semibold mb-4">Profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
  )
}
