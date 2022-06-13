import { useState } from "react";
import useFetch from "./hooks/useFetch";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import BlogsPage from "./pages/BlogsPage";

export const App = () => {
  const [urlBlogs] = useState("http://localhost:3000/blogs");
  const [blogs, blogsLoading, blogsError] = useFetch(urlBlogs);
  const [urlUsers] = useState("http://localhost:3000/users");
  const [users, usersLoading, usersError] = useFetch(urlUsers);

  return (
    <div className="bg-slate-400 min-h-screen text-slate-900">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <BlogsPage
              blogs={blogs}
              users={users}
              blogsLoading={blogsLoading}
              usersLoading={usersLoading}
              blogsError={blogsError}
              usersError={usersError}
            />
          }
        />
      </Routes>
    </div>
  );
};
