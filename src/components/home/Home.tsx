import hero from "/home_hero.png?url";
import detail1 from "/home_detail_1.png?url";
import detail2 from "/home_detail_2.png?url";
import detail3 from "/home_detail_3.png?url";

import FeatureCard from "./FeatureCard";
import RatingCard from "./RatingCard";

const HeroSection = () => {
  return (
    <section className="relative w-auto h-auto">
      <img src={hero} alt="Hero image" className="w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70" />

      <div className="absolute inset-0 flex items-center ml-20">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold">FinanceForge</h1>
          <p className="text-lg mt-3 md:text-xl">
            Empowering you with financial knowledge.
          </p>
          <button className="btn btn-primary mt-5 w-full !font-semibold text-xl">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

const FeaturesSection = () => {

  const features = [
    {
      title: "Track your Income and Expenses",
      description: "Easily record and visualize your income and expenses. Get clear insight into your spending habits and savings with graphs.",
      image: detail1,
    },
    {
      title: "Find out ways to build your wealth",
      description: "Get top insights from our analyst and key recommendation on opportunities to build your wealth.",
      image: detail2,
    },
    {
      title: "Protect yourself",
      description: "Find out more about common scams and use our link checker to safeguard yourself online.",
      image: detail3,
    }
  ];

  return (
    <section className="mt-20 flex items-center justify-center">
      <div className="grid gap-10">
        {features.map((feature, index) => (
          <FeatureCard key={index} {...feature} isReversed={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};

const RatingSection = () => {

  const ratings = [
    {
      star: 5,
      message: "FinanceForge has helped me to understand my spending habits and save more.",
      avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      username: "John Doe"
    },
    {
      star: 5,
      message: "FinanceForge has helped me to understand my spending habits and save more.",
      avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      username: "John Doe"
    },
    {
      star: 5,
      message: "FinanceForge has helped me to understand my spending habits and save more.",
      avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      username: "John Doe"
    },
    {
      star: 5,
      message: "FinanceForge has helped me to understand my spending habits and save more.",
      avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      username: "John Doe"
    },
    {
      star: 5,
      message: "FinanceForge has helped me to understand my spending habits and save more.",
      avatar: "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp",
      username: "John Doe"
    },
  ];

  return (
    <section className="my-20 overflow-hidden">
      <div className="flex flex-col items-center justify-center mb-5">
        <p className="text-4xl text-blue-700 font-bold uppercase text-center">What our users are saying</p>
        <p className="text-xl font-semibold mt-2 max-w-md text-center">Discover how FinanceForge has helped individual take control of their finances.</p>
      </div>

      <div className="relative w-full">
        <div className="inifite-scroll-animation flex">
          {[...ratings, ...ratings].map((rating, index) => (
            <div className="flex-shrink-0 w-80 mx-4">
              <RatingCard key={index} {...rating} />
            </div>
          ))};
        </div>
      </div>
    </section>
  );
};

function Home() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <RatingSection />
    </>
  );
}

export default Home;
