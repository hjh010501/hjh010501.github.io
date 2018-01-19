var $window = $(window);
var window_height = $window.height();
var scrollvalue;

$( window ).scroll(function() {

    scrollvalue = $window.scrollTop();
    
    $('.prograss').css("height", (scrollvalue / window_height * 20) + "%");

});

$( window ).mousemove(function(event) {
    scrollvalue = $window.scrollTop();
    $( ".mousecursor" ).css({
        "left": (event.pageX - 25) + "px",
        "top": (event.pageY - 25 - scrollvalue) + "px"
      });
    $( ".real_mousecursor" ).css({
        "left": (event.pageX - 5) + "px",
        "top": (event.pageY - 5 - scrollvalue ) + "px"
    });
});