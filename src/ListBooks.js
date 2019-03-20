import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'



class ListBooks extends Component {
  state = {
    bookshelfs: [
      {
        shelf: 'currentlyReading',
        title: 'Currently reading',
        books: []
      },
      {
        shelf: 'wantToRead',
        title: 'Want to read',
        books: []
      },
      {
        shelf: 'read',
        title: 'Read',
        books: []
      }
    ],
    allBooks: []
  }

  componentWillMount() {
    BooksAPI.getAll().then((arrBooks) => {
      this.setState({
        allBooks: arrBooks
      });
    })
  }

  render() {
      return (
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <div>
              {this.state.bookshelfs.map((bs) => (
                <Bookshelf 
                  key={bs.shelf}
                  title={bs.title} 
                  books={this.state.allBooks.filter((book) => book.shelf === bs.shelf)} 
                />
              ))}
            </div>
          </div>
          <div className="open-search">
            <Link to="/search"><button>Add a book</button></Link> 
          </div>
        </div>
      )
   }
}

export default ListBooks;