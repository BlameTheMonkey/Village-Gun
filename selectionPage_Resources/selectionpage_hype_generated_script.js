//	HYPE.documents["selectionPage"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "selectionPage_Resources";
	var documentName = "selectionPage";
	var documentLoaderFilename = "selectionpage_hype_generated_script.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_100 == "undefined") {
		if(typeof window.HYPE_100_DocumentsToLoad == "undefined") {
			window.HYPE_100_DocumentsToLoad = new Array();
			window.HYPE_100_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=100';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_100_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	var hypeDoc = new HYPE_100();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",aS:"i",d:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",aW:"f",aI:"i",S:"i",T:"i",l:"d",aX:"i",aJ:"i",m:"c",n:"c",aK:"i",X:"i",aZ:"i",A:"c",Y:"i",aL:"i",B:"c",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};

var scenes = [{initialValues:{"25":{k:"div",x:"visible",c:260,d:104,z:"4",e:"1.000000",a:0,j:"absolute",b:-137},"10":{c:256,q:"100% 100%",d:100,I:"Solid",r:"inline",J:"Solid",K:"Solid",L:"Solid",h:"Glock%20Safe%20Action%20Pistol.jpg",M:2,bF:"20",N:2,A:"#E88C2C",x:"visible",O:2,B:"#E88C2C",k:"div",P:2,C:"#E88C2C",z:"4",j:"absolute",D:"#E88C2C",a:0,o:"content-box",b:0},"21":{k:"div",x:"visible",c:260,aY:"1",d:104,z:"3",e:"0.000000",a:0,j:"absolute",f:"180deg",b:0},"9":{c:256,q:"100% 100%",d:100,I:"Solid",r:"inline",J:"Solid",K:"Solid",L:"Solid",h:"Remington%20870%20Wingmaster.jpg",M:2,bF:"23",N:2,A:"#E88C2C",x:"visible",O:2,B:"#E88C2C",k:"div",P:2,C:"#E88C2C",z:"4",j:"absolute",D:"#E88C2C",a:0,o:"content-box",b:0},"11":{c:256,q:"100% 100%",d:100,I:"Solid",r:"inline",J:"Solid",K:"Solid",L:"Solid",h:"Benelli%20M4%20Desert_pistol_defense.jpg",M:2,bF:"25",N:2,A:"#E88C2C",x:"visible",O:2,B:"#E88C2C",k:"div",P:2,C:"#E88C2C",z:"4",j:"absolute",D:"#E88C2C",a:0,o:"content-box",b:0},"16":{G:"#000000",aU:8,c:179,aV:8,r:"inline",d:18,t:16,Z:"break-word",v:"bold",w:"Winchester Model 1894",bF:"19",j:"absolute",x:"visible",k:"div",y:"preserve",z:"5",aS:8,aT:8,a:32,b:70},"22":{G:"#000000",aU:8,c:125,aV:8,r:"inline",d:18,t:16,Z:"break-word",v:"bold",w:"870 Wingmaster",bF:"23",j:"absolute",x:"visible",k:"div",y:"preserve",z:"6",aS:8,aT:8,a:59,b:70},"12":{G:"#000000",aU:8,c:194,aV:8,r:"inline",d:19,t:16,Z:"break-word",v:"bold",w:"Glock Safe Action Pistols",bF:"20",j:"absolute",x:"visible",k:"div",y:"preserve",z:"4",aS:8,aT:8,a:25,b:69},"23":{k:"div",x:"visible",c:260,d:104,z:"10",e:"1.000000",a:318,j:"absolute",b:0},"7":{c:256,q:"100% 100%",d:100,I:"Solid",r:"inline",J:"Solid",K:"Solid",L:"Solid",h:"Winchester%20Model%201894%20High%20Grade.jpg",M:2,bF:"19",N:2,A:"#E88C2C",x:"visible",O:2,B:"#E88C2C",k:"div",P:2,C:"#E88C2C",z:"4",j:"absolute",D:"#E88C2C",a:0,o:"content-box",b:0},"24":{G:"#000000",aU:8,c:136,aV:8,r:"inline",d:18,t:16,Z:"break-word",v:"bold",w:"Benelli M4 Desert",bF:"25",j:"absolute",x:"visible",k:"div",y:"preserve",z:"4",aS:8,aT:8,a:54,b:70},"8":{c:256,q:"100% 100%",d:100,I:"Solid",r:"inline",J:"Solid",K:"Solid",L:"Solid",h:"Winchester%20Model%2070%20Featherweight.jpg",M:2,bF:"21",N:2,A:"#E88C2C",x:"visible",O:2,B:"#E88C2C",k:"div",P:2,C:"#E88C2C",z:"4",j:"absolute",D:"#E88C2C",a:0,o:"content-box",b:0},"14":{G:"#000000",aU:8,c:161,aV:8,r:"inline",d:14,t:16,Z:"break-word",v:"bold",w:"Winchester Model 70",bF:"21",j:"absolute",x:"visible",k:"div",y:"preserve",z:"4",aS:8,aT:8,a:42,b:68},"20":{k:"div",x:"visible",c:260,aY:"2",d:104,z:"2",e:"1.000000",a:0,j:"absolute",f:"0deg",b:120},"19":{k:"div",x:"visible",c:260,d:104,z:"1",a:0,j:"absolute",b:0}},timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:5,i:"a",e:0,r:1,s:0,o:"25"},{f:"2",t:0,d:6.5,i:"b",e:0,r:1,s:0,o:"23"},{f:"2",t:1.0333333,d:0.9666667,i:"b",e:0,r:1,s:120,o:"20"},{f:"2",t:2.5333333,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"21"},{f:"2",t:2.5666666,d:0.9666667,i:"f",e:"0deg",r:1,s:"180deg",o:"21"},{f:"2",t:3.5333333,d:7.2000003,i:"e",e:"1.000000",s:"1.000000",o:"21"},{f:"2",t:3.5333333,d:7.2000003,i:"f",e:"0deg",s:"0deg",o:"21"},{f:"2",t:4.0333333,d:0.9666667,i:"b",e:0,r:1,s:-137,o:"25"},{f:"2",t:5.5,d:1,i:"a",e:0,r:1,s:318,o:"23"},{f:"2",t:7.2666669,d:0.99999952,i:"e",e:"0.000000",r:1,s:"1.000000",o:"23"},{f:"2",t:8.9666662,d:0.96666718,i:"e",e:"0.000000",r:1,s:"1.000000",o:"25"},{f:"2",t:10.733334,d:1,i:"e",e:"0.000000",s:"1.000000",o:"21"},{f:"2",t:10.733334,d:1,i:"f",e:"180deg",s:"0deg",o:"21"},{f:"2",t:12.466666,d:1,i:"f",e:"180deg",r:1,s:"0deg",o:"20"},{f:"2",t:12.466666,d:1,i:"e",e:"0.000000",r:1,s:"1.000000",o:"20"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:13.466666}},sceneIndex:0,perspective:"600px",oid:"1",onSceneAnimationCompleteAction:{type:1,transition:1,sceneSymbol:3},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
	var javascripts = [];


	
	var Custom = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("Custom." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			Custom[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.Custom = Custom;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID("selectionpage_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(false);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

