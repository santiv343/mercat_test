import { useGetProductsQuery } from "../../redux/services/products/productsApi";
import { ProductType } from "../../utils/types";
import { getProductIdentifier, withPrice } from "../../utils/utils";
import ProductCard from "./ProductCard";

function ProductsGrid() {
  const { data, isLoading } = useGetProductsQuery(null);

  const products: ProductType[] = withPrice(data?.amiibo.slice(0, 100));

  if (isLoading) {
    return <h3>Loading</h3>;
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,200px))] w-full p-4 gap-y-8">
      {products.map((product) => (
        <ProductCard key={getProductIdentifier(product)} product={product} />
      ))}
    </div>
  );
}

export default ProductsGrid;
