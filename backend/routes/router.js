import express from 'express';
import {retrieveP, postP, putP, removeP} from '../controllers/productController.js';

const router = express.Router();

router.get('/products', retrieveJob);

router.post('/products', postJob);

router.put('/products/:id', putJob);

router.delete('/products/:id', removeJob);

export default router;