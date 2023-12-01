import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';

// import { currentAccountApi } from "./apis/currentAccountApi";
import { authSlice } from "./auth";
import { bayerAppSlice } from "./bayerApp";
import { currentAccountListSlice } from "./bayerApp/currentAccountList";
import { uploadFilesSlice } from "./bayerApp/uploadFiles";
import { basicMasterSlice } from "./bayerApp/master";

// import thunk from 'redux-thunk';


const persistConfig = {
    key: 'store',
    storage,
    whitelist: ['auth'],
};

const reducers = combineReducers({
    auth: authSlice.reducer,
    bayerApp: bayerAppSlice.reducer,
    currentAccountList: currentAccountListSlice.reducer,
    uploadFiles: uploadFilesSlice.reducer,
    basicMaster: basicMasterSlice.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    // middleware: [thunk],
})

// export const store = configureStore({
//     reducer:{
//     auth: authSlice.reducer,
//     bayerApp: bayerAppSlice.reducer,
//     currentAccountList: currentAccountListSlice.reducer,
//     uploadFiles: uploadFilesSlice.reducer,

    // ////Es necesario para configurar RTK Query
    // // [currentAccountApi.reducerPath]: currentAccountApi.reducer,
    // },

    // ////"middleware es una funcion que se ejuta antes que otra" Es necesario para configurar RTK Query
    // // middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    // // .concat( currentAccountApi.middleware )
// })