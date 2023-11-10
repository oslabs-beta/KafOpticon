import React from 'react';

function MetricsContainer() {
    return (
        <section id="metricsContainer">
            <section class='metricBox' id='firstMetric'>
            <iframe src="http://localhost:3000/d-solo/fb4d8af9-b170-41d4-97cc-6b7011f06c6e/test-dashboard?refresh=10s&orgId=1&from=now-5m&to=now&panelId=1" width="500" height="250" frameborder="0"></iframe>
            </section>
            <section class='metricBox' id='secondMetric'>
            <iframe src="http://localhost:3000/d-solo/fb4d8af9-b170-41d4-97cc-6b7011f06c6e/test-dashboard?refresh=10s&orgId=1&from=now-5m&to=now&panelId=2" width="500" height="250" frameborder="0"></iframe>
            </section>
            <section class='metricBox' id='thirdMetric'>
            <iframe src="http://localhost:3000/d-solo/fb4d8af9-b170-41d4-97cc-6b7011f06c6e/test-dashboard?refresh=10s&orgId=1&from=now-5m&to=now&panelId=4" width="500" height="250" frameborder="0"></iframe>
            </section>
            <section class='metricBox' id='fourthMetric'>
            <iframe src="http://localhost:3000/d-solo/fb4d8af9-b170-41d4-97cc-6b7011f06c6e/test-dashboard?refresh=10s&orgId=1&from=now-5m&to=now&panelId=5" width="500" height="250" frameborder="0"></iframe>
            </section>
       </section>
    )
};

export default MetricsContainer;