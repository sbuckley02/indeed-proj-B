import './App.css';
import { Routes, Route } from "react-router-dom";
import ReactDOM from 'react-dom';
import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import ClubApp from './components/ClubApp';
// //  <BrowserRouter>
// {/* <App />
// </BrowserRouter> */}


// The primary component for the entire application
// This will contain the other components that you use
// in your application, such as Home
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClubApp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;