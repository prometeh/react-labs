import BlogSummary from "./blogs/BlogSummary";

const Blogs = ({ blogs, users, blogId, visible }) => {
  return (
    <div>
      {visible && (
        <div className="grid grid-cols-1 md:grid-cols-2 ls:grid-cols-3 grid-flow-row gap-y-4 py-5">
          {blogs &&
            users &&
            blogs.map((blog) => (
              <BlogSummary
                key={blog.id}
                blogId={blog.id}
                blogTitle={blog.title}
                blogBody={blog.body}
                blogAuthor={users.find((user) => user.id === blog.userId).name}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
