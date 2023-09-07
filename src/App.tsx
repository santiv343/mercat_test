import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductsGrid from "./components/Products/ProductsGrid";
import Summary from "./components/Summary/Summary";
import MainWrapper from "./components/MainWrapper";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="" element={<MainWrapper />}>
          <Route path="" element={<ProductsGrid />} />
          <Route path="summary" element={<Summary />} />
        </Route>
      </Route>
    </Routes>
  );

  return;
}

export default App;
