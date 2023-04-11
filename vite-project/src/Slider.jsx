import React, { useEffect, useState } from 'react';
import { listOfCards } from './api/data';
import "./styles/slider.css"

const Slider = () => {
    const [visibleTop, setVisibleTop] = useState(0);
    const [visibleBehind, setVisibleBehind] = useState(3);
    const setNext = () => {
        setVisibleTop(visibleTop + 1);
        setVisibleBehind(visibleBehind + 1);
    }
    const setPrev = () => {
        setVisibleTop(visibleTop - 1);
        setVisibleBehind(visibleBehind - 1);
    }

    return (
        <div className='slider'>
            <div className="btns">
                <button className='btn' onClick={() => { setPrev() }}>Prev</button>
                <button className='btn' onClick={() => { setNext() }}>Next</button>
            </div>
            <div className='slider-cards'>
                {listOfCards.slice(visibleTop, visibleBehind).map((item, index) => {
                    return (
                        <div key={index} className="card" style={{ backgroundColor: item.color }}>
                            {item.title}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Slider