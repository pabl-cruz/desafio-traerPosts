//funcion para insertar etiquetas ul a post-data
let insertarLista = () => {
    document.getElementById('post-data').innerHTML = '<ul></ul>';
}

//conectar a API con funcion asincrona
const getPosts = async () => {
    //url de api a conectar
    const urlAPI = 'https://jsonplaceholder.typicode.com/posts';
    //declaracion try...catch
    try{
        //conectarse a API
        let respuesta = await fetch(urlAPI)
        //obtener datos de respuesta
        const datos = await respuesta.json()
        //ejecutar funcion insertarLista
        insertarLista()
            //metodo forEach para recorrer cada instancia de post
            datos.forEach(function(datos){
                let post = [datos.title, datos.body]
                //obtener elementos
                const postTitulo = post[0]
                const postCuerpo = post[1]
                //imprimir elementos en html
                document.querySelector('#post-data > ul').innerHTML += `
                    <li><strong>${postTitulo}</strong><br>
                    ${postCuerpo}
                    </li>
                `

        })
    //atrapar excepciones y mostrar alerta en caso de error
    } catch (error) {
        console.error(error)
        alert('Error al conectarse o mostrar la base de datos');
    }
}