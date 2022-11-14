import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import events from "./eventList";


function ImageCarousel(){
    const [current, setCurrent] = useState(0);
    const length = events.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(events) || events.length <= 0) {
        return null;
    }
    
    return (
        <div className='slider'>
            {events.map((slide, index) => {
                return (
                <div
                    className={index === current ? 'slide active' : 'slide inactive'}
                    key={index}
                >
                    <MdKeyboardArrowLeft style={{backgroundColor: "transparent", color: "white"}} className='left-arrow' onClick={prevSlide} />
                    <MdKeyboardArrowRight style={{backgroundColor: "transparent", color: "white"}} className='right-arrow' onClick={nextSlide} />
                    {index === current && (
                        <div className="gradient">
                            <img src={slide.image} alt=''/>
                            <div className="image-description">
                                <p>{slide.description}</p>
                                { slide.upcoming ? 
                                    <a href={slide.link} className="btn">
                                        Register
                                    </a> : null
                                }
                            </div>
                        </div>
                    )}
                </div>
                );
            })}
        </div>
    );
}

export default ImageCarousel;


// WEBPACK FOOTER //
// ./src/components/ImageCarousel.jsx