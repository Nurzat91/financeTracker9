import React, {useEffect, useState} from "react";
import Modal from "../../components/Modal/Modal";
import {GetCategories, SelectTypes} from "../../types";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {createCategory, deleteCategory, fetchCategory} from "../../store/category/categoryThunks";
import {
  deleteCategoriesLoading,
  getCategories,
  getCategoriesLoading,
  modalPostLoading
} from "../../store/category/categorySlice";
import Spinner from "../../components/Spinner/Spinner";
import {Link} from "react-router-dom";
import btnDelete from '../../assets/btnDelete.svg';
import btnEdit from '../../assets/btnEdit.svg';

const Categories = () => {
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);
  const [select, setSelect] = useState<SelectTypes>({
    type: '',
    name: '',
  });
  const modalLoading = useAppSelector(modalPostLoading);
  const getDatacategories = useAppSelector(getCategories);
  const loading = useAppSelector(getCategoriesLoading);
  const deleteLoading = useAppSelector(deleteCategoriesLoading);

  const changeDish = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSelect((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const saveSubmit = () => {
    dispatch(createCategory(select));
    setShowModal(false);
    setSelect({
      type: '',
      name: '',
    })
  };

  useEffect(() => {
    dispatch(fetchCategory());
  }, [dispatch]);

  const removeCategory = async (id: string) => {
    await dispatch(deleteCategory(id));
    await dispatch(fetchCategory());
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h3>Categories</h3>
        <button type="button" className="btn btn-light" onClick={() => setShowModal(true)}>Add</button>
      </div>
      <Modal show={showModal} title="Add categories">
        <div className="modal-body">
          <div>
            <label style={{width: "100px"}} htmlFor="name">Select page</label>
            <select
              name="type" required
              value={select.type}
              onChange={changeDish}
            >
              <option disabled value="">
                Тип категории
              </option>
              <option value="Income ">Income </option>
              <option value="Expense ">Expense </option>
            </select>
          </div>
          <div className="d-flex flex-row my-3">
            <label style={{width: "127px"}} htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              className="form-control"
              required
              value={select.name}
              onChange={changeDish}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-danger" onClick={() => setShowModal(false)}>Cancel</button>
          <button className="btn btn-success"
                  onClick={saveSubmit}
                  disabled={modalLoading || !select.name || !select.type}
          >Save</button>
        </div>
      </Modal>
      {loading ? <Spinner/> : getDatacategories.map((data: GetCategories) => (
        <div key={data.id} className="card p-2 my-3 d-flex flex-row align-items-center">
          <div className="w-50 ms-5 text-capitalize fs-5">{data.name}</div>
          <div className="w-25 fs-5 fw-semibold">{data.type}</div>
          <Link to={'/'} className="btn btn-light"><img src={btnEdit} alt="btn Edit" /></Link>
          <button
            type="button"
            className="btn btn-light mx-4"
            disabled={deleteLoading ? deleteLoading === data.id : false}
            onClick={() => removeCategory(data.id)}
          >
            {deleteLoading && deleteLoading === data.id && (<Spinner/>)}
            <img src={btnDelete} alt="btn Delete" />
          </button>
        </div>
      ))}
    </>
  );
};

export default Categories;