//@ui5-bundle SDP/SDP/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"SDP/SDP/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","SDP/SDP/model/models"],function(e,t,i){"use strict";return e.extend("SDP.SDP.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"SDP/SDP/controller/Startseite.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller"],function(t){"use strict";return t.extend("SDP.SDP.controller.Startseite",{onInit:function(){}})});
},
	"SDP/SDP/i18n/i18n.properties":'title=Title\nappTitle=SDP\nappDescription=App Description',
	"SDP/SDP/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"SDP.SDP","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","sourceTemplate":{"id":"ui5template.basicSAPUI5ApplicationProject","version":"1.38.11"}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":false,"rootView":{"viewName":"SDP.SDP.view.Startseite","type":"XML","async":true,"id":"Startseite"},"dependencies":{"minUI5Version":"1.65.6","libs":{"sap.ui.layout":{},"sap.ui.core":{},"sap.m":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"SDP.SDP.i18n.i18n"}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"SDP.SDP.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteStartseite","pattern":"RouteStartseite","target":["TargetStartseite"]}],"targets":{"TargetStartseite":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"Startseite","viewName":"Startseite"}}}}}',
	"SDP/SDP/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"SDP/SDP/view/Startseite.view.xml":'<mvc:View controllerName="SDP.SDP.controller.Startseite" xmlns:mvc="sap.ui.core.mvc" displayBlock="true" xmlns="sap.m"><Shell id="shell"><App id="app"><pages><Page id="page" title="{i18n>title}"><content></content></Page></pages></App></Shell></mvc:View>'
}});
