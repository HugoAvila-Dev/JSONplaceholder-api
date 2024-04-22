'use client'

import * as XLSX from 'xlsx';

export default function ButtonDescargar() {
    const handleClick = async () => {
        const url = 'https://jsonplaceholder.typicode.com/users';
        const respuesta = await fetch(url);
        const usuarios = await respuesta.json();

        const filas = usuarios.map(({ name, email, address: { street, city }, phone, website, company }) => ({
            name: name,
            correo: email,
            direccion: `${street}, ${city}`,
            telefono: phone,
            sitioweb: website,
            empresa: company.name
        }));

        //generar worksheet y workbook
        const worksheet = XLSX.utils.json_to_sheet(filas);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Dates");

        //Headers
        XLSX.utils.sheet_add_aoa(worksheet, [["Nombre", "Correo", "Dirección", "Teléfono", "Sitio Web", "Empresa"]], { origin: "A1" });

        /* calculate column width */
        const max_width = filas.reduce((w, r) => Math.max(w, r.name.length), 10);
        worksheet["!cols"] = [{ wch: max_width }];

        //Crear el XLSX file y guardar en Usuarios.xlsx
        XLSX.writeFile(workbook, "Usuarios.xlsx", { compression: true });
    };

    return (
        <div>
            <button onClick={handleClick} className='bg-blue-600 text-white hover:bg-blue-700 p-4 mt-5 rounded-md'><b>Descargar Listado</b></button>
        </div>
    );
};

