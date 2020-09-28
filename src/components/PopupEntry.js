import React, { Component } from 'react';

class PopapEntry extends Component {
    render() {
        return (
            <div style={{width: '100%', height: '100%', backgroundColor: 'rgb(0, 0, 0, 0.5)', 
            position: 'fixed', zIndex: '1'}} className='d-flex justify-content-center align-items-center'>
                <div className='popup popup_reg d-flex flex-column justify-content-around align-items-center'>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{position: 'absolute', 
                    top: '-35px', right: '-35px', cursor: 'pointer'}} onClick = {this.props.onClickClose}>
                        <path d="M22.3566 20L31.1781 28.8215L28.8211 31.1785L18.3497 20.7071C17.9592 20.3166 
                        17.9592 19.6834 18.3497 19.2929L28.8211 8.82147L31.1781 11.1785L22.3566 20Z" fill="white"/>
                        <path d="M18.1307 20L9.30919 28.8215L11.6662 31.1785L22.1376 20.7071C22.5281 20.3166 
                        22.5281 19.6834 22.1376 19.2929L11.6662 8.82147L9.30919 11.1785L18.1307 20Z" fill="white"/>
                    </svg>
                    <h2 className='popup__title'>Вход</h2>
                    <form className='form d-flex flex-column'>
                        <div className='form__item'>
                            <label>Email</label><br />
                            <input placeholder='Введите свою почту'></input>
                        </div>
                        <div className='form__item'>
                            <label>Пароль</label><br />
                            <input placeholder='Введите свой пароль'></input>
                        </div>
                        <button className='form__button align-self-center'>Войти</button>
                    </form>
                    <span>или<button onClick={this.props.onClick} className='popup__entry-button'>Зарегистрироваться</button></span>
                </div>
            </div>
        )
    }
}

export default PopapEntry;