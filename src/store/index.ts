import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import TransactionDuck from './TransactionDuck';

const reducer = combineReducers({
  transactionList: TransactionDuck,
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ serializableCheck: false })],
});

export default store;