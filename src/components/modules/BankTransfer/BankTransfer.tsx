import { useEffect } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { storeBankTransfer, getBankTransferState } from '../../../store/BankTransferDuck';
import { Store, BankTransferList, BankTransfer as BankTransferProps } from '../../../types';

interface Props {
  bankTransferList: BankTransferList;
  history: any;
  location: any;
  match: any;
  staticContext: any
  storeBankTransferAction: any;
}

const BankTransfer = (props: Props) => {
  const { storeBankTransferAction, bankTransferList } = props;
  console.log('props', props);

  const getBankTransfer = async() => {
    try {
      const { data } = await axios.get('https://nextar.flip.id/frontend-test');
      const arrData:BankTransferList  = Object.keys(data).map((key) => data[key]);
      storeBankTransferAction(arrData);
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(() => {
    getBankTransfer();
  },[])

  return (
    <div>
      <h1>bank transfer</h1>
      {bankTransferList.length > 0 && (
        bankTransferList.map((each: BankTransferProps) => {
          return <p key={each.id}>{each.id}</p>
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
  bankTransferList: getBankTransferState(state.bankTransferList)
})

export default connect(mapStateToProps, mapDispatchToProps)(BankTransfer);
