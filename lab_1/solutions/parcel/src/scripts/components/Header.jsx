import { useState } from "react";

const Header = () => {
  const [name, setName] = useState("Log In");

  const login = () => {
    if (name === "Log In") {
      setName("Ushi");
    } else {
      setName("Log In");
    }
  };

  // Why this is not a good idea compare to state?
  //
  // const name = "Log In";
  // const login = (name, e) => {
  //   if (e.target.textContent === "Log In") {
  //     console.log("logging in...");
  //     e.target.textContent = name;
  //   }
  // };

  return (
    <div className="bg-lime-500 flex-none h-18 text-emerald-100 pb-5 pt-2">
      <nav>
        <ul className="shadow-md flex justify-between items-center px-2 pt-2">
          <li className="text-3xl shadow-xl drop-shadow-xl">Lab. 1</li>
          <li>
            <button
              className="btn shadow-xl drop-shadow-xl mr-2"
              // onClick={(e) => login("Ushi", e)}
              onClick={login}
            >
              {name}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
