import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/pages/Home/App';
import History from './components/pages/History/History';
import AddUSer from './components/pages/AddUsers/AddUser';
import AddKey from './components/pages/AddKey/AddKey';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/history" element={<History />} />
      <Route path="/adduser" element={<AddUSer />} />
      <Route path="/addkeys" element={<AddKey />} />
    </Routes>
  </Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
