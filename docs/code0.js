gdjs.NewSceneCode = {};
gdjs.NewSceneCode.GDRomanCompassObjects1= [];
gdjs.NewSceneCode.GDRomanCompassObjects2= [];
gdjs.NewSceneCode.GDPlayerObjects1= [];
gdjs.NewSceneCode.GDPlayerObjects2= [];
gdjs.NewSceneCode.GDGPSOutputObjects1= [];
gdjs.NewSceneCode.GDGPSOutputObjects2= [];
gdjs.NewSceneCode.GDAbsObjects1= [];
gdjs.NewSceneCode.GDAbsObjects2= [];
gdjs.NewSceneCode.GDNakedObjects1= [];
gdjs.NewSceneCode.GDNakedObjects2= [];

gdjs.NewSceneCode.conditionTrue_0 = {val:false};
gdjs.NewSceneCode.condition0IsTrue_0 = {val:false};


gdjs.NewSceneCode.eventsList0x5b7a18 = function(runtimeScene) {

{



}


{


{
gdjs.NewSceneCode.GDAbsObjects1.createFrom(runtimeScene.getObjects("Abs"));
gdjs.NewSceneCode.GDGPSOutputObjects1.createFrom(runtimeScene.getObjects("GPSOutput"));
gdjs.NewSceneCode.GDNakedObjects1.createFrom(runtimeScene.getObjects("Naked"));
{for(var i = 0, len = gdjs.NewSceneCode.GDGPSOutputObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDGPSOutputObjects1[i].setString((gdjs.RuntimeObject.getVariableString(gdjs.NewSceneCode.GDGPSOutputObjects1[i].getVariables().get("CompassHeading"))));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDAbsObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDAbsObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.NewSceneCode.GDGPSOutputObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDGPSOutputObjects1[0].getVariables()).get("CompassMessage"))));
}
}{for(var i = 0, len = gdjs.NewSceneCode.GDNakedObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDNakedObjects1[i].setString((gdjs.RuntimeObject.getVariableString(((gdjs.NewSceneCode.GDGPSOutputObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDGPSOutputObjects1[0].getVariables()).get("NakedCompassMessage"))));
}
}}

}


{


{
gdjs.NewSceneCode.GDGPSOutputObjects1.createFrom(runtimeScene.getObjects("GPSOutput"));
gdjs.NewSceneCode.GDRomanCompassObjects1.createFrom(runtimeScene.getObjects("RomanCompass"));
{for(var i = 0, len = gdjs.NewSceneCode.GDRomanCompassObjects1.length ;i < len;++i) {
    gdjs.NewSceneCode.GDRomanCompassObjects1[i].setAngle((gdjs.RuntimeObject.getVariableNumber(((gdjs.NewSceneCode.GDGPSOutputObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.NewSceneCode.GDGPSOutputObjects1[0].getVariables()).get("CompassHeading"))));
}
}}

}


}; //End of gdjs.NewSceneCode.eventsList0x5b7a18


gdjs.NewSceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.NewSceneCode.GDRomanCompassObjects1.length = 0;
gdjs.NewSceneCode.GDRomanCompassObjects2.length = 0;
gdjs.NewSceneCode.GDPlayerObjects1.length = 0;
gdjs.NewSceneCode.GDPlayerObjects2.length = 0;
gdjs.NewSceneCode.GDGPSOutputObjects1.length = 0;
gdjs.NewSceneCode.GDGPSOutputObjects2.length = 0;
gdjs.NewSceneCode.GDAbsObjects1.length = 0;
gdjs.NewSceneCode.GDAbsObjects2.length = 0;
gdjs.NewSceneCode.GDNakedObjects1.length = 0;
gdjs.NewSceneCode.GDNakedObjects2.length = 0;

gdjs.NewSceneCode.eventsList0x5b7a18(runtimeScene);
return;

}

gdjs['NewSceneCode'] = gdjs.NewSceneCode;
