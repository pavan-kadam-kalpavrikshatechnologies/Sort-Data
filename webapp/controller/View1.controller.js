sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("project1.controller.View1", {

            
            onInit: function() {
                var a = this.getOwnerComponent().getModel("modeldata1").getProperty("/student1");
                var b = this.getOwnerComponent().getModel("modeldata2").getProperty("/student2");
                var concatdata = [];
            
                for (var i = 0; i < a.length; i++) {
                    var item = Object.assign({}, a[i]);
                    var matchFound = false;
                    for (var j = 0; j < b.length; j++) {
                        if (b[j]['expid'] === item['expid']) {
                            Object.assign(item, b[j]); 
                            concatdata.push(item);
                            matchFound = true;
                            break;}}                    
                    if (!matchFound) {
                        concatdata.push(item);}} 

                for (var k = 0; k < b.length; k++) {
                    var found = false;
                    for (var m = 0; m < concatdata.length; m++) {
                        if (concatdata[m]['expid'] === b[k]['expid']) {
                            found = true;
                            break;}}
                    if (!found) {
                        concatdata.push(b[k]);}}
                var oModel = new sap.ui.model.json.JSONModel(concatdata);
                this.getView().setModel(oModel, "oModel1");
            }
            
            
            
            
               


        //    for (var i = 0; i < a.length; i++) {
        //     var item = Object.assign({}, a[i].student1);
        //     console.log(item);
    
        //     for (var j = 0; j < b.length; j++) {
        //         if (b[j]['expid'] === item['expid']) {
        //             Object.assign(item, b[j].student2); 
        //             break;
        //         }
            // onInit: function () {
            //     var jsondata1 ={"exp1": [{
            //         "id":1,
            //         "name":"pavan",
            //         "lname":"kadam"
            //     },{
            //         "id":2,
            //         "name":"karan",
            //         "lname":"kadam"
            //     }
            // ]}
            //     var jsondata2 = {"exp2":[{
            //             "id":3,
            //             "name":"vikas",
            //             "lname":"kokare"  
            //     },{
            //         "id":4,
            //             "name":"vikas",
            //             "lname":"kokare"  
            //     }
            // ]}
            //     var merge = jsondata2.exp2.concat(jsondata1.exp1)
            //     var oModel = new sap.ui.model.json.JSONModel(merge)
            //     this.getView().setModel(oModel,"oModel1")
            // },
            // onPress : function(){
            //     var a = this.byId("login").getValue()
            //     var b = this.byId("pass").getValue()
            //     if(a==""){
            //         this.getView().byId("login").setValueState("Error")
            //         this.getView().byId("login").setValueStateText("Enter the value length of 15 ")
            //     }else{
            //         this.getView().byId("login").setValueState("None")
            //     }
            //         if(b.includes("1") && b.includes("$") && b.includes("*") && b.includes("A")){
            //             this.getView().byId("pass").setValueState("None")
            //         }else if(b.length==10){
            //             this.getView().byId("pass").setValueState("None")
            //         }else{
            //             this.getView().byId("login").setValueState("Error")
            //             this.getView().byId("login").setValueStateText("Enter the valid password and length")
            //         }
            //     }
        });
    });
