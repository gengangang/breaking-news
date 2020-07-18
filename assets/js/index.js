$(function () {
    geiInfo();

    //点击退出
    $('#out').on('click', function () {
        layui.layer.confirm('是否确定退出？', { icon: 3, title: '提示' }, function (index) {
            localStorage.removeItem('token');
            location.href = '/login.html'
            layer.close(index);
        });
    })
})

function geiInfo() {
    $.ajax({
        method: "get",
        url: "/my/userinfo",
        success: res => {
            console.log(res);
            if (res.status !== 0) {
                return layui.layer.msg(res.message);
            }
            renderAvatar(res.data);
        },
    });

}

function renderAvatar(uer) {
    var name = uer.nickname || uer.username;
    $('.text-title').html('欢迎 　' + name);
    if (uer.user_pic !== null) {
        $('.text-avatar').hide();
        $('.layui-nav-img').attr('src', uer.user_pic).show();
    } else {
        $('.layui-nav-img').hide();
        $('.text-avatar').html(name[0].toUpperCase()).show();
    }
}