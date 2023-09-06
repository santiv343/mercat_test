import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart } from "../../redux/slices/cartSlice";
import { ProductType } from "../../utils/types";
import { getProductIdentifier } from "../../utils/utils";

function ProductCard({ product }: { product: ProductType }) {
  const { image, name, type } = product;
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cartReducer.cart);

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity: 1 }));
  };

  const isAlreadyInCart = !!cart.find(
    (cartItem) =>
      getProductIdentifier(cartItem.product) === getProductIdentifier(product)
  );

  return (
    <div className="flex flex-col w-32 h-64 p-4 rounded-lg border-2 border-cyan-300">
      <img src={image} alt={name} />
      <h6>{name}</h6>
      <p>{type}</p>

      {isAlreadyInCart ? (
        <p>In cart</p>
      ) : (
        <button onClick={() => handleAddToCart()}>Add to cart</button>
      )}
    </div>
  );
}

export default ProductCard;
