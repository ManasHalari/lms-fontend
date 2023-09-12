import aboutMainImage from "../Assets/Images/aboutMainImage.png"
import Carousel from "../Components/Carousel.jsx"
import { celebreties } from "../Constants/CelebrityData"
import HomeLayout from "./HomeLayout.jsx"

function AboutUs() {

  return (
<HomeLayout>
    <div className="flex flex-col text-white pl-20 pt-20 w-full">
       <div className="flex items-center justify-center gap-5 mx-10">
            <section className="space-y-10 w-1/2 mr-5">
                <h1 className="text-5xl text-yellow-500 font-semibold">Affordable and quality Education</h1>
                <p className="text-xl text-gray-300">We are here to provide you a best Education in terms of real life skills and industrual knowlwdge with Affordable cost.</p>
            </section>
            <div className="w-1/2">
            <img src={aboutMainImage} alt="About us Image" className="w-[100%] drop-shadow-3xl" style={{filter:"drop-shadow(0,10px,10px,rgb(0,0,0))"}} />
            </div>
       </div>
       <div className="carousel w-1/2 my-16 m-auto">
        {celebreties && celebreties.map((celeberity)=> (<Carousel 
                                                         {...celeberity}
                                             key={celeberity.slideNumber}
                            totalSlides={celebreties.length}
                                                                    />))}
      </div>
      </div>
</HomeLayout>
  )
}

export default AboutUs