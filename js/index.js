'use strict';

function hamburger() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

$("#light_green").click(function () {
    $("body").css("background-color", "#B2F5D5");
    $(".top-bar").css("background-color", "green");
    $(".speechbubble h2").css("color", "#B2F5D5");
});

$("#sidebar_light_green").click(function () {
    $("body").css("background-color", "#B2F5D5");
    $(".top-bar").css("background-color", "green");
    $(".speechbubble h2").css("color", "#B2F5D5");
});

$("#blue").click(function () {
    $("body").css("background-color", "#9AB9F4");
    $(".top-bar").css("background-color", "blue");
    $(".speechbubble h2").css("color", "#9AB9F4");
});

$("#sidebar_blue").click(function () {
    $("body").css("background-color", "#9AB9F4");
    $(".top-bar").css("background-color", "blue");
    $(".speechbubble h2").css("color", "#9AB9F4");
});

$("#grey").click(function () {
    $("body").css("background-color", "#DCDCDC");
    $(".top-bar").css("background-color", "grey");
    $(".speechbubble h2").css("color", "#DCDCDC");
});

$("#sidebar_grey").click(function () {
    $("body").css("background-color", "#DCDCDC");
    $(".top-bar").css("background-color", "grey");
    $(".speechbubble h2").css("color", "#DCDCDC");
});

$("#light_blue").click(function () {
    $("body").css("background-color", "#D8EEFB");
    $(".top-bar").css("background-color", "#A4DBF2");
    $(".speechbubble h2").css("color", "#D8EEFB");
});

$("#sidebar_light_blue").click(function () {
    $("body").css("background-color", "#D8EEFB");
    $(".top-bar").css("background-color", "#A4DBF2");
    $(".speechbubble h2").css("color", "#D8EEFB");
});