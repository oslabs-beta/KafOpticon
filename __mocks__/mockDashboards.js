
const answer = {
  "folderId": 0,
  "overwrite": true,
  "dashboard": {
    "annotations": {
      "list": [
        {
          "builtIn": 1,
          "datasource": {
            "type": "grafana",
            "uid": "-- Grafana --"
          },
          "enable": true,
          "hide": true,
          "iconColor": "rgba(0, 211, 255, 1)",
          "name": "Annotations & Alerts",
          "type": "dashboard"
        }
      ]
    },
    "editable": true,
    "fiscalYearStartMonth": 0,
    "graphTooltip": 0,
    // "id": 8,
    "links": [],
    "liveNow": false,
    "panels": [
      {
        "datasource": {
          "type": "prometheus",
          "uid": "testing"
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 0,
          "y": 0
        },
        "id": 15,
        "options": {
          "bgColor": "super-light-yellow",
          "clockType": "12 hour",
          "countdownSettings": {
            "endCountdownTime": "2023-11-14T23:10:31-06:00",
            "endText": "00:00:00"
          },
          "countupSettings": {
            "beginCountupTime": "2023-11-14T23:10:31-06:00",
            "beginText": "00:00:00"
          },
          "dateSettings": {
            "dateFormat": "YYYY-MM-DD",
            "fontSize": "20px",
            "fontWeight": "normal",
            "locale": "",
            "showDate": true
          },
          "fontMono": false,
          "mode": "time",
          "refresh": "sec",
          "timeSettings": {
            "fontSize": "30px",
            "fontWeight": "bold"
          },
          "timezone": "US/Central",
          "timezoneSettings": {
            "fontSize": "12px",
            "fontWeight": "normal",
            "showTimezone": false,
            "zoneFormat": "offsetAbbv"
          }
        },
        "pluginVersion": "2.1.3",
        "title": "Houston",
        "type": "grafana-clock-panel"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "testing"
        },
        "description": "Number of unreplicated partitions",
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "continuous-BlPu"
            },
            "custom": {
              "axisBorderShow": false,
              "axisCenteredZero": false,
              "axisColorMode": "text",
              "axisLabel": "",
              "axisPlacement": "auto",
              "barAlignment": 0,
              "drawStyle": "line",
              "fillOpacity": 3,
              "gradientMode": "none",
              "hideFrom": {
                "legend": false,
                "tooltip": false,
                "viz": false
              },
              "insertNulls": false,
              "lineInterpolation": "linear",
              "lineStyle": {
                "fill": "solid"
              },
              "lineWidth": 2,
              "pointSize": 7,
              "scaleDistribution": {
                "type": "linear"
              },
              "showPoints": "auto",
              "spanNulls": false,
              "stacking": {
                "group": "A",
                "mode": "none"
              },
              "thresholdsStyle": {
                "mode": "off"
              }
            },
            "mappings": [],
            "thresholds": {
              "mode": "absolute",
              "steps": [
                {
                  "color": "green",
                  "value": null
                },
                {
                  "color": "red",
                  "value": 80
                }
              ]
            }
          },
          "overrides": []
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 12,
          "y": 0
        },
        "id": 2,
        "options": {
          "legend": {
            "calcs": [],
            "displayMode": "list",
            "placement": "bottom",
            "showLegend": true
          },
          "tooltip": {
            "mode": "single",
            "sort": "none"
          }
        },
        "targets": [
          {
            "datasource": {
              "type": "prometheus",
              "uid": "testing"
            },
            "disableTextWrap": false,
            "editorMode": "builder",
            "expr": "kafka_server_replicamanager_underreplicatedpartitions",
            "fullMetaSearch": false,
            "includeNullMetadata": true,
            "instant": false,
            "legendFormat": "__auto",
            "range": true,
            "refId": "A",
            "useBackend": false
          }
        ],
        "title": "Under Replicated Partitions",
        "type": "timeseries"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "testing"
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 0,
          "y": 8
        },
        "id": 14,
        "options": {
          "bgColor": "dark-purple",
          "clockType": "12 hour",
          "countdownSettings": {
            "endCountdownTime": "2023-11-14T23:09:08-06:00",
            "endText": "00:00:00"
          },
          "countupSettings": {
            "beginCountupTime": "2023-11-14T23:09:08-06:00",
            "beginText": "00:00:00"
          },
          "dateSettings": {
            "dateFormat": "YYYY-MM-DD",
            "fontSize": "20px",
            "fontWeight": "normal",
            "locale": "",
            "showDate": true
          },
          "fontMono": false,
          "mode": "time",
          "refresh": "sec",
          "timeSettings": {
            "fontSize": "30px",
            "fontWeight": "bold"
          },
          "timezone": "America/Los_Angeles",
          "timezoneSettings": {
            "fontSize": "12px",
            "fontWeight": "normal",
            "showTimezone": false,
            "zoneFormat": "offsetAbbv"
          }
        },
        "pluginVersion": "2.1.3",
        "title": "Los Angeles",
        "type": "grafana-clock-panel"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "testing"
        },
        "description": "Number of “unclean” elections per ms",
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "continuous-BlPu"
            },
            "mappings": [],
            "thresholds": {
              "mode": "absolute",
              "steps": [
                {
                  "color": "green",
                  "value": null
                },
                {
                  "color": "red",
                  "value": 80
                }
              ]
            },
            "unit": "short"
          },
          "overrides": [
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_controller_ControllerStats_UncleanLeaderElectionEnableRateAndTimeMs_count\", instance=\"kafka-broker-1:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "ULExMs : Broker 1:9999"
                }
              ]
            },
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_controller_ControllerStats_UncleanLeaderElectionEnableRateAndTimeMs_count\", instance=\"kafka-broker-2:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "ULExMs : Broker 2:9999"
                }
              ]
            },
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_controller_ControllerStats_UncleanLeaderElectionEnableRateAndTimeMs_count\", instance=\"kafka-broker-3:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "ULExMs : Broker 3:9999"
                }
              ]
            }
          ]
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 12,
          "y": 8
        },
        "id": 4,
        "options": {
          "colorMode": "background",
          "graphMode": "none",
          "justifyMode": "auto",
          "orientation": "auto",
          "reduceOptions": {
            "calcs": [
              "lastNotNull"
            ],
            "fields": "",
            "values": false
          },
          "textMode": "auto"
        },
        "pluginVersion": "10.2.0",
        "targets": [
          {
            "datasource": {
              "type": "prometheus",
              "uid": "testing"
            },
            "disableTextWrap": false,
            "editorMode": "builder",
            "expr": "kafka_controller_controllerstats_uncleanleaderelectionenablerateandtimems_count",
            "fullMetaSearch": false,
            "includeNullMetadata": true,
            "instant": false,
            "legendFormat": "__auto",
            "range": true,
            "refId": "A",
            "useBackend": false
          }
        ],
        "title": "Unclean Leader Election Rate Ms",
        "type": "stat"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "testing"
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 0,
          "y": 16
        },
        "id": 13,
        "options": {
          "bgColor": "dark-blue",
          "clockType": "12 hour",
          "countdownSettings": {
            "endCountdownTime": "2023-11-14T23:07:27-06:00",
            "endText": "00:00:00"
          },
          "countupSettings": {
            "beginCountupTime": "2023-11-14T23:07:27-06:00",
            "beginText": "00:00:00"
          },
          "dateSettings": {
            "dateFormat": "YYYY-MM-DD",
            "fontSize": "20px",
            "fontWeight": "normal",
            "locale": "",
            "showDate": true
          },
          "fontMono": false,
          "mode": "time",
          "refresh": "sec",
          "timeSettings": {
            "fontSize": "30px",
            "fontWeight": "bold"
          },
          "timezone": "America/New_York",
          "timezoneSettings": {
            "fontSize": "12px",
            "fontWeight": "normal",
            "showTimezone": false,
            "zoneFormat": "offsetAbbv"
          }
        },
        "pluginVersion": "2.1.3",
        "title": "New York",
        "type": "grafana-clock-panel"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "testing"
        },
        "description": "Total time (in ms) to serve the specified request (Produce/Fetch)",
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "palette-classic"
            },
            "custom": {
              "axisBorderShow": false,
              "axisCenteredZero": false,
              "axisColorMode": "text",
              "axisLabel": "",
              "axisPlacement": "auto",
              "barAlignment": 0,
              "drawStyle": "line",
              "fillOpacity": 0,
              "gradientMode": "none",
              "hideFrom": {
                "legend": false,
                "tooltip": false,
                "viz": false
              },
              "insertNulls": false,
              "lineInterpolation": "linear",
              "lineWidth": 1,
              "pointSize": 5,
              "scaleDistribution": {
                "type": "linear"
              },
              "showPoints": "auto",
              "spanNulls": false,
              "stacking": {
                "group": "A",
                "mode": "none"
              },
              "thresholdsStyle": {
                "mode": "off"
              }
            },
            "mappings": [],
            "thresholds": {
              "mode": "absolute",
              "steps": [
                {
                  "color": "green",
                  "value": null
                },
                {
                  "color": "red",
                  "value": 80
                }
              ]
            }
          },
          "overrides": []
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 12,
          "y": 16
        },
        "id": 5,
        "options": {
          "legend": {
            "calcs": [],
            "displayMode": "list",
            "placement": "bottom",
            "showLegend": true
          },
          "tooltip": {
            "mode": "single",
            "sort": "none"
          }
        },
        "targets": [
          {
            "datasource": {
              "type": "prometheus",
              "uid": "testing"
            },
            "disableTextWrap": false,
            "editorMode": "builder",
            "expr": "kafka_network_requestmetrics_totaltimems",
            "fullMetaSearch": false,
            "includeNullMetadata": true,
            "instant": false,
            "legendFormat": "__auto",
            "range": true,
            "refId": "A",
            "useBackend": false
          }
        ],
        "title": "Total Time Ms",
        "type": "timeseries"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "testing"
        },
        "description": "Number of offline partitions",
        "fieldConfig": {
          "defaults": {
            "mappings": [],
            "thresholds": {
              "mode": "percentage",
              "steps": [
                {
                  "color": "super-light-blue",
                  "value": null
                },
                {
                  "color": "dark-blue",
                  "value": 70
                },
                {
                  "color": "dark-purple",
                  "value": 85
                }
              ]
            }
          },
          "overrides": [
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_controller_KafkaController_OfflinePartitionsCount\", instance=\"kafka-broker-1:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "OPC : Broker 1:9999"
                }
              ]
            },
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_controller_KafkaController_OfflinePartitionsCount\", instance=\"kafka-broker-2:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "OPC : Broker 2:9999"
                }
              ]
            },
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_controller_KafkaController_OfflinePartitionsCount\", instance=\"kafka-broker-3:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "OPC : Broker 3:9999"
                }
              ]
            }
          ]
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 0,
          "y": 24
        },
        "id": 1,
        "options": {
          "minVizHeight": 75,
          "minVizWidth": 75,
          "orientation": "auto",
          "reduceOptions": {
            "calcs": [
              "lastNotNull"
            ],
            "fields": "",
            "values": false
          },
          "showThresholdLabels": false,
          "showThresholdMarkers": true
        },
        "pluginVersion": "10.2.0",
        "targets": [
          {
            "datasource": {
              "type": "prometheus",
              "uid": "testing"
            },
            "disableTextWrap": false,
            "editorMode": "builder",
            "expr": "kafka_controller_kafkacontroller_offlinepartitionscount",
            "fullMetaSearch": false,
            "includeNullMetadata": true,
            "instant": false,
            "legendFormat": "__auto",
            "range": true,
            "refId": "A",
            "useBackend": false
          }
        ],
        "title": "Offline Partition Count",
        "type": "gauge"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "testing"
        },
        "description": "Number of failed partitions",
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "continuous-BlYlRd"
            },
            "mappings": [],
            "thresholds": {
              "mode": "absolute",
              "steps": [
                {
                  "color": "green",
                  "value": null
                },
                {
                  "color": "red",
                  "value": 80
                }
              ]
            },
            "unit": "short"
          },
          "overrides": [
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_server_ReplicaFetcherManager_FailedPartitionsCount\", clientId=\"Replica\", instance=\"kafka-broker-1:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "FPC : Broker 1:9999"
                }
              ]
            },
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_server_ReplicaFetcherManager_FailedPartitionsCount\", clientId=\"Replica\", instance=\"kafka-broker-2:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "FPC : Broker 2:9999"
                }
              ]
            },
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_server_ReplicaFetcherManager_FailedPartitionsCount\", clientId=\"Replica\", instance=\"kafka-broker-3:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "FPC : Broker 3:9999"
                }
              ]
            }
          ]
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 12,
          "y": 24
        },
        "id": 9,
        "options": {
          "colorMode": "background",
          "graphMode": "none",
          "justifyMode": "auto",
          "orientation": "auto",
          "reduceOptions": {
            "calcs": [
              "lastNotNull"
            ],
            "fields": "",
            "values": false
          },
          "textMode": "auto"
        },
        "pluginVersion": "10.2.0",
        "targets": [
          {
            "datasource": {
              "type": "prometheus",
              "uid": "testing"
            },
            "disableTextWrap": false,
            "editorMode": "builder",
            "expr": "kafka_server_replicafetchermanager_failedpartitionscount",
            "fullMetaSearch": false,
            "includeNullMetadata": true,
            "instant": false,
            "legendFormat": "__auto",
            "range": true,
            "refId": "A",
            "useBackend": false
          }
        ],
        "title": "Failed Partitions Count",
        "type": "stat"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "testing"
        },
        "description": "Rate at which the pool of in-sync replicas (ISRs) shrinks/expands",
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "continuous-BlYlRd"
            },
            "mappings": [],
            "thresholds": {
              "mode": "absolute",
              "steps": [
                {
                  "color": "green",
                  "value": null
                },
                {
                  "color": "red",
                  "value": 80
                }
              ]
            }
          },
          "overrides": [
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_server_ReplicaManager_IsrShrinks_total\", instance=\"kafka-broker-1:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "ISR Shrinks Total: Broker 1:9999"
                }
              ]
            },
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_server_ReplicaManager_IsrShrinks_total\", instance=\"kafka-broker-2:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "ISR Shrinks Total: Broker 2:9999"
                }
              ]
            },
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_server_ReplicaManager_IsrShrinks_total\", instance=\"kafka-broker-3:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "ISR Shrinks Total: Broker 3:9999"
                }
              ]
            },
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_server_ReplicaManager_IsrExpands_total\", instance=\"kafka-broker-1:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "ISR Expands Total: Broker 1:9999"
                }
              ]
            },
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_server_ReplicaManager_IsrExpands_total\", instance=\"kafka-broker-2:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "ISR Expands Total: Broker 2:9999"
                }
              ]
            },
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_server_ReplicaManager_IsrExpands_total\", instance=\"kafka-broker-3:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "ISR Expands Total: Broker 1:9999"
                }
              ]
            }
          ]
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 0,
          "y": 32
        },
        "id": 8,
        "options": {
          "displayMode": "lcd",
          "minVizHeight": 10,
          "minVizWidth": 0,
          "namePlacement": "auto",
          "orientation": "horizontal",
          "reduceOptions": {
            "calcs": [
              "lastNotNull"
            ],
            "fields": "",
            "values": false
          },
          "showUnfilled": true,
          "valueMode": "color"
        },
        "pluginVersion": "10.2.0",
        "targets": [
          {
            "datasource": {
              "type": "prometheus",
              "uid": "testing"
            },
            "disableTextWrap": false,
            "editorMode": "builder",
            "expr": "kafka_server_replicamanager_isrshrinks_total",
            "fullMetaSearch": false,
            "hide": false,
            "includeNullMetadata": true,
            "instant": false,
            "legendFormat": "__auto",
            "range": true,
            "refId": "B",
            "useBackend": false
          },
          {
            "datasource": {
              "type": "prometheus",
              "uid": "testing"
            },
            "disableTextWrap": false,
            "editorMode": "builder",
            "expr": "kafka_server_replicamanager_isrexpands_total",
            "fullMetaSearch": false,
            "hide": false,
            "includeNullMetadata": true,
            "instant": false,
            "legendFormat": "__auto",
            "range": true,
            "refId": "A",
            "useBackend": false
          }
        ],
        "title": "Replica Manager ISR Shrinks/Expands",
        "type": "bargauge"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "testing"
        },
        "description": "Number of (producer|consumer|follower) requests per second",
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "continuous-BlYlRd"
            },
            "custom": {
              "axisBorderShow": false,
              "axisCenteredZero": false,
              "axisColorMode": "text",
              "axisLabel": "",
              "axisPlacement": "auto",
              "barAlignment": 0,
              "drawStyle": "line",
              "fillOpacity": 3,
              "gradientMode": "none",
              "hideFrom": {
                "legend": false,
                "tooltip": false,
                "viz": false
              },
              "insertNulls": false,
              "lineInterpolation": "linear",
              "lineStyle": {
                "dash": [
                  10,
                  10
                ],
                "fill": "dash"
              },
              "lineWidth": 3,
              "pointSize": 5,
              "scaleDistribution": {
                "type": "linear"
              },
              "showPoints": "auto",
              "spanNulls": false,
              "stacking": {
                "group": "A",
                "mode": "none"
              },
              "thresholdsStyle": {
                "mode": "off"
              }
            },
            "mappings": [],
            "thresholds": {
              "mode": "absolute",
              "steps": [
                {
                  "color": "green",
                  "value": null
                },
                {
                  "color": "red",
                  "value": 80
                }
              ]
            }
          },
          "overrides": []
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 12,
          "y": 32
        },
        "id": 10,
        "options": {
          "legend": {
            "calcs": [],
            "displayMode": "list",
            "placement": "bottom",
            "showLegend": true
          },
          "tooltip": {
            "mode": "single",
            "sort": "none"
          }
        },
        "targets": [
          {
            "datasource": {
              "type": "prometheus",
              "uid": "testing"
            },
            "disableTextWrap": false,
            "editorMode": "builder",
            "expr": "kafka_network_requestmetrics_totaltimems",
            "fullMetaSearch": false,
            "includeNullMetadata": true,
            "instant": false,
            "legendFormat": "__auto",
            "range": true,
            "refId": "A",
            "useBackend": false
          }
        ],
        "title": "Total Request x Ms",
        "type": "timeseries"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "testing"
        },
        "description": "Number of active controllers in cluster",
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "continuous-YlBl"
            },
            "custom": {
              "fillOpacity": 70,
              "hideFrom": {
                "legend": false,
                "tooltip": false,
                "viz": false
              },
              "insertNulls": false,
              "lineWidth": 0,
              "spanNulls": false
            },
            "mappings": [],
            "thresholds": {
              "mode": "absolute",
              "steps": [
                {
                  "color": "super-light-blue",
                  "value": null
                },
                {
                  "color": "dark-blue",
                  "value": 80
                }
              ]
            }
          },
          "overrides": [
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_controller_KafkaController_ActiveControllerCount\", instance=\"kafka-broker-1:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "ACC : Broker 1:9999"
                }
              ]
            },
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_controller_KafkaController_ActiveControllerCount\", instance=\"kafka-broker-2:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "ACC : Broker 2:9999"
                }
              ]
            },
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_controller_KafkaController_ActiveControllerCount\", instance=\"kafka-broker-3:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "ACC : Broker 3:9999"
                }
              ]
            }
          ]
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 0,
          "y": 40
        },
        "id": 3,
        "options": {
          "alignValue": "left",
          "legend": {
            "displayMode": "list",
            "placement": "bottom",
            "showLegend": true
          },
          "mergeValues": true,
          "rowHeight": 0.9,
          "showValue": "auto",
          "tooltip": {
            "mode": "single",
            "sort": "none"
          }
        },
        "targets": [
          {
            "datasource": {
              "type": "prometheus",
              "uid": "testing"
            },
            "disableTextWrap": false,
            "editorMode": "builder",
            "expr": "kafka_controller_kafkacontroller_activecontrollercount",
            "fullMetaSearch": false,
            "includeNullMetadata": true,
            "instant": false,
            "legendFormat": "__auto",
            "range": true,
            "refId": "A",
            "useBackend": false
          }
        ],
        "title": "Active Controller Count",
        "type": "state-timeline"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "testing"
        },
        "description": "Aggregate incoming bytes",
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "continuous-BlYlRd"
            },
            "custom": {
              "axisBorderShow": false,
              "axisCenteredZero": false,
              "axisColorMode": "text",
              "axisLabel": "",
              "axisPlacement": "auto",
              "barAlignment": 0,
              "drawStyle": "line",
              "fillOpacity": 25,
              "gradientMode": "none",
              "hideFrom": {
                "legend": false,
                "tooltip": false,
                "viz": false
              },
              "insertNulls": false,
              "lineInterpolation": "linear",
              "lineWidth": 1,
              "pointSize": 5,
              "scaleDistribution": {
                "type": "linear"
              },
              "showPoints": "auto",
              "spanNulls": false,
              "stacking": {
                "group": "A",
                "mode": "percent"
              },
              "thresholdsStyle": {
                "mode": "off"
              }
            },
            "mappings": [],
            "thresholds": {
              "mode": "absolute",
              "steps": [
                {
                  "color": "green",
                  "value": null
                },
                {
                  "color": "red",
                  "value": 80
                }
              ]
            }
          },
          "overrides": []
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 12,
          "y": 40
        },
        "id": 6,
        "options": {
          "legend": {
            "calcs": [],
            "displayMode": "hidden",
            "placement": "right",
            "showLegend": false
          },
          "tooltip": {
            "mode": "single",
            "sort": "none"
          }
        },
        "targets": [
          {
            "datasource": {
              "type": "prometheus",
              "uid": "testing"
            },
            "disableTextWrap": false,
            "editorMode": "builder",
            "expr": "kafka_server_brokertopicmetrics_bytesin_total",
            "fullMetaSearch": false,
            "includeNullMetadata": true,
            "instant": false,
            "legendFormat": "__auto",
            "range": true,
            "refId": "A",
            "useBackend": false
          }
        ],
        "title": "Broker Bytes In Total",
        "type": "timeseries"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "testing"
        },
        "description": "Number of active brokers.",
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "palette-classic"
            },
            "custom": {
              "hideFrom": {
                "legend": false,
                "tooltip": false,
                "viz": false
              }
            },
            "mappings": []
          },
          "overrides": []
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 0,
          "y": 48
        },
        "id": 12,
        "options": {
          "displayLabels": [
            "percent"
          ],
          "legend": {
            "calcs": [],
            "displayMode": "hidden",
            "placement": "right",
            "showLegend": false,
            "values": []
          },
          "pieType": "donut",
          "reduceOptions": {
            "calcs": [
              "lastNotNull"
            ],
            "fields": "",
            "values": false
          },
          "tooltip": {
            "mode": "single",
            "sort": "none"
          }
        },
        "pluginVersion": "10.2.0",
        "targets": [
          {
            "datasource": {
              "type": "prometheus",
              "uid": "testing"
            },
            "disableTextWrap": false,
            "editorMode": "builder",
            "expr": "kafka_controller_kafkacontroller_activebrokercount",
            "fullMetaSearch": false,
            "includeNullMetadata": true,
            "instant": false,
            "legendFormat": "__auto",
            "range": true,
            "refId": "A",
            "useBackend": false
          }
        ],
        "title": "Active Broker Count",
        "type": "piechart"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "testing"
        },
        "description": "Cumulative number of requests made by producers to the brokers",
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "continuous-BlPu"
            },
            "custom": {
              "axisBorderShow": false,
              "axisCenteredZero": false,
              "axisColorMode": "text",
              "axisLabel": "",
              "axisPlacement": "auto",
              "barAlignment": 0,
              "drawStyle": "line",
              "fillOpacity": 2,
              "gradientMode": "none",
              "hideFrom": {
                "legend": false,
                "tooltip": false,
                "viz": false
              },
              "insertNulls": false,
              "lineInterpolation": "linear",
              "lineWidth": 2,
              "pointSize": 2,
              "scaleDistribution": {
                "type": "linear"
              },
              "showPoints": "auto",
              "spanNulls": false,
              "stacking": {
                "group": "A",
                "mode": "none"
              },
              "thresholdsStyle": {
                "mode": "off"
              }
            },
            "mappings": [],
            "thresholds": {
              "mode": "absolute",
              "steps": [
                {
                  "color": "green",
                  "value": null
                },
                {
                  "color": "red",
                  "value": 80
                }
              ]
            }
          },
          "overrides": []
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 0,
          "y": 56
        },
        "id": 11,
        "options": {
          "legend": {
            "calcs": [],
            "displayMode": "hidden",
            "placement": "right",
            "showLegend": false
          },
          "tooltip": {
            "mode": "single",
            "sort": "none"
          }
        },
        "pluginVersion": "10.2.0",
        "targets": [
          {
            "datasource": {
              "type": "prometheus",
              "uid": "testing"
            },
            "disableTextWrap": false,
            "editorMode": "builder",
            "expr": "kafka_server_brokertopicmetrics_totalproducerequests_total",
            "fullMetaSearch": false,
            "includeNullMetadata": true,
            "instant": false,
            "legendFormat": "__auto",
            "range": true,
            "refId": "A",
            "useBackend": false
          }
        ],
        "title": "Total Producer Request",
        "type": "timeseries"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "testing"
        },
        "description": "Aggregate outgoing bytes",
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "continuous-YlBl"
            },
            "custom": {
              "axisBorderShow": false,
              "axisCenteredZero": false,
              "axisColorMode": "text",
              "axisLabel": "",
              "axisPlacement": "auto",
              "barAlignment": 0,
              "drawStyle": "line",
              "fillOpacity": 12,
              "gradientMode": "none",
              "hideFrom": {
                "legend": false,
                "tooltip": false,
                "viz": false
              },
              "insertNulls": false,
              "lineInterpolation": "linear",
              "lineStyle": {
                "dash": [
                  0,
                  3,
                  3
                ],
                "fill": "dot"
              },
              "lineWidth": 2,
              "pointSize": 5,
              "scaleDistribution": {
                "type": "linear"
              },
              "showPoints": "auto",
              "spanNulls": false,
              "stacking": {
                "group": "A",
                "mode": "none"
              },
              "thresholdsStyle": {
                "mode": "off"
              }
            },
            "mappings": [],
            "thresholds": {
              "mode": "absolute",
              "steps": [
                {
                  "color": "green",
                  "value": null
                },
                {
                  "color": "red",
                  "value": 80
                }
              ]
            }
          },
          "overrides": []
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 0,
          "y": 64
        },
        "id": 7,
        "options": {
          "legend": {
            "calcs": [],
            "displayMode": "hidden",
            "placement": "right",
            "showLegend": false
          },
          "tooltip": {
            "mode": "single",
            "sort": "none"
          }
        },
        "pluginVersion": "10.2.0",
        "targets": [
          {
            "datasource": {
              "type": "prometheus",
              "uid": "testing"
            },
            "disableTextWrap": false,
            "editorMode": "builder",
            "expr": "kafka_server_brokertopicmetrics_bytesout_total",
            "fullMetaSearch": false,
            "includeNullMetadata": true,
            "instant": false,
            "legendFormat": "__auto",
            "range": true,
            "refId": "A",
            "useBackend": false
          }
        ],
        "title": "Broker Bytes Out Total",
        "type": "timeseries"
      }
    ],
    "refresh": "",
    "schemaVersion": 38,
    "tags": [],
    "templating": {
      "list": []
    },
    "time": {
      "from": "now-1h",
      "to": "now"
    },
    "timepicker": {},
    "timezone": "",
    "title": "Test Dash",
    "uid": "d9098b29-ef80-4e40-86bc-b28bd6e85756",
    "version": 2,
    "weekStart": ""
  }
}

const question = {
  "folderId": 0,
  "overwrite": true,
  "dashboard": {
    "annotations": {
      "list": [
        {
          "builtIn": 1,
          "datasource": {
            "type": "grafana",
            "uid": "-- Grafana --"
          },
          "enable": true,
          "hide": true,
          "iconColor": "rgba(0, 211, 255, 1)",
          "name": "Annotations & Alerts",
          "type": "dashboard"
        }
      ]
    },
    "editable": true,
    "fiscalYearStartMonth": 0,
    "graphTooltip": 0,
    // "id": 8,
    "links": [],
    "liveNow": false,
    "panels": [
      {
        "datasource": {
          "type": "prometheus",
          "uid": "f370827f-878f-4256-a0d4-192418827a14"
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 0,
          "y": 0
        },
        "id": 15,
        "options": {
          "bgColor": "super-light-yellow",
          "clockType": "12 hour",
          "countdownSettings": {
            "endCountdownTime": "2023-11-14T23:10:31-06:00",
            "endText": "00:00:00"
          },
          "countupSettings": {
            "beginCountupTime": "2023-11-14T23:10:31-06:00",
            "beginText": "00:00:00"
          },
          "dateSettings": {
            "dateFormat": "YYYY-MM-DD",
            "fontSize": "20px",
            "fontWeight": "normal",
            "locale": "",
            "showDate": true
          },
          "fontMono": false,
          "mode": "time",
          "refresh": "sec",
          "timeSettings": {
            "fontSize": "30px",
            "fontWeight": "bold"
          },
          "timezone": "US/Central",
          "timezoneSettings": {
            "fontSize": "12px",
            "fontWeight": "normal",
            "showTimezone": false,
            "zoneFormat": "offsetAbbv"
          }
        },
        "pluginVersion": "2.1.3",
        "title": "Houston",
        "type": "grafana-clock-panel"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "f370827f-878f-4256-a0d4-192418827a14"
        },
        "description": "Number of unreplicated partitions",
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "continuous-BlPu"
            },
            "custom": {
              "axisBorderShow": false,
              "axisCenteredZero": false,
              "axisColorMode": "text",
              "axisLabel": "",
              "axisPlacement": "auto",
              "barAlignment": 0,
              "drawStyle": "line",
              "fillOpacity": 3,
              "gradientMode": "none",
              "hideFrom": {
                "legend": false,
                "tooltip": false,
                "viz": false
              },
              "insertNulls": false,
              "lineInterpolation": "linear",
              "lineStyle": {
                "fill": "solid"
              },
              "lineWidth": 2,
              "pointSize": 7,
              "scaleDistribution": {
                "type": "linear"
              },
              "showPoints": "auto",
              "spanNulls": false,
              "stacking": {
                "group": "A",
                "mode": "none"
              },
              "thresholdsStyle": {
                "mode": "off"
              }
            },
            "mappings": [],
            "thresholds": {
              "mode": "absolute",
              "steps": [
                {
                  "color": "green",
                  "value": null
                },
                {
                  "color": "red",
                  "value": 80
                }
              ]
            }
          },
          "overrides": []
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 12,
          "y": 0
        },
        "id": 2,
        "options": {
          "legend": {
            "calcs": [],
            "displayMode": "list",
            "placement": "bottom",
            "showLegend": true
          },
          "tooltip": {
            "mode": "single",
            "sort": "none"
          }
        },
        "targets": [
          {
            "datasource": {
              "type": "prometheus",
              "uid": "f370827f-878f-4256-a0d4-192418827a14"
            },
            "disableTextWrap": false,
            "editorMode": "builder",
            "expr": "kafka_server_replicamanager_underreplicatedpartitions",
            "fullMetaSearch": false,
            "includeNullMetadata": true,
            "instant": false,
            "legendFormat": "__auto",
            "range": true,
            "refId": "A",
            "useBackend": false
          }
        ],
        "title": "Under Replicated Partitions",
        "type": "timeseries"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "f370827f-878f-4256-a0d4-192418827a14"
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 0,
          "y": 8
        },
        "id": 14,
        "options": {
          "bgColor": "dark-purple",
          "clockType": "12 hour",
          "countdownSettings": {
            "endCountdownTime": "2023-11-14T23:09:08-06:00",
            "endText": "00:00:00"
          },
          "countupSettings": {
            "beginCountupTime": "2023-11-14T23:09:08-06:00",
            "beginText": "00:00:00"
          },
          "dateSettings": {
            "dateFormat": "YYYY-MM-DD",
            "fontSize": "20px",
            "fontWeight": "normal",
            "locale": "",
            "showDate": true
          },
          "fontMono": false,
          "mode": "time",
          "refresh": "sec",
          "timeSettings": {
            "fontSize": "30px",
            "fontWeight": "bold"
          },
          "timezone": "America/Los_Angeles",
          "timezoneSettings": {
            "fontSize": "12px",
            "fontWeight": "normal",
            "showTimezone": false,
            "zoneFormat": "offsetAbbv"
          }
        },
        "pluginVersion": "2.1.3",
        "title": "Los Angeles",
        "type": "grafana-clock-panel"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "f370827f-878f-4256-a0d4-192418827a14"
        },
        "description": "Number of “unclean” elections per ms",
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "continuous-BlPu"
            },
            "mappings": [],
            "thresholds": {
              "mode": "absolute",
              "steps": [
                {
                  "color": "green",
                  "value": null
                },
                {
                  "color": "red",
                  "value": 80
                }
              ]
            },
            "unit": "short"
          },
          "overrides": [
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_controller_ControllerStats_UncleanLeaderElectionEnableRateAndTimeMs_count\", instance=\"kafka-broker-1:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "ULExMs : Broker 1:9999"
                }
              ]
            },
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_controller_ControllerStats_UncleanLeaderElectionEnableRateAndTimeMs_count\", instance=\"kafka-broker-2:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "ULExMs : Broker 2:9999"
                }
              ]
            },
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_controller_ControllerStats_UncleanLeaderElectionEnableRateAndTimeMs_count\", instance=\"kafka-broker-3:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "ULExMs : Broker 3:9999"
                }
              ]
            }
          ]
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 12,
          "y": 8
        },
        "id": 4,
        "options": {
          "colorMode": "background",
          "graphMode": "none",
          "justifyMode": "auto",
          "orientation": "auto",
          "reduceOptions": {
            "calcs": [
              "lastNotNull"
            ],
            "fields": "",
            "values": false
          },
          "textMode": "auto"
        },
        "pluginVersion": "10.2.0",
        "targets": [
          {
            "datasource": {
              "type": "prometheus",
              "uid": "f370827f-878f-4256-a0d4-192418827a14"
            },
            "disableTextWrap": false,
            "editorMode": "builder",
            "expr": "kafka_controller_controllerstats_uncleanleaderelectionenablerateandtimems_count",
            "fullMetaSearch": false,
            "includeNullMetadata": true,
            "instant": false,
            "legendFormat": "__auto",
            "range": true,
            "refId": "A",
            "useBackend": false
          }
        ],
        "title": "Unclean Leader Election Rate Ms",
        "type": "stat"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "f370827f-878f-4256-a0d4-192418827a14"
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 0,
          "y": 16
        },
        "id": 13,
        "options": {
          "bgColor": "dark-blue",
          "clockType": "12 hour",
          "countdownSettings": {
            "endCountdownTime": "2023-11-14T23:07:27-06:00",
            "endText": "00:00:00"
          },
          "countupSettings": {
            "beginCountupTime": "2023-11-14T23:07:27-06:00",
            "beginText": "00:00:00"
          },
          "dateSettings": {
            "dateFormat": "YYYY-MM-DD",
            "fontSize": "20px",
            "fontWeight": "normal",
            "locale": "",
            "showDate": true
          },
          "fontMono": false,
          "mode": "time",
          "refresh": "sec",
          "timeSettings": {
            "fontSize": "30px",
            "fontWeight": "bold"
          },
          "timezone": "America/New_York",
          "timezoneSettings": {
            "fontSize": "12px",
            "fontWeight": "normal",
            "showTimezone": false,
            "zoneFormat": "offsetAbbv"
          }
        },
        "pluginVersion": "2.1.3",
        "title": "New York",
        "type": "grafana-clock-panel"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "f370827f-878f-4256-a0d4-192418827a14"
        },
        "description": "Total time (in ms) to serve the specified request (Produce/Fetch)",
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "palette-classic"
            },
            "custom": {
              "axisBorderShow": false,
              "axisCenteredZero": false,
              "axisColorMode": "text",
              "axisLabel": "",
              "axisPlacement": "auto",
              "barAlignment": 0,
              "drawStyle": "line",
              "fillOpacity": 0,
              "gradientMode": "none",
              "hideFrom": {
                "legend": false,
                "tooltip": false,
                "viz": false
              },
              "insertNulls": false,
              "lineInterpolation": "linear",
              "lineWidth": 1,
              "pointSize": 5,
              "scaleDistribution": {
                "type": "linear"
              },
              "showPoints": "auto",
              "spanNulls": false,
              "stacking": {
                "group": "A",
                "mode": "none"
              },
              "thresholdsStyle": {
                "mode": "off"
              }
            },
            "mappings": [],
            "thresholds": {
              "mode": "absolute",
              "steps": [
                {
                  "color": "green",
                  "value": null
                },
                {
                  "color": "red",
                  "value": 80
                }
              ]
            }
          },
          "overrides": []
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 12,
          "y": 16
        },
        "id": 5,
        "options": {
          "legend": {
            "calcs": [],
            "displayMode": "list",
            "placement": "bottom",
            "showLegend": true
          },
          "tooltip": {
            "mode": "single",
            "sort": "none"
          }
        },
        "targets": [
          {
            "datasource": {
              "type": "prometheus",
              "uid": "f370827f-878f-4256-a0d4-192418827a14"
            },
            "disableTextWrap": false,
            "editorMode": "builder",
            "expr": "kafka_network_requestmetrics_totaltimems",
            "fullMetaSearch": false,
            "includeNullMetadata": true,
            "instant": false,
            "legendFormat": "__auto",
            "range": true,
            "refId": "A",
            "useBackend": false
          }
        ],
        "title": "Total Time Ms",
        "type": "timeseries"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "f370827f-878f-4256-a0d4-192418827a14"
        },
        "description": "Number of offline partitions",
        "fieldConfig": {
          "defaults": {
            "mappings": [],
            "thresholds": {
              "mode": "percentage",
              "steps": [
                {
                  "color": "super-light-blue",
                  "value": null
                },
                {
                  "color": "dark-blue",
                  "value": 70
                },
                {
                  "color": "dark-purple",
                  "value": 85
                }
              ]
            }
          },
          "overrides": [
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_controller_KafkaController_OfflinePartitionsCount\", instance=\"kafka-broker-1:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "OPC : Broker 1:9999"
                }
              ]
            },
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_controller_KafkaController_OfflinePartitionsCount\", instance=\"kafka-broker-2:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "OPC : Broker 2:9999"
                }
              ]
            },
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_controller_KafkaController_OfflinePartitionsCount\", instance=\"kafka-broker-3:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "OPC : Broker 3:9999"
                }
              ]
            }
          ]
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 0,
          "y": 24
        },
        "id": 1,
        "options": {
          "minVizHeight": 75,
          "minVizWidth": 75,
          "orientation": "auto",
          "reduceOptions": {
            "calcs": [
              "lastNotNull"
            ],
            "fields": "",
            "values": false
          },
          "showThresholdLabels": false,
          "showThresholdMarkers": true
        },
        "pluginVersion": "10.2.0",
        "targets": [
          {
            "datasource": {
              "type": "prometheus",
              "uid": "f370827f-878f-4256-a0d4-192418827a14"
            },
            "disableTextWrap": false,
            "editorMode": "builder",
            "expr": "kafka_controller_kafkacontroller_offlinepartitionscount",
            "fullMetaSearch": false,
            "includeNullMetadata": true,
            "instant": false,
            "legendFormat": "__auto",
            "range": true,
            "refId": "A",
            "useBackend": false
          }
        ],
        "title": "Offline Partition Count",
        "type": "gauge"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "f370827f-878f-4256-a0d4-192418827a14"
        },
        "description": "Number of failed partitions",
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "continuous-BlYlRd"
            },
            "mappings": [],
            "thresholds": {
              "mode": "absolute",
              "steps": [
                {
                  "color": "green",
                  "value": null
                },
                {
                  "color": "red",
                  "value": 80
                }
              ]
            },
            "unit": "short"
          },
          "overrides": [
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_server_ReplicaFetcherManager_FailedPartitionsCount\", clientId=\"Replica\", instance=\"kafka-broker-1:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "FPC : Broker 1:9999"
                }
              ]
            },
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_server_ReplicaFetcherManager_FailedPartitionsCount\", clientId=\"Replica\", instance=\"kafka-broker-2:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "FPC : Broker 2:9999"
                }
              ]
            },
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_server_ReplicaFetcherManager_FailedPartitionsCount\", clientId=\"Replica\", instance=\"kafka-broker-3:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "FPC : Broker 3:9999"
                }
              ]
            }
          ]
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 12,
          "y": 24
        },
        "id": 9,
        "options": {
          "colorMode": "background",
          "graphMode": "none",
          "justifyMode": "auto",
          "orientation": "auto",
          "reduceOptions": {
            "calcs": [
              "lastNotNull"
            ],
            "fields": "",
            "values": false
          },
          "textMode": "auto"
        },
        "pluginVersion": "10.2.0",
        "targets": [
          {
            "datasource": {
              "type": "prometheus",
              "uid": "f370827f-878f-4256-a0d4-192418827a14"
            },
            "disableTextWrap": false,
            "editorMode": "builder",
            "expr": "kafka_server_replicafetchermanager_failedpartitionscount",
            "fullMetaSearch": false,
            "includeNullMetadata": true,
            "instant": false,
            "legendFormat": "__auto",
            "range": true,
            "refId": "A",
            "useBackend": false
          }
        ],
        "title": "Failed Partitions Count",
        "type": "stat"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "f370827f-878f-4256-a0d4-192418827a14"
        },
        "description": "Rate at which the pool of in-sync replicas (ISRs) shrinks/expands",
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "continuous-BlYlRd"
            },
            "mappings": [],
            "thresholds": {
              "mode": "absolute",
              "steps": [
                {
                  "color": "green",
                  "value": null
                },
                {
                  "color": "red",
                  "value": 80
                }
              ]
            }
          },
          "overrides": [
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_server_ReplicaManager_IsrShrinks_total\", instance=\"kafka-broker-1:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "ISR Shrinks Total: Broker 1:9999"
                }
              ]
            },
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_server_ReplicaManager_IsrShrinks_total\", instance=\"kafka-broker-2:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "ISR Shrinks Total: Broker 2:9999"
                }
              ]
            },
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_server_ReplicaManager_IsrShrinks_total\", instance=\"kafka-broker-3:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "ISR Shrinks Total: Broker 3:9999"
                }
              ]
            },
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_server_ReplicaManager_IsrExpands_total\", instance=\"kafka-broker-1:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "ISR Expands Total: Broker 1:9999"
                }
              ]
            },
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_server_ReplicaManager_IsrExpands_total\", instance=\"kafka-broker-2:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "ISR Expands Total: Broker 2:9999"
                }
              ]
            },
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_server_ReplicaManager_IsrExpands_total\", instance=\"kafka-broker-3:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "ISR Expands Total: Broker 1:9999"
                }
              ]
            }
          ]
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 0,
          "y": 32
        },
        "id": 8,
        "options": {
          "displayMode": "lcd",
          "minVizHeight": 10,
          "minVizWidth": 0,
          "namePlacement": "auto",
          "orientation": "horizontal",
          "reduceOptions": {
            "calcs": [
              "lastNotNull"
            ],
            "fields": "",
            "values": false
          },
          "showUnfilled": true,
          "valueMode": "color"
        },
        "pluginVersion": "10.2.0",
        "targets": [
          {
            "datasource": {
              "type": "prometheus",
              "uid": "f370827f-878f-4256-a0d4-192418827a14"
            },
            "disableTextWrap": false,
            "editorMode": "builder",
            "expr": "kafka_server_replicamanager_isrshrinks_total",
            "fullMetaSearch": false,
            "hide": false,
            "includeNullMetadata": true,
            "instant": false,
            "legendFormat": "__auto",
            "range": true,
            "refId": "B",
            "useBackend": false
          },
          {
            "datasource": {
              "type": "prometheus",
              "uid": "f370827f-878f-4256-a0d4-192418827a14"
            },
            "disableTextWrap": false,
            "editorMode": "builder",
            "expr": "kafka_server_replicamanager_isrexpands_total",
            "fullMetaSearch": false,
            "hide": false,
            "includeNullMetadata": true,
            "instant": false,
            "legendFormat": "__auto",
            "range": true,
            "refId": "A",
            "useBackend": false
          }
        ],
        "title": "Replica Manager ISR Shrinks/Expands",
        "type": "bargauge"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "f370827f-878f-4256-a0d4-192418827a14"
        },
        "description": "Number of (producer|consumer|follower) requests per second",
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "continuous-BlYlRd"
            },
            "custom": {
              "axisBorderShow": false,
              "axisCenteredZero": false,
              "axisColorMode": "text",
              "axisLabel": "",
              "axisPlacement": "auto",
              "barAlignment": 0,
              "drawStyle": "line",
              "fillOpacity": 3,
              "gradientMode": "none",
              "hideFrom": {
                "legend": false,
                "tooltip": false,
                "viz": false
              },
              "insertNulls": false,
              "lineInterpolation": "linear",
              "lineStyle": {
                "dash": [
                  10,
                  10
                ],
                "fill": "dash"
              },
              "lineWidth": 3,
              "pointSize": 5,
              "scaleDistribution": {
                "type": "linear"
              },
              "showPoints": "auto",
              "spanNulls": false,
              "stacking": {
                "group": "A",
                "mode": "none"
              },
              "thresholdsStyle": {
                "mode": "off"
              }
            },
            "mappings": [],
            "thresholds": {
              "mode": "absolute",
              "steps": [
                {
                  "color": "green",
                  "value": null
                },
                {
                  "color": "red",
                  "value": 80
                }
              ]
            }
          },
          "overrides": []
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 12,
          "y": 32
        },
        "id": 10,
        "options": {
          "legend": {
            "calcs": [],
            "displayMode": "list",
            "placement": "bottom",
            "showLegend": true
          },
          "tooltip": {
            "mode": "single",
            "sort": "none"
          }
        },
        "targets": [
          {
            "datasource": {
              "type": "prometheus",
              "uid": "f370827f-878f-4256-a0d4-192418827a14"
            },
            "disableTextWrap": false,
            "editorMode": "builder",
            "expr": "kafka_network_requestmetrics_totaltimems",
            "fullMetaSearch": false,
            "includeNullMetadata": true,
            "instant": false,
            "legendFormat": "__auto",
            "range": true,
            "refId": "A",
            "useBackend": false
          }
        ],
        "title": "Total Request x Ms",
        "type": "timeseries"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "f370827f-878f-4256-a0d4-192418827a14"
        },
        "description": "Number of active controllers in cluster",
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "continuous-YlBl"
            },
            "custom": {
              "fillOpacity": 70,
              "hideFrom": {
                "legend": false,
                "tooltip": false,
                "viz": false
              },
              "insertNulls": false,
              "lineWidth": 0,
              "spanNulls": false
            },
            "mappings": [],
            "thresholds": {
              "mode": "absolute",
              "steps": [
                {
                  "color": "super-light-blue",
                  "value": null
                },
                {
                  "color": "dark-blue",
                  "value": 80
                }
              ]
            }
          },
          "overrides": [
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_controller_KafkaController_ActiveControllerCount\", instance=\"kafka-broker-1:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "ACC : Broker 1:9999"
                }
              ]
            },
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_controller_KafkaController_ActiveControllerCount\", instance=\"kafka-broker-2:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "ACC : Broker 2:9999"
                }
              ]
            },
            {
              "matcher": {
                "id": "byName",
                "options": "{__name__=\"kafka_controller_KafkaController_ActiveControllerCount\", instance=\"kafka-broker-3:9999\", job=\"kafka\"}"
              },
              "properties": [
                {
                  "id": "displayName",
                  "value": "ACC : Broker 3:9999"
                }
              ]
            }
          ]
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 0,
          "y": 40
        },
        "id": 3,
        "options": {
          "alignValue": "left",
          "legend": {
            "displayMode": "list",
            "placement": "bottom",
            "showLegend": true
          },
          "mergeValues": true,
          "rowHeight": 0.9,
          "showValue": "auto",
          "tooltip": {
            "mode": "single",
            "sort": "none"
          }
        },
        "targets": [
          {
            "datasource": {
              "type": "prometheus",
              "uid": "f370827f-878f-4256-a0d4-192418827a14"
            },
            "disableTextWrap": false,
            "editorMode": "builder",
            "expr": "kafka_controller_kafkacontroller_activecontrollercount",
            "fullMetaSearch": false,
            "includeNullMetadata": true,
            "instant": false,
            "legendFormat": "__auto",
            "range": true,
            "refId": "A",
            "useBackend": false
          }
        ],
        "title": "Active Controller Count",
        "type": "state-timeline"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "f370827f-878f-4256-a0d4-192418827a14"
        },
        "description": "Aggregate incoming bytes",
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "continuous-BlYlRd"
            },
            "custom": {
              "axisBorderShow": false,
              "axisCenteredZero": false,
              "axisColorMode": "text",
              "axisLabel": "",
              "axisPlacement": "auto",
              "barAlignment": 0,
              "drawStyle": "line",
              "fillOpacity": 25,
              "gradientMode": "none",
              "hideFrom": {
                "legend": false,
                "tooltip": false,
                "viz": false
              },
              "insertNulls": false,
              "lineInterpolation": "linear",
              "lineWidth": 1,
              "pointSize": 5,
              "scaleDistribution": {
                "type": "linear"
              },
              "showPoints": "auto",
              "spanNulls": false,
              "stacking": {
                "group": "A",
                "mode": "percent"
              },
              "thresholdsStyle": {
                "mode": "off"
              }
            },
            "mappings": [],
            "thresholds": {
              "mode": "absolute",
              "steps": [
                {
                  "color": "green",
                  "value": null
                },
                {
                  "color": "red",
                  "value": 80
                }
              ]
            }
          },
          "overrides": []
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 12,
          "y": 40
        },
        "id": 6,
        "options": {
          "legend": {
            "calcs": [],
            "displayMode": "hidden",
            "placement": "right",
            "showLegend": false
          },
          "tooltip": {
            "mode": "single",
            "sort": "none"
          }
        },
        "targets": [
          {
            "datasource": {
              "type": "prometheus",
              "uid": "f370827f-878f-4256-a0d4-192418827a14"
            },
            "disableTextWrap": false,
            "editorMode": "builder",
            "expr": "kafka_server_brokertopicmetrics_bytesin_total",
            "fullMetaSearch": false,
            "includeNullMetadata": true,
            "instant": false,
            "legendFormat": "__auto",
            "range": true,
            "refId": "A",
            "useBackend": false
          }
        ],
        "title": "Broker Bytes In Total",
        "type": "timeseries"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "f370827f-878f-4256-a0d4-192418827a14"
        },
        "description": "Number of active brokers.",
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "palette-classic"
            },
            "custom": {
              "hideFrom": {
                "legend": false,
                "tooltip": false,
                "viz": false
              }
            },
            "mappings": []
          },
          "overrides": []
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 0,
          "y": 48
        },
        "id": 12,
        "options": {
          "displayLabels": [
            "percent"
          ],
          "legend": {
            "calcs": [],
            "displayMode": "hidden",
            "placement": "right",
            "showLegend": false,
            "values": []
          },
          "pieType": "donut",
          "reduceOptions": {
            "calcs": [
              "lastNotNull"
            ],
            "fields": "",
            "values": false
          },
          "tooltip": {
            "mode": "single",
            "sort": "none"
          }
        },
        "pluginVersion": "10.2.0",
        "targets": [
          {
            "datasource": {
              "type": "prometheus",
              "uid": "f370827f-878f-4256-a0d4-192418827a14"
            },
            "disableTextWrap": false,
            "editorMode": "builder",
            "expr": "kafka_controller_kafkacontroller_activebrokercount",
            "fullMetaSearch": false,
            "includeNullMetadata": true,
            "instant": false,
            "legendFormat": "__auto",
            "range": true,
            "refId": "A",
            "useBackend": false
          }
        ],
        "title": "Active Broker Count",
        "type": "piechart"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "f370827f-878f-4256-a0d4-192418827a14"
        },
        "description": "Cumulative number of requests made by producers to the brokers",
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "continuous-BlPu"
            },
            "custom": {
              "axisBorderShow": false,
              "axisCenteredZero": false,
              "axisColorMode": "text",
              "axisLabel": "",
              "axisPlacement": "auto",
              "barAlignment": 0,
              "drawStyle": "line",
              "fillOpacity": 2,
              "gradientMode": "none",
              "hideFrom": {
                "legend": false,
                "tooltip": false,
                "viz": false
              },
              "insertNulls": false,
              "lineInterpolation": "linear",
              "lineWidth": 2,
              "pointSize": 2,
              "scaleDistribution": {
                "type": "linear"
              },
              "showPoints": "auto",
              "spanNulls": false,
              "stacking": {
                "group": "A",
                "mode": "none"
              },
              "thresholdsStyle": {
                "mode": "off"
              }
            },
            "mappings": [],
            "thresholds": {
              "mode": "absolute",
              "steps": [
                {
                  "color": "green",
                  "value": null
                },
                {
                  "color": "red",
                  "value": 80
                }
              ]
            }
          },
          "overrides": []
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 0,
          "y": 56
        },
        "id": 11,
        "options": {
          "legend": {
            "calcs": [],
            "displayMode": "hidden",
            "placement": "right",
            "showLegend": false
          },
          "tooltip": {
            "mode": "single",
            "sort": "none"
          }
        },
        "pluginVersion": "10.2.0",
        "targets": [
          {
            "datasource": {
              "type": "prometheus",
              "uid": "f370827f-878f-4256-a0d4-192418827a14"
            },
            "disableTextWrap": false,
            "editorMode": "builder",
            "expr": "kafka_server_brokertopicmetrics_totalproducerequests_total",
            "fullMetaSearch": false,
            "includeNullMetadata": true,
            "instant": false,
            "legendFormat": "__auto",
            "range": true,
            "refId": "A",
            "useBackend": false
          }
        ],
        "title": "Total Producer Request",
        "type": "timeseries"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "f370827f-878f-4256-a0d4-192418827a14"
        },
        "description": "Aggregate outgoing bytes",
        "fieldConfig": {
          "defaults": {
            "color": {
              "mode": "continuous-YlBl"
            },
            "custom": {
              "axisBorderShow": false,
              "axisCenteredZero": false,
              "axisColorMode": "text",
              "axisLabel": "",
              "axisPlacement": "auto",
              "barAlignment": 0,
              "drawStyle": "line",
              "fillOpacity": 12,
              "gradientMode": "none",
              "hideFrom": {
                "legend": false,
                "tooltip": false,
                "viz": false
              },
              "insertNulls": false,
              "lineInterpolation": "linear",
              "lineStyle": {
                "dash": [
                  0,
                  3,
                  3
                ],
                "fill": "dot"
              },
              "lineWidth": 2,
              "pointSize": 5,
              "scaleDistribution": {
                "type": "linear"
              },
              "showPoints": "auto",
              "spanNulls": false,
              "stacking": {
                "group": "A",
                "mode": "none"
              },
              "thresholdsStyle": {
                "mode": "off"
              }
            },
            "mappings": [],
            "thresholds": {
              "mode": "absolute",
              "steps": [
                {
                  "color": "green",
                  "value": null
                },
                {
                  "color": "red",
                  "value": 80
                }
              ]
            }
          },
          "overrides": []
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 0,
          "y": 64
        },
        "id": 7,
        "options": {
          "legend": {
            "calcs": [],
            "displayMode": "hidden",
            "placement": "right",
            "showLegend": false
          },
          "tooltip": {
            "mode": "single",
            "sort": "none"
          }
        },
        "pluginVersion": "10.2.0",
        "targets": [
          {
            "datasource": {
              "type": "prometheus",
              "uid": "f370827f-878f-4256-a0d4-192418827a14"
            },
            "disableTextWrap": false,
            "editorMode": "builder",
            "expr": "kafka_server_brokertopicmetrics_bytesout_total",
            "fullMetaSearch": false,
            "includeNullMetadata": true,
            "instant": false,
            "legendFormat": "__auto",
            "range": true,
            "refId": "A",
            "useBackend": false
          }
        ],
        "title": "Broker Bytes Out Total",
        "type": "timeseries"
      }
    ],
    "refresh": "",
    "schemaVersion": 38,
    "tags": [],
    "templating": {
      "list": []
    },
    "time": {
      "from": "now-1h",
      "to": "now"
    },
    "timepicker": {},
    "timezone": "",
    "title": "Test Dash",
    "uid": "d9098b29-ef80-4e40-86bc-b28bd6e85756",
    "version": 2,
    "weekStart": ""
  }
}

module.exports = {question, answer};