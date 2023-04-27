import { useContext } from 'react'
import Header from './components/Header/Header'
import { Outlet } from 'react-router-dom'
import { Authentication } from './context/AuthContext'

function Root() {
  const {loadding} = useContext(Authentication);
  if (loadding) {
    return <div className='loadder'><h1>Loadding...</h1></div>
}
  return (
    <div className="Root">
      <Header></Header>
      <Outlet></Outlet>
    </div>
  )
}

export default Root;
