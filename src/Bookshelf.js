import React, { Component } from 'react';
import Book from './Book'

class Bookshelf extends Component {

   render() {
      const { bookshelf, books, onUpdate } = this.props;
      return (
         <section className="bookshelf">
            <h2 className="bookshelf-title">{bookshelf.title}</h2>
            <div className="bookshelf-books">
               <ol className="books-grid">
                  {books.map((book) => {
                     if (book.shelf === bookshelf.id)
                        return(<Book key={book.id} book={book} shelf={book.shelf} onUpdate={onUpdate}/>)
                  })}
               </ol>
            </div>
         </section>
      )
   }
}

export default Bookshelf;
