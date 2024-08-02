// Add any JavaScript for dynamic features here

$(document).ready(function(){
    $('nav ul li a').click(function(){
        $('nav ul li a').removeClass('active');
        $(this).addClass('active');
    });
});
