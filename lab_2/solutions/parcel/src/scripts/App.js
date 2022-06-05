import data from "./../data/shoppingList.json";
import { useState } from "react";
import Header from "./components/Header";
import ShoppingList from "./components/ShoppingList";

export const App = () => {
  const [shoppingItems, setShoppingItems] = useState(data);

  const toggleItemStatus = (id, status) => {
    const item = shoppingItems.find((product) => product.id === id);

    // could've used switch statement, but this looked more interesting :)
    status === "archived"
      ? (item.archived = !item.archived)
      : status === "edit_mode"
      ? (item.edit_mode = !item.edit_mode)
      : status === "bought"
      ? (item.bought = !item.bought)
      : status === "confirmation_mode"
      ? (item.confirmation_mode = !item.confirmation_mode)
      : console.log(`unknown status: ${status}`);

    setShoppingItems((shoppingItems) => [...shoppingItems]);
  };

  const updateItemName = (id, name) => {
    const item = shoppingItems.find((product) => product.id === id);

    item.name = name.trim();
    setShoppingItems((shoppingItems) => [...shoppingItems]);
  };

  const addShoppingItem = (name) => {
    let id = undefined;
    if (shoppingItems && shoppingItems.length > 0) {
      id = shoppingItems.length + 1;
    } else {
      id = 1;
    }

    setShoppingItems((shoppingItems) => [
      ...shoppingItems,
      {
        id: id,
        name: name,
        confirmation_mode: false,
        bought: false,
        edit_mode: false,
        archived: false,
      },
    ]);
  };

  return (
    <div className="bg-indigo-900 min-h-screen pb-6 text-white">
      <Header addShoppingItem={addShoppingItem} />
      <ShoppingList
        productItems={shoppingItems}
        toggleItemStatus={toggleItemStatus}
        updateItemName={updateItemName}
      />
    </div>
  );
};
