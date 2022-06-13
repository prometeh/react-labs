const Blog = ({ blog, users, visible }) => {
  return (
    <div>
      {visible && (
        <div className="bg-stone-200 w-11/12 p-5 mt-5 mx-auto rounded">
          <div className="text-3xl text-center">{blog && blog.title}</div>
          <div className="text-right mb-5">
            by {blog && users && users[blog.userId - 1].name}
          </div>
          <div>{blog && blog.body}</div>
        </div>
      )}
    </div>
  );
};

export default Blog;
