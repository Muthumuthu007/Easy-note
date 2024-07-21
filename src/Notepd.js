import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './App.css';

function Notepd() {
  const [noteText, setNoteText] = useState('');
  const [noteKey, setNoteKey] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const validateForm = () => {
    if (!noteText || !noteKey) {
      setError('Please fill in both fields.');
      return false;
    }
    return true;
  };

  const storeNote = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    const payload = {
      note_text: noteText,
      note_key: noteKey
    };

    try {
      const response = await axios.post('http://3.139.54.170:8000/save-note', payload);
      console.log('Response:', response.data);

      if (response.data.status === 'Note saved successfully!') {
        setError('');
        navigate('/Suc');
      } else if (response.data.status === 'Note key already exists! Please use a different key.') {
        setError('Enter a different key');
      } else if (response.data.status === 'Missing required fields!') {
        setError('Missing required fields');
      }
    } catch (error) {
      if (error.response) {
        console.error('Server responded with an error:', error.response.data);
        setError(error.response.data.message || 'Invalid note or key');
      } else {
        console.error('Error:', error.message);
        setError('An unexpected error occurred. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Header">
          <h1>Post Page</h1>
        </div>
        <div className="textarea-container">
          <textarea
            className="textarea"
            placeholder="Type your note here..."
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
          />
          <br />
          <input
            className="key"
            type="text"
            placeholder="Enter a key to retrieve the data"
            value={noteKey}
            onChange={(e) => setNoteKey(e.target.value)}
          />
          <br />
          <button
            className="confirm"
            type="button"
            onClick={storeNote}
            disabled={loading}
          >
            {loading ? 'Saving...' : 'Confirm'}
          </button>
          {error && <p className="error">{error}</p>}
        </div>
      </header>
    </div>
  );
}

export default Notepd;
