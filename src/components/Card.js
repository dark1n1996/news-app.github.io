import React, {Component} from 'react';

class Card extends Component {
    render() {
        if(this.props.article) {
            return (
            <div className='col-4'>
                <div className='card'>
                    <div className='card__img' style={{backgroundImage: `url(${this.props.article.urlToImage})`}}>
                        <button className='card__button'></button>
                    </div>
                    <h4 className='card__date'>{this.props.article.publishedAt}</h4>
                    <h2 className='card__title'>{this.props.article.title}</h2>
                    <p className='card__text'>{this.props.article.description}</p>
                    <h4 className='card__source'>{this.props.article.source.name}</h4>
                </div>
            </div>
            )
        } else {
            return null;
        }
        
    }
}

export default Card;