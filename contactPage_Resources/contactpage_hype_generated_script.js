//	HYPE.documents["contactPage"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "contactPage_Resources";
	var documentName = "contactPage";
	var documentLoaderFilename = "contactpage_hype_generated_script.js";

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

var scenes = [{initialValues:{"7":{G:"#000000",aU:8,c:77,aV:8,r:"inline",d:18,t:16,Z:"break-word",v:"bold",w:"Taurus 738",bF:"8",j:"absolute",x:"visible",k:"div",y:"preserve",z:"2",aS:8,aT:8,a:10,b:104},"3":{o:"content-box",h:"SW_Sigma.jpg",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:156,k:"div",z:"1",d:156,bF:"6"},"8":{c:156,d:156,I:"Solid",e:"1.000000",J:"Solid",K:"Solid",L:"Solid",M:2,N:2,A:"#E88C2C",x:"visible",j:"absolute",B:"#E88C2C",k:"div",O:2,C:"#E88C2C",z:"3",P:2,D:"#E88C2C",a:0,b:0},"4":{o:"content-box",h:"taurus-738b.jpg",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:156,k:"div",z:"1",d:156,bF:"8"},"9":{aV:8,w:"<b>Eotech</b>",x:"visible",a:43,Z:"break-word",y:"preserve",aS:8,bF:"10",z:"1",k:"div",r:"inline",aT:8,j:"absolute",t:16,d:18,c:55,aU:8,G:"#000000",b:122},"5":{G:"#000000",aU:8,c:62,aV:8,r:"inline",d:18,t:16,Z:"break-word",v:"bold",w:"S&amp;W Sigma",bF:"6",j:"absolute",x:"visible",k:"div",y:"preserve",z:"1",aS:8,aT:8,a:11,b:103},"6":{c:156,d:156,I:"Solid",e:"0.000000",J:"Solid",f:"180deg",K:"Solid",L:"Solid",M:2,aY:"2",N:2,A:"#E88C2C",x:"visible",j:"absolute",B:"#E88C2C",k:"div",O:2,C:"#E88C2C",z:"5",P:2,D:"#E88C2C",a:0,b:0},"2":{o:"content-box",h:"eotech.jpg",x:"visible",a:0,q:"100% 100%",b:0,j:"absolute",r:"inline",c:156,k:"div",z:"0",d:156,bF:"10"},"10":{c:156,d:156,I:"Solid",e:"0.000000",J:"Solid",f:"180deg",K:"Solid",L:"Solid",M:2,aY:"2",N:2,A:"#E88C2C",x:"visible",j:"absolute",B:"#E88C2C",k:"div",O:2,C:"#E88C2C",z:"4",P:2,D:"#E88C2C",a:0,b:0}},timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:1,d:1.0333333,i:"e",e:"1.000000",r:1,s:"0.000000",o:"10"},{f:"2",t:1,d:1.0333333,i:"f",e:"0deg",r:1,s:"180deg",o:"10"},{f:"2",t:2.0333333,d:4.9666667,i:"e",e:"1.000000",s:"1.000000",o:"10"},{f:"2",t:2.0333333,d:4.9666667,i:"f",e:"0deg",s:"0deg",o:"10"},{f:"2",t:3,d:1,i:"e",e:"1.000000",r:1,s:"0.000000",o:"6"},{f:"2",t:3,d:1,i:"f",e:"0deg",r:1,s:"180deg",o:"6"},{f:"2",t:4,d:1,i:"f",e:"0deg",s:"0deg",o:"6"},{f:"2",t:4,d:1,i:"e",e:"1.000000",s:"1.000000",o:"6"},{f:"2",t:5,d:1,i:"e",e:"0.000000",s:"1.000000",o:"6"},{f:"2",t:5,d:1,i:"f",e:"180deg",s:"0deg",o:"6"},{f:"2",t:7,d:1.0333338,i:"e",e:"0.000000",s:"1.000000",o:"10"},{f:"2",t:7,d:1.0333338,i:"f",e:"180deg",s:"0deg",o:"10"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:8.0333338}},sceneIndex:0,perspective:"600px",oid:"1",onSceneAnimationCompleteAction:{type:1,transition:1,sceneSymbol:3},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
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
	hypeDoc.setMainContentContainerID("contactpage_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(false);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

