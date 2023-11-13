import express from 'express';
import controllers from './../controllers/productosControllers.js';

const router = express.Router();

router.get('/', controllers.getProducts);
router.get('/bloque', controllers.getBloque);
router.get('/numeros', controllers.getNumeros);


export default router;