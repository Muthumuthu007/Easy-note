import React, { useState } from 'react';
import axios from 'axios'; // Use axios for consistency with the mobile version
import './App.css'; // Ensure your CSS is in App.css

function Codepage() {
  const [key, setKey] = useState('');
  const [receivedData, setReceivedData] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleConfirmPress = async () => {
    if (!key.trim()) {
      setMessage('Please enter the Key!');
      setReceivedData('');
      return;
    }

    setLoading(true);
    setMessage('');
    
    try {
      const response = await axios.post('http://3.139.54.170:8000/get-note', {
        note_key: key,
      });

      console.log('API Response:', response.data);

      const { note_text } = response.data;

      if (note_text) {
        setReceivedData(note_text);
      } else {
        setMessage('No data found for this key.');
        setReceivedData('');
      }
    } catch (error) {
      console.error('API Error:', error);
      setMessage('Failed to fetch data. Please try again.');
      setReceivedData('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="Header">
          <h1>Retrive Note </h1>
          
        </div>
        <input
        className='key'
        type='text'
        placeholder='Enter Key'
        value={key}
        onChange={(e) => setKey(e.target.value)}
        aria-label='Enter key'
        /><br/>

        <button
        className='confirm'
        onClick={handleConfirmPress}
        disabled={loading}
        >
          {loading ? 'Loading...':'Confirm'}
        </button>

     
        
        
        {message && <p className="message">{message}</p>}
        <textarea 
        className='textarea'
        placeholder='Recieve Data'
        value={receivedData}
        readOnly
        /><br/>
       
      </header>
    </div>
  );
}

export default Codepage;
