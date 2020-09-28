import React, { Component } from 'react';

class SearchForm extends Component {
    render() {
        return (
            <form className='search-form mt-4' onSubmit={this.props.onSubmit}>
                <input value={this.props.keyWord} onChange={(event) => this.props.onChange(event)} className='search-form__input' placeholder='Введите тему новости'></input>
                <button className='search-form__button'>Искать</button>
            </form>
        )
    }
}

export default SearchForm;