# KafOpticon
Kafka Cluster Monitor and Visualizer
  <br><img src="./assets/KafOpticon Sample.png" width="300px"></img>  


# Run local test
Preconditions: Prometheus and Grafana must be installed
Grafana must be running already and must be configured to allow anonymous access with the admin role in the Main Org.

Open up two terminals in the root directory.
Run 'npm run bootZoo' and 'npm run bootKaf1'.
```javascript
npm run bootZoo
```
```javascript
npm run bootKaf1
```
Open up a terminal in the root directory.
Run 'npm start'.
```javascript
npm start
```
In the electron app, type 'localhost:2020' into the form and submit it.
Wait.
Refresh if necessary.
Click into performance or health metrics. Data on the kafka cluster should be displayed.

# Run Docker Test
1. Navigate to docker-test directory.
   Run docker-compose up -d to start all the servers, JMXexporter, Prometheus and Grafana.
```javascript 
docker-compose up -d
```
2. Run electron
```javascript
npm start
```

