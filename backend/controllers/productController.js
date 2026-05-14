import { getAllProducts, createProduct, updateProduct, deleteProduct } from '../Models/productModel.js';

const retrieveP = async (req,res) => {
  const data = await getAllProducts();
  res.status(200).json(data);
}

const postP = async (req,res) => {
  const productObj = req.body;
  await createProduct(productObj);
  res.status(201).json(await getAllProducts());
}

const putP = async (req,res) => {
  const id = req.params.id;
  const productObj = req.body;
  await updateProduct(id, productObj);
  res.status(200).json(await getAllProducts());
}

const removeP = async (req,res) => {
  const id = req.params.id;
  await deleteProduct(id);
  res.status(200).json(await getAllProducts());
}

export {retrieveP, postP, putP, removeP};