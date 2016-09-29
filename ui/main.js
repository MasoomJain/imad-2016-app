/* console.log('Loaded!');

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

*/

//Counter Code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function (){
    
    // create a request to the counter endpoint
    var request = new XMLHttpRequest(); 
    //capture the response and store it in a variable
    request.onreadystateschange = function () {
        if(request.readyState === XMLHttpRequest.DONE){
            if(request.status === 200){
                var counter  = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        
    };
  // make a request
  request.open('GET','http://masoomjain.imad.hasura-app.io/counter',true);
  request.send(null);
};