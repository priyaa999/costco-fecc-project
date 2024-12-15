import { useEffect, useState } from 'react';
import LayoutOfPage from './webStructure';
import '/src/CSS/mainStucture.css'


function ProductsOfPage() {

    const images = [
        '/images/slider-1.png',
        '/images/slider-2.png',
        '/images/slider-3.png',
        '/images/slider-4.png',
        '/images/slider-5.png',
        '/images/slider-6.png',
        '/images/slider-7.png',
        '/images/slider-8.png'

    ]

    const [currentIndex, setCurrentIndex] = useState(0);
//crousel
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
        }, 3000);
        //In this line of code I'll append slider circular coz whenever the image goes to 
        // last image it'll immediately starts with first that's why i write a logic here 
        return () => clearInterval(intervalId)
    }, [images.length])

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    };
    //In this line I'll wrap a preveious index ,Whenever the last image
    // 8 is equall to the images.length then the calculation is 8 % 8 = 0.
    // then it starts to the 1 st image...
    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }
    //(prevIndex - 1 + images.length)ensures the calculation doesn’t result in a negative index when going backward.
    //% images.length ensures the index wraps back to the last slide after reaching the first image.
    return (

        <>
            <LayoutOfPage />
            <main id='banners'>
                <div className='banner-1'>
                    <img src="images/banner.png" alt="" />
                </div>
                <h1>FOUR NEW DEALS ADDED DAILY!</h1>
                <div>
                    <div className='banner-2'>
                        <img src="images/banner-2.png" alt="" />
                    </div>
                    <div className='banner-3'>
                        <img src="images/banner-3.png" alt="" />
                    </div>
                    <div className='banner-4'>
                        <img src="images/banner-4.png" alt="" />
                        <img src="images/banner-5.png" alt="" />
                    </div>
                    <div className='banner-6'>
                        <img src="images/banner-6.png" alt="" />
                        <img src="images/banner-6-2.png" alt="" />
                        <img src="images/banner-6-3.png" alt="" />
                    </div>
                    <div className='banner-7'>
                        <img src="images/banner-7.png" alt="" />
                    </div>
                    <div className='banner-8'>
                        <img src="images/banner-8-1.png" alt="" />
                        <img src="images/banner-8-2.png" alt="" />
                    </div>
                    <div id='slider'>
                        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />

                        <button className='prev' onClick={prevSlide}>
                            &#10094;
                        </button>
                        <button className='next' onClick={nextSlide}>
                            &#10095;
                        </button>
                    </div>
                </div>
            </main>

        </>
    )
}

export default ProductsOfPage;