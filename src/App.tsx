import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductsGrid from "./components/Products/ProductsGrid";
import Summary from "./components/Summary/Summary";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="products" element={<ProductsGrid />} />
        <Route path="summary" element={<Summary />} />
      </Route>
    </Routes>
  );

  return;
}

export default App;
