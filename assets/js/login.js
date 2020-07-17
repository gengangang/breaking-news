$(function () {
    //登录注册点击切换
    $('#to-reg').on('click', function () {
        $('.login-box').hide();
        $('.reg-box').show();
    })
    $('#to-login').on('click', function () {
        $('.login-box').show();
        $('.reg-box').hide();
    })

    //登录请求
    $('#login').submit(function (e) {
        e.preventDefault();
        var text = $(this).serialize();
        $.post('/api/login', text, res => {
            if (res.status !== 0) {
                return layer.msg(res.message);
            }
            layer.msg('登录成功，自动跳转...');
            localStorage.setItem('token', res.token);
            //页面跳转
            location.href = '/index.html'
        })
    })

    //注册请求
    $('#reg').submit(function (e) {
        e.preventDefault();
        var data = {
            username: $('.reg-number').val(),
            password: $('.reg-password').val(),
        }
        $.post('/api/reguser', data, res => {
            if (res.status !== 0) {
                return layer.msg(res.message);
            }
            layer.msg('注册成功，自动跳转...');
            $('#to-login').click();
        })
    })
    //判断
    layui.form.verify({
        pass: [
            /^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格'
        ]
        , repass: function (val) {
            if (val !== $('.reg-password').val()) {
                return '两次密码输入不一致';
            }
        }
    })
})