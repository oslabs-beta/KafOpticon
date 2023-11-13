import React from 'react';

function PerformanceContainer() {
    return (
        <section id="metricsContainer">
            <section class='metricBox' id='firstMetric'>
            <iframe src="http://localhost:3000/d-solo/c04bac34-d678-4dce-ac87-d7ea0aaf6f68/test-dashboard?refresh=10s&orgId=1&from=now-15m&to=now&panelId=7" width="500" height="250" frameborder="0"></iframe>
            </section>
            <section class='metricBox' id='secondMetric'>
            <iframe src="http://localhost:3000/d-solo/c04bac34-d678-4dce-ac87-d7ea0aaf6f68/test-dashboard?refresh=10sorgId=1&from=now-15m&to=now&panelId=6" width="500" height="250" frameborder="0"></iframe>
            </section>
            <section class='metricBox' id='thirdMetric'>
            <iframe src="http://localhost:3000/d-solo/c04bac34-d678-4dce-ac87-d7ea0aaf6f68/test-dashboard?refresh=10s&orgId=1&from=now-15m&to=now&panelId=5" width="500" height="250" frameborder="0"></iframe>
            </section>
       </section>
    )
};

export default PerformanceContainer;