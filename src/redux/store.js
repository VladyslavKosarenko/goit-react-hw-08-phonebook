import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import contactsReducer from '../redux/reducers/contactsSlice';
import filterReducer from '../redux/reducers/filterSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts'],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
