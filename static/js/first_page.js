$(document).ready(function () {
    $("#login_btn").click(function () {
        var user_id = $("#user_id").val();
        var password = $("#password").val();
        if (user_id == "" || password == "") {
            alert("用户名或密码为空， 请填写完整！");
        }
    });
});

// get user login info.
// function getUserInfo() {

    // else {
    //     var user_login_info = {};
    //     user_login_info.user_id = $("#user_id").val();
    //     user_login_info.password = $("#password").val();
    //     var data = JSON.stringify(user_login_info);
    //     verity(data);
    // }
// }

// function verity(data) {
//     $.post('http://localhost:8888/login_verify', data, function (res) {
//         // document.getElementsByTagName("body")[0].innerHTML = res;
//         if(res.STATUS === "0") {
//             // confired_data.user_id = res.USER_ID;
//             // $.post('http://localhost:8888/person_info', JSON.stringify(confired_data));
//             alert("账号或密码错误, 请重试!");
//         }
//     });
// }

// function verity(data) {
//     $('#login').submit(
//             $.ajaxSetup({
//              data: {csrfmiddlewaretoken: '{{ csrf_token }}' },
//             })
//             $.ajax({
//             type:"POST",
//             url: '/verity',
//             data: data,
//             dataType:'json',
//             cache: false,
//             success: function(data) {
//                 if(data === "1" ){
//                     location.href = '/person_info';
//                 }
//                 else if(data == "0" ){
//                     alert("账号或密码错误, 请重试!");
//                 }
//             },
//             error: function() {
//                 alert('请求失败，请刷新页面后重试');
//             }
//         });
// }
