import { RouteComponentProps, Link } from 'react-router-dom';
import { Status, Transaction  } from '../../../types';

type TransactionDetailProps = RouteComponentProps<{}, any, Transaction>

const TransactionDetail = (props: TransactionDetailProps) => {
  const { location: { state  }} = props;
  console.log('state', state)
  return (
    <div>
      <h1 className="title">Detail Transaksi</h1>

      <div className="card-header">
        <p>{`ID TRANSAKSI: #${state.id}`}</p>
        <span className="status">{Status[state.status]}</span>
      </div>

      <div className="card-detail">
        <ul>
          <li>
            <p>PENGIRIM</p>
            <p>{state.sender_bank}</p>
          </li>
          <li>
            <p>PENERIMA</p>
            <p>{state.beneficiary_bank}</p>
            <p>{state.account_number}</p>
            <p>{state.beneficiary_name}</p>
          </li>
          <li>
            <p>NOMINAL</p>
            <p>{state.amount}</p>
            <p>{`Kode Unik: ${state.unique_code}`}</p>
          </li>
          <li>
            <p>CATATAN</p>
            <p>{state.remark}</p>
          </li>
          <li>
            <p>WAKTU DIBUAT</p>
            <p>{state.created_at}</p>
          </li>
        </ul>
      </div>
      <Link to={'/'} className="button">Kembali</Link>
    </div>
  )
}

export default TransactionDetail;
