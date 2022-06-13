import { useState } from "react";
import { useParams } from "react-router-dom";
import PageLoading from "../components/pages/PageLoading";
import PageErrors from "../components/pages/PageErrors";
import Blog from "../components/Blog";
import useFetch from "../hooks/useFetch";

const BlogPage = () => {
  const { id } = useParams();
  const [blogUrl] = useState("http://localhost:3000/blogs/" + id);
  const [blog, blogLoading, blogError] = useFetch(blogUrl);
  const [usersUrl] = useState("http://localhost:3000/users");
  const [users, usersLoading, usersError] = useFetch(usersUrl);
  const isLoading = blogLoading && usersLoading;
  const visible = !isLoading && !(blogError || usersError);

  return (
    <div className="pb-5">
      <PageLoading isLoading={isLoading} />
      <Blog blog={blog} users={users} visible={visible} />
      <PageErrors errors={[blogError, usersError]} />
    </div>
  );
};

export default BlogPage;
