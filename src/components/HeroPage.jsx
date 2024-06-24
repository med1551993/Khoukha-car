import React from 'react'
import {Link} from "react-router-dom"

const HeroPage = ({name}) => {
  return (
    <>
        <section className='hero-page'>
            <div className="hero-page-overlay"></div>
            <div className="container">
                <div className="hero-page-text">
                    <h3>{name}</h3>
                    <p>
                        <Link to='/'>Home</Link> / {name}
                    </p>
                </div>
            </div>
        </section>
    </>
  )
}

export default HeroPage