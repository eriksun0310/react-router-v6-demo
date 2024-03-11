import "./App.css";
import Header from "./pages/Header";
import { Routes, Route, useRoutes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import ProductLayout from "./pages/ProductLayout";
import ProductRoutes from "./routes/ProductRoutes";

function App() {
  // 如果想把Route 抽離可以這樣寫
  const productRoutes = useRoutes(ProductRoutes)
  return (
  <>
    {/* <div className="App">
      <Header />
      {productRoutes}
      <Routes>
        <Route path="/" element={<Home />} />
        巢狀Route: parent route
        <Route path="/products" element={<ProductLayout />}>
          children route
          <Route index element={<Products />} />
          <Route path=":id" element={<Product />} />
          <Route path="features" element={<Features />} />
        </Route>

        <Route path="*" element={<NotFound />} />

      </Routes>
    </div> */}
    
    {/* 如果想把Route 抽離可以這樣寫 */}
    <div className="App">
        <Header />
        {productRoutes}
      </div>
    </>
  );
}

export default App;
