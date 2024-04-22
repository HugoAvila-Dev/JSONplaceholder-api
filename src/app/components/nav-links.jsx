'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';

const links = [
  { name: 'Usuarios', href: '/pages/usuarios' },
  {
    name: 'Albumes', href: '/pages/albumes',
  },
  { name: 'Grafico', href: '/pages/grafico' }
];

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <>
      {links.map(link => (
        <Link
          key={link.name}
          href={link.href}
          className={`mb-2 block px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-blue-700 hover:text-white ${pathname === link.href ? 'bg-blue-700 text-white' : 'text-gray-300'}`}
        >
          {link.name}
        </Link>
      ))}

    </>
  );
}
