import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Bookshelf from './Bookshelf'

class ListBooks extends Component {
  render() {
    const { allBooks, onUpdate } = this.props;
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
              books={allBooks} 
              onUpdate={onUpdate}/>
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