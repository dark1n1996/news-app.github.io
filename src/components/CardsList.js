import React, {Component} from 'react';
import Card from './Card';
import SearchButton from './SearchButton';

class CardsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            clicks: 1,
            arrayOfArticles: [this.props.articles[0], this.props.articles[1], this.props.articles[2]],
        }
    }
    pushArticles() {
        let articles = this.props.articles;
        let clicks = this.state.clicks;
        let arrayOfArticles = this.state.arrayOfArticles;   
        for(let i = this.state.clicks * 3; i <= 2 + this.state.clicks * 3; i++) {
            arrayOfArticles.push(articles[i]);
            this.setState({arrayOfArticles: arrayOfArticles});   
        }
        this.setState({clicks: ++clicks});

        console.log(this.state.arrayOfArticles)
    }
    render() {
        let arrayOfArticles = this.state.arrayOfArticles.map((article) => article = <Card article={article}/>)
        let searchButton;
        if(this.props.articles.length <= 3) {
            searchButton = null;
        } else {
            searchButton = <SearchButton onClick={() => this.pushArticles()} />
        }
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-5'>
                        <h2 className='search-results__title'>Результаты поиска</h2>
                    </div>
                </div>
                <div className='row'>
                    {arrayOfArticles}
                </div>
                <div className='row'>
                    {searchButton}
                </div>
            </div>
        )
    }
}

export default CardsList;