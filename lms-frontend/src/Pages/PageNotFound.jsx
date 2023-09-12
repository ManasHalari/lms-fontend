import { useNavigate } from "react-router-dom"


function PageNotFound() {
   const navigate=useNavigate()
  return (
    <div className="flex flex-col items-center justify-center bg-[#1A2238] h-screen w-full">
        <h1 className="text-white text-9xl tracking-widest">404</h1>
        <div className="absolute text-white rounded text-md rotate-12 bg-black">
            Page not found
        </div>
        <button className="mt-5 ">
            <a className="inline-block relative text-sm font-medium bg-gray-800 active:text-yellow-300 focus:outline-none focus:ring ">
                <span onClick={()=>navigate(-1)}  className="border-current relative block px-8 py-3 bg-white">
                    Go Back
                </span>
            </a>

        </button>

    </div>
  )
}

export default PageNotFound