import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css';
import SearchBook from './SearchBook';
import ListBooks from './ListBooks';
import { Route } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'


class BooksApp extends React.Component {
  state = {
    // Array of objects book
    allBooks: []
  }

  componentWillMount() {
    BooksAPI.getAll().then((arrBooks) => {
      this.setState({
        allBooks: arrBooks
      });
    })
  }

  onUpdate = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(() => {
      // Atualizando a prateleira do livro
      book.shelf = shelf;
      this.setState((state) => ({
        // Removo o livro com a prateleira antiga e adiciono o novo livro
        // com a prateleira atualizada (etapa acima).
        allBooks: state.allBooks.filter(b => b.id !== book.id).concat(book)
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <ListBooks allBooks={this.state.allBooks} onUpdate={this.onUpdate}/>}/>
        <Route exact path="/search" render={() => <SearchBook onUpdate={this.onUpdate}/>}/>
      </div>
    )
  }
}

export default BooksApp
