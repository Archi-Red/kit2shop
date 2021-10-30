$(document).ready(function(){
    $(".menu-toggler").click(function() {
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    });

    $(window).scroll(function() {
        if($(this).scrollTop() < 40) {
            $('.drop').fadeIn();
        } else {
            $('.drop').fadeOut();
        }
    });
});

function changesmall(event) {
    if(event.id=="small-black") {
        document.querySelector(".pro-img-small").src = 'img/smallBox/02_-_Black.png';
    } else if(event.id=="small-red") {
        document.querySelector(".pro-img-small").src = 'img/smallBox/02_-_Red.png';
    } else if(event.id=="small-blue") {
        document.querySelector(".pro-img-small").src = 'img/smallBox/02_-_Blue.png';
    } else if(event.id=="small-yellow") {
        document.querySelector(".pro-img-small").src = 'img/smallBox/02_-_Yellow.png';
    }
}

function changebig(event) {
    if(event.id=="big-black") {
        document.querySelector(".pro-img-big").src = 'img/bigBox/05_-_Black.png';
    } else if(event.id=="big-red") {
        document.querySelector(".pro-img-big").src = 'img/bigBox/05_-_Red.png';
    } else if(event.id=="big-blue") {
        document.querySelector(".pro-img-big").src = 'img/bigBox/05_-_Blue.png';
    } else if(event.id=="big-yellow") {
        document.querySelector(".pro-img-big").src = 'img/bigBox/05_-_Yellow.png';
    }
}