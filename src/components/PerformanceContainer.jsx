import React from 'react';

//creates performace metrics container
function PerformanceContainer() {
    return (
        <section id="metricsContainer">
            {/* renders a section element with an iframe that contains a grafana dashboard with a specific metric */}
            <section class='metricBox' id='firstMetric'>
            {/* panel url from granafa */}
            <iframe src="http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=5" width="100%" height="100%" frameborder="0"></iframe>
            </section>
            <section class='metricBox' id='secondMetric'>
            <iframe src="http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=10" width="100%" height="100%" frameborder="0"></iframe>
            </section>
            <section class='metricBox' id='thirdMetric'>
            <iframe src="http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=6" width="100%" height="100%" frameborder="0"></iframe>
            </section>
            <section class='metricBox'>
            <iframe src="http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=7" width="100%" height="100%" frameborder="0"></iframe>
            </section>
            <section class='metricBox'>
            <iframe src="http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=12" width="100%" height="100%" frameborder="0"></iframe>
            </section>
            <section class='metricBox'>
            <iframe src="http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=11" width="100%" height="100%" frameborder="0"></iframe>
             </section>
       </section>
    )
};

export default PerformanceContainer;