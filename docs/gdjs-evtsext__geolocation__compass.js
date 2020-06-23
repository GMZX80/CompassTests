
gdjs.evtsExt__GeoLocation__Compass = gdjs.evtsExt__GeoLocation__Compass || {};

/**
 * Behavior generated from 
 * @class Compass
 * @extends gdjs.RuntimeBehavior
 * @constructor
 */
gdjs.evtsExt__GeoLocation__Compass.Compass = function(runtimeScene, behaviorData, owner)
{
    gdjs.RuntimeBehavior.call(this, runtimeScene, behaviorData, owner);
    this._runtimeScene = runtimeScene;

    this._behaviorData = {};
    
    this._behaviorData.Latitude = behaviorData.Latitude !== undefined ? behaviorData.Latitude : Number("") || 0;
    this._behaviorData.Longitude = behaviorData.Longitude !== undefined ? behaviorData.Longitude : Number("") || 0;
    this._behaviorData.GPSMessage = behaviorData.GPSMessage !== undefined ? behaviorData.GPSMessage : "No GPS Signal";
    this._behaviorData.UpdateTimer = behaviorData.UpdateTimer !== undefined ? behaviorData.UpdateTimer : Number("100") || 0;
    this._behaviorData.CompassHeading = behaviorData.CompassHeading !== undefined ? behaviorData.CompassHeading : Number("") || 0;
};

gdjs.evtsExt__GeoLocation__Compass.Compass.prototype = Object.create( gdjs.RuntimeBehavior.prototype );
gdjs.registerBehavior("GeoLocation::Compass", gdjs.evtsExt__GeoLocation__Compass.Compass);

// Properties:
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.GDObjectObjects2= [];

gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.userFunc0x6c0950 = function(runtimeScene, eventsFunctionContext) {
"use strict";

const obj = eventsFunctionContext.getObjects('Object');
var localLat = obj[0].getVariables().get("Latitude");
var localLong = obj[0].getVariables().get("Longitude");
var localMessage = obj[0].getVariables().get("GPSMessage");


function updatePos(position) {
    localMessage.setString("Strong GPS Signal");
    localLat.setNumber(position.coords.latitude);
    localLong.setNumber(position.coords.longitude);
}

function failedUpdate(error) {
    localMessage.setString("No GPS Signal");
}

navigator.geolocation.getCurrentPosition(updatePos, failedUpdate);
};
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.eventsList0x6c07bc = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.userFunc0x6c0950(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.eventsList0x6c07bc
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.eventsList0x5b7598 = function(runtimeScene, eventsFunctionContext) {

{



}


{


{
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));
{for(var i = 0, len = gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("UpdateTimer")).add(1000 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}
}}

}


{



}


{

gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.GDObjectObjects1.createFrom(eventsFunctionContext.getObjects("Object"));

gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("UpdateTimer")) > 1000 ) {
        gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.condition0IsTrue_0.val = true;
        gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;}if (gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.condition0IsTrue_0.val) {
/* Reuse gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("UpdateTimer")).setNumber(0);
}
}
{ //Subevents
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.eventsList0x6c07bc(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.eventsList0x5b7598


gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  }
};

gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.eventsList0x5b7598(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.onCreatedContext = {};
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.onCreatedContext.GDObjectObjects1= [];

gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.onCreatedContext.userFunc0x6d8cd8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
runtimeScene.setBackgroundColor(100,200,200);

function handleOrientation(event) {
  const obj = eventsFunctionContext.getObjects('Object');
  var localCompass = obj[0].getVariables().get("CompassHeading");

  if(event.webkitCompassHeading) {
    // Apple works only with this, alpha doesn't work
    localCompass.setNumber(event.webkitCompassHeading);     
  } else {
      var alpha = 360 - event.alpha;
      if (alpha < 0) { alpha += 360; }
      if (alpha > 360) { alpha -= 360; }
      localCompass.setNumber(alpha); 
  }
}
  if (window.DeviceOrientationEvent){
      const obj = eventsFunctionContext.getObjects('Object');
      var localCompass = obj[0].getVariables().get("CompassHeading");
      window.addEventListener('deviceorientationabsolute', handleOrientation, true);
  } else {
    const obj = eventsFunctionContext.getObjects('Object');
    var localCompass = obj[0].getVariables().get("CompassHeading");
    localCompass.setNumber(400); 
  }
/*
if (window.DeviceOrientationEvent) {
  // Listen for the deviceorientation event and handle the raw data
  // check for Android or ios version (ios uses webkitcompassheading)
  if (window.OnDeviceOrientationAbsolute) {
    const obj = eventsFunctionContext.getObjects('Object');
    var localCompass = obj[0].getVariables().get("CompassHeading");
    localCompass.setNumber(100); 
  } else if ('ondeviceorientation' in window) {
  // We can still listen for deviceorientation events.
  // The `absolute` property of the event tells us whether
  // or not the degrees are absolute.
    const obj = eventsFunctionContext.getObjects('Object');
    var localCompass = obj[0].getVariables().get("CompassHeading");
    localCompass.setNumber(200); 
  }
  const obj = eventsFunctionContext.getObjects('Object');
  var localCompass = obj[0].getVariables().get("CompassHeading");
  localCompass.setNumber(300); 
  /*
  window.addEventListener('deviceorientation', function(event) {
    const obj = eventsFunctionContext.getObjects('Object');
    var localCompass = obj[0].getVariables().get("CompassHeading");

    if(event.webkitCompassHeading) {
      // Apple works only with this, alpha doesn't work
      localCompass.setNumber(event.webkitCompassHeading);  
       
    }
    localCompass.setNumber(event.alpha); 
  });
} else {
    const obj = eventsFunctionContext.getObjects('Object');
    var localCompass = obj[0].getVariables().get("CompassHeading");
    localCompass.setNumber(400); 
}*/


};
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.onCreatedContext.eventsList0x5b7598 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.onCreatedContext.userFunc0x6d8cd8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.onCreatedContext.eventsList0x5b7598


gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.onCreated = function(parentEventsFunctionContext) {
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName];
  },
  createObject: function(objectName) {
    var objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      return parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
    }
    return null;
  },
  getArgument: function(argName) {
    return "";
  }
};

gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.onCreatedContext.GDObjectObjects1.length = 0;

gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.onCreatedContext.eventsList0x5b7598(runtimeScene, eventsFunctionContext);
return;
}


// Methods:

gdjs.evtsExt__GeoLocation__Compass.Compass.prototype._getLatitude = function() {
    return this._behaviorData.Latitude !== undefined ? this._behaviorData.Latitude : Number("") || 0;
};
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype._setLatitude = function(newValue) {
    this._behaviorData.Latitude = newValue;
};
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype._getLongitude = function() {
    return this._behaviorData.Longitude !== undefined ? this._behaviorData.Longitude : Number("") || 0;
};
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype._setLongitude = function(newValue) {
    this._behaviorData.Longitude = newValue;
};
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype._getGPSMessage = function() {
    return this._behaviorData.GPSMessage !== undefined ? this._behaviorData.GPSMessage : "No GPS Signal";
};
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype._setGPSMessage = function(newValue) {
    this._behaviorData.GPSMessage = newValue;
};
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype._getUpdateTimer = function() {
    return this._behaviorData.UpdateTimer !== undefined ? this._behaviorData.UpdateTimer : Number("100") || 0;
};
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype._setUpdateTimer = function(newValue) {
    this._behaviorData.UpdateTimer = newValue;
};
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype._getCompassHeading = function() {
    return this._behaviorData.CompassHeading !== undefined ? this._behaviorData.CompassHeading : Number("") || 0;
};
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype._setCompassHeading = function(newValue) {
    this._behaviorData.CompassHeading = newValue;
};
