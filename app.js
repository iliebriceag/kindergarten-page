// Navbar fixed
$(window).scroll(function () {
    $(".colorNavbar").toggleClass('fixed', $(window).scrollTop() > 50);
});

// Active Button
$(document).ready(function () {
    $("ul > li a").click(function () {
            $('ul > li a').removeClass('active');
            $(this).addClass('active');
        });
    });
