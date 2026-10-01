import React from 'react'
import { Outlet } from 'react-router'

const DashBoardLayout = () => {
   return (
    <div>
        nav
        <Outlet/>
    </div>
  )
}

export default DashBoardLayout