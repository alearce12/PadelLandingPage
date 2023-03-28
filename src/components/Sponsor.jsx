import React, {useState, useEffect} from 'react'
//images
import greenimg from '../assets/dark-green-739780.jpg'
import vtk from '../assets/logo-vitnik.svg'
import rossetti from '../assets/Rossetti-logo-footer.png'

const images = [vtk, rossetti]

function Sponsor() {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentSlide((currentSlide + 1) % images.length);
        }, 1500);
        return () => clearInterval(interval);
    }, [currentSlide]);

  return (
    <div style={{backgroundImage:`url(${greenimg})`}} className='w-full h-[100px] bg-center bg-no-repeat bg-cover mt-5 flex justify-center items-center '>
        <img
        className="w-[150px] h-12 object-contain"
        src={images[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
      />
    </div>
  )
}

export default Sponsor