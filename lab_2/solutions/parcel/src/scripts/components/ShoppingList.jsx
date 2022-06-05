import ProductItem from "./shopping-list/ProductItem";

const ShoppingList = ({ productItems, toggleItemStatus, updateItemName }) => {
  let num = 0;

  return (
    <div className="w-11/12 bg-indigo-800 p-3 my-3 mx-auto ">
      <div className="in-progress">
        {productItems
          .filter((p) => !p.archived && !p.bought)
          .map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              num={++num}
              toggleItemStatus={toggleItemStatus}
              updateItemName={updateItemName}
            />
          ))}
      </div>
      <div className="completed">
        {productItems
          .filter((p) => !p.archived && p.bought)
          .map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              num={++num}
              toggleItemStatus={toggleItemStatus}
              updateItemName={updateItemName}
            />
          ))}
      </div>
      {num === 0 && (
        <p className="font-macondo text-xl font-bold text-center">
          Your shopping list is empty! 💤
        </p>
      )}
    </div>
  );
};

export default ShoppingList;
