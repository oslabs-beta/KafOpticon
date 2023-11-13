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
  "id": null,
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
              "mode": "palette-classic"
          },
          "custom": {
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
          "y": 0
      },
      "id": 3,
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
          "expr": "kafka_network_requestmetrics_totaltimems_count",
          "fullMetaSearch": false,
          "includeNullMetadata": true,
          "instant": false,
          "legendFormat": "__auto",
          "range": true,
          "refId": "A",
          "useBackend": false
          }
      ],
      "title": "Panel Title",
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
      "title": "Panel Title",
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
      "id": 1,
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
      "title": "Panel Title",
      "type": "timeseries"
      }
  ],
  "refresh": "",
  "schemaVersion": 38,
  "style": "dark",
  "tags": [],
  "templating": {
      "list": []
  },
  "time": {
      "from": "now-5m",
      "to": "now"
  },
  "timepicker": {},
  "timezone": "browser",
  "title": "Performance Metrics",
  "uid": null,
  "weekStart": ""
  }
}