import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './Layout.jsx'
import Footer from './Component/Footer/Footer.jsx'
import Header from './Component/Header/Header.jsx'
import Todolist from './Component/Todolist/Todolist.jsx'
import Home from './Component/Home/Home.jsx'
import Github2 from './Component/Github2/Github2.jsx'
import { githubinfo } from './Component/Github2/Github2.jsx'
 
const router = createBrowserRouter([
   {
    path : "/",
    element : <Layout/>,
    children : [
      {
      path :"",
      element : <Home />
    },
    {
      path :"todolist",
      element : <Todolist />
    },
    {
      loader : githubinfo,
      path : "github",
      element : <Github2/>
    }
  ]
   }
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router = {router} />
  //</StrictMode>,
)
