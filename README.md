# KafOpticon
Kafka Cluster Monitor and Visualizer

# About the Project
What:
KafOpticon is an open source electron app used for monitoring, visualizing and alerting users of Kafka cluster/server metrics.
Kafka is a powerful open source, datastream processing software platform.

Why:
Monitoring relevant cluster metrics is difficult because there are many metrics (many of which are not critical for day to day use)
and they are not easily accessible.
KafOpticon aims to solve these problems. With KafOpticon, you have REAL TIME monitoring, visualizing and alerting features.
  <br><img src="./assets/KafOpticon Sample.png" width="300px"></img>  

Not only that, but you can customize your own dashboard with user selected metrics if you want more granular control over what is displayed.
Dependencies: Grafana and Prometheus


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
2. Run Electron
```javascript
npm start
```
3. Stop Docker Test
   Run docker-compose down within the docker-test directory.
```javascript
docker-compose down
```
# Alerts
In order to enable automatic alerts an email and app password are required. The easiest way for this is to provide a gmail username and an app password
in the relevant fields of the alerts dashboard. After clicking the submit button, you must restart Grafana for the changes to take place.
After Grafana has been restarted, you are now free to add any emails you want to receive the alerts in the Grafana alerts contact points.
You can send test email using the test button.
Configure and customize threshholds for the alerts within Grafana. 
Congratulations! You can now receive automatic email alerts about your Kafka clusters.