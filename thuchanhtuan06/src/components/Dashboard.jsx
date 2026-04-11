import React from 'react'
import { Outlet } from 'react-router-dom'
function Dashboard() {
  return (
    <h3>This is Dashboard page
        <Outlet/>
    </h3>
    
  )
}

export default Dashboard