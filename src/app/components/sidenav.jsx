import Link from 'next/link';
import NavLinks from './nav-links';

export default function SideNav() {
  return (
    <div className="flex flex-col h-full bg-gray-900 text-white">
      <Link href="/"
        className="flex items-center justify-center h-20 md:h-40 bg-blue-600"
      >
        <h1 className="text-2xl font-bold md:text-3xl">MEGADIGITAL</h1>
      </Link>
      <nav className="flex flex-col flex-grow p-4">
        <NavLinks />
      </nav>
    </div>
  );
}

