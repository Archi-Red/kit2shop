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

function change(event) {
    if(event.id=="small-black") {
        document.querySelector(".pro-img").src = '/img/smallBox/02_-_Black.png';
    } else if(event.id=="small-red") {
        document.querySelector(".pro-img").src = '/img/smallBox/02_-_Red.png';
    } else if(event.id=="small-blue") {
        document.querySelector(".pro-img").src = '/img/smallBox/02_-_Blue.png';
    } else if(event.id=="small-yellow") {
        document.querySelector(".pro-img").src = '/img/smallBox/02_-_Yellow.png';
    }
}