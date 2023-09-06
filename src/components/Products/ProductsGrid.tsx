import { ProductType } from "../../utils/types";
import ProductCard from "./ProductCard";

function ProductsGrid({ products }: { products: ProductType[] }) {
  const amiibos = products.slice(0, 5);

  return (
    <div className="grid grid-cols-4 space-y-4">
      {amiibos.map((amiibo) => (
        <ProductCard key={amiibo.head + amiibo.tail} product={amiibo} />
      ))}
    </div>
  );
}

export default ProductsGrid;
