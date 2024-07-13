import { Link, Outlet } from "react-router-dom";
import { FaList, FaRegUserCircle } from "react-icons/fa";
import { RxCross1, RxDashboard } from "react-icons/rx";

import { BsHeart } from "react-icons/bs";
import { BsCartCheck } from "react-icons/bs";

import { BiLogInCircle } from "react-icons/bi";
import { RiProductHuntLine } from "react-icons/ri";

import { IoBagCheckOutline } from "react-icons/io5";
import { useState } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import { FiPlus } from "react-icons/fi";

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        onClick={() => setOpen(false)}
        className={`fixed duration-200 ${
          !open ? "invisible" : "visible"
        } w-screen h-screen backdrop-blur-sm top-0 left-0 z-10`}
      ></div>
      <Navbar />
      <div className="bg-[#485268  ">
        <div
          onClick={() => setOpen(!open)}
          className="ml-5 px-3 mt-2 text-white rounded-md bg-indigo-500 inline-block lg:hidden py-2 "
        >
          <FaList className="text-xl mt-" />
        </div>

        {/* mobile sidebar */}

        <div
          className={`${
            open ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
          } lg:hidden transition-all duration-500 fixed  z-[99999] border border-gray-200 shadow-lg backdrop-blur-sm transform h-full sm-device w-[320px] md:w-[390px] bg-white text-black top-0  left-0`}
        >
          <ul className="py-2 text-slate-600 px-4">
            <li className="flex justify-start items-center gap-2 py-2">
              <span className="text-xl">
                <RxDashboard />
              </span>
              <Link to="/dashboard/my-dashboard" className="block">
                Dashboard
              </Link>
            </li>
            <li className="flex justify-start items-center gap-2 py-2">
              <span className="text-xl">
                <FaRegUserCircle />
              </span>
              <Link to="/dashboard/my-profile" className="block">
                My Profile
              </Link>
            </li>
            <li className="flex justify-start items-center gap-2 py-2">
              <span className="text-xl">
                <IoBagCheckOutline />
              </span>
              <Link to="/dashboard/my-orders" className="block">
                My Orders
              </Link>
            </li>
            <li className="flex justify-start items-center gap-2 py-2">
              <span className="text-xl">
                <BsHeart />
              </span>
              <Link to="/dashboard/my-wishlists" className="block">
                Wishlist
              </Link>
            </li>
          </ul>
          {/* close btn */}
          <button
            className="h-[27px] w-[27px] text-[#FE2424] py-1  text-[16px]  shadow-md border border-red-500 rounded-full font-semibold flex absolute top-0 right-2 mt-2"
            onClick={() => setOpen(false)}
          >
            <RxCross1 className="ml-[5px] mt-[1.2px]" />
          </button>
          {/* close btn */}
        </div>

        {/* mobile sidebar */}

        <div className="flex gap-5 px-4 py-4">
          <div className="bg-[#282d39 bg-[#161d31 bg-[#283046]  border border-slate-200/30 text-white hidden lg:block h-[56vh]z-40 w-[270px] rounded-md">
            <ul className="py-2 text-slate-600 px-4">
              <li className="flex justify-start items-center text-white gap-2 py-2">
                <span className="text-xl">
                  <RxDashboard />
                </span>
                <Link to="/dashboard/my-dashboard" className="block">
                  Dashboard
                </Link>
              </li>
              <li className="flex justify-start text-white items-center gap-2 py-2">
                <span className="text-xl">
                  <RiProductHuntLine />
                </span>
                <Link to="/dashboard/all-products" className="block">
                  All Product
                </Link>
              </li>
              <li className="flex justify-start text-white items-center gap-2 py-2">
                <span className="text-xl">
                  <FiPlus />
                </span>
                <Link to="/dashboard/add-product" className="block">
                  Add Product
                </Link>
              </li>

              <li className="flex justify-start items-center text-white gap-2 py-2">
                <span className="text-xl">
                  <IoBagCheckOutline />
                </span>
                <Link to="/dashboard/my-orders" className="block">
                  My Orders
                </Link>
              </li>
              <li className="flex justify-start items-center text-white gap-2 py-2">
                <span className="text-xl">
                  <BsCartCheck />
                </span>
                <Link to="/dashboard/my-carts" className="block">
                  My Carts
                </Link>
              </li>

              {/* <li className="flex justify-start text-white items-center gap-2 py-2">
                <span className="text-xl">
                  <BsHeart />
                </span>
                <Link to="/dashboard/my-wishlists" className="block">
                  Wishlist
                </Link>
              </li> */}

              <li className="flex justify-start text-white items-center gap-2 py-2 cursor-pointer">
                <span className="text-xl">
                  <BiLogInCircle />
                </span>
                <div className="block">Logout</div>
              </li>
            </ul>
          </div>

          <div className="flex-1 bg-[#141E30]">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
