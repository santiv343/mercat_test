import { useGetProductsQuery } from "../../redux/services/products/productsApi";
import { ProductType } from "../../utils/types";
import { getProductIdentifier } from "../../utils/utils";
import ProductCard from "./ProductCard";

function ProductsGrid() {
  const { data, isLoading } = useGetProductsQuery(null);

  const products: ProductType[] = data?.amiibo.slice(0, 5);

  if (isLoading) {
    return <h3>Loading</h3>;
  }

  return (
    <div className="grid grid-cols-4 space-y-4 p-4">
      {products.map((product) => (
        <ProductCard key={getProductIdentifier(product)} product={product} />
      ))}
    </div>
  );
}

export default ProductsGrid;
