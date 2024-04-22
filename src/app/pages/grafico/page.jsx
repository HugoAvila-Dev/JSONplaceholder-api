'use client'
import { useEffect, useState } from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    BarController,
    BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { getUsuarios, getPosts } from '../../lib/api';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarController,
    BarElement,
    Tooltip
);

ChartJS.register(CategoryScale)

export default function page() {

    const [usuarios, setUsuarios] = useState([]);
    const [posteos, setPosteos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const usuarios = await getUsuarios();
                const posteos = await getPosts();
                setUsuarios(usuarios);
                setPosteos(posteos);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    // Calcula la cantidad de posteos por usuario
    const postsPorUsuario = {};
    posteos.forEach(post => {
        postsPorUsuario[post.userId]
            ?
            postsPorUsuario[post.userId]++
            :
            postsPorUsuario[post.userId] = 1;
    });


    return (
        <div>
            <h2 className="flex justify-center items-center font-bold text-2xl mb-4">Gráfico de posteos por usuario</h2>
            <Bar
                data={{
                    labels: usuarios.map(usuario => usuario.name),
                    datasets: [
                        {
                            label: "Posteos",
                            data: usuarios.map(usuario => postsPorUsuario[usuario.id] || 0),
                            backgroundColor: "cornflowerblue",
                        },
                    ],
                }}
            />
        </div>
    );
};
