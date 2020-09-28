import React, { Component } from 'react';

class Menu extends Component {

    render() {
        return (
            <nav>
                <ul className='menu d-flex justify-content-end align-items-baseline'>
                    <li className='menu__link mr-5'><a href="http://localhost:3000">Главная</a></li>
                    <li className='menu__button'><button onClick={this.props.onClick}>Регистрация</button></li>
                </ul>
            </nav>
        )
    }
}

export default Menu;