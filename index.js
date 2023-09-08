

    
$(document).ready(function() {

    var topOfOthDiv = $("#sub-heading").offset().top;
    $(window).scroll(function() {
        if($(window).scrollTop() > topOfOthDiv) { //scrolled past the other div?
            $("#nav-text").removeClass("atTop").addClass("nav-down"); //reached the desired point -- show div
        } else {
            $("#nav-text").removeClass("nav-down").addClass("atTop");
        }
    });
})    


