import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { BrowserRouter } from 'react-router-dom';
import { BayerApp } from './BayerApp';
import { store } from "./store"
import './BayerApp.css';
import * as _Redux from './api';
import axios from 'axios';

const persistor = persistStore(store);
_Redux.endPoint(axios);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <PersistGate persistor={persistor}>
    <Provider store={store}>
      <BrowserRouter>
        <BayerApp />
      </BrowserRouter>
    </Provider>
  </PersistGate>
  // </React.StrictMode>
);

