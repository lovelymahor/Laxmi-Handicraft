import Product from "../models/productModel.js";

export const getRecommendations = async (userId, productId) => {
  try {
    // 1. Get current product
    const product = await Product.findById(productId);

    if (!product) return [];

    // 2. Find similar category products
    const similarProducts = await Product.find({
      category: product.category,
      _id: { $ne: productId }
    }).limit(5);

    return similarProducts;

  } catch (error) {
    console.error(error);
    return [];
  }
};