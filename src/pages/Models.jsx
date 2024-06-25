import React from 'react'
import HeroPage from "../components/HeroPage";
import { CAR_DATA } from "../components/CarData";

const Models = () => {
  return (
    <>
        <section className='models-section'>
            <HeroPage name={"Vehicles Models"}/>
            <div className="container">
                <div className="models-div">
                    {CAR_DATA.map((car,index) => (
                        <div className="car-box" key={index}>
                            <img src={car.img} alt='car_img' />
                            <h3>{car.name}</h3>
                                <div className='car-data'> 
                                    <span> {car.year}</span>
                                    <span>{car.doors}</span>
                                    <span> {car.transmission}</span>
                                </div>
                             <button className="book-btn">
                                BOOK NOW
                            </button>   
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default Models