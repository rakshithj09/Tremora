import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-40">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" className="text-xl font-semibold text-dolly-text">
          Tremora
        </Link>
        <nav className="flex items-center gap-4">
          <Link href="#" className="text-sm text-gray-700">Shop</Link>
          <Link href="#" className="text-sm text-gray-700">Collections</Link>
          <Link href="#" className="text-sm text-gray-700">Support</Link>
          <Link href="#" className="btn-pill">Sign in</Link>
        </nav>
      </div>
    </header>
  );
}
