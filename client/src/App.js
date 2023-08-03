import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, NotFound } from "./Components/default";
import { Box } from "@mui/material";

import Header from "./Components/Header/Header";
import DetailView from './Components/ItemDetails/DetailView';
import TemplateProvider from "./templates/TemplateProvider";
import ContextProvider from "./context/ContextProvider";
import Cart from './Components/Cart/Cart'

function App() {
  return (
    <TemplateProvider>
      <ContextProvider>
        <BrowserRouter>
          <Header />
          <Box style={{ marginTop: 54 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path= '/product/:id' element={<DetailView />} />
              <Route path= '/cart' element={<Cart />} />
            </Routes>
          </Box>
        </BrowserRouter>
      </ContextProvider>
    </TemplateProvider>
  );
}

export default App;
