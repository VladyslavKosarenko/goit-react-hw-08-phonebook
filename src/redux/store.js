import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage/session';
import contactsReducer from '../redux/reducers/contactsSlice';
import filterReducer from '../redux/reducers/filterSlice';
import userReducer from '../redux/reducers/userSlice'; //

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts', 'user'],
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});
