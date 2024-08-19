function TransactionInput() {
  return (
    <>
      <div className="w-1/2 flex flex-col justify-between">
        <div>
          <input
            type="text"
            placeholder="Transaction Value"
            className="input input-bordered w-full max-w-xs"
          />
          <a className="btn btn-primary">Submit</a>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer">
            <span className="label-text">Income</span>
            <input
              type="radio"
              name="radio-10"
              className="radio checked:bg-blue-500"
            />
          </label>
        </div>
        <div className="form-control">
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
    </>
  );
}

export default TransactionInput;
