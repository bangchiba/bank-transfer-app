/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List } from '../../uikit';
import { storeBankTransfer, getBankTransferState } from '../../../store/TransactionDuck';
import { Store, TransactionList, Transaction as TransactionProps } from '../../../types';
import { currency } from '../../../helper';

interface Props {
  transactionList: TransactionList;
  history: any;
  location: any;
  match: any;
  staticContext: any
  storeBankTransferAction: any;
}

const Transaction = (props: Props) => {
  const { storeBankTransferAction, transactionList } = props;
  const [totalAmount, setTotalAmout] = useState<number>(0);

  const getBankTransfer = async() => {
    try {
      const { data } = await axios.get('https://nextar.flip.id/frontend-test');
      const arrData:TransactionList  = Object.keys(data).map((key) => data[key]);
      storeBankTransferAction(arrData);
    } catch (error) {
      console.log(error)
    }
  }

  const getTotalAmount = () => {
    const total = transactionList.reduce((total, each) => {
      return total + each.amount;
    },0)
    setTotalAmout(total)
  }

  const changeFilter = (e: any) => {
    // TODO
  }
  
  useEffect(() => {
    if (transactionList.length === 0) {
      getBankTransfer();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  useEffect(() => {
    getTotalAmount();
  }, [transactionList])

  return (
    <div>
      <h1 className="title">Daftar Transaksi</h1>
      <div className="message">
        <h2>Halo Kak!</h2>
        <p>Kamu telah melakukan transaksi sebesar <span className="total-amount">{currency(totalAmount)}</span> sejak menggunakan flip</p>
      </div>
      <div className="box-filter">
        <input className="search" type="text" placeholder="Cari nama atau bank" />
        <select name="filter" onChange={(e) => changeFilter(e)}>
          <option>Urutkan</option>
          <option value="name_asc">Nama A-Z</option>
          <option value="name_desc">Nama Z-A</option>
          <option value="date_asc">Tanggal Terbaru</option>
          <option value="date_desc">Tanggal Terlama</option>
        </select>
      </div>
      {transactionList.length > 0 && (
        transactionList.map((each: TransactionProps) => {
          return <List key={each.id} value={each} />;
        })
      )}
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators(
    {
      storeBankTransferAction: storeBankTransfer,
    },
    dispatch
  )
}

const mapStateToProps = (state: Store) => ({
  transactionList: getBankTransferState(state.transactionList)
})

export default connect(mapStateToProps, mapDispatchToProps)(Transaction);
