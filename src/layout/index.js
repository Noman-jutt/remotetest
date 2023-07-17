import React from 'react'
import Header from './header';
import './style.css'

const Layout = ({children}) => {
  return (
    <div className="layout">
    {/* header */}
    <Header/>
    {/* pages */}
      {children}
      {/* footer */}
    </div>
    
  )
}

export default Layout
