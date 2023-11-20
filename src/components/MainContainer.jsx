import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Menu from './Menu.jsx';
import PerformaceContainer from './PerformanceContainer.jsx';

import MetricsContainer from './MetricsContainer.jsx';

function MainContainer() {
  return (
    <section id='mainContainer'>
      <Menu />
      <Routes>
        <Route path='/' element={<MetricsContainer />} />
        <Route path='/performance' element={<PerformaceContainer />} />
      </Routes>
    </section>
  );
}

export default MainContainer;
