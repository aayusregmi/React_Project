import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import Footer from './Component/Footer/Footer.jsx'
 
const router = createBrowserRouter([
   {
    path : "/",
    element : <Layout/>,
    children : [{
     path : "",
     element : ""
    },
    { path : "todolist",
      element : < ></>
    }
   

  ]
   }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
