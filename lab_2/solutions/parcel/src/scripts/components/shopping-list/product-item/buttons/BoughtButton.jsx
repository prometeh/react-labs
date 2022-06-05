import BoughtIcon from "./svg-icons/BoughtIcon";

const BoughtButton = ({ product, toggleItemStatus }) => {
  return (
    <>
      {!product.bought && !product.confirmation_mode && (
        <button
          className="btn bg-green-600 hover:bg-green-500"
          onClick={() => toggleItemStatus(product.id, "bought")}
        >
          <BoughtIcon />
        </button>
      )}
    </>
  );
};

export default BoughtButton;
