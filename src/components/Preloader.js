import React from 'react';

export default function Preloader() {
    return (
        <div className='col-4 m-auto'>
            <div className="preloader">
                <i className="preloader__item"></i>
                <h3 className="preloader__text">Идет поиск новостей...</h3>
            </div>
        </div>
    )
}