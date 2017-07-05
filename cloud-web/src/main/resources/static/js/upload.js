/**
 * 文件上传
 */
require.config({
    paths: {
        webuploader: '../webuploader/webuploader.js',
        jquery: '../common/js/jquery-3.1.1.min.js'
    },
    shim: {
        webuploader: {deps: ['jquery']}
    }
});
define(['webuploader'], function (WL) {
    var Utils = window.common;
    var Files = {
        options: {
            uploader: '',
            extensions: "pdf,doc,docx,jpg,jpeg,png",
            mimeTypes: "image/*,application/pdf,application/msword",
            url: '/upload.json'
        },
        init: function (options) {
            if(options&&options.extensions){
                Files.options.extensions = options.extensions;
            }
            if(options&&options.mimeTypes){
                Files.options.mimeTypes = options.mimeTypes;
            }
            this.initUpload();
            this.uploadFileBtnEvent();
        },
        formData: {fileType: 1,projectId :"",personId :"",companyId :""},
        uploadFileBtnEvent: function () {
            $('#container').on('click', '.uploader', function (e) {
                Files.handlerUploadEvent($(this).attr('name'));
            });
        },
        handlerUploadEvent: function (name) {
            switch (name) {
                case 'idCard' :
                    Files.formData.fileType = '1';
                    Files.formData.personId = $("#id").val();
                    break;
                case 'cert' :
                    Files.formData.fileType = '2';
                    Files.formData.personId = $("#id").val();
                    break;
                case 'biz-lic' :
                    Files.formData.fileType = '3';
                    Files.formData.companyId = $("#companyId").val();
                    break;
                case 'comp-cert' :
                    Files.formData.fileType = '2';
                    Files.formData.companyId = $("#companyId").val();
                    break;
                case 'contract' :
                    Files.formData.fileType = '4';
                    Files.formData.projectId = $("#projectId").val();
                    break;
                case 'projectProxy' :
                    Files.formData.fileType = '5';
                    Files.formData.projectId = $("#projectId").val();
                    break;
                case 'geology' :
                    Files.formData.fileType = '6';
                    Files.formData.projectId = $("#projectId").val();
                    break;
                case 'foundation' :
                    Files.formData.fileType = '7';
                    Files.formData.projectId = $("#projectId").val();
                    break;
                case 'project-img' :
                    Files.formData.fileType = '8';
                    Files.formData.projectId = $("#projectId").val();
                    break;
            }
            Files.clickProxy(name);
        },
        clickProxy: function (name) {
            $('#uploader #filePicker input[name=file]').click();
        },
        initUpload: function () {
            /*var state = 'pending', $btn = $('#ctlBtn');*/
            $('#filePicker').text("");
            var $context = $("#context").val();
            // 初始化Web Uploader
            var uploader = WL.create({
                // 选完文件后，是否自动上传。
                auto: true,
                // swf文件路径
                swf: $context + '/resources/webuploader/Uploader.swf',
                // 文件接收服务端。
                server: $context + Files.options.url,
                // 选择文件的按钮。可选。
                // 内部根据当前运行是创建，可能是input元素，也可能是flash.
                pick: '#filePicker',
                fileSingleSizeLimit: 10000000,
                // 允许上传文件类型。
                accept: {
                    title: 'File',
                    extensions: Files.options.extensions,
                    mimeTypes: Files.options.mimeTypes
                },
                formData: Files.formData
            });
            // 当有文件添加进来的时候
            uploader.on('fileQueued', function (file) {
                //更新上传是附加参数
                uploader.option('formData', Files.formData);
                if(Files.formData.fileType === "6"){
                    $("#geology-files").empty();
                }
                if(Files.formData.fileType === "7"){
                    $("#foundation-files").empty();
                }
            });
            // 文件上传过程中创建进度条实时显示。
            uploader.on('uploadProgress', function (file, percentage) {
                var $li = $('#' + file.id),
                    $percent = $li.find('.progress span');

                // 避免重复创建
                if (!$percent.length) {
                    $percent = $('<p class="progress"><span></span></p>')
                        .appendTo($li)
                        .find('span');
                }

                $percent.css('width', percentage * 100 + '%');
            });

            // 文件上传成功，给item添加成功class, 用样式标记上传成功。
            uploader.on('uploadSuccess', function (file, response) {
                //console.log("response  : ", response);
                if (response.success == true) {
                    layer.alert("文件上传成功", {icon: 0, title: '文件上传提示'});
                    Files.uploadSuccess(response.data);
                } else if (response.success == false) {
                    layer.alert(response.msg, {icon: 0, title: '文件上传提示'});
                }
                uploader.removeFile(file);
            });

            // 文件上传失败，显示上传出错。
            uploader.on('uploadError', function (file) {
                var $li = $('#' + file.id),
                    $error = $li.find('div.error');

                // 避免重复创建
                if (!$error.length) {
                    $error = $('<div class="error"></div>').appendTo($li);
                }

                $error.text('上传失败');
            });
            // 完成上传完了，成功或者失败，先删除进度条。
            uploader.on('uploadComplete', function (file) {
                $('#' + file.id).find('.progress').remove();
                $("#fileSelected").text('');
            });
            uploader.on('filesQueued', function (files) {
                var firstObj = $('#filePicker').children(':first'),
                    selectText = '已选择' + (files && files.length ? files.length : 0) + '个文件';
                if (firstObj && firstObj[0].innerHTML.indexOf('已选择') != -1) {
                    firstObj.html(selectText);
                } else {
                    firstObj.before('<span id="fileSelected" class="file-selected">' + selectText + '个文件</span>');
                }
            });
        },

        uploadSuccess: function (data) {
            if (data) {
                data = data[0];
                if (data.fileType == "1") {
                    $("input[name='idCardFile']").val(data.id);
                    $("#idCardFile").attr("file-url", data.serverUrl);
                    $("#idCardFile").text(data.fileName);
                }
                if (data.fileType == "2") {
                    $("input[name='qualificationFile']").val(data.id);
                    $("#qualificationFile").attr("file-url", data.serverUrl);
                    $("#qualificationFile").text(data.fileName);
                }
                if (data.fileType == "3") {
                    $("input[name='bizLicFile']").val(data.id);
                    $("#bizLicFile").attr("file-url", data.serverUrl);
                    $("#bizLicFile").text(data.fileName);
                }
                if (data.fileType == "4") {
                    $("input[name='contractfile']").val(data.id);
                    $("#contact-preview").attr("file-url", data.serverUrl);
                    $("#contact-preview").text(data.fileName);
                }
                if (data.fileType == "5") {
                    $("input[name='proxyfile']").val(data.id);
                    $("#proxy-preview").attr("file-url", data.serverUrl);
                    $("#proxy-preview").text(data.fileName);
                }
                if (data.fileType == "6" || data.fileType == "7") {
                    var option = '<option value="' + data.serverUrl + '">' + data.fileName + '</option>';
                    if(data.fileType == "6"){
                        $("#geology-files").append(option);
                    }
                    if(data.fileType == "7"){
                        $("#foundation-files").append(option);
                    }
                }

                if (data.fileType == "8") {
                    $("#project_pic").append('<option value="' + data.id + '">' + data.fileName + '</option>');
                }
            }
        }
    };
    return Files;
});