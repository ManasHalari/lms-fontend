import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import CourseCard from "../../Components/CourseCard.jsx"
import { getAllCourses } from "../../Redux/Slices/CourseSlice"

function CourseList() {
   const dispatch=useDispatch()
   const {courseData} = useSelector(state => state.course)

   async function loadCourses() {
    await dispatch(getAllCourses)
   }
   useEffect(()=>{
    loadCourses();
   },[])
  return (
    <div className="flex flex-col text-white pl-20 pt-20 gap-10 h-[90vh]">
            <h1 className="text-6xl text-center">
                Explore the Courses with &nbsp;
                <span className="font-bold text-yellow-500">Industry Experts</span>
            </h1>
            <div className="mt-10 flex flex-wrap gap-14">
                  {
                    courseData?.map((element)=>{
                      return <CourseCard key={element._id} data={element} />
                    })
                  }
            </div>

        </div>
  )
}

export default CourseList