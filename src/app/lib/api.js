export async function getAlbumes() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/albums');
        const data = await respuesta.json();

        return data;
    } catch (error) {
        console.log(error)
    }
}

export async function getPhoto({ id }) {
    try {
        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=${id}`);
        const data = await respuesta.json();
        return data;
    } catch (error) {
        console.log(error)
    }
}

export async function getUsuarios() {
    try {
        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await respuesta.json();

        return data;
    } catch (error) {
        console.log(error)
    }
}

export async function getPosts() {
    try {
        const respuesta = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const data = await respuesta.json();

        return data;
    } catch (error) {
        console.log(error)
    }
}