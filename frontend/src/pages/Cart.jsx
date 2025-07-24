import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import { FaTrash } from "react-icons/fa";
import CartTotal from '../components/CartTotal'; // ✅ CORRECT
import Title from '../components/Title'; // ✅ CORRECT

const Cart = () => {
  const { products, cartItems, updateQuantity } = useContext(ShopContext);

  return (
    <div className="p-6">
      <Title text1={'Your '} text2={'Cart'} />

      {Object.keys(cartItems).length === 0 && (
        <p className="text-gray-500">Your cart is empty.</p>
      )}

      {products &&
        Object.entries(cartItems).map(([productId, sizes]) => {
          const product = products.find(p => p.id === Number(productId));
          if (!product) return null;

          return Object.entries(sizes).map(([sizeLabel, entry]) => {
            const { quantity, sizeDetails } = entry;
            if (!sizeDetails) {
              console.warn(`Missing sizeDetails for ${sizeLabel} of product ${productId}`);
              return null;
            }

            return (
              <div
                key={`${productId}-${sizeLabel}`}
                className="flex gap-6 mb-6 border p-4 rounded shadow-sm"
              >
                <img
                  src={product.image?.[0] || assets.placeholder}
                  alt={product.name}
                  className="w-32 h-32 object-cover rounded"
                />
                <div className="flex flex-col gap-2">
                  <h2 className="text-xl font-semibold">{product.name}</h2>
                  <p className="text-gray-700 font-medium">
                    ₹{sizeDetails.price}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Size:</strong> {sizeDetails.label}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Weight:</strong> {sizeDetails.weight}
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Dimensions:</strong>{" "}
                    {sizeDetails.dimensions.height} ×{" "}
                    {sizeDetails.dimensions.width} ×{" "}
                    {sizeDetails.dimensions.depth}
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <input
                      type="number"
                      value={quantity}
                      min={1}
                      onChange={(e) =>
                        updateQuantity(
                          product.id,
                          sizeLabel,
                          Math.max(1, parseInt(e.target.value) || 1)
                        )
                      }
                      className="border w-16 px-2 py-1 rounded text-center"
                    />
                    <button
                      onClick={() => updateQuantity(product.id, sizeLabel, 0)}
                      className="text-red-500 hover:text-red-700 flex items-center gap-1"
                    >
                      <FaTrash /> Remove
                    </button>
                  </div>
                </div>
              </div>
            );
          });
        })}
        <div className=" flex justify-end my-20">
          <div className="w-full sm:w-[450px]">
            <CartTotal />
          </div>

        </div>
    </div>
  );
};

export default Cart;
