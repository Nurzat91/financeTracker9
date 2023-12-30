
const Add = () => {
  return (
    <div className="card p-3">
      <form>
        <h4 className="my-3 border-bottom">Add Income/Expense</h4>
        <div className="form-group d-flex">
          <label style={{width: "99px"}} htmlFor="name">Type</label>
          <select
            name="type" required
            // value={select.type}
            // onChange={changeDish}
          >
            <option disabled value="">
              Тип категории
            </option>
            <option value="Income ">Income </option>
            <option value="Expense ">Expense </option>
          </select>
        </div>
        <div className="form-group my-3 d-flex">
          <label style={{width: "100px"}} htmlFor="name">Category</label>
          <select
            name="type" required
            // value={select.type}
            // onChange={changeDish}
          >
            <option disabled value="">
              Тип категории
            </option>
            <option value="Income ">Income </option>
            <option value="Expense ">Expense </option>
          </select>
        </div>
        <div className="form-group d-flex">
          <label style={{width: "113px"}} htmlFor="price">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            className="form-control"
            required
          />
          <span className="border rounded p-2">KGS</span>
        </div>
        <div className="d-flex justify-content-end mt-3">
          <button type="submit" className="btn btn-primary" >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary mx-3">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;