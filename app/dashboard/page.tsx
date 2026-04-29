import { createClient } from '../../utils/supabase/server'
import { cookies } from 'next/headers'

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
    <div className="max-w-4xl mx-auto py-12">
      <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
      <ul>
        {todoList.map((t) => (
          <li key={t.id}>{t.name}</li>
        ))}
      </ul>
    </div>
  )
}
