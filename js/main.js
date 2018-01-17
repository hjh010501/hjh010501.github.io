// /**
//  * Created by KID on 2017. 8. 3..
//  */
var $window = $(window);
var window_height = $window.height();
var scrollvalue;

$( window ).scroll(function() {

    scrollvalue = $window.scrollTop();
    
    $('.prograss').css("height", (scrollvalue / window_height * 20) + "%");

});
