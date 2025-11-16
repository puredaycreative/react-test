import React, { useState, useEffect } from 'react';

function AdminPage() {
  const [message, setMessage] = useState('Loading data from serverless function...');

  useEffect(() => {
    // Memanggil API yang akan diarahkan ke backend/wsgi.py oleh Vercel
    fetch('/api/data') 
      .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setMessage(data.message))
      .catch(error => {
        console.error('Error fetching data:', error);
        setMessage(`Error: ${error.message}. Cek apakah backend berjalan di Vercel.`);
      });
  }, []);

  return (
    <div>
      <h1>Admin Dashboard 🔒</h1>
      <h3>Pesan dari Backend:</h3>
      <p style={{ fontWeight: 'bold' }}>{message}</p>
    </div>
  );
}

export default AdminPage;