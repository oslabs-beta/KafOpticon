import React from 'react';
import Menu from './Menu.jsx'
import MetricsContainer from './MetricsContainer.jsx';

function MainContainer () {
    return (
        <section id='mainContainer'>
            <Menu />
            <MetricsContainer/>
        </section>
    )
};

export default MainContainer;