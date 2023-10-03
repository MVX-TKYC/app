

import React from 'react';
import { createRoot } from "react-dom/client";
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Home from './pages/Home';
import Unlock from './pages/Unlock';
import { DappProvider } from '@multiversx/sdk-dapp/wrappers/DappProvider';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { routes } from './const.js'

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DappProvider environment="mainnet">
        <Routes>
          <Route path={routes.unlock} element={<Unlock />} />
          <Route path={routes.home} element={<Home />} />

          <Route path='*' element={<Home />} />
        </Routes>
      </DappProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
