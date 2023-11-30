import React from 'react';
import { Link } from 'react-router-dom';

//creates the main menu
function Menu() {
    return (
        <section id='menu'>
            {/* renders buttons and creates links to all the different paths for react-router */}
            <Link to='/'><button id='health' className='menuButton'>Health Metrics</button></Link>
            <Link to='performance'><button id='performance' className='menuButton'>Performance Metrics</button></Link>
            <Link to='userdashboard'><button id='userdahboard' className='menuButton'>Create Dashboard</button></Link>
            <Link to='alerts'> <button id='alerts' className='menuButton'>Alerts</button></Link>
            {/* creates and renders clock panels from grafana dashboard */}
            <iframe className='clock' src="http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?orgId=1&from=now&to=now&panelId=13" width="250" height="100" frameborder="0"></iframe>
            <iframe className='clock' src="http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?orgId=1&from=now&to=now&panelId=15" width="250" height="100" frameborder="0"></iframe>
            <iframe className='clock' src="http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?orgId=1&from=now&to=now&panelId=14" width="250" height="100" frameborder="0"></iframe>
        </section>
    )
};

export default Menu;