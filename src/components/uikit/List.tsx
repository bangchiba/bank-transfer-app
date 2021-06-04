import { Transaction, Status } from '../../types';

interface ListProps {
  value: Transaction;
}

const List = (props: ListProps) => {
  const { value } = props;

  return (
    <div className={`list ${value.status.toLocaleLowerCase()}`}>
      <div className="left">
        <p>{`${value.sender_bank} -> ${value.beneficiary_bank}`}</p>
        <p>{value.beneficiary_name}</p>
        <p>{value.amount}</p>
        <p>{value.completed_at}</p>
      </div>
      <div className="right">
        <span className="status">{Status[value.status]}</span>
      </div>
    </div>
  )
}

export default List;
