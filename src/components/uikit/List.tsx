import { Link } from 'react-router-dom';
import { currency, showBankName } from '../../helper';
import { Transaction, Status } from '../../types';

interface ListProps {
  value: Transaction;
}

const List = (props: ListProps) => {
  const { value } = props;

  const date = new Date(value.completed_at);
  const completeDate = date.toLocaleString('id-ID', { dateStyle: 'medium'})

  return (
    <Link to={{
      pathname: '/detail',
      state: { ...value }
    }}>
      <div className={`list ${value.status.toLocaleLowerCase()}`}>
        <div className="left">
          <p>{`${showBankName(value.sender_bank)} -> ${showBankName(value.beneficiary_bank)}`}</p>
          <p className="name">{value.beneficiary_name}</p>
          <div className="amount">
            <p>{currency(value.amount)}</p>
            <div className="dot"/>
            <p>{completeDate}</p>
          </div>
        </div>
        <div className="right">
          <span className="status">{Status[value.status]}</span>
        </div>
      </div>
    </Link>
  )
}

export default List;
