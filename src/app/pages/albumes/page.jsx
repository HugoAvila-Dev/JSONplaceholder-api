import { getAlbumes } from '../../lib/api';
import Link from "next/link";

export default async function Page() {

  const albumes = await getAlbumes();

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mb-20 font-bold text-2xl">Lista de Álbumes</h1>
      <div className="grid grid-cols-1 gap-7">
        {
          albumes.map(({ id, title }) => (
            <div key={id} className="flex justify-between gap-10">
              <h3>
                {id} -{title}
              </h3>
              <Link
                className="text-blue-600 hover:font-bold"
                href={`/pages/albumes/${id}`}
              >
                Ver Álbum
              </Link>
            </div>
          ))
        }
      </div>
    </div>
  );
}