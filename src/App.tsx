import "./App.css";
import ProductsGrid from "./components/Products/ProductsGrid";
import { useGetProductsQuery } from "./redux/services/products/productsApi";

function App() {
  const { data, error, isLoading } = useGetProductsQuery();

  console.log({ data, error, isLoading });

  if (isLoading && !data) {
    return <h3>loading</h3>;
  }

  return data ? <ProductsGrid products={data.amiibo} /> : null;
}

export default App;
