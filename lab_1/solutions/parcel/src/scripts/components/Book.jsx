import { useState } from "react";

const Book = ({ title, author, plot, link, imageName }) => {
  const [toggleInfo, setToggleInfo] = useState(false);
  const handleClick = () => {
    setToggleInfo((visible) => !visible);
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="grid grid-cols-6 lg:max-w-[550px] card hover:bg-stone-800 transition ease-in delay-100"
      >
        <h2 className="col-span-6 card-header hover:text-amber-200 hover:border-amber-200 transition ease-in delay-200 ">
          {title}
          <span>
            <h3 className="text-sm text-right mr-10"> -{author}</h3>
          </span>
        </h2>

        {/* I've tried to implement the picture to cards dynamicly but no luck
            so I've decided to put the images manually inside dist directory */}
        <img
          alt="img"
          src={`./assets/images/${imageName}?as=jpg&width=600px`}
          width="70%"
          className={`justify-self-center ${
            toggleInfo ? "col-span-2" : "col-span-6"
          }`}
        />

        <p
          className={`p-3 col-start-3 col-span-4 self-center text-center" ${
            toggleInfo ? "" : "hidden"
          }`}
        >
          {plot}
        </p>
        <a className="col-span-6 justify-self-end" href={link} target="_blank">
          <span className="hover:text-amber-200 transition delay-200">
            <p className="inline align-bottom">Read more @ Wikipedia &nbsp;</p>
            <svg
              className="inline w-10 h-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              ></path>
            </svg>
          </span>
        </a>
      </div>
    </>
  );
};

export default Book;
