import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/slices/cartSlice";
import { ProductType } from "../../utils/types";

function ProductCard({ product }: { product: ProductType }) {
  const { image, name, type } = product;
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="flex flex-col w-32 h-64 p-4 rounded-lg border-2 border-x-cyan-300">
      <img src={image} alt={name} />
      <h6>{name}</h6>
      <p>{type}</p>

      <button onClick={() => handleAddToCart()}>Add to cart</button>
    </div>
  );
}

export default ProductCard;
