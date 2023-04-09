import React from 'react'
import ReactDOM from 'react-dom/client'
import Shop from './components/Shop/Shop';
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Root';
import Cart from './components/Cart/MiniCart';

const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      errorElement: '',
      children: [
        {
          path: '/',
          element: <Shop></Shop>
        },
        {
          path: '/cart',
          element: <Cart></Cart>
        }
      ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
