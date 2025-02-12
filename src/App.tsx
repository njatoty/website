import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./pages/portfolio";
import Blog from "./pages/blog";
import Layout from "./pages/layout";
import BlogList from "./pages/blog/blog-list";
import ReactSolidPrinciple from "./pages/blog/blog-pages/react-solid-principle";

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Portfolio />} />
          {/* Blog Group Route */}
          <Route path="blog" element={<Blog />}>
            <Route index element={<BlogList />} /> {/* Default blog page */}
            <Route path="react-solid-principle" element={<ReactSolidPrinciple />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
