import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


function RequireAuth({authRoles}) {
   const {isLoggedIn,role}=useSelector((state)=>state.auth)
  return (
  <div>
    {
        isLoggedIn && authRoles.find((e)=>e===role)?
        (
            <Outlet/>
        ):
        (
          isLoggedIn?<Navigate to="/denied"/>:<Navigate to="/login"/>
        )
    }
  </div>
  )
}

export default RequireAuth