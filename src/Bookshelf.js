import React, { Component } from 'react';
import Book from './Book'

class Bookshelf extends Component {
   
   render() {
      const { title, books, id } = this.props;
      
      return (
         <section className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
               <ol className="books-grid">
                  {books.map((book) => (
                     <Book title={book.title} imageURL={book.imageLinks.smallThumbnail} authors={book.authors}/>
                  ))}}
               </ol>
            </div>
         </section>
      )
   }
}

export default Bookshelf;