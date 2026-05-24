// productController.js
import { v2 as cloudinary } from "cloudinary";
import Product from "../models/productModel.js";

// Add Product
export const addProduct = async (req, res) => {
  try {
    const { name, description, price, category, subCategory, sizes, bestseller } = req.body;

    // Basic validation
    if (!name || !price || !category) {
      return res.status(400).json({
        success: false,
        message: "Name, Price and Category are required"
      });
    }

    // Safely get uploaded images
    const image1 = req.files?.image1?.[0] || null;
    const image2 = req.files?.image2?.[0] || null;
    const image3 = req.files?.image3?.[0] || null;
    const image4 = req.files?.image4?.[0] || null;

    const images = [image1, image2, image3, image4].filter(Boolean);

    // Upload images to Cloudinary
    const imagesUrl = await Promise.all(
      images.map(async (item) => {
        const result = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
          folder: "products"
        });
        return result.secure_url;
      })
    );

    console.log("Uploaded Images:", imagesUrl);

    // 🔥 STEP 2: Create Product Object
    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: sizes ? JSON.parse(sizes) : [],
      bestseller: bestseller === "true",
      images: imagesUrl,
      date: Date.now()
    };

    // 🔥 STEP 3: Save to Database
    const product = new Product(productData);
    await product.save();

    // ✅ Final Response
    res.status(201).json({
      success: true,
      message: "Product added successfully",
      product
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


// List Products
export const listProduct = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// Remove Product
export const removeProduct = async (req, res) => {
  try {
    const { id } = req.body;

    await Product.findByIdAndDelete(id);

    res.json({ success: true, message: "Product removed" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};


// Single Product
export const singleProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    res.json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};