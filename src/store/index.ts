import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import bankTransferDuck from './BankTransferDuck';

const reducer = combineReducers({
  bankTransferList: bankTransferDuck,
});

const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ serializableCheck: false })],
});

export default store;