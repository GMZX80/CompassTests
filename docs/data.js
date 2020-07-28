gdjs.projectData = {"firstLayout": "","gdVersion": {"build": 98,"major": 4,"minor": 0,"revision": 0},"properties": {"adMobAppId": "","adaptGameResolutionAtRuntime": false,"folderProject": false,"linuxExecutableFilename": "","macExecutableFilename": "","orientation": "portrait","packageName": "com.zx80M.roman","projectFile": "C:\\Users\\emvig\\Desktop\\CompassTests\\HTML5Compass.json","scaleMode": "linear","sizeOnStartupMode": "","useExternalSourceFiles": false,"version": "1.0.0","winExecutableFilename": "","winExecutableIconFile": "","name": "Project","author": "Graham","windowWidth": 1200,"windowHeight": 2000,"latestCompilationDirectory": "/home/matthias/Programme/GD_MyFork/testprojects/compass","maxFPS": 60,"minFPS": 10,"verticalSync": false,"platformSpecificAssets": {},"loadingScreen": {"showGDevelopSplash": true},"extensions": [{"name": "BuiltinObject"},{"name": "BuiltinAudio"},{"name": "BuiltinVariables"},{"name": "BuiltinTime"},{"name": "BuiltinMouse"},{"name": "BuiltinKeyboard"},{"name": "BuiltinJoystick"},{"name": "BuiltinCamera"},{"name": "BuiltinWindow"},{"name": "BuiltinFile"},{"name": "BuiltinNetwork"},{"name": "BuiltinScene"},{"name": "BuiltinAdvanced"},{"name": "Sprite"},{"name": "BuiltinCommonInstructions"},{"name": "BuiltinCommonConversions"},{"name": "BuiltinStringInstructions"},{"name": "BuiltinMathematicalTools"},{"name": "BuiltinExternalLayouts"}],"platforms": [{"name": "GDevelop JS platform"}],"currentPlatform": "GDevelop JS platform"},"resources": {"resources": [{"alwaysLoaded": false,"file": "compass.png","kind": "image","metadata": "","name": "compass.png","smoothed": true,"userAdded": false},{"alwaysLoaded": false,"file": "needle.png","kind": "image","metadata": "","name": "needle.png","smoothed": true,"userAdded": false},{"alwaysLoaded": false,"file": "compass-rose-mosaic-medallion.jpg","kind": "image","metadata": "","name": "compass-rose-mosaic-medallion.jpg","smoothed": true,"userAdded": false},{"alwaysLoaded": false,"file": "Spear.png","kind": "image","metadata": "","name": "Spear.png","smoothed": true,"userAdded": false},{"alwaysLoaded": false,"file": "Needle.png","kind": "image","metadata": "","name": "Needle.png","smoothed": true,"userAdded": false},{"alwaysLoaded": false,"file": "compass-rose-mosaic-medallion2.jpg","kind": "image","metadata": "","name": "img\\compass-rose-mosaic-medallion.jpg","smoothed": true,"userAdded": false},{"alwaysLoaded": false,"file": "Needle2.png","kind": "image","metadata": "","name": "img\\Needle.png","smoothed": true,"userAdded": false},{"alwaysLoaded": false,"file": "COmpas.jpg","kind": "image","metadata": "","name": "img\\COmpas.jpg","smoothed": true,"userAdded": false},{"alwaysLoaded": false,"file": "compass-needle-png-1.png","kind": "image","metadata": "","name": "img\\compass-needle-png-1.png","smoothed": true,"userAdded": false},{"alwaysLoaded": false,"file": "NeedleU.png","kind": "image","metadata": "","name": "img\\NeedleU.png","smoothed": true,"userAdded": false},{"alwaysLoaded": false,"file": "okneedle.png","kind": "image","metadata": "","name": "img\\okneedle.png","smoothed": true,"userAdded": false},{"alwaysLoaded": false,"file": "compass.jpg","kind": "image","metadata": "","name": "compass.jpg","smoothed": true,"userAdded": false},{"alwaysLoaded": false,"file": "CompasStar.png","kind": "image","metadata": "","name": "CompasStar.png","smoothed": true,"userAdded": false},{"file": "Roman SD.ttf","kind": "font","metadata": "","name": "Roman SD.ttf","userAdded": false}],"resourceFolders": []},"objects": [],"objectsGroups": [],"variables": [],"layouts": [{"b": 209,"disableInputWhenNotFocused": true,"mangledName": "NewScene","name": "NewScene","oglFOV": 90,"oglZFar": 500,"oglZNear": 1,"r": 209,"standardSortMethod": true,"stopSoundsOnStartup": true,"title": "","v": 209,"uiSettings": {"grid": false,"gridB": 255,"gridG": 180,"gridHeight": 32,"gridOffsetX": 0,"gridOffsetY": 0,"gridR": 158,"gridWidth": 32,"snap": true,"windowMask": false,"zoomFactor": 0.28},"objectsGroups": [],"variables": [],"instances": [{"angle": 0,"customSize": true,"height": 1358,"layer": "","locked": false,"name": "RomanCompass","width": 1590,"x": -217,"y": -123,"zOrder": 1,"numberProperties": [],"stringProperties": [],"initialVariables": []},{"angle": 0,"customSize": false,"height": 0,"layer": "","locked": false,"name": "GPSOutput","width": 0,"x": -2,"y": 1071,"zOrder": 2,"numberProperties": [],"stringProperties": [],"initialVariables": []},{"angle": 0,"customSize": false,"height": 0,"layer": "","locked": false,"name": "Abs","width": 0,"x": 34,"y": 1187,"zOrder": 3,"numberProperties": [],"stringProperties": [],"initialVariables": []},{"angle": 0,"customSize": false,"height": 0,"layer": "","locked": false,"name": "Naked","width": 0,"x": 16,"y": 1285,"zOrder": 4,"numberProperties": [],"stringProperties": [],"initialVariables": []}],"objects": [{"name": "RomanCompass","tags": "","type": "Sprite","updateIfNotVisible": false,"variables": [],"behaviors": [],"animations": [{"name": "","useMultipleDirections": false,"directions": [{"looping": false,"timeBetweenFrames": 0.08,"sprites": [{"hasCustomCollisionMask": false,"image": "CompasStar.png","points": [],"originPoint": {"name": "origine","x": 0,"y": 0},"centerPoint": {"automatic": true,"name": "centre","x": 0,"y": 0},"customCollisionMask": []}]}]}]},{"name": "Player","tags": "","type": "Sprite","updateIfNotVisible": false,"variables": [],"behaviors": [{"name": "Compass","type": "GeoLocation::Compass","Lattitude": 0,"Longitude": 0}],"animations": []},{"bold": false,"italic": false,"name": "GPSOutput","smoothed": true,"tags": "","type": "TextObject::Text","underlined": false,"variables": [],"behaviors": [{"name": "Compass","type": "GeoLocation::Compass","Lattitude": 0,"Longitude": 0}],"string": "Lattitude and Longitude readout","font": "Roman SD.ttf","characterSize": 50,"color": {"b": 0,"g": 0,"r": 0}},{"bold": false,"italic": false,"name": "Abs","smoothed": true,"tags": "","type": "TextObject::Text","underlined": false,"variables": [],"behaviors": [],"string": "WAITING","font": "","characterSize": 40,"color": {"b": 0,"g": 0,"r": 0}},{"bold": false,"italic": false,"name": "Naked","smoothed": true,"tags": "","type": "TextObject::Text","underlined": false,"variables": [],"behaviors": [],"string": "Waiting","font": "","characterSize": 60,"color": {"b": 0,"g": 0,"r": 0}}],"events": [],"layers": [{"name": "","visibility": true,"cameras": [{"defaultSize": true,"defaultViewport": true,"height": 0,"viewportBottom": 1,"viewportLeft": 0,"viewportRight": 1,"viewportTop": 0,"width": 0}],"effects": []}],"behaviorsSharedData": [{"name": "Compass","type": "GeoLocation::Compass"}]}],"externalEvents": [],"eventsFunctionsExtensions": [],"externalLayouts": [],"externalSourceFiles": []};