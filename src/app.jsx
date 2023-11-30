import React from 'react';
import Header from '../src/components/Header.jsx'
import MainContainer from './components/MainContainer.jsx';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/styles/styles.css'

//create app element
function App () {
  return (
    // wraps app elements with react-router 
    <Router>
      <section>
        <Header />
        <MainContainer/>
      </section>
    </Router>

  );
}

export default App;