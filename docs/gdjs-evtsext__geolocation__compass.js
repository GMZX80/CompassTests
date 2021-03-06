
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
    this._behaviorData.CompassMessage = behaviorData.CompassMessage !== undefined ? behaviorData.CompassMessage : "";
    this._behaviorData.NakedCompassHeading = behaviorData.NakedCompassHeading !== undefined ? behaviorData.NakedCompassHeading : Number("") || 0;
    this._behaviorData.Property = behaviorData.Property !== undefined ? behaviorData.Property : Number("") || 0;
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


gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.userFunc0x6d9bf8 = function(runtimeScene, eventsFunctionContext) {
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
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.eventsList0x70bf14 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.userFunc0x6d9bf8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.eventsList0x70bf14
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.eventsList0x5b7c78 = function(runtimeScene, eventsFunctionContext) {

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
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.eventsList0x70bf14(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


}; //End of gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.eventsList0x5b7c78


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

gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.doStepPreEventsContext.eventsList0x5b7c78(runtimeScene, eventsFunctionContext);
return;
}
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.onCreatedContext = {};
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.onCreatedContext.GDObjectObjects1= [];

gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.onCreatedContext.conditionTrue_0 = {val:false};
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.onCreatedContext.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.onCreatedContext.userFunc0x6c0938 = function(runtimeScene, eventsFunctionContext) {
"use strict";

function handleOrientation(event) {
  const obj = eventsFunctionContext.getObjects('Object');
  var localCompass = obj[0].getVariables().get("CompassHeading");
  var localNaked = obj[0].getVariables().get("NakedCompassHeading");
  

  if(event.webkitCompassHeading) {
    // Apple works only with this, alpha doesn't work
    localCompass.setNumber(event.webkitCompassHeading);
    localNaked.setNumber(event.webkitCompassHeading);     
  } else {
      localCompass.setNumber(event.alpha);
      localNaked.setNumber(event.alpha);
  }
}
  
if (window.DeviceOrientationEvent){
  const obj = eventsFunctionContext.getObjects('Object');
  var localMessage = obj[0].getVariables().get("CompassMessage");
  if ('ondeviceorientationabsolute' in window) {
    localMessage.setString("Absolute");
    window.addEventListener('deviceorientationabsolute', handleOrientation, true);
  } else {
    localMessage.setString("Not Absolute");
    // comment out for now as stops ios from working at all
    window.addEventListener('deviceorientation', handleOrientation);
  }
} else {
  const obj = eventsFunctionContext.getObjects('Object');
  var localCompass = obj[0].getVariables().get("CompassHeading");
  localCompass.setNumber(400); 
}
  
};
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.onCreatedContext.eventsList0x5b7c78 = function(runtimeScene, eventsFunctionContext) {

{



}


{


gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.onCreatedContext.userFunc0x6c0938(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


}; //End of gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.onCreatedContext.eventsList0x5b7c78


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

gdjs.evtsExt__GeoLocation__Compass.Compass.prototype.onCreatedContext.eventsList0x5b7c78(runtimeScene, eventsFunctionContext);
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
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype._getCompassMessage = function() {
    return this._behaviorData.CompassMessage !== undefined ? this._behaviorData.CompassMessage : "";
};
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype._setCompassMessage = function(newValue) {
    this._behaviorData.CompassMessage = newValue;
};
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype._getNakedCompassHeading = function() {
    return this._behaviorData.NakedCompassHeading !== undefined ? this._behaviorData.NakedCompassHeading : Number("") || 0;
};
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype._setNakedCompassHeading = function(newValue) {
    this._behaviorData.NakedCompassHeading = newValue;
};
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype._getProperty = function() {
    return this._behaviorData.Property !== undefined ? this._behaviorData.Property : Number("") || 0;
};
gdjs.evtsExt__GeoLocation__Compass.Compass.prototype._setProperty = function(newValue) {
    this._behaviorData.Property = newValue;
};
