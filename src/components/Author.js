import React, {Component} from 'react';

class Author extends Component {
    render() {
        return (
            <div className='author'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-5'>
                            <div className='author__img ml-auto mr-auto'></div>
                        </div>
                        <div className='col-6'>
                            <h2 className='author__title'>Об авторе</h2>
                            <p className='author__text'>Это блок с описанием автора проекта. Здесь следует указать, 
                            как вас зовут, чем вы занимаетесь, какими технологиями разработки владеете.</p>
                            <p className='author__text'>Также можно рассказать о процессе обучения в Практикуме, чему 
                            вы тут научились, и чем можете помочь потенциальным заказчикам.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Author;