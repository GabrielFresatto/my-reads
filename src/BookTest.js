import React, { Component } from 'react'

function BookTest(props) {
   const {book} = props;

   return (
      <div className="book">
         <div className="book-title">{book.title}</div>
            {book.authors &&
               book.authors.map((author) => (
                  <div className="book-authors">
                     {author}
                  </div>
               ))
            }
      </div>
   )
}

export default BookTest;