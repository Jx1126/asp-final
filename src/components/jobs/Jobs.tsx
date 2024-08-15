import { Line } from 'react-chartjs-2';
import 'chart.js/auto'; // This is needed to properly import Chart.js when using it with React
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);
import Slider from "react-slick"; // Import the react-slick library for the carousel
import "slick-carousel/slick/slick.css"; // Import carousel styles
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';

import jobsHero from "/jobs_hero.png?url";

// Hero Section
function JobsHeroSection() {
  return (
    <section className="relative w-auto h-auto">
      <img src={jobsHero} alt="Hero image" className="w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70" />

      <div className="absolute inset-0 flex items-center ml-20">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            Investment Opportunities with Bullish Trends
          </h1>
          <p className="text-lg mt-3 md:text-xl">
            Find out about the companies and stocks that are experiencing
            bullish trends to guide your investment decisions!
          </p>
        </div>
      </div>
    </section>
  );
}

// Define the type for a single stock
interface Stock {
  title: string;
  prices: number[];
}

const stockData: Stock[] = [
  {
    title: "The Wendy's Company (NASDAQ:WEN)",
    prices: [21.5, 22.0, 22.1, 22.3, 22.5, 22.6],
  },
  {
    title: "Moody's Corporation (NYSE:MCO)",
    prices: [330.1, 331.0, 330.5, 332.2, 333.5, 334.1],
  },
  {
    title: "The Coca-Cola Company (NYSE:KO)",
    prices: [60.1, 60.5, 60.4, 60.6, 61.0, 61.5],
  },
  {
    title: "American Express Company (NYSE:AXP)",
    prices: [155.3, 156.0, 155.8, 156.2, 157.1, 157.5],
  },
  {
    title: "Merck & Co., Inc. (NYSE:MRK)",
    prices: [107.5, 107.2, 107.8, 108.0, 108.5, 108.9],
  },
  {
    title: "Apple Inc. (NASDAQ:AAPL)",
    prices: [190.2, 191.0, 191.5, 192.0, 192.5, 193.0],
  },
  {
    title: "Microsoft Corporation (NASDAQ:MSFT)",
    prices: [310.1, 311.0, 310.5, 312.2, 313.5, 314.1],
  },
  {
    title: "Tesla, Inc. (NASDAQ:TSLA)",
    prices: [680.2, 682.0, 681.5, 683.0, 685.5, 687.0],
  },
  {
    title: "Amazon.com, Inc. (NASDAQ:AMZN)",
    prices: [3205.5, 3210.0, 3208.1, 3212.3, 3215.5, 3220.6],
  },
  {
    title: "Alphabet Inc. (NASDAQ:GOOGL)",
    prices: [2725.5, 2730.0, 2732.1, 2735.3, 2738.5, 2740.6],
  },
  {
    title: "Facebook, Inc. (NASDAQ:FB)",
    prices: [355.5, 357.0, 356.1, 358.3, 359.5, 360.6],
  },
  {
    title: "NVIDIA Corporation (NASDAQ:NVDA)",
    prices: [545.2, 547.0, 546.5, 548.0, 549.5, 550.0],
  },
];

function JobsTopPicksWithGraphSection() {
  
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Show 3 graphs at a time
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="my-20">
      <h2 className="text-4xl font-bold text-center">Top Picks: Companies and Stocks on the Rise</h2>
      <Slider {...settings} className="mt-10">
        {stockData.map((stock, index) => (
          <div key={index} className="p-8">
            <div className="border p-4 shadow-lg rounded-lg bg-white">
              <h3 className="text-xl font-semibold mt-2 text-center">{stock.title}</h3>
              <Line
                data={{
                  labels: ["10AM", "11AM", "12PM", "1PM", "2PM", "3PM"],
                  datasets: [
                    {
                      label: `${stock.title} Price ($)`,
                      data: stock.prices,
                      borderColor: 'rgba(75, 192, 192, 1)',
                      backgroundColor: 'rgba(75, 192, 192, 0.2)',
                      fill: true,
                      tension: 0.1,
                    },
                  ],
                }}
                options={{
                  scales: {
                    y: {
                      beginAtZero: false,
                    },
                  },
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

function JobsInvestmentInsightsSection() {
  const insights = [
    {
      title: "Invest in S&P500 ETFs",
      description:
        "Exchange-traded funds (ETFs) tracking the S&P 500 are fundamental to many investment portfolios. Over the long term, outperforming the S&P 500 is nearly impossible, making it a key benchmark for investing.",
    },
    {
      title: "Don't Chase a Hot Tip",
      description:
        "Chasing hot tips can be risky and may lead to significant losses. It's better to base your investments on sound research and a well-thought-out strategy.",
    },
    {
      title: "Pick a Strategy and Stick With It",
      description:
        "Consistency is key in investing. Choose a strategy that aligns with your financial goals and risk tolerance, and stick with it through market ups and downs.",
    },
    {
      title: "Focus on the Future",
      description:
        "Investing with a long-term perspective helps you weather short-term market volatility and build wealth over time.",
    },
  ];

  // State to track which dropdown is open
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Function to toggle dropdown
  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="my-20 max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-10">
        Investment Insights: Expert Tips for Success
      </h2>
      <div className="space-y-4">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="border shadow-lg rounded-lg bg-white"
          >
            <button
              className="w-full text-center p-4 font-semibold text-xl flex justify-between items-center bg-gray-100 hover:bg-gray-200 rounded-lg"
              onClick={() => toggleDropdown(index)}
              style={{ minHeight: '60px' }}  // Ensure uniform height for all titles
            >
              <span className="w-full text-center">{insight.title}</span>
              <span>
                {openIndex === index ? "▲" : "▼"}
              </span>
            </button>
            {openIndex === index && (
              <div className="p-4 border-t text-center">
                <p>{insight.description}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
  
// Jobs Section with Carousel
function JobsSection() {
  const jobs = [
    {
      title: "Business Consulting",
      description: "Offer expertise in business strategy, finance, or management.",
      image: "/home_hero.png",
    },
    {
      title: "Dropshipping",
      description: "Selling products online without holding inventory.",
      image: "/home_hero.png",
    },
    {
      title: "Transcription",
      description: "Converting audio or video recordings into written text.",
      image: "/home_hero.png",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <section className="my-20">
      <h2 className="text-4xl font-bold text-center">Jobs</h2>
      <Slider {...settings} className="mt-10">
        {jobs.map((job, index) => (
          <div key={index} className="p-8">
            <div className="border p-4 shadow-lg rounded-lg bg-white">
              <img
                src={job.image}
                alt={job.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h3 className="text-xl font-semibold mt-2">{job.title}</h3>
              <p className="mt-2">{job.description}</p>
              <button className="btn btn-primary mt-5 w-full">
                Apply
              </button>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}



// Home Page Component
function JobsHomePage() {
  return (
    <>
      <JobsHeroSection />
      <JobsTopPicksWithGraphSection /> 
      <JobsInvestmentInsightsSection />
      <JobsSection />
    </>
  );
}

export default JobsHomePage;
