sap.ui.controller("SplitApp.splitapp.App", {
	/**
	 * Navigates to another page
	 * @param {string} pageId The id of the next page
	 * @param {sap.ui.model.Context} context The data context to be applied to the next page (optional)
	 */
	to : function (pageId, context) {
		
		var app = this.getView().app;
		//alert(pageId);
		//console.log("Pageid  in to" +pageId);
		//console.log(context);
		// load page on demand
		var master = ("Master" === pageId);
		if (app.getPage(pageId, master) === null) {			
			var page = sap.ui.view({
				id : pageId,
				viewName : "SplitApp.splitapp." + pageId,
				type : "XML"
			});
			page.getController().nav = this;
			//alert(page.getController().nav);
			app.addPage(page, master);
			jQuery.sap.log.info("app controller > loaded page: " + pageId);
		}
		
		// show the page
		app.to(pageId);
		
		// set data context on the page
		if (context) {
			var page = app.getPage(pageId);
			page.setBindingContext(context);
		}
	},
	
	/**
	 * Navigates back to a previous page
	 * @param {string} pageId The id of the next page
	 */
	back : function (pageId) {
		this.getView().app.backToPage(pageId);
		//console.log("Pageid  in back" +pageId);
	}
});