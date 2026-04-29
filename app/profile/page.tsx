import { createClient } from '../../utils/supabase/server'
import { cookies } from 'next/headers'
import Container from '../../components/Container'
import Card from '../../components/Card'

export default async function ProfilePage() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: user } = await supabase.auth.getUser()

  return (
    <Container>
      <div className="py-12">
        <h1 className="text-2xl font-semibold mb-4">Profile</h1>
        <Card>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </Card>
      </div>
    </Container>
  )
}
