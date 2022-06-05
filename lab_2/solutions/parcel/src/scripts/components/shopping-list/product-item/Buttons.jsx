import BoughtButton from "./buttons/BoughtButton";
import RefundButton from "./buttons/RefundButton";
import EditButton from "./buttons/EditButton";
import DeleteButton from "./buttons/DeleteButton";
import ConfirmButton from "./buttons/ConfirmButton";
import CancelButton from "./buttons/CancelButton";

const Buttons = ({ product, toggleItemStatus, handleSubmit }) => {
  return (
    <div className="product-buttons flex  items-center p-1">
      <BoughtButton product={product} toggleItemStatus={toggleItemStatus} />
      <RefundButton product={product} toggleItemStatus={toggleItemStatus} />
      <EditButton product={product} toggleItemStatus={toggleItemStatus} />
      <DeleteButton product={product} toggleItemStatus={toggleItemStatus} />
      <ConfirmButton
        product={product}
        toggleItemStatus={toggleItemStatus}
        handleSubmit={handleSubmit}
      />
      <CancelButton product={product} toggleItemStatus={toggleItemStatus} />
    </div>
  );
};

export default Buttons;
