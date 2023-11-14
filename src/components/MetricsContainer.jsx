import React from 'react';

function MetricsContainer() {
    return (
        <section id="metricsContainer">
            <section class='metricBox' id='firstMetric'>
            {/* <iframe src="http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-15m&to=now&panelId=2" width="500" height="250" frameborder="0"></iframe> */}
            <iframe src="http://localhost:3000/d-solo/b9163055-5231-456f-ad64-1294596f5b74/performance-metrics?orgId=1&from=now-5m&to=now&panelId=3" width="450" height="200" frameborder="0"></iframe>
            <iframe src="http://localhost:3000/d-solo/b9163055-5231-456f-ad64-1294596f5b74/performance-metrics?orgId=1&from=now-5m&to=now&panelId=2" width="450" height="200" frameborder="0"></iframe>
            <iframe src="http://localhost:3000/d-solo/b9163055-5231-456f-ad64-1294596f5b74/performance-metrics?orgId=1&from=now-5m&to=now&panelId=1" width="450" height="200" frameborder="0"></iframe>
            </section>
            <section class='metricBox' id='secondMetric'>
            <iframe src="http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-15m&to=now&panelId=1" width="500" height="250" frameborder="0"></iframe>
            </section>
            <section class='metricBox' id='thirdMetric'>
            <iframe src="http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-15m&to=now&panelId=3" width="500" height="250" frameborder="0"></iframe>
            </section>
            <section class='metricBox' id='fourthMetric'>
            <iframe src="http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-15m&to=now&panelId=4" width="500" height="250" frameborder="0"></iframe>
            </section>
       </section>
    )
};

export default MetricsContainer;