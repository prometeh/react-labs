import RefundIcon from "./svg-icons/RefundIcon";

const RefundButton = ({ product, toggleItemStatus }) => {
  return (
    <>
      {product.bought && !product.confirmation_mode && (
        <button
          className="btn bg-fuchsia-600 hover:bg-fuchsia-500"
          onClick={() => toggleItemStatus(product.id, "bought")}
        >
          <RefundIcon />
        </button>
      )}
    </>
  );
};

export default RefundButton;
