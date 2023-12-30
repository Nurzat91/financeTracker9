const Add = () => {
  return (
    <div className="card p-3">
      <form>
        <h4>Add Income/Expense</h4>
        <div className="form-group">
          <label htmlFor="name">Type</label>
          <input
            type="text"
            name="type"
            id="type"
            className="form-control"
            required
          />
        </div>
        <div className="form-group my-2">
          <label>Select page</label>
          <select
            name="select" required
          >
            <option value="" disabled>
              Время приема пищи:
            </option>
            <option value=""></option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="price">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            className="form-control"
            required
          />
        </div>

        {/*<button type="submit" className="btn btn-primary mt-2" disabled={isLoading}>*/}
        {/*  Cancel*/}
        {/*</button>*/}
        {/*<button type="submit" className="btn btn-primary mt-2" disabled={isLoading}>*/}
        {/*  Save*/}
        {/*</button>*/}
      </form>
    </div>
  );
};

export default Add;