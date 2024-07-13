import Ratings from "@/components/Ratings/Ratings";
import Container from "@/components/shared/Container";
import { addCart, TAddtoCart } from "@/redux/features/addToCartSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { TProductResponse } from "@/types";
import { useState } from "react";
import toast from "react-hot-toast";
import { FaHeart } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import { useLoaderData } from "react-router-dom";

const SingleProduct = () => {
  const data = useLoaderData() as TProductResponse;
  const [quantity, setQuantity] = useState(1);

  const dispatch = useAppDispatch();

  const { carts } = useAppSelector((state) => state.carts);
  console.log(carts);

  const handleAddToCart = (product: TAddtoCart) => {
    dispatch(
      addCart({
        _id: product._id,
        name: product.name,
        image: product.image,
        stock: product.stock,
        quantity: quantity,
        price: product.price,
      })
    );
  };

  const { name, category, description, stock, price, image } = data.data;

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    } else {
      toast.error("Product limit exceeded");
    }
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <div className="mb-8">
      <Container>
        <div className="flex items-center mt-10 text-white/80 italic text-[18px]">
          products <FaAngleRight />
          <span className="text-white font-medium">{name}</span>
        </div>

        <div className="flex mt-10 md:flex-row flex-col justify-center lg:p-5 lg:border border-slate-50/40 border-b pb-4 lg:rounded-lg gap-10">
          <div className="w-full flex-1">
            <img
              src={image}
              alt="blackwidow-elite"
              className="rounded-lg max-w-md md:max-w-full w-full object-cover md:h-96 max-h-96"
            />
          </div>

          <div className="space-y-5 flex-1 text-white">
            <h1 className="text-3xl font-medium">{name}</h1>
            <h3 className="text-2xl font-medium">${price}</h3>
            <hr />
            <p>{description?.slice(0, 187)}..</p>
            <div className="flex gap-1">
              <Ratings ratings={4} />
            </div>
            <h3>Category : {category}</h3>
            <h6 className="bg-zinc-200 text-sm text-black inline-block px-2 py-1 rounded-lg">
              Availablity: {stock} in stock
            </h6>

            <div className="py-3 l:py-4 flex gap-3 items-center">
              <div className="flex  cursor-pointer bg-[#E0E8EF w-32 rounded-md">
                <p
                  onClick={handleDecrement}
                  className="w-full text-black bg-slate-100/6 bg-[#E4E4E7] py-1 lg:py-2 text-2xl text-center borde"
                >
                  {" "}
                  -
                </p>
                <p className="border border-slate-50/50 w-full text-blac text-center text-xl font-medium py-1 lg:py-2">
                  {quantity}
                </p>
                <p
                  onClick={handleIncrement}
                  className="text-center text-black bg-[#E4E4E7] py-1 lg:py-2 text-xl w-full borde"
                >
                  +
                </p>
              </div>

              <button
                onClick={() => handleAddToCart(data.data)}
                className="bg-[#3C956B] flex cursor-pointer  gap-1 items-center py-2 lg:py-3 text-white px-6 rounded-sm"
              >
                Add to Cart <IoCartOutline className="text-[22px]" />
              </button>

              <div className="py-3 lg:py-4  px-3 lg:px-4 flex justify-center items-center cursor-pointer hover:shadow-lg hover:shadow-cyan-500/40 bg-violet-500 rounded-sm text-white">
                <FaHeart />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SingleProduct;
