$(document).ready(function () {
    $("#btn_person").bind("mouseenter", changePersonBtn).bind("mouseleave", returnPersonBtn);
    $("#btn_todo").bind("mouseenter", changeTodoBtn).bind("mouseleave", returnTodoBtn);
    $("#confirm_modify").bind("click",checkSamePasswd);
});

function changePersonBtn() {
    $("#btn_person").css("background-color", "darkgray");
}

function returnPersonBtn() {
    $("#btn_person").css("background-color", "lightgray");
}

function changeTodoBtn() {
    $("#btn_todo").css("background-color", "darkgray");
}

function returnTodoBtn() {
    $("#btn_todo").css("background-color", "lightgray");
}


