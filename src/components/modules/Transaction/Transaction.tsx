import { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List } from '../../uikit';
import { storeBankTransfer, getBankTransferState } from '../../../store/TransactionDuck';
import { Store, TransactionList, Transaction as TransactionProps } from '../../../types';

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
  console.log('props', props);

  const getBankTransfer = async() => {
    try {
      const { data } = await axios.get('https://nextar.flip.id/frontend-test');
      const arrData:TransactionList  = Object.keys(data).map((key) => data[key]);
      storeBankTransferAction(arrData);
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getBankTransfer();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <div>
      <h1 className="title">Daftar Transaksi</h1>
      <div className="message">
        <h2>Halo Kak!</h2>
        <p>Kamu telah melakukan transaksi sebesar Rp. 5.000.000 sejak menggunakan flip</p>
      </div>
      <div className="box-filter">
        <input className="search" type="text" placeholder="Cari nama atau bank" />
        <select name="filter">
          <option>Urutkan</option>
          <option>Nama A-Z</option>
          <option>Nama Z-A</option>
          <option>Tanggal Terbaru</option>
          <option>Tanggal Terlama</option>
        </select>
      </div>
      {transactionList.length > 0 && (
        transactionList.map((each: TransactionProps) => <List key={each.id} value={each} />)
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
