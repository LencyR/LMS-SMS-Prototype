import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StudentContextProvider } from './context/StudentContext';
import { AuthContextProvider } from './context/AuthContext';
import { CourseContextProvider } from './context/CourseContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <StudentContextProvider>  
        <CourseContextProvider>
          <App />
        </CourseContextProvider>
      </StudentContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);