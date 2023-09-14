
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom"

import HomeLayout from "../../Layouts/HomeLayout";


function CourseDescription() {
   const {state}=useLocation()
  const {role,data}=useSelector((state)=>state.auth)
   
  return (
    <HomeLayout>
        <div className="flex flex-col items-center justify-center gap-5 text-white min-h-[85vh]">
            <div className="grid grid-cols-2 gap-10 py-5 relative">
                    <div className="space-y-6">
                    <img src={state?.thumbnail?.secure_url} alt="thumbnail"
                    className="rounded shadow-md w-full h-64 object-cover"/>
                    
                    <div className="flex flex-col items-center justify-center">
                            <p className="font-semibold">
                                <span className="text-yellow-500 font-bold">
                                    Total number of Lectures:
                                </span>
                                {state?.numberOfLectures}
                            </p>
                            <p className="font-semibold">
                                <span className="text-yellow-500 font-bold">
                                    Instructor:
                                </span>
                                {state?.createdBy}
                            </p>
                    </div>
                    {
                        role==="ADMIN" || data?.subscription?.status=="ACTIVE"?(
                            <button className="bg-yellow-600 rounded-md text-xl w-full px-5 py-3 font-bold hover:bg-yellow-500 transition-all ease-in-out duration-300 ">
                                Watch Lectures
                            </button>
                        ):(
                            <button className="bg-yellow-600 rounded-md text-xl w-full px-5 py-3 font-bold hover:bg-yellow-500 transition-all ease-in-out duration-300 ">
                                Watch Lectures
                            </button>
                        )
                    }
                    
                    </div>
                    <div className="space-y-6">
                        <h1 className="text-yellow-600 text-3xl font-bold mt-5 text-center">
                            {state?.title}
                        </h1>
                        <p className="text-yellow-500">Course description:</p>
                        <p>{state?.description}</p>

                    </div>
                    
            </div>

        </div>
    </HomeLayout>
  )
}

export default CourseDescription