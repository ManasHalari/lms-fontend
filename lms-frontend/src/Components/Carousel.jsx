

function Carousel({image,title,description,slideNumber,totalSlides}) {
  return (
    <div id={`slide${slideNumber}`} className="carousel-item relative w-full">
  <div className="flex flex-col items-center justify-center px-6 gap-4 mx-auto w-[80%]">
    <img src={image} className="w-[50%] rounded-full border-3 mx-auto border-white" />
    <h3 className="text-3xl">{title}</h3>
    
    <p className="text-xl">{description} </p>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
       <a href={`#slide${(slideNumber == 1 ? totalSlides : (slideNumber - 1))}`} className="btn btn-circle">❮</a> 
        <a href={`#slide${(slideNumber) % totalSlides + 1}`} className="btn btn-circle">❯</a>
    </div>
    </div>
  );
}

export default Carousel