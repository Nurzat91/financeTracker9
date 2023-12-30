import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Spinner from "../../components/Spinner/Spinner";
import { TransactionsTypes } from "../../types";
import { Link } from "react-router-dom";
import btnDelete from '../../assets/btnDelete.svg';
import btnEdit from '../../assets/btnEdit.svg';
import {deleteTransactions, fetchTransaction} from "../../store/Add/addThunks";
import {deleteLoadingTransactions, getLoading, getTransactions} from "../../store/Add/addSlice";
import dayjs from 'dayjs';

const Home = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector(getLoading);
  const getDataTransactions = useAppSelector(getTransactions);
  const deleteLoading = useAppSelector(deleteLoadingTransactions);

  useEffect(() => {
    dispatch(fetchTransaction());
  }, [dispatch]);

  const remove = async (id: string) => {
    await dispatch(deleteTransactions(id));
    await dispatch(fetchTransaction());
  };

  return (
    <div>
      <div>Total: KGS</div>
      {loading ? <Spinner /> : getDataTransactions.map((data: TransactionsTypes) => (
        <div key={data.id} className="card p-2 my-3 d-flex flex-row align-items-center">
          <div className="w-25">{dayjs(data.date).format('DD.MM.YYYY HH:mm:ss')}</div>
          <div className="w-50 ms-5 text-capitalize fs-5">{data.category}</div>
          <div className="w-25">{data.type === 'Income' ? `+${data.amount}` : `-${data.amount}`}</div>
          <Link to={'/'} className="btn btn-light"><img src={btnEdit} alt="btn Edit" /></Link>
          <button
            type="button"
            className="btn btn-light mx-4"
            onClick={() => remove(data.id)}
          >
            {deleteLoading && deleteLoading === data.id && (<Spinner/>)}
            <img src={btnDelete} alt="btn Delete" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;
