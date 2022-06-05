import ConfirmIcon from "./svg-icons/ConfirmIcon";

const ConfirmButton = ({ product, toggleItemStatus, handleSubmit }) => {
  return (
    <>
      {product.confirmation_mode && (
        <button
          className="btn bg-green-600 hover:bg-green-500"
          onClick={() => {
            if (product.edit_mode) {
              handleSubmit();
            } else {
              toggleItemStatus(product.id, "archived");
              toggleItemStatus(product.id, "confirmation_mode");
            }
          }}
        >
          <ConfirmIcon />
        </button>
      )}
    </>
  );
};

export default ConfirmButton;
