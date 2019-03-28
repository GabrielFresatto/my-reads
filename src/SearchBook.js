import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import Book from './Book'

class SearchBook extends Component {
  state = {
    query: '',
    newBooks: []
  }

  searchBooks = (evt) => {
    let query = evt.target.value;
    this.setState({ query: query });
    BooksAPI.search(query).then(books => {
      if(books) {
        this.setState({ newBooks:books })
      } else {
        this.setState({ newBooks:[] })
      }
    })
  }



  
  render() {
    const { query, newBooks } = this.state;
    const { onUpdate } = this.props;

    
      return (
         <div className="search-books">
            <div className="search-books-bar">
              <Link to="/" className="close-search"></Link>
              <div className="search-books-input-wrapper">
                <input type="text" value={query} onChange={(evt) => this.searchBooks(evt)} placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {newBooks.length > 0 &&
                  newBooks.map((book) => (
                    <Book book={book} onUpdate={onUpdate} key={book.id} shelf=""/>
                  ))
                }

                {newBooks.error &&
                  <div>Nenhum livro encontrado</div>
                }

              </ol>
            </div>
          </div>
      )
   }
}

export default SearchBook;