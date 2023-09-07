import CloseIcon from "../../icons/CloseIcon";
import { useAppDispatch } from "../../redux/hooks";
import { removeFromCart } from "../../redux/slices/cartSlice";
import { ProductType } from "../../utils/types";
import { getProductIdentifier } from "../../utils/utils";
import QuantityButtons from "./QuantityButtons";

function CartItem({
  product,
  quantity,
}: {
  product: ProductType;
  quantity: number;
}) {
  const productId = getProductIdentifier(product);
  const dispatch = useAppDispatch();

  return (
    <div className="w-full h-28 rounded-lg border text-amber-50 border-amber-50 ">
      <div
        key={productId}
        className="flex flex-col h-full justify-between rounded-lg p-3"
      >
        <div className="flex w-full h-full justify-between items-center">
          <div className="h-fit bg-stone-800 rounded-t-lg">
            <img
              className="w-16 h-16 object-contain transition-transform group-hover:scale-90 group-hover:drop-shadow-2xl"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="flex flex-col w-full h-full justify-between items-end ml-1">
            <div className="flex w-full justify-between">
              <p className="text-end">{product.name}</p>
              <button onClick={() => dispatch(removeFromCart(productId))}>
                <CloseIcon className="w-6 h-6 fill-red-500" />
              </button>
            </div>

            <div className="flex w-full pl-8 justify-between items-center mt-auto">
              <QuantityButtons quantity={quantity} productId={productId} />
              <p className="ml-4">$ {(product.price * quantity).toFixed(2)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
