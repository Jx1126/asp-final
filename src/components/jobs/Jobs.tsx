import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import Slider from "react-slick"; // Import the react-slick library for the carousel
import jobsHero from "/jobs_hero.png?url";
import "slick-carousel/slick/slick.css"; // Import carousel styles
import "slick-carousel/slick/slick-theme.css";
import 'chart.js/auto'; // This is needed to properly import Chart.js when using it with React
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

// Hero Section
function JobsHeroSection() {
  return (
    <section className="relative w-auto h-auto">
      <img src={jobsHero} alt="Hero image" className="w-full object-cover brightness-75" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70" />

      <div className="absolute inset-0 flex items-center ml-20">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            Investment Opportunities
          </h1>
          <p className="text-lg mt-3 md:text-xl">
            Find out about the bullish trends to guide your investment decisions!
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

import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/24/solid';

function JobsTopPicksWithGraphSection() {
  const stockData: Stock[] = [
    {
      title: "The Wendy's Company (NASDAQ:WEN)",
      prices: [21.5, 22.0, 22.1, 22.3, 22.5, 22.0],
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

  const [slideDisplayNumber, setSlideDisplayNumber] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 648) {
        setSlideDisplayNumber(1);
      } else if (window.innerWidth < 1024) {
        setSlideDisplayNumber(2);
      } else {
        setSlideDisplayNumber(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slideDisplayNumber,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const calculateChange = (prices: number[]) => {
    const latestPrice = prices[prices.length - 1];
    const previousPrice = prices[prices.length - 2];
    const change = latestPrice - previousPrice;
    const percentageChange = (change / previousPrice) * 100;
    return { change, percentageChange };
  };

  return (
    <section className="my-20">
      <div className="flex flex-col items-center justify-center mb-5 relative z-20">
        <p className="text-3xl sm:text-4xl text-blue-700 font-bold uppercase text-center">Top Picks</p>
        <p className="text-md sm:text-xl font-semibold mt-2 max-w-sm sm:max-w-md text-center">Companies and Stocks on the Rise</p>
      </div>
      
      <Slider {...settings} className="mt-10">
        {stockData.map((stock, index) => {
          const { change, percentageChange } = calculateChange(stock.prices);
          const isPositive = change >= 0;

          return (
            <div key={index} className="p-3"> 
              <div className="border-4 border-slate-700 p-8 shadow-lg bg-white rounded-lg"> {}
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
                <h3 className="text-xl font-semibold mt-4 text-center">{stock.title}</h3>
                <div className="text-center mt-2 flex justify-center items-center space-x-4">
                  <p className={`text-lg font-semibold mr-2 ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    Current Price: ${stock.prices[stock.prices.length - 1].toFixed(2)}
                  </p>
                  <div className={`text-lg font-semibold flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'}`}>
                    <span className="font-bold mr-2">
                      {isPositive ? <ArrowUpIcon className="h-4 w-6" /> : <ArrowDownIcon className="h-4 w-4" />} {/* Bold icon with color */}
                    </span>
                    <span>
                      ${change.toFixed(2)} ({percentageChange.toFixed(2)}%)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </section>
  );
}

import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

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

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleDropdown = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="my-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center justify-center mb-5 relative z-20">
        <p className="text-3xl sm:text-4xl text-blue-700 font-bold uppercase text-center">Investment Insights</p>
        <p className="text-md sm:text-xl font-semibold mt-2 max-w-sm sm:max-w-md text-center">Expert Tips for Success</p>
      </div>
      <div className="space-y-6">
        {insights.map((insight, index) => (
          <div
            key={index}
            className="border border-gray-200 shadow-md rounded-lg overflow-hidden bg-white transition-all duration-300"
          >
            <button
              className="w-full px-6 py-4 text-xl font-semibold flex justify-center items-center bg-white hover:bg-gray-200 focus:outline-none transition-colors duration-200"
              onClick={() => toggleDropdown(index)}
              style={{ minHeight: '70px' }}
            >
              <span className="mr-4">{insight.title}</span>
              <span className="ml-auto">
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>
            {openIndex === index && (
              <div className="px-6 py-4 bg-gray-50 text-center">
                <p className="text-gray-700 leading-relaxed">{insight.description}</p>
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

  const [slideDisplayNumber, setSlideDisplayNumber] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 648) {
        setSlideDisplayNumber(1);
      } else if (window.innerWidth < 1024) {
        setSlideDisplayNumber(2);
      } else {
        setSlideDisplayNumber(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slideDisplayNumber,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="my-20">
      <div className="flex flex-col items-center justify-center mb-5 relative z-20">
        <p className="text-3xl sm:text-4xl text-blue-700 font-bold uppercase text-center">Jobs</p>
        <p className="text-md sm:text-xl font-semibold mt-2 max-w-sm sm:max-w-md text-center">Simple job opportunities to help you kickstart your career</p>
      </div>
      <Slider {...settings} className="mt-3">
        {jobs.map((job, index) => (
          <div key={index} className="p-5">
            <div className="border p-7 shadow-lg rounded-lg bg-white">
              <img
                src={job.image}
                alt={job.title}
                className="w-full h-48 object-cover rounded-md"
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
