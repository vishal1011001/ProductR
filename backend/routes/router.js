import express from 'express';
import {retrieveP, postP, putP, removeP} from '../controllers/productController.js';

const router = express.Router();

router.get('/products', retrieveP);

router.post('/products', postP);

router.put('/products/:id', putP);

router.delete('/products/:id', removeP);

export default router;