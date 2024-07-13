import Banner from "@/components/Home/Banner";
import BestSelling from "@/components/Home/BestSelling";
import Categories from "@/components/Home/Categories";
import Features from "@/components/Home/Features";
import Gallery from "@/components/Home/Gallery";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <BestSelling />
      <Features />
      <Gallery />
    </div>
  );
};

export default Home;
