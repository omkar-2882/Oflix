import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import { useEffect } from 'react';

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;
