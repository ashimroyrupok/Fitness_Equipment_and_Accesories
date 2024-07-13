import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <section className='bg-[url("https://i.ibb.co/cySj5Q2/shop.gif") bg-[#1D2632]  h-[150px] md:h-[180px] lg:h-[220px] mt-3 bg-cover bg-no-repeat relative bg-left'>
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-bold">FlexFitness</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Home</Link>
                <span className="pt-1">
                  <FaAngleRight />
                </span>
                <span>Products</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Header;
