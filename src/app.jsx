import React from 'react';
import Header from '../src/components/Header.jsx'
import MainContainer from './components/MainContainer.jsx';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import '../src/styles/styles.css'

function App () {
  return (
    <Router>
      <section>
        <Header />
        <MainContainer/>
      </section>
    </Router>

  );
}

export default App;