import {
  PlusIcon,
  MinusIcon,
  PlusSmIcon,
  MinusSmIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import Currency from "react-currency-formatter";  
import { useDispatch } from "react-redux";
import {
  increment,
  decrement,
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

  const incrementQuantity = () => {
    dispatch(increment({ id }));
  };
  const decrementQuantity = () => {
    dispatch(decrement({ id }));
  };
  const removeItemFromCart = () => {
    dispatch(removeFromBasket({ id }));
  };
  const index = items.findIndex((item) => item.id === id);
  return (
    <>
      <div className="grid grid-cols-5">
        <Image src={image} height={200} width={200} objectFit="contain" />


        {/* middle */}
        <div className="col-span-4 mx-5">
          <p className="text-sm text-blue-400 font-bold">{title}</p>
          <p className="text-sm my-2 text-gray-400">{category}</p>
          <p className="text-sm max-w-2xl my-2 text-gray-600 line-clamp-3">
            {description}
          </p>

          <div className="font-bold my-2">
            <Currency quantity={price * 72} currency="INR" />
          </div>
          <p className="text-sm  text-green-600">In Stoke</p>

          <div
            className=" flex justify-start  items-center md:justify-start md:space-x-3 flex-wrap
      "
          >
            <div className="flex h-full mr-3  items-center padding-2 my-2 rounded-l-sm  border border-gray-300  shadow-lg active:shadow-none w-24 justify-between">
              <button
                disabled={items[index].quantity === 1}
                onClick={decrementQuantity}
                className=" bg-gray-100 border-r rounded-l-sm focus:outline-none active:bg-gray-300 h-full"
              >
                <MinusSmIcon className="h-6" />
              </button>
              <span className="my-auto text-blue-500">
                {items[index].quantity}
              </span>
              <button
                onClick={incrementQuantity}
                className=" bg-gray-100 border- rounded-l-sm focus:outline-none active:bg-gray-300 h-full"
              >
                <PlusSmIcon className="h-6" />
              </button>
            </div>
            <button
              onClick={removeItemFromCart}
              className="bg-white shadow-md rounded-md text-sm border focus:outline-none active:bg-gray-50 active:shadow-none border-gray-300 p-1 px-3"
            >
              Delete
            </button>
            <button className="bg-white shadow-md rounded-md text-sm border focus:outline-none active:bg-gray-50 active:shadow-none border-gray-300 p-1 px-3">
              Save for later
            </button>
          </div>
        </div>
        {/* <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToCart} className="button">
          Add To Cart
        </button>

        <button onClick={removeItemFromCart} className="button">
          Remove from Cart
        </button>
      </div> */}
      </div>
    </>
  );
}

export default CheckoutProduct;
