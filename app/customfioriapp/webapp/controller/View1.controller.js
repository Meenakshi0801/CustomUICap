sap.ui.define([
    "sap/ui/core/mvc/Controller", 
    "sap/ui/model/json/JSONModel",
       'jquery.sap.global'
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,JSONModel) {
		"use strict";

		return Controller.extend("customers.customfioriapp.controller.View1", {
			onInit: function () {
jQuery.get({
        type: "get",
        async: false,
        url: "/CatalogService/catalog/Interactions_Header",
        parameters: {
									$count: true
									
								},
        success: function (data) {
               var oModel = new JSONModel();
               oModel.setData(data);
               this.getView().setModel(oModel,"customerModel");
        }.bind(this),
        error: function (xhr, textStatus, errorMessage) {
            alert(errorMessage);
        }
    });
			}
		});
	});
