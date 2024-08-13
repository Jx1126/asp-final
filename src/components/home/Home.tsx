import hero from "/home_hero.png?url";

function Home() {
  return (
    <>
      <div className="relative w-auto h-auto">
        <img src={hero} alt="Hero image" className="w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70" />

        <div className="absolute inset-0 flex items-center ml-20">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold">FinanceForge</h1>
            <p className="text-lg mt-3 md:text-xl">Empowering you with financial knowledge.</p>
            <button className="btn btn-primary mt-5 w-full !font-semibold text-xl">Get Started</button>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home;