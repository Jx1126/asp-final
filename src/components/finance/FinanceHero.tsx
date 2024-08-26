import financeHero from "/finance_hero.png?url";

function FinanceHero() {
  return (
    <section className="relative w-auto h-auto">
      <img src={financeHero} alt="Hero image" className="w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70" />

      <div className="absolute inset-0 flex items-center ml-20">
        <div className="text-white">
          <h1 className="text-4xl md:text-6xl font-bold">
            Our In-built Finance Calculator
          </h1>
          <p className="text-lg mt-3 md:text-xl">
            Keep track of and gain insight over your finances!
          </p>
        </div>
      </div>
    </section>
  );
}

export default FinanceHero;
