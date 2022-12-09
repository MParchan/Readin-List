import { Route, Routes } from "react-router-dom";

import "./App.css";
import AllBooks from "./pages/AllBooks";
import NewBook from "./pages/NewBook";
import ReadBooks from "./pages/ReadBooks";
import ToReadBooks from "./pages/ToReadBooks";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route path="/" element={<AllBooks />} />
          <Route path="/new-book" element={<NewBook />} />
          <Route path="/read-books" element={<ReadBooks />} />
          <Route path="/to-read-books" element={<ToReadBooks />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
