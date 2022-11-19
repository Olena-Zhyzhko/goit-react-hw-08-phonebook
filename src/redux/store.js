import { configureStore } from "@reduxjs/toolkit";
import { contactReducer } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { authPersistReducer } from './auth/authSlice';
import {
    persistStore,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'

const store = configureStore({
    reducer: {
        auth: authPersistReducer,
        contacts: contactReducer,
        filter: filterReducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);
    
export {
    store,
    persistor
};

