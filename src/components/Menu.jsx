import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <section id='menu'>
            <Link to='/'><button>Health Metrics</button></Link>
            <Link to='performance'><button>Performance Metrics</button></Link>
        </section>
    )
};

export default Menu;