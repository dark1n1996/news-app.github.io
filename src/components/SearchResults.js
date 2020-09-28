import React, { Component } from 'react';
import CardsList from './CardsList'
import Preloader from './Preloader'

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    } 

    render() {
        const preloader = this.props.preloader && <Preloader />;
        const cardsList = this.props.articles && <CardsList articles={this.props.articles}/>;
        return (
            <div className='search-results'>
                <div className='container'>
                    <div className='row'>
                        {preloader}
                    </div>
                </div>
                {cardsList}
            </div>
        )
    }
}

export default SearchResults;