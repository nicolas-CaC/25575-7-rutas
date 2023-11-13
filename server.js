import dotenv from 'dotenv'
import express from 'express'
import { resolve } from 'path'
import productosRoutes from './src/routes/productosRoutes.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 8080

// Motor de plantilla
app.set('view engine', 'pug')
app.set('views', resolve() + '/src/views')

// Traductores
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Estatico
app.use(express.static('public'))

// Rutas
app.use('/productos', productosRoutes)


app.listen(PORT, () => console.log(`listen at http://localhost:${PORT}`))
