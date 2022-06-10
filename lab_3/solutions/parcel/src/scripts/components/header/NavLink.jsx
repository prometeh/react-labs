import { NavLink as ReactNavLink } from "react-router-dom";

const NavLink = ({ name, path }) => {
  return (
    <ReactNavLink
      to={path}
      className={({ isActive }) =>
        isActive ? "link underline decoration-white" : "link"
      }
    >
      {name}
    </ReactNavLink>
  );
};

export default NavLink;
