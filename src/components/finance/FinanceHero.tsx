import financeHero from "/finance_hero.png?url";

function FinanceHero() {
  return (
    <section className="relative w-auto h-auto">
      <img src={financeHero} alt="Hero image" className="w-full h-full brightness-75 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70" />

      <div className="absolute inset-0 flex items-center justify-center sm:justify-start">
        <div className="text-white px-6 sm:px-10 md:px-16">
          <h1 className="text-3xl sm:text-5xl font-bold text-center sm:text-left">
            Finance Calculator
          </h1>
          <p className="text-base sm:text-lg md:text-xl mt-2 sm:mt-3 text-center sm:text-left">
            Keep track of and gain insight over your finances!
          </p>
        </div>
      </div>
    </section>
  );
}

export default FinanceHero;
