import { useNavigate } from "react-router-dom"


function Denied() {
   const navigate=useNavigate()
  return (
    <div className="flex flex-col justify-center items-center text-white h-screen w-full bg-[#1A2238] ">
        <h1 className="text-9xl font-extrabold">
            404
        </h1>
        <div className="absolute bg-black text-white px-2 py-1 text-sm rotate-12">
            Access Denied
        </div>
        <button className="mt-7 bg-[#1A2238] " onClick={()=>navigate(-1)}>
            <span className=" border border-current px-5 py-3" >Go back</span>
        </button>
    </div>
  )
}

export default Denied