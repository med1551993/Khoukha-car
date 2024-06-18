import React, { useEffect, useState } from 'react'
import HeroCar from "../images/hero/main-car.png"
import { Link } from 'react-router-dom'
import { RiCompassDiscoverLine } from "react-icons/ri";
import { CiCircleMore } from "react-icons/ci";
import { RxDoubleArrowUp } from "react-icons/rx";

const Hero = () => {
    const [goUp, setGoUp] = useState(false)

    const scrollUp =() =>{
        window.scrollTo({top:(0,0), behavior:"smooth"})
    }

    useEffect(() => {
        const onPageScroll = () => {
          if (window.pageYOffset > 600) {
            setGoUp(true);
          } else {
            setGoUp(false);
          }
        };
        window.addEventListener("scroll", onPageScroll);
    
        return () => {
          window.removeEventListener("scroll", onPageScroll);
        };
      }, []);

  return (
    <>
        <section id='home' className='hero-section'>
            <div className="container">
                <div className='hero-content'>
                    <div className="hero-content-text">
                        <h4>Plan your trip now</h4>
                        <h1><span>Easy</span> and fast way to rent a car </h1>
                        <p>
                            Rent the car of your dreams. Unbeatable prices, unlimited miles,
                            flexible pick-up options and much more.
                        </p>
                        <div className="hero-content-btns">
                            <Link to="/" className="hero-content-btn-book-ride">
                            Book Ride &nbsp; <RiCompassDiscoverLine size={30}/>
                            </Link>
                            <Link to="/" className="hero-content-btn-learn-more">
                            Learn More &nbsp; <CiCircleMore size={30}/> 
                            </Link>

                        </div>
                    </div>
                    <img src={HeroCar} alt="car-img" className='hero-content-img'/>
                </div>
            </div>

            <div onClick={scrollUp} 
            className={`scrollUp ${goUp ? "showScrollUp" : ""}`}>
                <RxDoubleArrowUp size={70}/>
            </div>

        </section>
    </>
  )
}

export default Hero