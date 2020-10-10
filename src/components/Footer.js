import React, {Component} from 'react';
import fb from '../images/fb.png';
import gh from '../images/github.png'

class Footer extends Component {
    render() {
        return (
            <div className='footer'>
                <div className='container mb-5'>
                    <div className='row'>
                        <div className='col-5'>
                            <p className='footer__news-api'>&copy; 2020 Supersite, Powered by News API</p>
                        </div>
                        <div className='col-4 ml-auto'>
                            <ul className='d-flex ml-auto justify-content-center'>
                                <li className='footer__link'><a href='/'>Главная</a></li>
                                <li className='footer__link'><a href='/'>Яндекс.Практикум</a></li>
                                <li className='footer__sign'><a href='/'><img src={ fb } alt='Значок'></img></a></li>
                                <li className='footer__sign'><a href='/'><img src={ gh } alt='Значок'></img></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer; 