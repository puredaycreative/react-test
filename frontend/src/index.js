import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Anda bisa menambahkan file CSS global di sini jika ada (misal: './index.css')

// Dapatkan elemen DOM dengan ID 'root' dari public/index.html
const rootElement = document.getElementById('root');

// Buat root React 
const root = ReactDOM.createRoot(rootElement);

// Render komponen utama (App) ke DOM
root.render(
  // StrictMode adalah alat untuk menyoroti potensi masalah dalam aplikasi.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);