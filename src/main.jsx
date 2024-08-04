import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ItemDetail from './components/PostDetail.jsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.jsx'
import PostDetail from './components/PostDetail.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }, {
    path: '/item/:id',
    element: <PostDetail />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>

  </React.StrictMode>,
)
