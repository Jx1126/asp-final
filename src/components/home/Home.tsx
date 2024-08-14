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
    <section id="features" className="mt-20 flex items-center justify-center">
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
      avatar: "https://randomuser.me/api/portraits/men/79.jpg",
      username: "John Doe"
    },
    {
      star: 5,
      message: "The wealth building opportunities are amazing. I tripled my monthly income in 3 months.",
      avatar: "https://randomuser.me/api/portraits/men/78.jpg",
      username: "Josue Hansen"
    },
    {
      star: 5,
      message: "The link checker saved me from going into a malicious website. I would recommend this to everyone.",
      avatar: "https://randomuser.me/api/portraits/women/75.jpg",
      username: "Jovanni Rowe"
    },
    {
      star: 5,
      message: "This is the best financial tool I have ever used. It has helped me to save more and spend less.",
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
      username: "Harlee Wells"
    },
    {
      star: 5,
      message: "The way FinanceForge has helped me to understand my spending habits is amazing.",
      avatar: "https://randomuser.me/api/portraits/women/30.jpg",
      username: "Teresa Compton"
    },
    {
      star: 5,
      message: "The fact that I can track my income and expenses in one place is amazing. I have saved more since I started using FinanceForge.",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
      username: "Celia Elliott"
    },
    {
      star: 5,
      message: "The monthly budget planner has helped me to plan my expenses and save more.",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
      username: "Brylee Mueller"
    },
  ];

  return (
    <section id="testimonials" className="my-20 overflow-hidden relative">
      <div className="flex flex-col items-center justify-center mb-5 relative z-20">
        <p className="text-4xl text-blue-700 font-bold uppercase text-center">What our users are saying</p>
        <p className="text-xl font-semibold mt-2 max-w-md text-center">Discover how FinanceForge has helped individual take control of their finances.</p>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-100 via-transparent via-30% to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-l from-slate-100 via-transparent via-30% to-transparent z-10" />

        <div className="flex infinite-scroll z-0">
          {[...ratings, ...ratings].map((rating, index) => (
            <div className="flex-shrink-0 w-80 mx-4" key={index}>
              <RatingCard {...rating} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

function Home() {
  return (
    <>
      <div className="relative z-0">
        <HeroSection />
        <FeaturesSection />
        <RatingSection />
      </div>
    </>
  );
}

export default Home;
