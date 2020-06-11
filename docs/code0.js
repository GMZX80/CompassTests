gdjs.NewSceneCode = {};
gdjs.NewSceneCode.GDcompassObjects1= [];
gdjs.NewSceneCode.GDcompassObjects2= [];
gdjs.NewSceneCode.GDneedleObjects1= [];
gdjs.NewSceneCode.GDneedleObjects2= [];
gdjs.NewSceneCode.GDRomanCompassObjects1= [];
gdjs.NewSceneCode.GDRomanCompassObjects2= [];
gdjs.NewSceneCode.GDRomadnNeedleObjects1= [];
gdjs.NewSceneCode.GDRomadnNeedleObjects2= [];

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
gdjs.NewSceneCode.GDRomadnNeedleObjects1.createFrom(runtimeScene.getObjects("RomadnNeedle"));
{for(var i = 0, len = gdjs.NewSceneCode.GDRomadnNeedleObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDRomadnNeedleObjects1[i].setAngle(gdjs.deviceSensors.orientation.getOrientationAlpha());
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x5b71c8


gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDcompassObjects1.length = 0;
gdjs.NewSceneCode.GDcompassObjects2.length = 0;
gdjs.NewSceneCode.GDneedleObjects1.length = 0;
gdjs.NewSceneCode.GDneedleObjects2.length = 0;
gdjs.NewSceneCode.GDRomanCompassObjects1.length = 0;
gdjs.NewSceneCode.GDRomanCompassObjects2.length = 0;
gdjs.NewSceneCode.GDRomadnNeedleObjects1.length = 0;
gdjs.NewSceneCode.GDRomadnNeedleObjects2.length = 0;

gdjs.NewSceneCode.eventsList0x5b71c8(runtimeScene);
return;

}

gdjs['NewSceneCode'] = gdjs.NewSceneCode;
