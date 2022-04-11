import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./containers/Header";
import ProductComponent from "./containers/ProductComponent";
import ProductDetail from "./containers/ProductDetail";
import ProductListing from "./containers/ProductListing";

// FIRST RUN A COMMAND: npm install redux react-redux 

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<ProductListing />} />
          <Route path="/product/:productId" exact element={<ProductDetail />} />
          <Route>404 not found</Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
