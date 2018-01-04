sap.ui.jsview("xmui.view.app", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.app
	 */
	getControllerName: function() {
		return "xmui.controller.app";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.app
	 */
	createContent: function(oController) {
		var app = new sap.m.SplitApp("app");
		app.addMasterPage(sap.ui.jsview("xmui.view.master"));
		app.addDetailPage(sap.ui.jsview("xmui.view.detail"));
		return app;
	}

});