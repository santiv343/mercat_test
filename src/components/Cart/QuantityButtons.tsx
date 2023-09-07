import { useAppDispatch } from "../../redux/hooks";
import {
  decreaseProductQty,
  increaseProductQty,
} from "../../redux/slices/cartSlice";

function QuantityButtons({
  quantity,
  productId,
}: {
  quantity: number;
  productId: string;
}) {
  const dispatch = useAppDispatch();
  return (
    <div className="flex">
      <button
        onClick={() => dispatch(decreaseProductQty(productId))}
        className="flex w-6 h-6 text-center justify-center items-center p-1 border border-amber-50 rounded-full text-sm"
      >
        -
      </button>
      <p className="flex justify-center items-center px-2">{quantity}</p>
      <button
        onClick={() => dispatch(increaseProductQty(productId))}
        className="flex w-6 h-6 text-center justify-center items-center p-1 border border-amber-50 rounded-full text-sm"
      >
        +
      </button>
    </div>
  );
}

export default QuantityButtons;
