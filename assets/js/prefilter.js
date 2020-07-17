$.ajaxPrefilter(function (options) {
    //在ajax发起请求之前会先执行这个代码
    options.url = 'http://ajax.frontend.itheima.net' + options.url;
})