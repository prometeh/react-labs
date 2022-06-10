import NavLink from "./header/NavLink";

const Header = () => {
  return (
    <div className="flex justify-between px-4 py-2 items-center bg-slate-300">
      <div className="text-3xl ">Lab. 3</div>
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
