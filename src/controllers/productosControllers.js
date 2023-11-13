import services from './../services/productosServices.js'

const getProducts = (req, res) => {
    const respuesta = services.createMainPage(req.query)
    res.render('pagina', respuesta)
}

const getBloque = (req, res) => {
    const page = services.createBloquePage()
    res.render('bloques', page)
}

const getNumeros = (req, res) => res.send('NUMEROS')

const controllers = {
    getProducts,
    getBloque,
    getNumeros
}

export default controllers