import React from 'react';
import nf from '../images/not-found.png';

class NotFound extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-4 d-flex flex-column align-items-center m-auto'>
                        <img alt='Упс!' src={nf}></img>
                        <h2 className='text-center'>Ничего не найдено</h2>
                        <h3 className='text-center'>К сожалению по вашему запросу ничего не найдено.</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound;