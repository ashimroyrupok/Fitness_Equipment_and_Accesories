import NewsLater from "@/components/About/NewsLater";
import Testimonial from "@/components/About/Testimonial";
import Container from "@/components/shared/Container";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <section className=" bg-[#1D2632]  h-[150px] md:h-[180px] lg:h-[220px] mt-3 bg-cover bg-no-repeat relative bg-left">
        <div className="absolute left-0 top-0 w-full h-full bg-[#2422228a]">
          <div className="w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto">
            <div className="flex flex-col justify-center gap-1 items-center h-full w-full text-white">
              <h2 className="text-3xl font-bold">FlexFitness</h2>
              <div className="flex justify-center items-center gap-2 text-2xl w-full">
                <Link to="/">Home</Link>
                <span className="pt-1">
                  <FaAngleRight />
                </span>
                <span>About Us</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Container>
        <div className="flex flex-col my-4 gap-y-2">
          {" "}
          <h2 className="text-white text-3xl tec">About Our Company</h2>{" "}
          <div className="h-[1px] w-[140px] bg-teal-300"></div>
        </div>

        <div>
          <p className="text-slate-100 text-[17px]">
            Founded in 2024, Fitness Equipment and Accessories was born out of a
            passion for promoting health and wellness through high-quality
            fitness gear. Recognizing a gap in the market for reliable and
            affordable fitness products, our company set out on a mission to
            provide top-notch equipment and accessories to fitness enthusiasts
            worldwide. From humble beginnings, we've grown into a trusted name
            in the fitness industry, continually expanding our product range and
            improving our offerings.
          </p>
        </div>
        <div className="flex flex-col my-4 gap-y-2">
          {" "}
          <h2 className="text-white text-3xl">About Our Mission</h2>{" "}
          <div className="h-[1px] w-[140px] bg-teal-300"></div>
        </div>

        <div>
          <p className="text-slate-100 text-[17px]">
            Our mission is to empower individuals to achieve their fitness goals
            by providing them with superior fitness equipment and accessories.
            We believe that everyone deserves access to high-quality, durable,
            and effective fitness tools, regardless of their fitness level or
            budget. We are committed to helping our customers lead healthier,
            more active lives by offering products that enhance their workout
            experience and deliver tangible results.
          </p>
        </div>

        <Testimonial />

        <NewsLater />
      </Container>
    </div>
  );
};

export default About;
