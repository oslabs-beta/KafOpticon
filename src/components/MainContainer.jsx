import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Menu from './Menu.jsx';
import PerformanceContainer from './PerformanceContainer.jsx';
import AlertsContainer from './AlertsContainer.jsx';
import MetricsContainer from './MetricsContainer.jsx';
import UserDashboard from './UserDashboard.jsx'

function MainContainer() {
  return (
    <section id='mainContainer'>
      <Menu />
      <Routes>
        <Route path='/' element={<MetricsContainer />} />
        <Route path='/performance' element={<PerformanceContainer />} />
        <Route path='/userDashboard' element={<UserDashboard />} />
        <Route path='/alerts' element={<AlertsContainer />} />
      </Routes>
    </section>
  );
}

export default MainContainer;
