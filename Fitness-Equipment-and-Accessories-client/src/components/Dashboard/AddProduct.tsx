import { Link } from "react-router-dom";

import { categories } from "@/constant";
import { useState } from "react";
import { useAddProductsMutation } from "@/redux/api/api";
import toast from "react-hot-toast";

const AddProduct = () => {
  const [cat, setCat] = useState<string>();

  const [createProduct, { isSuccess }] = useAddProductsMutation();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const form = e.target;
    const name = form.productName.value;

    const category = cat;
    const stock = Number(form.stock.value);
    const price = Number(form.price.value);
    const image = form.image.value;
    const description = form.description.value;

    const data = { name, image, category, stock, price, description };
    console.log(data);

    const res = createProduct(data);
    console.log(res, "res");
  };

  if (isSuccess) {
    return toast.success("Product added successfully");
  }

  return (
    <div>
      {/* {loading && (
        <div className="absolute top-0 left-0 z-50 w-full h-[100vh] flex justify-center items-center bg-black bg-opacity-75">
          <div className="text-white text-2xl">Loading...</div>
        </div>
      )} */}
      <div className="px-2 md:px-4 lg:px-5">
        <div className="bg-whit rounded-md mt-4 mb-6">
          <div className="flex px-4 pt-2 font-semibold text-xl justify-between">
            <h2 className="text-white font-semibold">Add New Product</h2>
            <Link to="/products">
              <button className="cssbuttons-io">
                <span className="text-white">All Products</span>
              </button>
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="px-4 pb-6">
            <div className="flex flex-col  mb-3 md:flex-row gap-4 w-full text-white">
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="productName">Product name</label>
                <input
                  className="px-4 py-2 outline-none focus:border-teal-500 bg-[#121212] border border-slate-700 rounded-md text-white"
                  type="text"
                  placeholder="Product name"
                  name="productName"
                  id="productName"
                />
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="price">Price</label>
                <input
                  className="px-4 py-2  outline-none focus:border-teal-500 bg-[#121212] border border-slate-700 rounded-md text-white"
                  type="number"
                  placeholder="Product price"
                  name="price"
                  id="price"
                />
              </div>
            </div>

            <div className="flex flex-col mb-3 md:flex-row gap-4 w-full text-white">
              <div className="flex flex-col w-full gap-1 relative">
                <label htmlFor="category">Category</label>
                <select
                  onChange={(e) => setCat(e.target.value)}
                  className="px-4 py-2 outline-none focus:border-teal-500 bg-[#121212] border border-slate-700 rounded-md text-white"
                >
                  <option>Select Category</option>
                  {categories?.map((c, i) => (
                    <option value={cat} key={i}>
                      {c?.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col w-full gap-1">
                <label htmlFor="stock">Availability</label>
                <input
                  className="px-4 py-2 outline-none focus:border-teal-500 bg-[#121212] border border-slate-700 rounded-md text-white"
                  type="number"
                  min="0"
                  placeholder="Product Stock"
                  name="stock"
                  id="stock"
                />
              </div>
            </div>

            <div className="flex flex-col w-full gap-1 text-white mb-5">
              <label htmlFor="description">Description</label>
              <textarea
                rows={4}
                className="px-4 py-2 focus:border-teal-500 bg-[#121212] outline-none  border border-slate-700 rounded-md text-white"
                placeholder="Description"
                name="description"
                id="description"
              ></textarea>
            </div>

            <div className="flex flex-col w-full gap-1 text-white">
              <label htmlFor="image">Image</label>
              <input
                className="px-4 py-2 focus:border-teal-500 bg-[#121212] outline-none  border border-slate-700 rounded-md text-white"
                type="text"
                placeholder="Product Image URL"
                name="image"
                id="image"
              />
            </div>
            <button
              type="submit"
              className="px-4 md:px-6 lg:px-7 py-2 my-4 text-white bg-red-500"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
