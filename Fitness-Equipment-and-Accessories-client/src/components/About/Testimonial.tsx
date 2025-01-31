import shapeBg from "@/assets/t1.png";
import shapeBg2 from "@/assets/t2.png";
import shapeBg3 from "@/assets/t3.png";
import { IoMdQuote } from "react-icons/io";
// import HighlightMarquee from "./HighlightMarquee";

const Testimonial = () => {
  const gymTestimonials = [
    {
      name: "Emily Johnson",
      say: "The gym's fantastic atmosphere and dedicated trainers have made my fitness journey enjoyable and effective. I've achieved results I never thought possible!",
      date: "2023-02-15",
      image: shapeBg,
    },
    {
      name: "Alex Rodriguez",
      say: "Joining this gym was the best decision I made for my health. The variety of classes and friendly and community keep me motivated. I look forward to every workout!",
      date: "2023-03-10",
      image: shapeBg2,
    },
    {
      name: "Sophia Chang",
      say: "The personalized training sessions have been a game-changer for me. The trainers here understand my goals and push me to achieve them. I've never felt stronger!",
      date: "2023-04-05",
      image: shapeBg3,
    },
  ];

  return (
    <section className="overflow-hidden ">
      <div className="container mx-auto px-6 pt-16">
        <div className="grid xl:grid-cols-3 lg:grid-cols-2 gap-6">
          {gymTestimonials.map((testimonial, idx) => (
            <div
              key={idx}
              className="md:px-10 px-6 py-16 bg-[#303644] rounded-lg relative mb-6"
            >
              <IoMdQuote className="inline absolute text-white text-8xl -top-10" />
              <p className="pb-10 text-white ps-3 md:text-base text-sm">
                {testimonial.say}
              </p>
              <div className="rounded-2xl flex md:flex-row flex-col gap-6 justify-between md:items-end items-start">
                <img className="h-40" src={testimonial.image} alt="" />
                <div className="pt-3 ps-2">
                  <h2 className="text-4xl text-white"> {testimonial.name}</h2>
                  <p className=" pt-3 ps-0.5 text-white md:text-base text-sm">
                    {testimonial.date}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <HighlightMarquee></HighlightMarquee> */}
    </section>
  );
};

export default Testimonial;
