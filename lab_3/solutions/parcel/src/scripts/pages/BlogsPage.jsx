import Blogs from "../components/Blogs.jsx";

const BlogsPage = ({
  blogs,
  users,
  blogsLoading,
  usersLoading,
  blogsError,
  usersError,
}) => {
  const isLoading = blogsLoading && usersLoading;
  return (
    <div>
      {isLoading && (
        <p className="text-amber-400 bg-slate-700 m-5 p-3 rounded flex items-center justify-between">
          Loading the data... &nbsp;
          <span className="text-4xl text-right">🕝</span>
        </p>
      )}
      {!blogsLoading && !(blogsError || usersError) && blogs && users && (
        <Blogs blogs={blogs} users={users} />
      )}
      {(blogsError || usersError) && (
        <div className="text-amber-400 bg-slate-700 m-5 p-3 rounded">
          <p>There was a problem fetching the data:</p>
          <p> {blogsError} </p>
          <p> {usersError} </p>
        </div>
      )}
    </div>
  );
};

export default BlogsPage;
