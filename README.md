<img src="./assets/kafopticon.png" width="500px"></img>  


# KafOpticon
Kafka Cluster Monitor and Visualizer

# About the Project
What:
KafOpticon is an open source electron app used for monitoring, visualizing and alerting users of Kafka cluster/server metrics.
Kafka is a powerful open source, datastream processing software platform.
KafOpticon article can be found at: https://medium.com/

Why:
Monitoring relevant cluster metrics is difficult because there are many metrics (many of which are not critical for day to day use)
and they are not easily accessible.
KafOpticon aims to solve these problems. With KafOpticon, you have REAL TIME monitor, visualization and alert features.
  <br><img src="./assets/KafOpticon Sample1.png" width="500px"></img>  

Not only that, but you can customize your own dashboard with user selected metrics if you want more granular control over what is displayed.

Dependencies: Grafana and Prometheus

# Run local test
Preconditions: Prometheus and Grafana must be installed
Grafana must be running already and must be configured to allow anonymous access with the admin role in the Main Org.

1. Open up two terminals in the root directory.
2. Run `npm run bootZoo` and `npm run bootKaf1` in the separate terminals.
```javascript
npm run bootZoo
```
```javascript
npm run bootKaf1
```
3. Open up a terminal in the root directory.
Run `npm start` in the root directory
```javascript
npm start
```
4. In the electron app, type 'localhost:2020' into the form and submit it.
Wait.
Refresh if necessary.
Click into performance or health metrics. Data on the kafka cluster should be displayed.

# Run Docker Test
1. Run Docker
Navigate to docker-test directory and run `docker-compose up -d` to start all the servers, JMXexporter, Prometheus and Grafana.
```javascript 
docker-compose up -d
```
2. Run Electron
Run electron with `npm start` in the root directory.
```javascript
npm start
```
3. Stop Docker Test
Run `docker-compose down` within the docker-test directory.
```javascript
docker-compose down
```
# Alerts
In order to enable automatic alerts an email and app password are required. The easiest way to do this is to provide a gmail username and an app password
in the relevant fields of the alerts dashboard. After clicking the submit button, you must restart Grafana for the changes to take place.
After Grafana has been restarted, you are now free to add any emails you want to receive the alerts in the Grafana alerts contact points.
You can send test email using the test button.
Configure and customize threshholds for the alerts within Grafana. 
Congratulations! 🏆️ You should now be able to receive automatic email alerts about your Kafka clusters.

# Road Map
Check out [issues](https://github.com/oslabs-beta/KafOpticon/issues) for further information about possible new features

# Contributing
Contributions are what make the open source community a great place to 
If you would like to contribute to this project take the steps below:
1. Fork the Project 
2. Create a Feature Branch 
Use `git checkout -b newFeature`    
```javascript
git checkout -b newFeature
```
3. Commit your Changes
Use `git commit -m newFeature`
```javascript
git commit -m newFeature
```
4. Push to the Branch
Use `git push origin newFeature`
```javascript
git push origin newFeature
```
5. Open a Pull Request

# Contributors
https://github.com/anewatech
https://github.com/GOsorioCanales
https://github.com/kelaompachai
https://github.com/zackweiss