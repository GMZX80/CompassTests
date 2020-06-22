gdjs.NewSceneCode = {};
gdjs.NewSceneCode.GDRomanCompassObjects1= [];
gdjs.NewSceneCode.GDRomanCompassObjects2= [];
gdjs.NewSceneCode.GDPlayerObjects1= [];
gdjs.NewSceneCode.GDPlayerObjects2= [];
gdjs.NewSceneCode.GDGPSOutputObjects1= [];
gdjs.NewSceneCode.GDGPSOutputObjects2= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};


gdjs.NewSceneCode.eventsList0x5b7338 = function(runtimeScene) {

{



}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
}

}


{


{
}

}


{


{
gdjs.NewSceneCode.GDGPSOutputObjects1.createFrom(runtimeScene.getObjects("GPSOutput"));
{for(var i = 0, len = gdjs.NewSceneCode.GDGPSOutputObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDGPSOutputObjects1[i].setString((gdjs.RuntimeObject.getVariableString(gdjs.NewSceneCode.GDGPSOutputObjects1[i].getVariables().get("GPSMessage"))) + ": " + (gdjs.RuntimeObject.getVariableString(gdjs.NewSceneCode.GDGPSOutputObjects1[i].getVariables().get("Latitude"))) + ", " + (gdjs.RuntimeObject.getVariableString(gdjs.NewSceneCode.GDGPSOutputObjects1[i].getVariables().get("Longitude"))) + " " + (gdjs.RuntimeObject.getVariableString(gdjs.NewSceneCode.GDGPSOutputObjects1[i].getVariables().get("CompassHeading"))));
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x5b7338


gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDRomanCompassObjects1.length = 0;
gdjs.NewSceneCode.GDRomanCompassObjects2.length = 0;
gdjs.NewSceneCode.GDPlayerObjects1.length = 0;
gdjs.NewSceneCode.GDPlayerObjects2.length = 0;
gdjs.NewSceneCode.GDGPSOutputObjects1.length = 0;
gdjs.NewSceneCode.GDGPSOutputObjects2.length = 0;

gdjs.NewSceneCode.eventsList0x5b7338(runtimeScene);
return;

}

gdjs['NewSceneCode'] = gdjs.NewSceneCode;
