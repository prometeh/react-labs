import DeleteIcon from "./svg-icons/DeleteIcon";

const DeleteButton = ({ product, toggleItemStatus }) => {
  return (
    <>
      {!product.confirmation_mode && (
        <button
          className="btn bg-red-600 hover:bg-red-500"
          onClick={() => toggleItemStatus(product.id, "confirmation_mode")}
        >
          <DeleteIcon />
        </button>
      )}
    </>
  );
};

export default DeleteButton;
