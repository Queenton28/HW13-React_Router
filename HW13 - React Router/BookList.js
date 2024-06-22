import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function BookList() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('/api/books');
        setBooks(response.data);
      } catch (error) {
        console.error('Failed to fetch books', error);
      }
    };

    fetchBooks();
  }, []);

  const handleEdit = (id) => {
    navigate(`/books/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/books/${id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      setBooks(books.filter((book) => book.id !== id));
    } catch (error) {
      console.error('Failed to delete book', error);
    }
  };

  return (
    <div>
      <h1>Book List</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} - {book.author}
            <button onClick={() => handleEdit(book.id)}>Edit</button>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
