import React from 'react';
import ReactDOM from 'react-dom/client';
// import {Provider} from "react-redux"

import App from './App';
import { Provider } from 'react-redux';
// import store from './utils/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   
    <Provider>
   
       <App />
      
      </Provider>
);


