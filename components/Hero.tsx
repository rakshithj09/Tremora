import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-6 py-24 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <h1 className="text-5xl md:text-6xl font-medium leading-tight">Photography-first gear for the modern creator</h1>
          <p className="mt-4 max-w-lg text-lg text-gray-600">Discover premium hardware and lifestyle accessories designed to elevate your studio and on-the-go setup.</p>
          <div className="mt-8 flex gap-4">
            <button className="btn-pill">Shop now</button>
            <button className="px-5 py-2 rounded-full border border-gray-300">Learn more</button>
          </div>
        </div>
        <div className="flex-1">
          <div className="rounded-card overflow-hidden shadow-lg">
            <Image src="/hero.jpg" alt="Product hero" width={1200} height={800} className="w-full h-auto object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}
