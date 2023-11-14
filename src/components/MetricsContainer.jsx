import React from 'react';

function MetricsContainer() {
    return (
        <section id="metricsContainer">
            <section class='metricBox' id='firstMetric'>
            {/* <iframe src="http://localhost:3000/d-solo/d5526fd6-d3bc-4c51-af6c-0334fbe6c5dd/test-dashboard?refresh=10s&orgId=1&from=now-5m&to=now&panelId=4" width="500" height="250" frameborder="0"></iframe> */}
            <iframe src="http://localhost:3000/d-solo/b2a410e3-dc2f-4d25-bbd7-fcefedaada56/performance-metrics?orgId=1&from=1699915433363&to=1699915733364&panelId=3" width="450" height="200" frameborder="0"></iframe>
            <iframe src="http://localhost:3000/d-solo/fd288cc0-371c-4087-ae3c-80f7369b071d/performance-metrics?orgId=1&from=1699915738295&to=1699916038295&panelId=3" width="450" height="200" frameborder="0"></iframe>
            <iframe src="http://localhost:3000/d-solo/f336bed9-8fbb-4e34-8c68-33122fb153c1/performance-metrics?orgId=1&from=1699916401688&to=1699916701688&panelId=3" width="450" height="200" frameborder="0"></iframe>
            </section>
            {/* <section class='metricBox' id='secondMetric'>
            <iframe src="http://localhost:3000/d-solo/d5526fd6-d3bc-4c51-af6c-0334fbe6c5dd/test-dashboard?refresh=102&orgId=1&from=now-5m&to=now&panelId=1" width="500" height="250" frameborder="0"></iframe>
            </section>
            <section class='metricBox' id='thirdMetric'>
            <iframe src="http://localhost:3000/d-solo/d5526fd6-d3bc-4c51-af6c-0334fbe6c5dd/test-dashboard?refresh=10s&orgId=1&from=now-5m&to=now&panelId=3" width="500" height="250" frameborder="0"></iframe>
            </section> */}
            {/* <section class='metricBox' id='fourthMetric'>
            <iframe src="http://localhost:3000/d-solo/d5526fd6-d3bc-4c51-af6c-0334fbe6c5dd/test-dashboard?refresh=10s&orgId=1&from=now-5s&to=now&panelId=2" width="500" height="250" frameborder="0"></iframe>
            </section> */}
       </section>
    )
};

export default MetricsContainer;