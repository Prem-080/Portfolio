import React from 'react'
import {Header, Footer, Home, About, Contact} from './components/index'
import { Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage'

function Layout() {
  return (
    <div className='relative bg-background antialiased m-25 mt-0'>
      <Header />
      <main className=''>
        <HomePage/>
      </main>
      <Footer />
    </div>
  )
}

export default Layout