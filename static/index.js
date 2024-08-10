var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 2000);

// console.log("start");
document.getElementById("hamburger_icon").addEventListener('onclick', show_responsive_box);
// console.log("event_listner");
var o = document.getElementById("nav_responsive_box");
// console.log("var box acquired");
function show_responsive_box() {
    // console.log("inside function");
    if (o.style.display != "flex") {
        // console.log("inside if");
        o.style.display = "flex";
    }
    else { o.style.display = "none" }
}

document.getElementById("close_responsive_box").addEventListener('onclick',hide_responsive_box);
var x = document.getElementById("nav_responsive_box");
function hide_responsive_box(){
    if(x.style.display != "none"){
        x.style.display = "none";
    }

}
