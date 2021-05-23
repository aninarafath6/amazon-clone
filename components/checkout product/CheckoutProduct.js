import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";
import { useDispatch } from "react-redux";
import {
  addToBasket,
  selectItems,
  removeFromBasket,
} from "../../slices/basketSlice";
import { useSelector } from "react-redux";
function CheckoutProduct({
  id,
  title,
  price,
  rating,
  description,
  category,
  image,
  hasPrime,
}) {
  const items = useSelector(selectItems);

  console.log(id);
  const dispatch = useDispatch();

  const addItemToCart = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };
    dispatch(addToBasket(product));
  };
  const removeItemFromCart = () => {
    dispatch(removeFromBasket({ id }));
  };
  const a = items.findIndex(item => item.id === id)
  console.log(items[a].quantity);
  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} objectFit="contain" />

      {/* middle */}
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-6 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <p className="text-sm my-2 font-bold line-clamp-3">quantity : {items[a].quantity}</p>

        <Currency quantity={price * 72} currency="INR" />
        {hasPrime && (
          <div className="flex items-center space-x-2 ">
            <img loading="lazy" className="w-12" src="/primeLogo.png" alt="" />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToCart} className="button">
          Add To Cart
        </button>

        <button onClick={removeItemFromCart} className="button">
          Remove from Cart
        </button>
        
      </div>
    </div>
  );
}

export default CheckoutProduct;
