import React, { Component } from 'react';
import CardsList from './CardsList';
import Preloader from './Preloader';
import NotFound from './NotFound';

class SearchResults extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    } 

    render() {
        const preloader = this.props.preloader && <Preloader />;
        let results;
        if(this.props.status === 'ok') {
            results = this.props.articles.length === 0 ? <NotFound /> : <CardsList articles={this.props.articles}/>;
        }
        return (
            <div className='search-results'>
                {preloader}
                {results}
            </div>
        )
    }
}

export default SearchResults;