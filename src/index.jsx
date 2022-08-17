import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import './index.css'

import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Container } from '@mui/system'
import { Provider } from 'react-redux'

import store from './store'
import AppRoutes from './routes'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Container maxWidth='sm'>
          <AppRoutes />
        </Container>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
