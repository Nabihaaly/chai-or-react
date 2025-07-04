import { useState } from 'react' 
import { Footer, Header } from "./components/Index"
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
  )
}


