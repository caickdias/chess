import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context/Provider';
import PublicRoutes from './routes/PublicRoutes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProvider>
      <PublicRoutes />
    </AppProvider>
  </React.StrictMode>
);
