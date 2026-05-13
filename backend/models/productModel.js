import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  userId: { type: String, required: true },
  productName: { type: String, required: true, trim: true },
  productType: { type: String, required: true, default: "Food" }, 
  quantityStock: { type: Number, required: true, default: 0 },
  mrp: { type: Number, required: true },
  sellingPrice: { type: Number, required: true },
  brandName: { type: String, required: true, trim: true },
  totalImages: { type: Number, default: 1 },
  exchangeEligibility: { type: String, default: "YES" }, 
  isPublished: { type: Boolean, default: false }, 
  productImageUrl: { type: String, required: true }, 
  createdAt: { type: Date, default: Date.now }
});

const productModel = mongoose.model("Product", productSchema);

const createProduct = async (productData, userId) => {
  try {
    const newProduct = { ...productData, userId };
    const result = await productModel.create(newProduct);
    return result;
  } catch (error) {
    throw error;
  }
};

const getAllProducts = async (userId) => {
  try {
    return await productModel.find({ userId }).sort({ createdAt: -1 });
  } catch (error) {
    throw error;
  }
};

const updateProduct = async (id, updateData) => {
  try {
    return await productModel.findByIdAndUpdate(id, updateData, { new: true });
  } catch (error) {
    throw error;
  }
};

const deleteProduct = async (id) => {
  try {
    return await productModel.findByIdAndDelete(id);
  } catch (error) {
    throw error;
  }
};

export { productModel, getAllProducts, createProduct, updateProduct, deleteProduct };