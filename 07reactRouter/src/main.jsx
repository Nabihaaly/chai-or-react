import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// These are tools from React Router to define routes and handle page navigation
import { createBrowserRouter, RouterProvider ,createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout'
import { Home, Contact, About,User, Github } from "./components/Index"

// Define the routes of your app ( array m daldein routes is main)
// const router = createBrowserRouter([
//   {
//     path:"/", //This route matches the homepage
//     element: <Layout/>, //Wrapper layout component that will render common UI (navbar/footer etc.)
//     children: [
//       // Add nested routes here (e.g. { path: "about", element: <About /> })
//       {path: "", element:<Home/> },
//       {path: "about", element:<About/> },
//       {path: "contact", element:<Contact/> }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route path='' element={<Home/>}/>
      {/* isko bh nested krskty hain aabout m hitesh path rkhke or about ko closing tag lgake */}
      <Route path='about' element={<About/>}/> 
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userId' element={<User/>}/>
      <Route path='github' element={<Github/>}></Route>
    </Route>
  )
) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* 🧭 RouterProvider(wrapper hai ye issy srf hmein router bnwana hota hai) uses the router we defined to manage navigation */}
    <RouterProvider router={router}/>  {/* ye routing ab manage krega */}
  </StrictMode>,
)
