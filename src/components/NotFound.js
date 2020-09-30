import React from 'react';
import nf from '../images/not-found.png';

class NotFound extends React.Component {
    render() {
        return (
            <div className='not-found pt-5 pb-5'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-4 d-flex flex-column align-items-center m-auto'>
                            <img className='mb-4' alt='Упс!' src={nf}></img>
                            <h2 className='not-found__title text-center mb-3'>Ничего не найдено</h2>
                            <h3 className='not-found__subtitle text-center mb-3'>К сожалению по вашему запросу ничего не найдено.</h3>
                        </div>
                    </div>
                </div>
            </div> 
        )
    }
}

export default NotFound;