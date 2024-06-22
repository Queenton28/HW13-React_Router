import React from 'react';
import BookList from '../components/BookList';
import AddBookForm from '../components/AddBookForm';

function BookPage() {
  return (
    <div>
      <h1>Books</h1>
      <AddBookForm />
      <BookList />
    </div>
  );
}

export default BookPage;
