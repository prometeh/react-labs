import CancelIcon from "./svg-icons/CancelIcon";

import React from "react";

const CancelButton = ({ product, toggleItemStatus }) => {
  return (
    <>
      {product.confirmation_mode && (
        <button
          className="btn bg-red-600 hover:bg-red-500"
          onClick={() => {
            if (product.edit_mode) {
              toggleItemStatus(product.id, "edit_mode");
            }
            toggleItemStatus(product.id, "confirmation_mode");
          }}
        >
          <CancelIcon />
        </button>
      )}
    </>
  );
};

export default CancelButton;
