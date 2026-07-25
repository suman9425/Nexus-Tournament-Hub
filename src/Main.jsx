import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // तपाईंको मुख्य App कम्पोनेन्ट
import './index.css'; // अघि हामीले बनाएको डिजाइन


// 'root' भन्ने id भएको div लाई समातेर त्यहाँ App लाई लोड गर्ने कोड
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);