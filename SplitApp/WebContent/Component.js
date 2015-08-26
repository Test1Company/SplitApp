jQuery.sap.declare("SplitApp.Component");
 
sap.ui.core.UIComponent.extend("SplitApp.Component", {

	createContent : function() {
	//var busyDialog = (busyDialog) ? busyDialog : new sap.m.BusyDialog('busyDialog',{text:'Loading Data', title: 'Loading'});
	//busyDialog.open();
		// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "SplitApp.splitapp.App",
			type : "JS",
			viewData : { component : this }
		});

		// set i18n model
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "i18n/messageBundle.properties"
		});
		oView.setModel(i18nModel, "i18n");



		// Using a local model for offline development
	//	var dcTypeModel = new sap.ui.model.json.JSONModel("model/dctype.json");
	//	oView.setModel(dcTypeModel);
        		
        // set device model
		var deviceModel = new sap.ui.model.json.JSONModel({
			isPhone : jQuery.device.is.phone,
			 isNoPhone : !jQuery.device.is.phone,
			listMode : (jQuery.device.is.phone)||(!jQuery.device.is.phone) ? "None" : "SingleSelectMaster",
			listItemType : (jQuery.device.is.phone) ||(!jQuery.device.is.phone)? "Active" : "Inactive"
		});
		deviceModel.setDefaultBindingMode("OneWay");
		oView.setModel(deviceModel, "device");

	 
		//busyDialog.close();
		// done
		return oView;
	}
});