import { createClient } from '../../utils/supabase/server'
import { cookies } from 'next/headers'
import Container from '../../components/Container'
import Card from '../../components/Card'

type Todo = {
  id: number
  name: string
  completed?: boolean
}

export default async function DashboardPage() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: todos } = await supabase.from('todos').select()
  const todoList: Todo[] = (todos as unknown as Todo[]) || []

  return (
    <Container>
      <div className="py-12">
        <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
        <div className="space-y-3">
          {todoList.map((t) => (
            <Card key={t.id}>{t.name}</Card>
          ))}
        </div>
      </div>
    </Container>
  )
}
