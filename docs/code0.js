gdjs.NewSceneCode = {};
gdjs.NewSceneCode.GDcompassObjects1= [];
gdjs.NewSceneCode.GDcompassObjects2= [];
gdjs.NewSceneCode.GDneedleObjects1= [];
gdjs.NewSceneCode.GDneedleObjects2= [];

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
gdjs.NewSceneCode.GDneedleObjects1.createFrom(runtimeScene.getObjects("needle"));
{for(var i = 0, len = gdjs.NewSceneCode.GDneedleObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDneedleObjects1[i].setAngle(gdjs.deviceSensors.orientation.getOrientationAlpha());
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

gdjs.NewSceneCode.eventsList0x5b71c8(runtimeScene);
return;

}

gdjs['NewSceneCode'] = gdjs.NewSceneCode;
