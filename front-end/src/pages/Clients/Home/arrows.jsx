import React from 'react';

export default function Arrows({ prevSlide, nextSlide }) {
    return (
        <>
            <div className="arrows arrow_prev" onClick={prevSlide}>
                <span className="prev">
                    &#10094;
                </span>
            </div>
            <div className='arrows arrow_next' onClick={nextSlide}>
                <span className="next">
                    &#10095;
                </span>
            </div>
        </>

    )
}
