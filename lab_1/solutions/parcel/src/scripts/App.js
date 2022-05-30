import { useState } from "react";
import Data from "../data/books.json";
import Books from "./components/Books";
import Footer from "./components/Footer";
import Header from "./components/Header";

export function App() {
  const [books] = useState(Data);
  return (
    <div className="main-svg-bg">
      <Header />
      <Books booksList={books} />
      <Footer />
    </div>
  );
}
