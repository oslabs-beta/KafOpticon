import React, { useEffect, useState } from 'react';

//creates user customizable dashboard
function UserContainer() {
    //state for iframes and dropdown menu
    const [iframe, setIframe] = useState([])
    const [menuOpen, setMenuOpen] = useState(false);

    //changes iframe's state with a new iframe that cotains a unic id and a metric key
    const handleAdd = () => {
        const newIframe = [...iframe, { id: Date.now(), metric: '' }]
        setIframe(newIframe)
    }
    //deletes an iframe based on iframe unique id
    const deleteIframe = (id) => {
        const delIframe = iframe.filter(frame => frame.id !== id);
        setIframe(delIframe);
    }
    //sets state for dropdown menu show/hide
    const menu = () => {
        setMenuOpen(!menuOpen);
    }

    //contains ten panel's urls for pre-selected metrics
    const metricsCont = {
        1: "http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=17",
        2: "http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=18",
        3: "http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=16",
        4: "http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=19",
        5: "http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=20",
        6: "http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=21",
        7: "http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=22",
        8: "http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=23",
        9: "http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=24",
        10: "http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=25"
    }

    //sets the metric key in iframe to the matching url for each metric in the dropdown menu
    const metrichandle = (iframeIndex, metric) => { 
        const newIframe = [...iframe];
        newIframe[iframeIndex].metric = metricsCont[metric];
        setIframe(newIframe)
    }
   
    //reders user dashboard elements
    return (
        <section id='userDashboardContainer'> 
            
            <section id='addPanelButton'>
            {/* button that invoques handleAdd on click to create a new iframe */}
            <button id='addPanel' onClick={handleAdd}>Add Panel</button>
            </section>
            <section id='dropDownMenu'>
                {/* button that displays the dropdown menu by invoquing 'menu' function */}
                <button id='dropMenu' onClick={menu}>Metric</button>
                {menuOpen && (
                    <section id='menuSection'>
                        {/* list of metric's options in the dropdown menu */}
                        <ul className='menu'>
                            {/* each element in the list invoques 'metrichandle' with an specific key that matches the keys in the metricsCont object */}
                            <li onClick={() => metrichandle(iframe.length - 1, 1)}>Purgatory Size</li>
                            <li onClick={() => metrichandle(iframe.length - 1, 2)}>Collection Count</li>
                            <li onClick={() => metrichandle(iframe.length - 1, 3)}>Zookeeper Request Latency</li>
                            <li onClick={() => metrichandle(iframe.length - 1, 4)}>Collection X Seconds Count</li>
                            <li onClick={() => metrichandle(iframe.length - 1, 5)}>Failed Producer Request</li>
                            <li onClick={() => metrichandle(iframe.length - 1, 6)}>Consumer's Lag</li>
                            <li onClick={() => metrichandle(iframe.length - 1, 7)}>Network Request Total</li>
                            <li onClick={() => metrichandle(iframe.length - 1, 8)}>Network Error Total</li>
                            <li onClick={() => metrichandle(iframe.length - 1, 9)}>Replicas Count</li>
                            <li onClick={() => metrichandle(iframe.length  -1, 10)}>In Sync Replica Count</li>
                    </ul>
                    </section>
                
                )}
            </section>
            {/* renders iframe elements */}
            {iframe.map(({ id, metric },i) => {
                return (
                    <section key={id} id='addedPanel'>
                        <section className='userMetricBox'>
                            {/* iframe that contains the url to the panel that corresponds to selected metric */}
                            <iframe className='addedIframe' src={metric} width="100%" height="100%" frameborder="0"/>
                        </section>
                        <section id='panelDeleteButton'>
                            {/* button that deletes iframe by invoquing 'deleteIframe' passing iframe unique id */}
                            <button id='deletePanel' onClick={()=>deleteIframe(id)}>Delete</button>
                        </section>
                     </section>
                )
            })}
        
        </section>
    
    )
};

export default UserContainer;