import EditIcon from "./svg-icons/EditIcon";

const EditButton = ({ product, toggleItemStatus }) => {
  return (
    <>
      {!product.confirmation_mode && (
        <button
          className="btn bg-sky-600 hover:bg-sky-500"
          onClick={() => {
            toggleItemStatus(product.id, "confirmation_mode");
            toggleItemStatus(product.id, "edit_mode");
          }}
        >
          <EditIcon />
        </button>
      )}
    </>
  );
};

export default EditButton;
