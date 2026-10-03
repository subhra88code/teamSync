import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '../../../../shared/state/themeSlice'
const Home = () => {

  let dispatch = useDispatch()

  return (
    <div>
      <div>Home</div>
    <button onClick={()=> dispatch(toggleTheme())}>Change Theme</button>
    </div>
  )
}

export default Home