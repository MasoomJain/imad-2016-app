console.log('Loaded!');

var element = document.getElementById('main-text');
element.innerHTML = "How you Doing ?";

var img = document.getElementById('me');
var marginLeft = 0;
function moveRight () {
     marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px' ; 
}
img.onclick = function () {
    var interval = setInterval(moveRight, 50);
};