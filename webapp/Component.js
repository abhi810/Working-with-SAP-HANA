sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"Transaction_app/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("Transaction_app.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);
			// set the device model
			this.setModel(models.createDeviceModel(), "device");
			UIComponent.prototype.init.apply(this, arguments);
                                this.getRouter().initialize();
			
		}
	});
});