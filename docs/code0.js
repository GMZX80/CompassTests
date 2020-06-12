gdjs.NewSceneCode = {};
gdjs.NewSceneCode.GDRomanCompassObjects1= [];
gdjs.NewSceneCode.GDRomanCompassObjects2= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};
gdjs.NewSceneCode.condition1IsTrue_0 = {val:false};


gdjs.NewSceneCode.eventsList0x5b71c8 = function(runtimeScene) {

{



}


{


gdjs.NewSceneCode.condition0IsTrue_0.val = false;
{
gdjs.NewSceneCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.NewSceneCode.condition0IsTrue_0.val) {
{gdjs.deviceSensors.orientation.activateOrientationSensor();
}}

}


{


{
gdjs.NewSceneCode.GDRomanCompassObjects1.createFrom(runtimeScene.getObjects("RomanCompass"));
{for(var i = 0, len = gdjs.NewSceneCode.GDRomanCompassObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDRomanCompassObjects1[i].setAngle(gdjs.deviceSensors.orientation.getOrientationAlpha());
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x5b71c8


gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDRomanCompassObjects1.length = 0;
gdjs.NewSceneCode.GDRomanCompassObjects2.length = 0;

gdjs.NewSceneCode.eventsList0x5b71c8(runtimeScene);
return;

}

gdjs['NewSceneCode'] = gdjs.NewSceneCode;
