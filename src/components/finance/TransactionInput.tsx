function TransactionInput() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-1/3">
          <div className="flex justify-center p-10">
            <input
              type="text"
              placeholder="Transaction Value"
              className="input input-bordered w-full max-w-xs"
            />
            <a className="btn btn-primary mx-2">Submit</a>
            <div className="form-control mx-8">
              <label className="label cursor-pointer">
                <span className="label-text">Income</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500"
                />
              </label>
            </div>
            <div className="form-control mx-8">
              <label className="label cursor-pointer">
                <span className="label-text">Expense</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-red-500"
                />
              </label>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TransactionInput;
