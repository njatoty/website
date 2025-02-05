import { BrowserRouter, Route, Routes } from "react-router-dom";
import Portfolio from "./pages/portfolio";
import Blog from "./pages/blog";
import Layout from "./pages/layout";

function App() {


  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Portfolio />} />
          <Route path="blog" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
