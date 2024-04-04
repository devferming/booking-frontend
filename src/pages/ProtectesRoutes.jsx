import { Navigate, Outlet } from "react-router-dom"

const ProtectesRoutes = () => {

  if (localStorage.getItem('token')) {
    return <Outlet />
  } else {
    return <Navigate to='/' />
  }
  
}

export default ProtectesRoutes