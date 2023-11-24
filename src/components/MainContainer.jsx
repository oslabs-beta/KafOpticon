import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Menu.jsx';
import PerformaceContainer from './PerformanceContainer.jsx';
import UserContainer from './UserDashboard.jsx';

import MetricsContainer from './MetricsContainer.jsx';

function MainContainer () {
    return (
        <section id='mainContainer'>
            <Menu />
            <Routes>
                <Route path='/' element={<MetricsContainer />} />
                <Route path='/performance' element={<PerformaceContainer />} />
                <Route path='/userContainer' element={<UserContainer/>}/>
            </Routes>
            
        </section>
    )
};

export default MainContainer;