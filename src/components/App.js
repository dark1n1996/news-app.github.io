import React, {Component} from 'react';
import Header from './Header';
import SearchResults from './SearchResults';
import Author from './Author';
import Footer from './Footer';
import PopupReg from './PopupReg';
import PopupEntry from './PopupEntry';
import '../styles/normalize.css';
import 'bootstrap/dist/css/bootstrap.css';
import '../fonts/fonts.css';
import '../styles/style.css';

 class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      popapRegActive: false,
      popapEntryActive: false,
      keyWord: '',
      articles: [],
      preloader: false,
      status: '',
    }
  }
  render() {
    const popupReg = this.state.popapRegActive && <PopupReg onClickClose={ () => this.closePopups()} 
    onClick={ () => this.popupEntryActivate()}/>;
    const popupEntry = this.state.popapEntryActive && <PopupEntry onClickClose={() => this.closePopups()} 
    onClick={() => this.popupRegActivate()}/>;
    return (
      <div>
        {popupReg}
        {popupEntry}
        <Header onClick={ () => this.popupRegActivate()} 
        onChange={(event) => this.changeSearchValue(event)}
        keyWord={this.state.keyWord}
        onSubmit ={(event) => this.getArticles(event)} />
        <SearchResults articles={this.state.articles} 
        preloader={this.state.preloader}
        status={this.state.status} />
        <Author />
        <Footer />
      </div>
    );
  }

  // Данные функции обрабатывают открытие и закрытие попапа регистрации и входа в систему
  popupRegActivate() {
    this.setState({popapRegActive: true, popapEntryActive: false,})
  }

  popupEntryActivate() {
    this.setState({popapEntryActive: true, popapRegActive: false,})
  }

  closePopups() {
    this.setState({popapEntryActive: false, popapRegActive: false,})
  }

  changeSearchValue(event) {
    this.setState({keyWord: event.target.value})
  }

  getArticles(event) {
    event.preventDefault();
    console.log('Submit!')
    fetch(`https://nomoreparties.co/news/v2/everything?q=${this.state.keyWord}&so
      rtBy=publishedAt&pageSize=2&apiKey=b05767e2ad9f4d7cb8ee6cf778e5cfb4`)
      .then((data) => {
        this.setState({articles: null, preloader: true, status: ''});
        return data.json();
      })
      .then((data) => {
        let promise = new Promise((resolve, reject) => {
          setTimeout(() => resolve('Done'), 1000)
        });
        promise.then((res) => {
          this.setState({articles: data.articles, preloader: false, status: data.status});
        })
      })
    }
    
}

export default App;
