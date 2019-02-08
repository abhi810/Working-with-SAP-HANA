sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
        "sap/ui/model/Filter",
        "sap/ui/model/FilterOperator",
        "sap/m/MessageToast",
        "sap/ui/model/json/JSONModel",
        'sap/m/MessageBox'
], function(Controller, History, Filter, FilterOperator, MessageToast, JSONModel, MessageBox) {
	"use strict";

	return Controller.extend("Transaction_app.controller.Detail1", {
	    
	    onPressDetailBack: function() {
	    var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("app", {}, true);
			}
	    }
	    
	});
});