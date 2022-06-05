import { useState } from "react";
import Buttons from "./product-item/Buttons";

const ProductItem = ({ product, num, toggleItemStatus, updateItemName }) => {
  const [productName, setProductName] = useState(product.name);

  const handleSubmit = () => {
    toggleItemStatus(product.id, "edit_mode");
    toggleItemStatus(product.id, "confirmation_mode");
    productName.trim().length > 0
      ? updateItemName(product.id, productName)
      : setProductName(product.name);
    setProductName((name) => name.trim());
  };

  const handleChange = (e) => {
    setProductName(e.target.value);
  };

  return (
    <div className="flex justify-between p-1 my-4 bg-indigo-700 font-handlee font-bold text-lg">
      <div
        className={
          "product-info flex  items-center px-3" +
          (product.bought
            ? " line-through decoration-red-600/70 decoration-solid decoration-4"
            : "")
        }
      >
        {!product.edit_mode && (
          <div className="name">
            {num} - {product.name}
          </div>
        )}
        {product.edit_mode && (
          <form
            onSubmit={handleSubmit}
            className="flex justify-center sm:justify-start"
          >
            {num} -
            <input
              className="text-gray-800 ml-2 pl-1 rounded w-[80%] sm:w-fit"
              name="name"
              type="text"
              value={productName}
              onChange={handleChange}
              autoFocus={true}
            />
          </form>
        )}
      </div>
      <div className="flex flex-col sm:flex-row items-center">
        {product.confirmation_mode && product.edit_mode && (
          <p className="">Edit the item?</p>
        )}
        {product.confirmation_mode && !product.edit_mode && (
          <p className="">Delete the item?</p>
        )}
        <Buttons
          product={product}
          toggleItemStatus={toggleItemStatus}
          handleSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default ProductItem;
