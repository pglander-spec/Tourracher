var APP_DATA = {
  "scenes": [
    {
      "id": "0-street-view",
      "name": "Street view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.23085166504208487,
        "pitch": -0.049513367244720996,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": -0.4525206666758841,
          "pitch": -0.09833841358610584,
          "rotation": 0,
          "target": "1-porch"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-porch",
      "name": "Porch",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.022353645115813947,
        "pitch": 0.01883667799802069,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": -2.881339714903387,
          "pitch": 0.9344622964521214,
          "rotation": 0,
          "target": "0-street-view"
        },
        {
          "yaw": -0.6632250429756965,
          "pitch": 0.1883260068363537,
          "rotation": 0,
          "target": "4-ski-storage-room"
        },
        {
          "yaw": -0.20518718384039225,
          "pitch": 0.12939836492353685,
          "rotation": 0,
          "target": "2-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-hallway",
      "name": "Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.0304380722980433,
        "pitch": 0.3316654329469628,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": -1.997260138459385,
          "pitch": 0.1487729442495116,
          "rotation": 0,
          "target": "1-porch"
        },
        {
          "yaw": 3.001635037359746,
          "pitch": 0.22978352063123353,
          "rotation": 0,
          "target": "3-bathroom-1"
        },
        {
          "yaw": -0.6738402567387034,
          "pitch": 0.3216409208304629,
          "rotation": 0,
          "target": "4-ski-storage-room"
        },
        {
          "yaw": 1.0755542372440257,
          "pitch": 0.3839965545175055,
          "rotation": 0,
          "target": "6-entrance-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-bathroom-1",
      "name": "Bathroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.068958404850296,
        "pitch": 0.6223522284782419,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": 0.939498034964771,
          "pitch": 0.08732966726299907,
          "rotation": 0,
          "target": "2-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-ski-storage-room",
      "name": "Ski Storage room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.2468606462455583,
        "pitch": 0.23453700273828204,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": 2.9015332035536403,
          "pitch": 0.25257993460113326,
          "rotation": 0,
          "target": "1-porch"
        },
        {
          "yaw": 1.2708729829038177,
          "pitch": 0.32083712087399974,
          "rotation": 0,
          "target": "2-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.088630586065463,
        "pitch": 0.3614694009538191,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": -1.5481945707879738,
          "pitch": 0.7184992881618086,
          "rotation": 0,
          "target": "6-entrance-living-room"
        },
        {
          "yaw": -0.10790070029502452,
          "pitch": 0.7753996447553995,
          "rotation": 0,
          "target": "16-living-room"
        },
        {
          "yaw": 0.8179821139611718,
          "pitch": 0.21137027934213748,
          "rotation": 0,
          "target": "18-balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-entrance-living-room",
      "name": "Entrance living room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.8339094136316465,
        "pitch": 0.16156745280031615,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": -0.7522990681539365,
          "pitch": 0.6911346034514132,
          "rotation": 0,
          "target": "16-living-room"
        },
        {
          "yaw": 1.4267359037940377,
          "pitch": 0.9295909502561042,
          "rotation": 0,
          "target": "5-kitchen"
        },
        {
          "yaw": -2.045778613227153,
          "pitch": 0.2601374733186841,
          "rotation": 0,
          "target": "7-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-stairs",
      "name": "Stairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.790768454204766,
        "pitch": 0.11631847260586348,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": -2.2731533313919154,
          "pitch": 0.7537164875378899,
          "rotation": 0,
          "target": "6-entrance-living-room"
        },
        {
          "yaw": -3.101884987949207,
          "pitch": 0.128595953771093,
          "rotation": 0,
          "target": "8-hallway-uppstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-hallway-uppstairs",
      "name": "Hallway Uppstairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.280426867225799,
        "pitch": 0.12879307047412425,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": -0.6400720419682031,
          "pitch": 0.22636398037527705,
          "rotation": 0,
          "target": "10-bedroom-1"
        },
        {
          "yaw": 0.2939085935726595,
          "pitch": 0.19133859589644686,
          "rotation": 0,
          "target": "12-bedroom-2"
        },
        {
          "yaw": 1.0911416806326795,
          "pitch": 0.24075463778055983,
          "rotation": 0,
          "target": "14-bathroom-2"
        },
        {
          "yaw": 2.3405624666855225,
          "pitch": 0.2420051440896156,
          "rotation": 0,
          "target": "15-bedroom-3"
        },
        {
          "yaw": -3.1106796398491046,
          "pitch": 0.20102640235347558,
          "rotation": 0,
          "target": "9-bedroom-4"
        },
        {
          "yaw": -1.5499012314603533,
          "pitch": 0.5344053640455826,
          "rotation": 0,
          "target": "7-stairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-bedroom-4",
      "name": "Bedroom 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.017419986196049564,
        "pitch": 0.616597829679776,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": 1.5666938923228724,
          "pitch": 0.33327912692141304,
          "rotation": 0,
          "target": "8-hallway-uppstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-bedroom-1",
      "name": "Bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.9865970568512754,
        "pitch": 0.481435512311986,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": 0.512254963952989,
          "pitch": 0.1922130631845782,
          "rotation": 0,
          "target": "8-hallway-uppstairs"
        },
        {
          "yaw": -2.432626637867285,
          "pitch": 0.07125892642273968,
          "rotation": 0,
          "target": "11-balcony-uppstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-balcony-uppstairs",
      "name": "Balcony uppstairs",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.7843881378912414,
        "pitch": 0.17750735102341508,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": -2.6219509622662436,
          "pitch": 0.10033558843462842,
          "rotation": 0,
          "target": "10-bedroom-1"
        },
        {
          "yaw": 2.3501773460845516,
          "pitch": 0.230720227281072,
          "rotation": 0,
          "target": "12-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.18688284918,
        "pitch": 0.42409387190794945,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": 0.7997332235774159,
          "pitch": 0.33008994185280116,
          "rotation": 0,
          "target": "11-balcony-uppstairs"
        },
        {
          "yaw": 2.697412352432771,
          "pitch": 0.10805027079214113,
          "rotation": 0,
          "target": "13-ensuite-bathroom"
        },
        {
          "yaw": -2.4580212423951053,
          "pitch": 0.048329777275867514,
          "rotation": 0,
          "target": "8-hallway-uppstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-ensuite-bathroom",
      "name": "Ensuite Bathroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.3027223062058155,
        "pitch": -0.08038093532825386,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": -2.8967304943245473,
          "pitch": 0.12061557797688138,
          "rotation": 0,
          "target": "12-bedroom-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-bathroom-2",
      "name": "Bathroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.7585033254115627,
        "pitch": 0.16820330499413316,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": -2.231235596536699,
          "pitch": 0.16249275395716545,
          "rotation": 0,
          "target": "8-hallway-uppstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-bedroom-3",
      "name": "Bedroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.272504419597883,
        "pitch": 0.6815904912276576,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": -1.6447158039206045,
          "pitch": 0.23267013997936203,
          "rotation": 0,
          "target": "8-hallway-uppstairs"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-living-room",
      "name": "Living room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4414707467094559,
          "pitch": 0.07728475401665413,
          "rotation": 0,
          "target": "17-balcony"
        },
        {
          "yaw": 2.6370403728039236,
          "pitch": 0.031090322344567767,
          "rotation": 0,
          "target": "18-balcony"
        },
        {
          "yaw": 2.86210376807123,
          "pitch": 0.44845603996743044,
          "rotation": 0,
          "target": "5-kitchen"
        },
        {
          "yaw": -2.5083710692968317,
          "pitch": 0.5939696282363158,
          "rotation": 0,
          "target": "6-entrance-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-balcony",
      "name": "Balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.09710164250700082,
        "pitch": -0.10945060127786732,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": -2.1146903983349628,
          "pitch": 0.3481640969908817,
          "rotation": 0,
          "target": "16-living-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-balcony",
      "name": "Balcony",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.46799552884385065,
        "pitch": 0.005641172031975117,
        "fov": 1.4723711838569904
      },
      "linkHotspots": [
        {
          "yaw": -1.8127641552459046,
          "pitch": 0.23845270805619023,
          "rotation": 0,
          "target": "5-kitchen"
        },
        {
          "yaw": -1.513726030276068,
          "pitch": 0.21573778583943337,
          "rotation": 0,
          "target": "16-living-room"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
