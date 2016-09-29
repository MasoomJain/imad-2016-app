console.log('Loaded!');

var element = document.getElementById("main-text");
element.innerHTML = "How you Doing ?";

var img = document.getElementById("madi")
var marginLeft = 0;
function moveRight () {
     marginLeft = marginLeft + 10;

    img.style.marginLeft = marginLleft + 'px' ; 
}
img.onclick = function () {
    var interval = setInterval(moveRight,100);
};