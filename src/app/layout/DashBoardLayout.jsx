import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router'

const DashBoardLayout = () => {

  let {mode}= useSelector((store)=> store.theme);

  useEffect(()=>{
    if(mode==="light"){
    document.body.classList.add("light")
  }
  else{
    document.body.classList.remove("light")
  }
  },[mode])
   return (
    <div>
        nav
        <Outlet/>
    </div>
  )
}

export default DashBoardLayout