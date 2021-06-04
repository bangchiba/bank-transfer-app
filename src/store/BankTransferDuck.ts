import { createReducer, createAction } from '@reduxjs/toolkit';
import { BankTransferList } from '../types';

export interface BankTransferInitialState {
  bankTransferList: BankTransferList;
}

export const initialState: BankTransferInitialState = {
  bankTransferList: [] as BankTransferList,
};

const STORE_BANK_TRANSFER = 'STORE_BANK_TRANSFER';

export const getBankTransferState: (state: any) => BankTransferList = (
  state: BankTransferInitialState
) => state.bankTransferList;

export const storeBankTransfer = createAction(
  STORE_BANK_TRANSFER,
  (payload: BankTransferList) => ({
    payload: [ ...payload ],
  })
);

export default createReducer(initialState, {
  [STORE_BANK_TRANSFER]: (state, action) => {
    state.bankTransferList = action.payload;
  },
});