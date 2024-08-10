import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from 'redux-persist/lib/storage'
import  contactReducer  from "./contacts/slice";
import filtersReducer from "./filters/slice";
import authReducer from './auth/slice'

const authPersistConfig = {
  key: 'auth-token',
    storage,
    whitelist: ['token']
}
 
const persistedAuthReducer = persistReducer(authPersistConfig, authReducer)

export const store = configureStore({
    reducer: {
        contacts: contactReducer, 
        filters: filtersReducer,
        auth: persistedAuthReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});


export const persistor = persistStore(store);


