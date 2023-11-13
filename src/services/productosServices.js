const createMainPage = (query) => {
    const { nombre, edad } = query
    const titulo = 'Pagina Productos en GET'
    const respuesta = { titulo, nombre, edad }
    return respuesta
}


const createBloquePage = () => {
    const titulo = 'Pagina bloque'
    return { titulo }
}

const services = {
    createMainPage,
    createBloquePage
}

export default services