import React from 'react'
import {Header, Footer, Home, About, Contact} from './components/index'
import { Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage'

function Layout() {
  return (
    <div className='relative bg-background antialiased mt-0 m-13 md:m-12 md:mt-0 lg:m-20 lg:mt-0'>
      <Header />
      <main className=''>
        <HomePage/>
      </main>
      <Footer />
    </div>
  )
}

export default Layout