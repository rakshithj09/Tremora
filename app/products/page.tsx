import Image from 'next/image'
import { createClient } from '../../utils/supabase/server'
import { cookies } from 'next/headers'

type Product = {
  id: number
  name: string
  description?: string
  image_url?: string
}

export default async function ProductsPage() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: products } = await supabase.from('products').select()
  const list: Product[] = (products as unknown as Product[]) || []

  return (
    <div className="max-w-6xl mx-auto py-12">
      <h1 className="text-3xl font-semibold mb-6">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((p) => (
          <div key={p.id} className="card">
            <div className="w-full h-56 relative rounded-card mb-4 overflow-hidden">
              <Image src={p.image_url || '/placeholder.jpg'} alt={p.name} fill className="object-cover" />
            </div>
            <h3 className="text-xl font-medium">{p.name}</h3>
            <p className="text-gray-600">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
