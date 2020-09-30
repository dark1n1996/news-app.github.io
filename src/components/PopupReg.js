import React, { Component } from 'react';

class PopapReg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            name: '',
            passwordError: '',
            emailError: '',
            nameError: '',
            emailValid: false,
            passwordValid: false,
        }
    }
    onPasswordChange(event) {
        const password = event.target.value;
        this.setState({password: password});
        this.validatePassword(password);
    }
    onEmailChange(event) {
        const email = event.target.value;
        this.setState({email: email});
        this.validateEmail(email);
    }
    validatePassword(password) {
        if(password.length <= 8 && password.length > 0) {
            this.setState({passwordError: 'Пароль должен содержать более 8 символов', passwordValid: false})
        } else if(password.length === 0) {
            this.setState({passwordError: 'Необходимо ввести пароль', passwordValid: false})
        } else {
            this.setState({passwordError: '', passwordValid: true})
        }
    }
    validateEmail(email) {
        const regex = /^.+@.+\..+$/;
        if(!regex.test(email)) {
            this.setState({emailError: 'Введите почту в верном формате', emailValid: false})
        } else if(email.length === 0) {
            this.setState({emailError: 'Необходимо ввести почту', emailValid: false})
        } else {
            this.setState({emailError: '', emailValid: true})
        }
    }
    onNameChange(event) {
        const name = event.target.value;
        this.setState({name: name});
        this.validateName(name);
    }
    validateName(name) {
        if((name.length < 2 || name.length > 30) && name.length > 0) {
            this.setState({nameError: 'Имя должно содержать от 2 до 30 символов', nameValid: false})
        } else if(name.length === 0) {
            this.setState({nameError: 'Необходимо ввести имя', nameValid: false})
        } else {
            this.setState({nameError: '', nameValid: true})
        }
    }
    render() {
        let formValid = this.state.passwordValid*this.state.emailValid*this.state.nameValid;
        const backgroundColor = formValid ? '#2F71E5' : '#E6E8EB';
        const color = formValid ? '#FFFFFF' : '#B6BCBF';
        const formButton = !formValid ? true : false;
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
                    <h2 className='popup__title'>Регистрация</h2>
                    <form className='form d-flex flex-column'>
                        <div className='form__item'>
                            <label>Email</label><br />
                            <input value={this.state.email} onChange={(event) => this.onEmailChange(event)} placeholder='Введите свою почту'></input>
                            <label>{this.state.emailError}</label>
                        </div>
                        <div className='form__item'>
                            <label >Пароль</label><br />
                            <input value={this.state.password} onChange={(event) => this.onPasswordChange(event)} placeholder='Введите свой пароль'></input>
                            <label>{this.state.passwordError}</label>
                        </div>
                        <div className='form__item'>
                            <label>Имя</label><br />
                            <input value={this.state.name} onChange={(event) => this.onNameChange(event)} placeholder='Введите свое имя'></input>
                            <label>{this.state.nameError}</label>
                        </div>
                        <button disabled={formButton} style={{backgroundColor: backgroundColor, color: color}} className='form__button align-self-center'>Войти</button>
                    </form>
                    <span>или<button className='popup__entry-button' onClick={this.props.onClick}>Войти</button></span>
                </div>
            </div>
        )
    }
}

export default PopapReg;