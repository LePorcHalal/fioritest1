sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device"
], function(Controller,Device) {
	"use strict";

	return Controller.extend("templateProject.controller.View1", {

		onInit: function() {
			var sContentDensityClass = "";
			if (jQuery(document.body).hasClass("sapUiSizeCozy") || jQuery(document.body).hasClass("sapUiSizeCompact")) {
				sContentDensityClass = "";
			}
			else if(!Device.support.touch) {
				sContentDensityClass = "sapUiSizeCompact";
			} else {
				sContentDensityClass = "sapUiSizeCozy";
			}
			this.getView().addStyleClass(sContentDensityClass);
		}

	});
});