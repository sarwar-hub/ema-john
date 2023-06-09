import React from 'react'
import ReactDOM from 'react-dom/client'
import Shop from './components/Shop/Shop';
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from './Root';
import Cart from './components/Cart/Cart';
import cartProducts from './loader/cartProducts';
import Checkout from './components/Checkout/Checkout';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import AuthContext from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';
import Orders from './components/Orders/Orders';

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
          path: 'shop',
          element: <Shop></Shop>
        },
        {
          path: 'cart',
          element: <Cart></Cart>,
          loader:() => cartProducts()
        },
        {
          path: 'checkout',
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
        },
        {
          path: 'register',
          element: <Register></Register>
        },
        {
        path: 'login',
        element: <Login></Login>
        },
        {
          path: 'orders',
          element: <PrivateRoute><Orders></Orders></PrivateRoute>
        }
      ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContext>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext>
  </React.StrictMode>,
)
