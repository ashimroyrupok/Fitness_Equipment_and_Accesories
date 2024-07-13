import { useAppSelector } from "@/redux/hook";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

type TProduct = {
  _id: string;
  name: string;

  image: string;
};
const MyCarts = () => {
  const { carts } = useAppSelector((state) => state.carts);

  return (
    <div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {carts?.map((cart: TProduct, idx: number) => (
          <div
            key={idx}
            className="card  cursor-pointer group shadow-lg rounded-md border border-teal-300/3 border-slate-50/30 p-2 lg:px-3  lg:py-3"
          >
            <div className="relative overflow-hidden">
              <img
                className="mx-auto md:h-[170px] lg:h-[210px] md:w-full w-full  rounded-md transition-opacity hover:duration-700 ease-in-out"
                src={cart?.image}
                alt="Product image"
              />

              {/* overlay */}
              <ul className="flex gap-3 h-[75px] lg:h-[120px] bg-slate-100 bg-opacity-90 opacity-0 group-hover:opacity-100 transition-all duration-700 -bottom-10 justify-center items-center  absolute w-full group-hover:bottom-0">
                <Link
                  to={`/products/${cart._id}`}
                  className="w-[38px] shadow-md border h-[38px] cursor-pointer bg-white flex justify-center items-center rounded-full hover:bg-red-500 hover:text-white hover:rotate-[360deg] transition-all"
                >
                  <FaEye className="text-[18px]" />
                </Link>
              </ul>

              {/* <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-all duration-700"></div> */}
            </div>

            <div className="">
              <Link to={`/products/${cart._id}`}>
                <h3 className="font-medium text-slate-300 my-1 mt-1 hover:text-teal-500 duration-500">
                  {cart.name}
                </h3>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCarts;
