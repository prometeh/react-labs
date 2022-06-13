import { useState } from "react";
import Blogs from "../components/Blogs.jsx";
import PageLoading from "../components/pages/PageLoading";
import PageErrors from "../components/pages/PageErrors";
import useFetch from "../hooks/useFetch.js";

const BlogsPage = () => {
  const [blogsUrl] = useState("http://localhost:3000/blogs");
  const [usersUrl] = useState("http://localhost:3000/users");
  const [blogs, blogsLoading, blogsError] = useFetch(blogsUrl);
  const [users, usersLoading, usersError] = useFetch(usersUrl);
  const isLoading = blogsLoading && usersLoading;
  const visible = !isLoading && !(blogsError || usersError);

  return (
    <div>
      <PageLoading isLoading={isLoading} />
      <Blogs blogs={blogs} users={users} visible={visible} />
      <PageErrors errors={[blogsError, usersError]} />
    </div>
  );
};

export default BlogsPage;
