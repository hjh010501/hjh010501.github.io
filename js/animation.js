var $window = $(window);
var window_height = $window.height();
var scrollvalue;
var scrollvalueper;

$( window ).scroll(function() {

    
    scrollvalue = $window.scrollTop();
    scrollvalueper = (scrollvalue / window_height * 20);
    $('.prograss').css("height", scrollvalueper + "%");
    $('.page_count_text').css("margin-top", scrollvalueper * (window_height - 400) * 0.01 + "px");
    if(scrollvalueper >= 85) {
        $('.page_count_text').text("6 —— 6");
    } else if(scrollvalueper >= 68) {
        $('.page_count_text').text("5 —— 6");
    } else if(scrollvalueper >= 51) {
        $('.page_count_text').text("4 —— 6");
    } else if(scrollvalueper >= 34) {
        $('.page_count_text').text("3 —— 6");
    } else if(scrollvalueper >= 17) {
        $('.page_count_text').text("2 —— 6");
    } else {
        $('.page_count_text').text("1 —— 6");
    }

});

$( window ).mousemove(function(event) {
    
    scrollvalue = $window.scrollTop();
    $( ".mousecursor" ).css({
        "left": (event.pageX - 25) + "px",
        "top": (event.pageY - 25 - scrollvalue) + "px",
        "opacity": 1
      });
    $( ".real_mousecursor" ).css({
        "left": (event.pageX - 5) + "px",
        "top": (event.pageY - 5 - scrollvalue ) + "px",
        "opacity": 1
    });
});