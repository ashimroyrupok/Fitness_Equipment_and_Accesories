import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useSaveOrderMutation } from "@/redux/api/api";
import { TAddtoCart } from "@/redux/features/addToCartSlice";
import { ChangeEvent, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";

const Checkout = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  const { products, shipping_fee, price } = state;

  const [states, setState] = useState({
    name: "",
    email: "",
    phone: "",
    house: "",
    city: "",
    zip: "",
  });
  const inputHandle = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...states,
      [e.target.name]: e.target.value,
    });
  };

  const goPaymentPage = () => {
    navigate("/payment", {
      state: {
        states,
        products: products,
      },
    });
  };

  const [placeOrder] = useSaveOrderMutation();

  const handlePlaceOrder = () => {
    const data = {
      name: states.name,
      email: states.email,
      phone: states.phone,
      house: states.house,
      city: states.city,
      zipCode: states.zip,
      totalPrice: price,

      products: products.map((product: TAddtoCart) => ({
        productId: product._id,
        price: product.price,
        quantity: product.quantity,
      })),
    };
    placeOrder(data).then(() => toast.success("Order Placed Success"));
  };

  return (
    <div>
      <section className="bg-[]">
        <div className="w-[90%] lg:w-[92%] md:w-[90%]   mx-auto py-6 md:py-10 lg:py-5">
          <div className="w-full flex flex-col md:flex-row gap-4 lg:flex-row flex-wrap">
            <div className="w-full lg:w-[66%]">
              <div className="flex flex-col gap-3">
                <div className="bg-[#283046] p-6 shadow-sm rounded-md">
                  <>
                    <h2 className="text-white font-bold pb-3">
                      Shipping Information
                    </h2>
                    <form>
                      <div className="flex flex-col lg:flex-row w-full gap-2 md:gap-4 lg:gap-5 text-white">
                        <div className="flex flex-col gap-1 mb-2 w-full">
                          <label htmlFor="name">Full Name</label>
                          <input
                            onChange={inputHandle}
                            type="text"
                            className="w-full px-3 py-2 bg-[#121212] border border-slate-400 outline-none focus:border-[#3C956B] rounded-md"
                            name="name"
                            placeholder="Enter your full name"
                            id="name"
                            required
                          />
                        </div>
                        <div className="flex flex-col gap-1 mb-2 w-full">
                          <label htmlFor="email">Email Address</label>
                          <input
                            onChange={inputHandle}
                            type="email"
                            className="w-full px-3 py-2 border bg-[#121212] border-slate-400 outline-none focus:border-[#3C956B] rounded-md"
                            name="email"
                            placeholder="Email Address"
                            id="email"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex flex-col lg:flex-row gap-2 md:gap-4 lg:gap-5 w-full text-white">
                        <div className="flex flex-col gap-1 mb-2 w-full">
                          <label htmlFor="phone">Phone</label>
                          <input
                            onChange={inputHandle}
                            type="number"
                            className="w-full px-3 py-2 border bg-[#121212] border-slate-400 outline-none focus:border-[#3C956B] rounded-md"
                            name="phone"
                            placeholder="phone"
                            id="phone"
                            required
                          />
                        </div>
                        <div className="flex flex-col gap-1 mb-2 w-full">
                          <label htmlFor="city">City</label>
                          <input
                            onChange={inputHandle}
                            type="text"
                            className="w-full px-3 py-2 border bg-[#121212] border-slate-400 outline-none focus:border-[#3C956B] rounded-md"
                            name="city"
                            placeholder="City"
                            id="city"
                            required
                          />
                        </div>
                      </div>
                      <div className="flex flex-col lg:flex-row gap-2 md:gap-4 lg:gap-5 w-full text-white">
                        <div className="flex flex-col gap-1 mb-2 w-full">
                          <label htmlFor="zip">Zip Code</label>
                          <input
                            onChange={inputHandle}
                            type="number"
                            className="w-full px-3 py-2 border bg-[#121212] border-slate-400 outline-none focus:border-[#3C956B] rounded-md"
                            name="zip"
                            placeholder="Zip Code"
                            id="zip"
                            required
                          />
                        </div>
                        <div className="flex flex-col gap-1 mb-2 w-full">
                          <label htmlFor="house">House</label>
                          <input
                            onChange={inputHandle}
                            type="text"
                            className="w-full px-3 py-2 borde bg-[#121212] border-slate-400 outline-none focus:border-[#3C956B] rounded-md"
                            name="house"
                            placeholder="house"
                            id="house"
                            required
                          />
                        </div>
                      </div>

                      <div className="flex mx-1 gap-2">
                        <div className="flex flex-col gap-1 mt-3 w-full">
                          <button
                            onClick={() => navigate(-1)}
                            className="px-3 py-[6px] hover:bg-[#3C956B] hover:text-white duration-300  hover:shadow-teal-500/20 hover:shadow-lg  text-white bg-transparent border rounded-md border-[#3C956B]"
                          >
                            Back to Cart
                          </button>
                        </div>
                        <div className="flex flex-col gap-1 mt-3 w-full">
                          <button
                            onClick={goPaymentPage}
                            type="submit"
                            disabled
                            className="px-3 disabled hover:cursor-not-allowed py-[6px] rounded-md border hover:border-[#3C956B] hover:text-black hover:bg-white duration-300 hover:shadow-teal-500/20  hover:shadow-lg bg-[#3C956B] border-[#3C956B] text-white"
                          >
                            Proceed to Payment
                          </button>
                        </div>
                      </div>
                    </form>
                  </>
                </div>
              </div>
            </div>

            <div className="w-full border border-dashed border-[#3C956B] rounded-md bg-[#283046] mt-5 lg:mt-0 lg:w-[32%] ">
              <div className="px-1 lg:px-0 lg:pl-0">
                <div className=" font-medium p-5 text-white flex flex-col gap-3">
                  <h2 className="text-xl font-semibold">Order Summary</h2>
                  <div className="flex justify-between items-center">
                    <span>Total Items</span>
                    <span>({products.length})</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Delivery Fee</span>
                    <span>${shipping_fee}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>SubTotal</span>
                    <span>${price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Total Payment</span>
                    <span>${price + shipping_fee}</span>
                  </div>
                  <span className="text-[11px] text-right text-orange-600">
                    (delivery fee + total price)
                  </span>

                  <div>
                    <h2 className="text-xl font-medium text-white my-2">
                      Payment Method
                    </h2>
                    <div className="flex flex-col">
                      <RadioGroup defaultValue="option-one">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            className="text-white"
                            value="option-one"
                            id="option-one"
                          />
                          <Label htmlFor="option-one">Cash On Delivery</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem
                            disabled
                            value="option-two"
                            id="option-two"
                          />
                          <Label htmlFor="option-two">
                            Stripe (not available)
                          </Label>
                        </div>
                      </RadioGroup>
                    </div>
                  </div>

                  <button
                    className={`bg-[#3C956B] py-2 rounded-md ${
                      !states ? "disabled" : ""
                    }`}
                    onClick={handlePlaceOrder}
                  >
                    Place Order
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </div>
  );
};

export default Checkout;
