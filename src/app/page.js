import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen">
      <main className="flex flex-col justify-center items-center flex-grow">
        <h1 className="text-3xl font-bold mb-8">TEST PARA MEGADIGITAL</h1>
        <Link
          href="/pages/usuarios"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg transition duration-300 hover:bg-blue-700"
        >
          Ver Listado
        </Link>
      </main>
      <footer className="text-center p-4 bg-gray-200 w-full">
        Hecho por Hugo Avila
      </footer>
    </div>
  );
}