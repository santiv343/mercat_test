import { useGetProductsQuery } from "../../redux/services/products/productsApi";
import { ProductType } from "../../utils/types";
import { getProductIdentifier, withPrice } from "../../utils/utils";
import Loading from "../Loading";
import ProductCard from "./ProductCard";

function ProductsGrid() {
  const { data, isLoading, status } = useGetProductsQuery(null);

  const products: ProductType[] = withPrice(data?.amiibo.slice(0, 100));

  console.log({ status });

  if (isLoading) {
    return (
      <div className="w-full h-full flex flex-col justify-center items-center">
        <h2 className="text-2xl my-8 font-bold mr-8">Loading products</h2>
        <Loading className="w-3/4 h-3/4 text-gray-700 fill-blue-600" />;
      </div>
    );
  }

  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(150px,250px))] justify-center items-center w-full p-4 gap-6 ">
      {products.map((product) => (
        <ProductCard key={getProductIdentifier(product)} product={product} />
      ))}
    </div>
  );
}

export default ProductsGrid;
