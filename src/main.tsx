import React from 'react'
import {createRoot} from 'react-dom/client'
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom'

import Container from '@/routes/Container'
import store from '@/store/store.ts'

import '@/assets/styles/index.css'
import 'remixicon/fonts/remixicon.css'

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <BrowserRouter>
      <Provider store={store}>
        <Container />
      </Provider>
     </BrowserRouter>
  </React.StrictMode>,
)
