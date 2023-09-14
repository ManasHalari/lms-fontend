import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"


function RequireAuth({authRoles}) {
   const {isLoggedIn,role}=useSelector((state)=>state.auth)
  return (
  <div>
    {
        isLoggedIn && authRoles.find((e)=>e==role)?
        (
            <Outlet/>
        ):
        (
            Navigate("/denied")
        )
    }
  </div>
  )
}

export default RequireAuth