
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Home, Layout, Shop } from "./router";
import { ProductDetails } from "./screen/product/ProductDetails";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route
      path="/"
      element={
        <Layout>
          <Home/>
        </Layout>
      }
      />
      <Route
      path="/shop"
      element={
        <Layout>
          <Shop/>
        </Layout>
      }
      />
            <Route
      path="/product-details/:productId"
      element={
        <Layout>
          <ProductDetails/>
        </Layout>
      }
      />
    </Routes>
    </BrowserRouter>
    
    </>
    
  )
}

export default App