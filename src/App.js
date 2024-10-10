import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Blog from "./pages/Blogpage";
import Contact from "./pages/Contactpage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import Contactpage from "./pages/Contactpage";
import Blogpage from "./pages/Blogpage";
import Footerpage from "./pages/Footerpage";
import Header from "./pages/Header";
import Work from "./pages/Work";
import Counter from "./components/counter/Counter";
// import ProductsApi from "./components/productsApi/ProductsApi";
import Products from "./pages/Products";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/blog" element={<Blogpage />} />
      <Route path="/contact" element={<Contactpage />} />
      <Route path="/footer" element={<Footerpage />} />
      <Route path="/head" element={<Header />} />
      <Route path="/work" element={<Work />} />
      <Route path="/counter" element={<Counter />} />
      <Route path="/products" element={<Products />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
