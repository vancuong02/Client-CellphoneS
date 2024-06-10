<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "antd/dist/antd.css";
import "leaflet/dist/leaflet.css";

import "./index.css";
import App from "./App";
import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>,
    document.getElementById("root")
);
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import store from './store'
import "antd/dist/antd.css";
import "leaflet/dist/leaflet.css";

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

>>>>>>> a0e4353579f6cb22e693e110f78edb9f9e799c41
