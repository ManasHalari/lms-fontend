import aboutMainImage from "../Assets/Images/aboutMainImage.png"
import apj from "../Assets/Images/apj.png"
import billGates from "../Assets/Images/billGates.png"
import einstein from "../Assets/Images/einstein.png"
import nelsoMandela from "../Assets/Images/nelsonMandela.png"
import steveJobs from "../Assets/Images/steveJobs.png"
import HomeLayout from "./HomeLayout"

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
  <div id="slide1" className="carousel-item relative w-full">
  <div className="flex flex-col items-center justify-center px-6 gap-4 mx-auto w-[80%]">
    <img src={apj} className="w-[50%] rounded-full border-3 mx-auto border-white" />
    <h3 className="text-3xl">APJ Abdul Kalam</h3>
    <p className="text-xl">Education is the key of Success.</p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide5" className="btn btn-circle  ">❮</a> 
      <a href="#slide2" className="btn btn-circle ">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <div className="flex flex-col items-center justify-center px-6 gap-4 mx-auto w-[80%]">
    <img src={nelsoMandela} className="w-[50%] rounded-full border-3 mx-auto border-white" />
    <h3 className="text-3xl">Nelson Mandela</h3>
    <p className="text-xl">Equal Human rights must be for everyone.</p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <div className="flex flex-col items-center justify-center px-6 gap-4 mx-auto w-[80%]">
    <img src={einstein} className="w-[50%] rounded-full border-3 mx-auto border-white" />
    <h3 className="text-3xl">Einstein</h3>
    <span className="text-2xl ">E=mc<sup>2</sup></span>
    <p className="text-xl">  Mass can be converted into Energy and Energy can be converted into mass.</p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle mr-3">❮</a> 
      <a href="#slide4" className="btn btn-circle ml-3">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <div className="flex flex-col items-center justify-center px-6 gap-4 mx-auto w-[80%]">
    <img src={billGates} className="w-[50%] rounded-full border-3 mx-auto border-white" />
    <h3 className="text-3xl">Bill Gates</h3>
    <p className="text-xl">Technology can make human life more easier.</p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide5" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" className="carousel-item relative w-full">
  <div className="flex flex-col items-center justify-center px-6 gap-4 mx-auto w-[80%]">
    <img src={steveJobs} className="w-[50%] rounded-full border-3 mx-auto border-white" />
    <h3 className="text-3xl">Steve Jobs</h3>
    <p className="text-xl">Quality product is more important.</p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
</HomeLayout>
  )
}

export default AboutUs