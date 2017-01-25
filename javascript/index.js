/* Nav Bar */

/* Fixing Nav */
const nav = document.querySelector('#nav');
let topOfNav = nav.offsetTop;

function fixNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = nav.offsetHeight + 'px';
        document.body.classList.add('fixed-nav');
    } else {
        document.body.classList.remove('fixed-nav');
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixNav);

/* Toggle active on click */

$('ul.nav-items > li').click(function () {
    $(this).children('a').toggleClass('nav-active');
    $(this).siblings('li').children('a').removeClass('nav-active');
});

$(document).ready(function () {
    $('li a').click(function () {
        var $href = $(this).attr('href');
        $('body').stop().animate({
            scrollTop: $($href).offset().top
        }, 1000);
        return false;
    });
    $(".gallery-item").on("mouseover", function () {
        $(this).addClass("animated pulse");
    });

    $(".gallery-item").on("mouseout", function () {
        $(this).removeClass("animated pulse");
    });
    
    $(".fa-github").on("click", function() {
        window.open("https://github.com/DevRice");
    });
    
    $(".fa-free-code-camp").on("click", function() {
        window.open("https://www.freecodecamp.com/devrice");
    });
    
    $(".fa-stack-overflow").on("click", function() {
        window.open("http://stackoverflow.com/users/7381114/alex-nite");
    });
    
    $(".fa-facebook").on("click", function() {
        window.open("https://www.facebook.com/alex.nite.526");
    });
});