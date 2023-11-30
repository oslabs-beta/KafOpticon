import React from 'react';

//creates the main metrics container/health container
function MetricsContainer() {
  return (
    <section id='metricsContainer'>
      {/* renders a section element with an iframe that contains a grafana dashboard with a specific metric */}
      <section class='metricBox' id='firstMetric'>
        <iframe
          // panel url from granafa
          src='http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=2'
          width='100%'
          height='100%'
          frameborder='0'></iframe>
      </section>
      <section class='metricBox' id='secondMetric'>
        <iframe
          src='http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=4'
          width='100%'
          height='100%'
          frameborder='0'></iframe>
      </section>
      <section class='metricBox' id='thirdMetric'>
        <iframe
          src='http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=1'
          width='100%'
          height='100%'
          frameborder='0'></iframe>
      </section>
      <section class='metricBox' id='fourthMetric'>
        <iframe
          src='http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=8'
          width='100%'
          height='100%'
          frameborder='0'></iframe>
      </section>
      <section class='metricBox'>
        <iframe
          src='http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=9'
          width='100%'
          height='100%'
          frameborder='0'></iframe>
      </section>
      <section class='metricBox'>
        <iframe
          src='http://localhost:3000/d-solo/d9098b29-ef80-4e40-86bc-b28bd6e85756/test-dash?refresh=10s&orgId=1&from=now-1h&to=now&panelId=3'
          width='100%'
          height='100%'
          frameborder='0'></iframe>
      </section>
    </section>
  );
}

export default MetricsContainer;
