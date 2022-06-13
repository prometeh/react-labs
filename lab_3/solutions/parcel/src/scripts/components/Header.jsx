import NavLink from "./header/NavLink";

const Header = () => {
  return (
    <div className="flex justify-between px-4 py-2 items-center bg-slate-300">
      <h1 className="text-4xl ">Lab. 3</h1>
      <nav className="">
        <ul className="flex justify-between">
          <li>
            <NavLink name="Write a blog" path="/create" />
          </li>
          <li>
            <NavLink name="Blogs" path="/" />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
