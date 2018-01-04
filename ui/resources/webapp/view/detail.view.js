sap.ui.jsview("xmui.view.detail", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf controller.app
	 */
	getControllerName: function() {
		return "xmui.controller.detail";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away.
	 * @memberOf controller.app
	 */
	createContent: function(oController) {
		var page = new sap.m.Page("detailPage");
		return page;
	}

});