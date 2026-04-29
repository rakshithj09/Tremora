import Image from 'next/image';
import Button from './Button'
import Container from './Container'

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <Container>
        <div className="py-24 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-5xl md:text-6xl font-medium leading-tight">Photography-first gear for the modern creator</h1>
            <p className="mt-4 max-w-lg text-lg text-gray-600">Discover premium hardware and lifestyle accessories designed to elevate your studio and on-the-go setup.</p>
            <div className="mt-8 flex gap-4">
              <Button variant="primary" href="/products">Shop now</Button>
              <Button variant="outline">Learn more</Button>
            </div>
          </div>
          <div className="flex-1">
            <div className="rounded-card overflow-hidden shadow-lg">
              <Image src={'/placeholder.svg'} alt="Product hero" width={1200} height={800} className="w-full h-auto object-cover" priority unoptimized />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
