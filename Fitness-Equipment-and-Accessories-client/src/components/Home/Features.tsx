import { useState } from "react";

import dumble from "@/assets/dumble.png";
import arrow from "@/assets/arrow.png";
import { features } from "@/constant";
import Container from "../shared/Container";

const Features = () => {
  const [seeMore, setSeeMore] = useState(160);

  return (
    <Container>
      <section className=" mx-auto px-6">
        <div className="pb-16 pt-10">
          <div className="md:text-7xl text-5xl flex justify-between">
            <h2 className="text-whit feature">Why Choose Us</h2>{" "}
            <img
              className=" md:w-20 md:h-auto h-10 -rotate-90"
              src={arrow}
              alt=""
            />
          </div>
          <div className="py-10">
            <div className="grid xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2">
              {features.map((feature, idx) => (
                <div
                  key={idx}
                  className={`md:px-10 md:py-16 p-6 ${
                    idx === 0 ? "lg:border-b-0" : "lg:border-x"
                  } ${
                    idx === 2
                      ? "lg:border-b-0 lg:border-s-0 lg:border-e-0 "
                      : "border- "
                  }
                                ${
                                  idx === 3
                                    ? "lg:border-s-0 lg:border-t lg:border-e-0 "
                                    : "border- "
                                }                                
                                ${
                                  idx === 4 ? "lg:border-t" : "lg:border- "
                                }                                
                                ${
                                  idx === 5
                                    ? "lg:border-t lg:border-s-0 lg:border-e-0"
                                    : "border- "
                                }                                
                                
                                `}
                >
                  <div className="border-s-2 border-[#94f3b0]/80 border-dashed  ms-0.5  ps-10 h-full">
                    <div className="md:h-16">
                      <h4 className="lg:text-4xl text-3xl text-white">
                        {feature.title}
                      </h4>
                    </div>
                    <div className="relative">
                      <p className="pt-6 text-white/80 md:text-base text-sm">
                        {feature.des.slice(0, seeMore)}{" "}
                        {feature.des.length === seeMore ? (
                          ""
                        ) : (
                          <span
                            onClick={() => setSeeMore(feature.des.length)}
                            className="text-sm text-[#94f3b0]/80 cursor-pointer"
                          >
                            see more..
                          </span>
                        )}
                      </p>
                      <img
                        className="absolute top-0 -left-14 w-6 rotate-45 drop-shadow-2xl bg-gradient-to-r  from-[#94f3b0] to-[#7abf88] rounded-full p-0.5"
                        src={dumble}
                        alt=""
                      />
                      {/* <div className="w-4 h-4 bg-gradient-to-r  from-[#da8846] to-[#cd513e] rounded-full absolute top-0 -left-8"></div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Features;
