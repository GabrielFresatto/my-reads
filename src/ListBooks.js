import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'



class ListBooks extends Component {
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
    // Prateleiras
    const bookshelfs = [
      {
        title: 'Currently reading',
        id: 'currentlyReading'
      },
      {
        title: 'Want to read',
        id: 'wantToRead'
      },
      {
        title: 'Read',
        id: 'read'
      }
    ];

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          {bookshelfs.map(bookshelf => (
            <Bookshelf 
              key={bookshelf.id} 
              bookshelf={bookshelf} 
              books={this.state.allBooks} 
              onUpdate={this.onUpdate}/>
          ))}
        </div>
        <div className="open-search">
          <Link to="/search"><button>Add a book</button></Link> 
        </div>
      </div>
    )
   }
}

export default ListBooks;