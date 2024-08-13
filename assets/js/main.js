let insertarLista = () => {
    document.getElementById('post-data').innerHTML = '<ul></ul>';
}

//conectar a API
const getPosts = async () => {
    const urlAPI = 'https://jsonplaceholder.typicode.com/posts';
    try{
        let respuesta = await fetch(urlAPI)
        const datos = await respuesta.json()

        insertarLista()

            datos.forEach(function(datos){
                let post = [datos.title, datos.body]
                const postTitulo = post[0]
                const postCuerpo = post[1]
                document.querySelector('#post-data > ul').innerHTML += `
                    <li><strong>${postTitulo}</strong><br>
                    ${postCuerpo}
                    </li>
                `

        })

    } catch (error) {
        console.error(error)
        alert('Error al conectarse a base de datos');
    }
}
