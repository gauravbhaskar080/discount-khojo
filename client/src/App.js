import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home, NotFound } from "./Components/default";
import { Box } from "@mui/material";

import Header from "./Components/Customer/Header/Header";
import DetailView from "./Components/Customer/ItemDetails/DetailView";
import TemplateProvider from "./templates/TemplateProvider";
import ContextProvider from "./context/ContextProvider";
import Cart from "./Components/Customer/Cart/Cart";
import AddProduct from "./Components/Customer/AddProduct/AddProduct";
// import Header from "./Components/Customer/Header/Header";
// import DetailView from "./Components/Customer/ItemDetails/DetailView";
// import TemplateProvider from "./templates/TemplateProvider";
// import ContextProvider from "./context/ContextProvider";
// import Cart from "./Components/Customer/Cart/Cart";
import CheckoutSuccess from "./Components/Customer/Cart/CheckoutSuccess";
import Product from "./Components/Customer/Product/Product";

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{ marginTop: 54 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<DetailView />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/addProduct" element={<AddProduct />} />
              {/* <Route path="/" element={<Home />} /> */}
              <Route path="/product" element={<Product />} />
              {/* <Route path="/product/:id" element={<DetailView />} /> */}
              {/* <Route path="/cart" element={<Cart />} /> */}
              <Route path="/checkout-success" element={<CheckoutSuccess />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
