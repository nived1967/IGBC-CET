import React from "react";
import ImageCarousel from "./ImageCarousel";
import '../styles/_events.scss';

function Events() {
    return (
        <div className="events-container" id="events">
            <div className="heading">
                <h1>EVENTS</h1>
            </div>
            <ImageCarousel />
        </div>
    )
}

export default Events;