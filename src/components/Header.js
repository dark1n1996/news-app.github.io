import React, { Component } from 'react';
import Menu from './Menu';
import SearchForm from './SearchForm';

class Header extends Component {
    render() {
        return (
            <header className='header'>
                <div className='container'>
                    <div className='row align-items-baseline border-light border-bottom'>
                        <div className='col-2 text-left py-5'>
                            <h1 className='header__logo'>NewsExplorer</h1>
                        </div>
                        <div className='col-3 ml-auto '>
                            <Menu onClick = { this.props.onClick }/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-6 m-auto'>
                           <h2 className='header__title '>Что в мире творится?</h2>
                           <h3 className='header__subtitle'>Находите самые свежие статьи на 
                            любую тему и сохраняйте в своём личном кабинете.</h3>
                        </div>   
                    </div>
                    <div className='row'>
                        <div className='col-6 m-auto'>
                            <SearchForm keyWord={this.props.keyWord} 
                            onChange={(event) => this.props.onChange(event)} 
                            onSubmit={(event) => this.props.onSubmit(event)} />
                        </div>
                    </div>
                </div>
            </header> 
        )
    }
}

export default Header;