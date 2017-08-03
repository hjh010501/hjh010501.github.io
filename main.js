/**
 * Created by KID on 2017. 8. 3..
 */

window.onload = load;

function load() {
    var random = Math.floor(Math.random() * 2);

    if(random == 0) {
        document.getElementsByClassName('kidevelop')[0].style.backgroundImage = "url(kidevelopio_b.png)";
        document.getElementsByTagName('body')[0].style.backgroundColor = "#000000";
    } else {
        document.getElementsByClassName('kidevelop')[0].style.backgroundImage = "url(kidevelopio.png)";
    }

}