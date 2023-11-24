import React, { useEffect, useState } from 'react';

function UserContainer() {
    const [iframe, setIframe] = useState([])
    const [menuOpen, setMenuOpen] = useState(false);
    // const [metric, setMetric] = useState('');

    const handleAdd = () => {
        const newIframe = [...iframe, { id: Date.now(), metric: '' }]
        setIframe(newIframe)
    }
    const deleteIframe = (id) => {
        const delIframe = iframe.filter(frame => frame.id !== id);
        setIframe(delIframe);
    }

    const menu = () => {
        setMenuOpen(!menuOpen);
    }

    const metricsCont = {
        1: "http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=16",
        2: "http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=17",
        3: "http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=18"
    }

    const metrichandle = (iframeIndex, metric) => { 
        const newIframe = [...iframe];
        newIframe[iframeIndex].metric = metricsCont[metric];
        setIframe(newIframe)
    }
  
    return (
        <section id='metricsContainer'> 
            
            <section id='addPanelButton'>
            <button id='addPanel' onClick={handleAdd}>Add Panel</button>
            </section>
            <section id='dropDownMenu'>
                <button id='dropMenu' onClick={menu}>Metric</button>
                {menuOpen && (
                    <section id='menuSection'>
                    <ul className='menu'>
                            <li onClick={() => metrichandle(iframe.length - 1, 1)}>Purgatory Size</li>
                            <li onClick={() => metrichandle(iframe.length - 1, 2)}>Collection Count</li>
                            <li onClick={() => metrichandle(iframe.length  -1, 3)}>Zookeeper Request Latency</li>
                    </ul>
                    </section>
                
                )}
            </section>
            {iframe.map(({ id, metric },i) => {
                return (
                    <section key={id} id='addedPanel'>
                        <section className='metricBox'>
                            <iframe className='addedIframe' src={metric} width="500" height="250" frameborder="0"/>
                    </section>
                    <section>
                        <button id='deletePanel' onClick={()=>deleteIframe(id)}>Delete</button>
                    </section>
                </section>
                )
            })}
        
        </section>
    
    )
};

export default UserContainer;