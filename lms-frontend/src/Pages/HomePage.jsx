import { Link } from "react-router-dom"

import homePageImage from "../Assets/Images/homePageMainImage.png"
import HomeLayout from "../Layouts/HomeLayout.jsx"

function HomePage() {
  return (
    
    <HomeLayout>
         <div className="flex items-center justify-center pt-10 mx-10 mb-5 text-white gap-10 h-[90vh]">
                <div className="space-y-6 w-1/2 ">
                    <h1 className="text-5xl font-semibold mb-3">Find Out Best  <span className="text-yellow-500 font-bold ">Online Courses</span></h1>
                   
                    <p className="text-gray-300 text-xl mb-3">
                        We have a large library of courses including very skilles and experinced faculties with <span className="text-yellow-500 ">Affordable cost</span> 
                    </p>
                    <div>
                    <Link to="/courses">
                        <button className="bg-yellow-300 px-5 py-3 rounded-md font-semibold cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300 ">
                            Explore Courses
                        </button>
                    </Link>
                    <Link to="/contacts">
                        <button className="bg-black mx-5 px-5 py-3 rounded-md font-semibold cursor-pointer hover:bg-gray-600 transition-all ease-in-out duration-300 mt-5">
                             Contacts
                        </button>
                    </Link>
                    </div>
                
                 
                </div>
                <div className="w-1/2 space-y-6 flex items-center">
                    <img src={homePageImage} alt="Home page image" className="md:w-[100%] sm:h-[80%]"  />
                </div>
            </div>
    </HomeLayout>
       
           
       
    
  )
}

export default HomePage