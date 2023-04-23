import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Component/Main/Main';
import Home from './Component/Home';
import Login from './Login';
import Register from './Component/Register';
import AuthProvider from './layout/AuthProvider';
import Orders from './Component/Orders';
import PrivateRoute from './Component/Routh/PrivateRoute';
import Profile from './Component/Profile';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:"/login",
        element:<Login/>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/orders",
        element:<PrivateRoute><Orders/></PrivateRoute>
      },
      {
        path:'/profile',
        element:<PrivateRoute><Profile/></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </React.StrictMode>,
)
