import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBook extends Component {
  state = {
    query: '',
    newBooks: [],
    err: false
  }

  searchBooks = (evt) => {
    let query = evt.target.value;
    this.setState({ query: query });
    
    if(query) {
      BooksAPI.search(query).then(books => {
        if(books.length > 0) {
          this.setState({ newBooks:books, err: false})
        } else {
          this.setState({ newBooks:[], err: true })
        }
      })
    }
  }

  render() {
    const { query, newBooks, err } = this.state;

      return (
         <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                <input type="text" value={query} onChange={this.searchBooks} placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {/* {newBooks.length > 0 &&
                  newBooks.map((book) => (
                    <Book book={book} key={book.id} onUpdate={''}/>
                  )) */}
                
              </ol>
            </div>
          </div>
      )
   }
}

export default SearchBook;