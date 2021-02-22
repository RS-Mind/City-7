var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "City 7 - overworld"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1614025927",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "North",
            "zoomLevels": 5,
            "defaultZoom": 1,
            "maxZoom": 5,
            "path": "North",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "City 7 - overworld",
            "last_rendertime": 1613080249,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -269,
                66,
                -129
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        },
        {
            "name": "South",
            "zoomLevels": 5,
            "defaultZoom": 1,
            "maxZoom": 5,
            "path": "South",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "City 7 - overworld",
            "last_rendertime": 1613080249,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -269,
                66,
                -129
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 2
        }
    ]
};
