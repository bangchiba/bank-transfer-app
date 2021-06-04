import { createReducer, createAction } from '@reduxjs/toolkit';
import { TransactionList } from '../types';

export interface BankTransferInitialState {
  transactionList: TransactionList;
}

export const initialState: BankTransferInitialState = {
  transactionList: [] as TransactionList,
};

const STORE_BANK_TRANSFER = 'STORE_BANK_TRANSFER';

export const getBankTransferState: (state: any) => TransactionList = (
  state: BankTransferInitialState
) => state.transactionList;

export const storeBankTransfer = createAction(
  STORE_BANK_TRANSFER,
  (payload: TransactionList) => ({
    payload: [ ...payload ],
  })
);

export default createReducer(initialState, {
  [STORE_BANK_TRANSFER]: (state, action) => {
    state.transactionList = action.payload;
  },
});