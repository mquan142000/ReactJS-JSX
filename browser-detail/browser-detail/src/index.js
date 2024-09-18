import React from 'react';
import ReactDOM from 'react-dom/client';

// Lấy thông tin trình duyệt từ navigator.userAgent
const browserDetails = navigator.userAgent;

// Tạo element hiển thị thông tin trình duyệt
const element = (
  <div>
    <h4>Browser's details: {browserDetails}</h4>
  </div>
);

// Khởi tạo root element với ReactDOM.createRoot()
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render element lên UI
root.render(element);
