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

	return Controller.extend("Transaction_app.controller.App", {
	    
           onInit: function() {
	       
	      
	       var oModel = new sap.ui.model.odata.ODataModel("https://newp1942070064trial.hanatrial.ondemand.com/Transaction_app/webapp/services.xsodata/", true); 
	       this.getView().setModel(oModel, "odatamodel");
	       
	       var rows = "";
	    var that1 = this;
	    //Below call is async call , So we should implement everything inside the success call
      $.get("tableinfo1.xsjs",function(result){
                rows = result;
             var Model1 = new JSONModel({"rows":rows});
        	that1.getView().setModel(Model1);
          return result;
        });
	               
	    },
	    
	    
	    
	    onshow: function() {
	      var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail");  
	    },
	    
       onFilterInvoices : function (oEvent) {

			// build filter array
			var aFilter = [];
			var sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("title", FilterOperator.Contains, sQuery));
			}

			// filter binding
			var oList = this.getView().byId("idProductsTable");
			var oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},

                onPressDetailBack : function() {
			this.getSplitAppObj().backDetail();
		},

                 _getVal: function(evt) {
			return sap.ui.getCore().byId(evt.getParameter('id')).getValue();
		},

                handleUrlPress: function (evt) {
			sap.m.URLHelper.redirect(this._getVal(evt), true);
		},
		
		onOrientationChange: function(oEvent) {
			var bLandscapeOrientation = oEvent.getParameter("landscape"),
				sMsg = "Orientation now is: " + (bLandscapeOrientation ? "Landscape" : "Portrait");
			MessageToast.show(sMsg, {duration: 5000});
		},
		
		onListItemPress : function(oEvent) {
		    
			var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();
         	this.getSplitAppObj().toDetail(this.createId(sToPageId));
		},
		
		getSplitAppObj : function() {
			var result = this.byId("SplitAppDemo");
			if (!result) {
				jQuery.sap.log.info("SplitApp object can't be found");
			}
			return result;
		},

		onNavBack: function () {
			var sPreviousHash = History.getInstance().getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.navTo("overview", true);
			}
			
			MessageToast.show("Oops! Something went wrong. Please Reload the page.");
		},
		
			 
	onpress:function(oEvent)	
    {
// build filter array
			var bFilter = [];
			var tQuery = oEvent.getParameter("query");
			if (tQuery) {
				bFilter.push(new Filter("id", FilterOperator.Contains, tQuery));
			}

			// filter binding
			var oList = this.getView().byId("projectList");
			var oBinding = oList.getBinding("items");
			oBinding.filter(bFilter);
	},
	
	handleTelPress: function (evt) {
			sap.m.URLHelper.triggerTel(this._getVal(evt));
		},
		
		handleEmailPress: function (evt) {
			sap.m.URLHelper.triggerEmail(this._getVal(evt), "Info Request");
		},
		
	onalertpress: function(){
			MessageToast.show("Alert Sended.");
	},
	
	onassessmentpress: function(){
		MessageToast.show("Assessment Created.");
	},
	
	refresh: function(){
	    var recipient = "";
	    var that = this;
	    //Below call is async call , So we should implement everything inside the success call
      $.get("refresh.xsjs",function(result){
                recipient = result;
             var oModel = new JSONModel({"recipient":recipient});
        	that.getView().setModel(oModel);
          return result;
        });
     },
     
    
    deletecount: function() {
       $.get("deletecount.xsjs",function(result){
            return result;
        });
    },
    
    input: function(oEvent) {
            var input = oEvent.getParameter("value");
            alert(input);
        
    },
    
    onregisterpress: function(){
        this.getSplitAppObj().toDetail(this.createId("employee"));	
    },
    
    onleaverequest: function(oEvent){
        var input = oEvent.getParameter("value");
        $.ajax({
    method: "POST",
    url: "leaverequest.xsjs",
        data: { INPUT  : input
              }
});
    },
    
    onleaverequestrefresh: function(){
	    var name = [];
	    var that = this;
	    //Below call is async call , So we should implement everything inside the success call
      $.get("leaverequestfetch.xsjs",function(result){
                name += result;
             var oModel = new JSONModel(
                 {
                 "name":name
                 }
             );
        	that.getView().setModel(oModel);
        	return result;
        });
     },
     
     onapprove: function() {
         var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			MessageBox.confirm(
				"Approve Leave Request", {
					styleClass: bCompact ? "sapUiSizeCompact" : ""
				}
			);
         $.get("approve.xsjs",function(result){
            return result;
        });
     },
     
     onclear: function() {
         $.get("clearhistory.xsjs",function(result){
            return result;
        });
     },
     
     onlogin: function() {
         var uname = this.getView().byId("username").getValue();
         var pword = this.getView().byId("password").getValue();
         if((uname === "system") && (pword === "system")) {
         this.getSplitAppObj().toDetail(this.createId("detail2"));
         this.getView().byId("login").reset();
         } else {
             alert("Credentials are not valid");
         }
     },
     
     onemployeesubmission: function() {
         var name = this.getView().byId("name").getValue();
         var org = this.getView().byId("organization").getValue();
         var email = this.getView().byId("email").getValue();
         var phone = this.getView().byId("phone").getValue();
         var notes = this.getView().byId("notes").getValue();
         
         $.ajax({
    method: "POST",
    url: "contact.xsjs",
        data: { NAME  : name ,
            ORG   : org , 
            EMAIL : email , 
            PHONE : phone , 
            NOTES : notes
              }
});
var bCompact = !!this.getView().$().closest(".sapUiSizeCompact").length;
			MessageBox.confirm(
				"Registration Successful", {
					styleClass: bCompact ? "sapUiSizeCompact" : ""
				}
			);
     },
     
     onlogout: function() {
         window.location.reload();
     },
     
     onreset: function() {
         window.location.reload();
     },
     
    ontile1press: function() {
        var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			oRouter.navTo("detail1");
    }
	
	
	});
});