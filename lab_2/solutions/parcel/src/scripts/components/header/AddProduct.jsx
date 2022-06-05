import React, { useState } from "react";

const AddProduct = ({ addShoppingItem }) => {
  const [shoppingItemName, setShoppingItemName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (shoppingItemName.trim().length > 0) {
      addShoppingItem(shoppingItemName.trim());
    } else return;

    e.target[0].focus();
    setShoppingItemName("");
  };

  const handleChange = (e) => {
    setShoppingItemName(e.target.value);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-end align-middle items-center w-full"
    >
      <input
        className="w-[80%] h-2/3 text-sky-900 pl-1 mx-2"
        name="addProduct"
        type="text"
        placeholder="Add a product..."
        value={shoppingItemName}
        onChange={handleChange}
        autoFocus={true}
      />
      <button className="flex flex-col relative btn">
        {/* svg  has been taken from https://heroicons.dev/ */}
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
          />
        </svg>
        <svg
          className="w-5 h-5 absolute left-3.5 bottom-2.5 text-sky-200"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </button>
    </form>
  );
};

export default AddProduct;
