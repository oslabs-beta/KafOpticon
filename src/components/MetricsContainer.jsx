import React from 'react';

function MetricsContainer() {
    return (
        <section id="metricsContainer">
            <section class='metricBox' id='firstMetric'>
            <iframe src="http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=2" width="500" height="250" frameborder="0"></iframe>
            </section>
            <section class='metricBox' id='secondMetric'>
            <iframe src="http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=4" width="500" height="250" frameborder="0"></iframe>
            </section>
            <section class='metricBox' id='thirdMetric'>
            <iframe src="http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=1" width="500" height="250" frameborder="0"></iframe>
            </section>
            <section class='metricBox' id='fourthMetric'>
            <iframe src="http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=8" width="500" height="250" frameborder="0"></iframe>
            </section>
            <section class='metricBox'>
            <iframe src="http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=9" width="500" height="250" frameborder="0"></iframe>
            </section>
            <section class='metricBox'>
            <iframe src="http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=3" width="500" height="250" frameborder="0"></iframe>
            </section>
            {/* <iframe src="http://localhost:3000/d-solo/fc389113-a3e9-4a69-b0c1-9fe978770298/go-dashboard?orgId=1&refresh=10s&from=1699550219475&to=1699571819475&panelId=1" width="800" height="600" frameborder="0"></iframe> */}
            
       </section>
    )
};

export default MetricsContainer;