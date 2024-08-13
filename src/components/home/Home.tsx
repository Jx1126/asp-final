import hero from "/home_hero.png?url";
import detail1 from "/home_detail_1.png?url";
import detail2 from "/home_detail_2.png?url";
import detail3 from "/home_detail_3.png?url";

import FeatureCard from "./FeatureCard";

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

const FeaturesSection = () => (
  <section className="mt-20 flex items-center justify-center">
    <div className="grid gap-10">
      <FeatureCard
        title="Track your Income and Expenses"
        description="Easily record and visualize your income and expenses. Get clear insight into your spending habits and savings with graphs."
        image={detail1}
      />
      <FeatureCard
        title="Find out ways to build your wealth"
        description="Get top insights from our analyst and key recommendation on opportunities to build your wealth."
        image={detail2}
        isReversed
      />
      <FeatureCard
        title="Protect yourself"
        description="Find out more about common scams and use our link checker to safeguard yourself online."
        image={detail3}
      />
    </div>
  </section>
);

const RatingSection = () => (
  <section className="mt-20">
    <div className="flex flex-col items-center justify-center">
      <p className="text-4xl text-blue-700 font-bold uppercase text-center">What our users are saying</p>
      <p className="text-xl font-semibold mt-2 max-w-md text-center">Discover how FinanceForge has helped individual take control of their finances.</p>
    </div>
  </section>
);

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
