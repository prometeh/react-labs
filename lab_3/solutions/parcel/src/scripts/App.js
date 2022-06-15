import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import BlogsPage from "./pages/BlogsPage";
import BlogPage from "./pages/BlogPage";
import CreatePage from "./pages/CreatePage";
import NotFoundPage from "./pages/NotFoundPage";

export const App = () => {
  return (
    <div className="bg-slate-400 min-h-screen text-slate-900">
      <Header />
      <Routes>
        <Route path="/" element={<BlogsPage />} />
        <Route path="/blogs/:id" element={<BlogPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};
