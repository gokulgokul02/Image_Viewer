
var minus = document.getElementById("minus");
var plus = document.getElementById("plus");


minus.addEventListener("click", minusfun);
function minusfun() {
    var imag = document.getElementById("image");
    let width = imag.clientWidth;
    let height = imag.clientHeight;


    if (width <= 100 && height <= 100) {
        alert("MINIMUM SIZE");

    } else {
        imag.style.width = (width - 10) + "px";
        imag.style.height = (height - 10) + "px";

    }


}
plus.addEventListener("click", plusfun);
function plusfun() {
    var imag = document.getElementById("image");
    let width = imag.clientWidth;
    let height = imag.clientHeight;


    if (width >= 200 && width >= 200) {
        alert("MAXIMUM SIZE");
        plus.classList.add("style");

    }
    else {
        imag.style.width = (width + 10) + "px";
        imag.style.height = (height + 10) + "px";
    }
}

var button=document.getElementById("btn");
button.addEventListener("click",custom);
function custom(){
    var w=prompt("enter width (in px):");
    var h=prompt("enter height (in px):");
    var imag = document.getElementById("image");
    let width = imag.clientWidth;
    let height = imag.clientHeight;
    imag.style.width = +w + "px";
        imag.style.height = +h + "px";


}

