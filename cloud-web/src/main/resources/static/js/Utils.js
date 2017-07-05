
require.config({
    paths: {

    }
});
define([''], function () {

    var common = {
        options: {
            type: "",
            append: "append",
            prepend: "prepend",
            after: "after"
        },
        getUrl: function (url) {
        
            var context = $("#appContext").val();
            return "http://".concat(window.location.host).concat(context).concat(url);
        },
        preview : function(url){
            var imagePreview = $("#img-preview");
            imagePreview.children("img").attr("src", url);
            imagePreview.show();
            layer.open({
                type: 1,
                title: false,
                closeBtn: 1,
                area: ['90%', '90%'],
                skin: 'layui-layer-nobg', //没有背景色
                shadeClose: true,
                content: imagePreview
            });
        },
        //url过滤,判断是否相对路径,如果是URL自动补全
        ajaxFilter: function () {
            $.ajaxPrefilter(function (options) {
                var url = options.url.substr(0, 4);
                if (url !== 'http') {
                    options.url = $("#context").val() + options.url;
                }
            });
        },
        ajaxSubmit: function (url, params, func, asyncBool) {
            var task = $.Deferred();
            $.ajax({
                type: 'POST',
                contentType: "application/x-www-form-urlencoded",
                //contentType:"application/json",
                dataType: 'json',
                url: url,
                async :　asyncBool != null ? asyncBool : true ,
                data: params
            }).done(function (data) {
                var isSessionExpired = data.feedback && data.feedback.errorCode=='A024';
                if(isSessionExpired){
                    location.reload();
                }
                typeof func==="function" && func(data);
                task.resolve(data);
            }).fail(function () {
                task.reject();
            });
            return task;
        },
        /**
         * 将字符"\r\n"转换成html标签<BR >
         * @param data
         * @param arr
         * @returns {*}
         */
        replaceLineBreakToBr:function(data,arr){
            $.each(arr,function(index,key){
                if(key=='buildingSurrounding' || key=='buildingTraffic'){
                    var value =data.resourceBuilding[key];
                    value =value.replace(/\r\n/g,"<BR >");
                    data.resourceBuilding[key] =  value;
                }
                if(key=='resourceAdditional'|| key=='resourceDescription'){
                    var value =data.resourceInfo[key];
                    value =value.replace(/\r\n/g,"<BR >");
                    data.resourceInfo[key] = value;
                }
            });
            return data;
        },
        replaceLineBreak:function( value ){
             return value && value.replace(/\r\n/g,"<BR >");
        },
        clearInputValue : function(eleArr){
            $.each(eleArr,function(index, selector ){
                $(selector).val('');
            });
        },
        clearForm : function(formId){
            $( formId + " input,textarea").val('');
        },
        clearByInputName : function(eleArr){
            $.each(eleArr,function(index, selector ){
                $("input[name='" + selector +"']").val('');
            });
        },
        emptyEle : function(eleArr){
            $.each(eleArr,function(index, selector ){
                 $(selector).empty();
            });
        },
        hideEle : function(eleArr){
            $.each(eleArr,function(index, selector ){
                $(selector).hide();
            });
        },
        showEle : function(eleArr){
            $.each(eleArr,function(index, selector ){
                $(selector).show();
            });
        },
        removeEle : function(eleArr){
            $.each(eleArr,function(index, selector ){
                $(selector).remove();
            });
        },
        setValues : function(eleArr,value){
            $.each(eleArr,function(index, selector ){
                $(selector).val(value);
            });
        },
        isPrice : function( value ){
            // 解读: "/^(-)?(([1-9]{1}\d*)|([0]{1}))(\.(\d){1,2})?$/"
            //  ^表示以什么开头 我们这里是 - ， 后面的？是表示“-”出现一次或者零次
            // (([1-9]{1}\d*)|([0]{1})) 表示不以0开头的数字组合或者仅出现一个0
            // (\.(\d){1,2})?表示小数点后两位，出现0次或者一次 必须是大于0的金额正则表达式：
           /* var price= /^(([1-9]{1}\d*)|([0]{1}))(\.(\d){1,2})?$/;*/
            var price= /^(([1-9]{1}\d*)|([0]{1}))$/;
           return price.test(value) && ( value!=='0' && value!=='0.0');
        },
        isNumber : function(value){
            var number = /^[1-9]*[1-9][0-9]*$/;
            var numberReg = new RegExp(number);
            return ( numberReg.test(value) );
        },
        isNum : function(obj) {
            return obj === +obj
        },
        isNozero : function( value ){
            var num= /^(([1-9]{1}\d*)|([0]{1}))(\.(\d){1,2})?$/;
            return num.test(value) && ( value!=='0' && value!=='0.0');
        },
        isMobile : function(value){
            var mobile = /^1[3|4|5|6|7|8]\d{9}$/;
            return (mobile.test(value));
        },
        isEmail : function(value){
            var mail = /^[a-zA-Z0-9._%-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,4}$/;
            return (mail.test(value));
        },
        isTel : function(value){
            var phone = /^0\d{2,3}-\d{7,8}$/;
            return (phone.test(value));
        },
        dateFormat : function(date,fmt,addYears){ //author: meizz
            // 对Date的扩展，将 Date 转化为指定格式的String
            // 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
            // 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
            // 例子：
            // (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
            // (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18
            var o = {
                "M+" : date.getMonth()+1,                 //月份
                "d+" : date.getDate(),                    //日
                "h+" : date.getHours(),                   //小时
                "m+" : date.getMinutes(),                 //分
                "s+" : date.getSeconds(),                 //秒
                "q+" : Math.floor((date.getMonth()+3)/3), //季度
                "S"  : date.getMilliseconds()             //毫秒
            };
            if(/(y+)/.test(fmt))
                fmt=fmt.replace(RegExp.$1, ( date.getFullYear()+addYears +"").substr(4 - RegExp.$1.length));
            for(var k in o)
                if(new RegExp("("+ k +")").test(fmt))
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
            return fmt;
        },
        ajaxFormSubmit: function (form, url, func) {
            $(form).ajaxSubmit({
                type: 'POST',
                contentType: "application/x-www-form-urlencoded",
                dataType: 'json',
                url: url,
                //data: params,
                // beforeSubmit: showRequest,  //提交前的回调函数
                success: func,
                error: function (XmlHttpRequest, textStatus, errorThrown) {
                    console.log("ajaxFormSubmit error : ", data);
                }
            });
        },

        /**
         * 功能 ：将表单的所有input都设为可编辑的
         *@param 要操作表单的id
         */
        formWritable: function (formId) {
            $( formId + " input,textarea").removeAttr("readonly");
            $( formId + " input,textarea").css('cursor', '');
        },

        /**
         * 功能 ：将给定的input设为可编辑
         * @param array 数组，存放有要操作的input的id
         */
        inputWriteable: function (array) {
            for (var i = 0; i < array.length; i++) {
                $('#' + array[i]).removeAttr("readonly");
                $('#' + array[i]).css('backgroundColor', '#FFF');
            }
        },

        /**
         * 功能 ：将表单的所有input都设为只读
         *@param 要操作表单的i
         */
        formReadOnly: function (formId) {
            $( formId + " input,textarea").attr("readOnly", true);
            $( formId + " input,textarea").css('backgroundColor', '#ececec');
        },

        /**
         * 功能 ：将给定的input设为只读
         * @param array 数组，存放有要操作的input的id
         */
        inputReadOnly: function (array) {
            for (var i = 0; i < array.length; i++) {
                $('#' + array[i]).attr("readOnly", true);
                $('#' + array[i]).css('backgroundColor', '#ececec');
            }
        },
        disabled : function(array){
            for (var i = 0; i < array.length; i++) {
                $('#' + array[i]).attr("disabled", "disabled");
                $('#' + array[i]).addClass("");
            }
        },
        enable : function( array ){

        },
        /**
         * 填充form表单
         * @param data json数据
         * @param fields 需要处理的字段
         */
        fillForms: function (data, fields) {
            $.each(data, function (k, v) {
                /*文本框处理*/
                $("input[name='" + k + "'][type!='checkbox'][type!='radio']").val(v);
                if (fields) {
                    /** 下拉框处理*/
                    if ($.inArray(k, fields.selects) != -1) {
                        $("select[name='" + k + "']").val(v);
                    }
                    /** 多行文本框处理 */
                    if ($.inArray(k, fields.textareas) != -1) {
                        $("textarea[name='" + k + "']").val(v);
                    }
                }
            });
        },
        fillInputs: function (data) {
            $.each(data, function (k, v) {
                $("input[name='" + k + "'][type!='checkbox'][type!='radio']").val(v);
            });
        }
    }

    return  window.common = common;
});

$(function () {

    /*****************************************************************/
    //    统一格式AJAX请求错误信息提示
    /*****************************************************************/
    $(document).ajaxError(function (event, request, settings) {
        layer.alert("系统忙，请稍后再试……");
    }).ajaxSuccess(function (event, request, settings) {
        if (settings.dataTypes.join("/") === "text/json") {// 这个判断要进一步严谨
            var rsp = JSON.parse(request.responseText);
            if (rsp.feedback && rsp.feedback.result == "failed") {
                var errorCode = rsp.feedback.errorCode || "UNKNOWN CODE";
                var errorText = rsp.feedback.errorMessage || "未知错误";
                if(errorCode!="A024"){
                    layer.alert(errorText,{icon:2});
                }
            }
        }
    });

    /*****************************************************************/
    //    给HTML添加自定事件机制
    /*****************************************************************/
    $(document).on('click', '[data-event]', function (e) {
        e && e.preventDefault();
        var $this = $(e.target);
        !$this.data('data-event') && ($this = $this.closest('[data-event]'));
        var event = $this.attr('data-event');
        if (event) {
            var events = event.split(",");
            for (var idx in events) {
                var theEvent = events[idx].replace(/^\s\s*/, '').replace(/\s\s*$/, '');
                wyapp.emit(theEvent, $this.data(), $this);
            }
        }
    });
});