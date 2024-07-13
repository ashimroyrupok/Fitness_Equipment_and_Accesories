import { Link } from "react-router-dom";

import Container from "../shared/Container";
import { categories } from "@/constant/index";
const Categories = () => {
  return (
    <div className="text-white relative py-5 px-4">
      <Container>
        <div className="flex flex-col gap-y-1  my-4 ">
          <h1 className="text-2xl font-semibold text-white">
            EQUIPMENT MADE FOR YOUR LIFESTYLE
          </h1>
          <div className="h-[1px] w-[190px] bg-teal-300"></div>
        </div>

        <div className="mt-5 grid grid-cols-2 lg:grid-cols-6 gap-6 cursor-pointer">
          {categories?.map((category: any, idx: number) => (
            <Link to={`/product/${category.name}`}>
              <div
                key={idx}
                className="border group border-teal-200/40 bg-[#151b25] rounded-md h-[200px] "
              >
                <img
                  className="rounded-md w-full group-hover:scale-95 transition-all duration-300 h-[120px] object-cover "
                  src={category.image}
                  alt=""
                />

                <p className="text-center mt-6 group-hover:text-teal-400 font-medium ">
                  {category.name}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Categories;
