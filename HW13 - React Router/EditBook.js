import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function EditBookForm() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const response = await axios.get(`/api/books/${id}`);
        setTitle(response.data.title);
        setAuthor(response.data.author);
      } catch (error) {
        console.error('Failed to fetch book', error);
      }
    };

    fetchBook();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`/api/books/${id}`, { title, author }, {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
      });
      navigate('/books');
    } catch (error) {
      console.error('Failed to edit book', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
        required
      />
      <button type="submit">Edit Book</button>
   

 </form>
  );
}

export default EditBookForm;
