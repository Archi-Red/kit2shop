$(document).ready(function(){
    $(".menu-toggler").click(function() {
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
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

function changechaise(event) {
    if(event.id=="chaise-black") {
        document.querySelector(".pro-img-chaise").src = 'img/chaise/CHAIR_BLACK.png';
    } else if(event.id=="chaise-red") {
        document.querySelector(".pro-img-chaise").src = 'img/chaise/CHAIR_RED.png';
    } else if(event.id=="chaise-blue") {
        document.querySelector(".pro-img-chaise").src = 'img/chaise/CHAIR_BLUE.png';
    } else if(event.id=="chaise-yellow") {
        document.querySelector(".pro-img-chaise").src = 'img/chaise/CHAIR_YELLOW.png';
    }
}

function changeetagere(event) {
    if(event.id=="etagere-black") {
        document.querySelector(".pro-img-etagere").src = 'img/etageres/RGM_BLACK.png';
    } else if(event.id=="etagere-red") {
        document.querySelector(".pro-img-etagere").src = 'img/etageres/RGM_RED.png';
    } else if(event.id=="etagere-blue") {
        document.querySelector(".pro-img-etagere").src = 'img/etageres/RGM_BLUE.png';
    } else if(event.id=="etagere-yellow") {
        document.querySelector(".pro-img-etagere").src = 'img/etageres/RGM_YELLOW.png';
    }
}

function changetable(event) {
    if(event.id=="table-black") {
        document.querySelector(".pro-img-table").src = 'img/table/TABLE_BLACK.png';
    } else if(event.id=="table-red") {
        document.querySelector(".pro-img-table").src = 'img/table/TABLE_RED.png';
    } else if(event.id=="table-blue") {
        document.querySelector(".pro-img-table").src = 'img/table/TABLE_BLUE.png';
    } else if(event.id=="table-yellow") {
        document.querySelector(".pro-img-table").src = 'img/table/TABLE_YELLOW.png';
    }
}

function changesommier(event) {
    if(event.id=="sommier-black") {
        document.querySelector(".pro-img-sommier").src = 'img/sommier/SOMMIER_BLACK.png';
    } else if(event.id=="sommier-red") {
        document.querySelector(".pro-img-sommier").src = 'img/sommier/SOMMIER_RED.png';
    } else if(event.id=="sommier-blue") {
        document.querySelector(".pro-img-sommier").src = 'img/sommier/SOMMIER_BLUE.png';
    } else if(event.id=="sommier-yellow") {
        document.querySelector(".pro-img-sommier").src = 'img/sommier/SOMMIER_YELLOW.png';
    }
}

function changetdn(event) {
    if(event.id=="tdn-black") {
        document.querySelector(".pro-img-tdn").src = 'img/tdn/TDN_BLACK.png';
    } else if(event.id=="tdn-red") {
        document.querySelector(".pro-img-tdn").src = 'img/tdn/TDN_RED.png';
    } else if(event.id=="tdn-blue") {
        document.querySelector(".pro-img-tdn").src = 'img/tdn/TDN_BLUE.png';
    } else if(event.id=="tdn-yellow") {
        document.querySelector(".pro-img-tdn").src = 'img/tdn/TDN_YELLOW.png';
    }
}