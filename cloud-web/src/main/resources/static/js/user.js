require.config({
    paths: {
        jquery: '../common/js/jquery-3.1.1.min.js',
        bootstrap: "../common/js/bootstrap.min.js",
        validate: "../common/js/jquery.validate.min.js",
        validate_msg_cn: "../common/js/message-cn.js",
        form: "../common/js/jquery.form.js",
        framework: "framework.js",
        layer: '../layer/layer.js',
        json2: '../common/js/json2.js',
        fileupload: "upload.js",
        inspinia: "inspinia.js",
        Utils: 'Utils.js'
        
    },
    shim: {
        "bootstrap": {deps: ["jquery"]},
        "validate": {deps: ["jquery"]},
        "validate_msg_cn": {deps: ["jquery", "validate"]},
        "form": {deps: ["jquery"]},
        "framework": {deps: ["jquery"]},
        "layer": {deps: ["jquery"]},
        "fileupload": {deps: ["jquery", 'bootstrap', 'Utils']},
        "inspinia": {deps: ["jquery", 'bootstrap']},
        "Utils": {deps: ["jquery", 'json2']}
    }
});
require(['jquery', 'Utils', 'fileupload', 'inspinia','framework','validate', 'validate_msg_cn', 'form', 'layer'],
    function (jQuery, Utils, Fileupload,Framework,Inspinia) {
       	  $ = jQuery;
        var User = {
        	init:function(){
        		
        	}
        };
        
//      Utils.ajaxFilter();
        User.init();
        // Framework.init();
        // Inspinia.init();
       
    }
);