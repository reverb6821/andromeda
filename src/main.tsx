import * as React from 'react'
import * as ReactDOM from 'react-dom/client'
import { Provider } from "react-redux";
import { BrowserRouter } from 'react-router-dom'

import store from "@/store/store.ts";

import App from './App.tsx'
import '@/i18n/config.ts'
import './index.css'
import 'remixicon/fonts/remixicon.css'
import "/node_modules/flag-icons/css/flag-icons.min.css";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>,
    </BrowserRouter>
  </React.StrictMode>,
)
