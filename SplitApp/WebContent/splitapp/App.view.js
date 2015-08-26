sap.ui.jsview("SplitApp.splitapp.App", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf splitapp.App
	*/ 
	getControllerName : function() {
		return "SplitApp.splitapp.App";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf splitapp.App
	*/ 
	createContent: function (oController) {
			
			// to avoid scroll bars on desktop the root view must be set to block display
			this.setDisplayBlock(true);
			
			// create app
			this.app = new sap.m.SplitApp(); 
	
			// load the master page
			var master = sap.ui.xmlview("Master", "SplitApp.splitapp.Master");
			master.getController().nav = this.getController();
			this.app.addPage(master, true);
			
			// load the empty page
		//	var empty = sap.ui.xmlview("Empty", "NBDN.view.Empty");
		//	this.app.addPage(empty, false);
			
			var detail = sap.ui.xmlview("Detail", "SplitApp.splitapp.Detail");
			detail.getController().nav = this.getController();
			this.app.addPage(detail, false);
			
			
			return this.app;
		}

});