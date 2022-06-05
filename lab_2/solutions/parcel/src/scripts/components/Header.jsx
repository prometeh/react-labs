import AddProduct from "./header/AddProduct";

const Header = ({ addShoppingItem }) => {
  return (
    <div className="flex bg-indigo-700 py-2 px-1 items-center justify-between">
      <div className="text-5xl ml-5 font-blaka font-light  min-w-max">
        LAB. &nbsp; II
      </div>
      <AddProduct addShoppingItem={addShoppingItem} />
    </div>
  );
};

export default Header;
