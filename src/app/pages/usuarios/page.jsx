import ButtonDescargar from '../../components/buttonDescargar';
import { getUsuarios } from '../../lib/api';



export default async function Page() {

  const usuarios = await getUsuarios();

  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="mb-4 font-bold text-2xl">Lista de Usuarios</h1>
      <div className="flex flex-col gap-7">
        {
          usuarios.map(({ id, name, email, address: { street, city }, phone, website, company }) => (
            <div key={id} className="flex justify-between gap-10">
              <div>
                <h3 className="font-bold text-lg">
                  {id} - {name}
                </h3>
                <div className='ml-7'>
                  <p><span className="font-bold">Correo: </span>{email}</p>
                  <p><span className="font-bold">Dirección: </span>{`${street}, ${city}`}</p>
                  <p><span className="font-bold">Teléfono: </span>{phone}</p>
                  <p><span className="font-bold">Sitio Web: </span>{website}</p>
                  <p><span className="font-bold">Empresa: </span>{company.name}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
      <ButtonDescargar />
    </div>
  );
}