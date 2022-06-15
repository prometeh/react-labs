import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center p-5  text-indigo-900 bg-slate-400">
      <div>The page you are looking for does not exists...</div>
      <div>
        Click &nbsp;
        <Link to={"/"} className="text-slate-800 underline">
          main page
        </Link>
        &nbsp;to go back!
      </div>
      <div className="relative mt-5 bg-slate-800 p-10 rounded-full">
        <span className="text-7xl"> 🦉</span>
        <span className="absolute text-5xl right-0 top-1">🌕</span>
      </div>
    </div>
  );
};

export default NotFoundPage;
