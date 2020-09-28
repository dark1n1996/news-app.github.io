import React, { Component } from 'react';

class SearchButton extends Component {
    render() {
        return (
            <div className='col-4 d-flex m-auto justify-content-center'>
                <button onClick={this.props.onClick} className='search-results__show-more'>Показать еще</button>
            </div>
        )
    }
}

export default SearchButton;