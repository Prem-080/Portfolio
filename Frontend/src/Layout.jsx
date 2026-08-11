import React from 'react'
import {Header, Footer, Home, About, Contact} from './components/index'
import { Outlet } from 'react-router-dom'
import HomePage from './pages/HomePage'

function Layout() {
  return (
    <div className='relative bg-background antialiased md:m-6 m-4 mt-0 md:mt-0 lg:m-20 lg:mt-0 lg:mb-0'>
      <Header />
      <main className=''>
        <HomePage/>
      </main>
      <Footer />
    </div>
  )
}

export default Layout