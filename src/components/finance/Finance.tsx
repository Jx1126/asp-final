function Finance() {
  return (
    <div className="mt-10 mb-20 grid gap-10">
      <h1 className="text-3xl font-bold text-center text-blue-700">Yearly Summary</h1>
      <div className="flex justify-center">
        <div className="w-2/3 max-w-5xl bg-slate-200 border-slate-300 shadow-lg rounded-lg p-6">
          <div className="flex-col text-center   ">
            {yearlyData.map((yearData) => (
              <YearItem key={yearData.year} data={yearData} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Finance;