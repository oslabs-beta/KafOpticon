module.exports = {
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
    "links": [],
    "liveNow": false,
    "panels": [
      {
        "datasource": {
          "type": "prometheus",
          "uid": "ef03d81f-d73d-4d51-b52f-e5a09345738d"
        },
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
          "x": 0,
          "y": 0
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
        "targets": [
          {
            "datasource": {
              "type": "prometheus",
              "uid": "ef03d81f-d73d-4d51-b52f-e5a09345738d"
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
        "title": "Bytes Out Total",
        "type": "timeseries"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "ef03d81f-d73d-4d51-b52f-e5a09345738d"
        },
        "fieldConfig": {
          "defaults": {
            "mappings": [],
            "thresholds": {
              "mode": "percentage",
              "steps": [
                {
                  "color": "super-light-yellow",
                  "value": null
                },
                {
                  "color": "semi-dark-blue",
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
              "uid": "ef03d81f-d73d-4d51-b52f-e5a09345738d"
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
          "uid": "ef03d81f-d73d-4d51-b52f-e5a09345738d"
        },
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
          "x": 0,
          "y": 8
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
              "uid": "ef03d81f-d73d-4d51-b52f-e5a09345738d"
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
        "title": "Bytes In Total",
        "type": "timeseries"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "ef03d81f-d73d-4d51-b52f-e5a09345738d"
        },
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
          "y": 8
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
              "uid": "ef03d81f-d73d-4d51-b52f-e5a09345738d"
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
          "uid": "ef03d81f-d73d-4d51-b52f-e5a09345738d"
        },
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
          "x": 0,
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
              "uid": "ef03d81f-d73d-4d51-b52f-e5a09345738d"
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
          "uid": "ef03d81f-d73d-4d51-b52f-e5a09345738d"
        },
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
              "drawStyle": "bars",
              "fillOpacity": 100,
              "gradientMode": "hue",
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
                "mode": "normal"
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
        "id": 3,
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
              "uid": "ef03d81f-d73d-4d51-b52f-e5a09345738d"
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
        "type": "timeseries"
      },
      {
        "datasource": {
          "type": "prometheus",
          "uid": "ef03d81f-d73d-4d51-b52f-e5a09345738d"
        },
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
                  "color": "green"
                },
                {
                  "color": "red",
                  "value": 80
                }
              ]
            },
            "unit": "short"
          },
          "overrides": []
        },
        "gridPos": {
          "h": 8,
          "w": 12,
          "x": 0,
          "y": 24
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
              "uid": "ef03d81f-d73d-4d51-b52f-e5a09345738d"
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
        "title": "Unclean Leader Election",
        "type": "stat"
      }
    ],
    "refresh": "",
    "schemaVersion": 38,
    "tags": [],
    "templating": {
      "list": []
    },
    "time": {
      "from": "now-15m",
      "to": "now"
    },
    "timepicker": {},
    "timezone": "browser",
    "title": "Test Dash",
    "uid": "d9098b29-ef80-4e40-86bc-b28bd6e85756",
    "weekStart": ""
  }
};