$(document).ready(function() {
    $('.menu-toggle').click(function() {
        $('nav ul').toggleClass('showing');
    });

    // Smooth scrolling for links
    $('a[href*="#"]').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 500, 'linear');
    });
});