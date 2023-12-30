import React, {useState} from "react";
import {AddSelect} from "../../types";
import {useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {createTransaction} from "../../store/Add/addThunks";
import {createLoading} from "../../store/Add/addSlice";
import dayjs from 'dayjs';

const Add = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const isLoading = useAppSelector(createLoading);
  const incomeCategories = ["salary", "bonus", "interest on deposits"];
  const expenseCategories = ["food", "taxi", "drinks", "relax"];
  const [select, setSelect] = useState<AddSelect>({
    date: dayjs().toISOString(),
    type: '',
    category: '',
    amount: '',
  });

  const now = new Date();
  const createdAt = now.toISOString();

  const selectCategories = () => {
    if (select.type === "Income ") {
      return (
        <select
          name="category"
          className="form-control"
          required
          value={select.category}
          onChange={changeCategory}
        >
          <option disabled value="">
            Тип категории
          </option>
          {incomeCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      );
    } else if (select.type === "Expense ") {
      return (
        <select
          name="category"
          className="form-control"
          required
          value={select.category}
          onChange={changeCategory}
        >
          <option disabled value="">
            Тип категории
          </option>
          {expenseCategories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      );
    } else {
      return null;
    }
  };

  const changeCategory = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSelect((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const saveSubmit = () => {
    dispatch(createTransaction(select));
    setSelect({
      date:dayjs().toISOString(),
      type: '',
      category: '',
      amount:'',
    })
    navigate('/')
  };

  return (
    <div className="card p-3">
      <form onSubmit={saveSubmit}>
        <h4 className="my-3 border-bottom">Add Income/Expense</h4>
        <div>Date:<span style={{margin: "5px 60px"}}>{dayjs(createdAt).format('DD.MM.YYYY HH:mm:ss')}</span></div>
        <div className="form-group d-flex mt-3">
          <label style={{width: "99px"}} htmlFor="name">Type</label>
          <select
            name="type" required
            value={select.type}
            onChange={changeCategory}
          >
            <option disabled value="">
              Тип категории
            </option>
            <option value="Income ">Income </option>
            <option value="Expense ">Expense </option>
          </select>
        </div>
        <div className="form-group my-3 d-flex">
          <label style={{width: "107px"}} htmlFor="name">Category</label>
          {selectCategories()}
        </div>
        <div className="form-group d-flex">
          <label style={{width: "113px"}} htmlFor="price">Amount</label>
          <input
            type="number"
            name="amount"
            id="amount"
            className="form-control"
            required
            value={select.amount}
            onChange={changeCategory}
          />
          <span className="border rounded p-2">KGS</span>
        </div>
        <div className="d-flex justify-content-end mt-3">
          <button type="submit" className="btn btn-primary" onClick={() => navigate('/')}>
            Cancel
          </button>
          <button type="submit" className="btn btn-primary mx-3"
                  disabled={isLoading || !select.category || !select.type}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;