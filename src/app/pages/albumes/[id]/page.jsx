import { getPhoto } from '../../../lib/api';
import Image from "next/image";

export default async function Page({ params }) {

  const fotos = await getPhoto(params);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {
        fotos.map(foto => (
          <div>
            <div key={foto.id} className="p-3">
              <h3 className="font-semibold">{foto.title} </h3>
            </div>
            <Image
              src={foto.url}
              alt="Foto de álbum"
              width={300}
              height={300}
              className="rounded-xl"
            />
          </div>
        ))
      }
    </div>
  );
}
