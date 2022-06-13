import { Link } from "react-router-dom";

const BlogSummary = ({ blogId, blogTitle, blogBody, blogAuthor }) => {
  return (
    <Link to={"/blogs/" + blogId}>
      <div className="flex flex-col justify-between w-11/12 mx-auto bg-slate-600 rounded-lg p-2 text-slate-200 mb-4 shadow-lg shadow-slate-800/75 transition duration-200 ease-out hover:ease-in hover:scale-105 cursor-pointer">
        <h2 className="text-xl text-center text-amber-400 border-b-2 rounded-full px-3 pb-1 mb-3 border-slate-400">
          {blogTitle[0].toUpperCase() +
            blogTitle.substring(1, blogTitle.length)}
        </h2>
        <p className="text-yellow-100 ml-3">
          {blogBody.substring(0, 65) + "..."}
        </p>
        <p className="text-right pr-5 text-amber-200">
          Written by: {blogAuthor}
        </p>
      </div>
    </Link>
  );
};

export default BlogSummary;
