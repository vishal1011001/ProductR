import { getAllProducts, createProduct, updateProduct, deleteProduct } from '../Models/productModel.js';

const retrieveP = async (req,res) => {
  const data = await getAllProducts(req.user.id);
  res.status(200).json(data);
}

const postP = async (req,res) => {
  const productObj = req.body;
  await createProduct(jobObj, req.user.id);
  res.status(201).json(await getAllProducts(req.user.id));
}

const putP = async (req,res) => {
  const id = req.params.id;
  const productObj = req.body;
  await updateProduct(id, jobObj);
  res.status(200).json(await getAllProducts(req.user.id));
}

const removeP = async (req,res) => {
  const id = req.params.id;
  await deleteProduct(id);
  res.status(200).json(await getAllProducts(req.user.id));
}

export {retrieveP, postP, putP, removeP};