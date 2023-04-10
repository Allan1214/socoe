$(window).on('load', function() {
    $('#loading_icon_container').hide();
});

$(".toggler").click(function () {
    $(".menu").slideToggle();
});

$(document).on('click mousewheel touchend', function(event) {
    if(!$(event.target).is(".menu") && !$(event.target).is(".toggler")){
        $(".menu").fadeOut();
        $(".toggler").prop('checked', false);
    }
});

$(window).scroll(function() {
    if ($(this).scrollTop()) {
        $('#back_to_top').fadeIn();
    } else {
        $('#back_to_top').fadeOut();
    }
});

$("#back_to_top").click(function() {
    $("html, body").animate({scrollTop: 0}, 1000);
});

$(".service_container:nth-child(1)").css("display", "flex");
$(".swiper-container-wrapper").on('mousewheel mouseup mouseleave touchend', function() {
    let toggle_number = parseInt($(this).find(".swiper-slide-active").attr("data-index-toggle"));
    $(".service_container").hide();
    $("#service_container_wrapper .service_container:nth-child("+toggle_number+")").css("display", "flex");
});

// about us
$(".service_wrapper").click(function () {
    $(this).find("h3").first().toggle();
    $(this).toggleClass("service_active");
});

// directory
$(".directory_container:nth-child(1)").css("display", "flex");
$(".swiper-container-wrapper").on('mousewheel mouseup mouseleave touchend', function() {
    let toggle_number = parseInt($(this).find(".swiper-slide-active").attr("data-index-toggle"));
    $(".directory_container").hide();
    $("#directory_wrapper .directory_container:nth-child("+toggle_number+")").css("display", "flex");
});
