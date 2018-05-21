//define functions here
function getIt(){
  alert('Hey!');
}
function frameIt() {
  $('img').addClass("tasty");
}
function pressIt(key) {
  if (g == 71){
  alert('G was pushed');
  }
}
function submitIt() {
  alert("Your form is going to be submitted now.");
}
$(document).ready(function(){
var g = 0;
$("p").on('click', getIt);
$("input").on('keydown', function(key){
  if (key.keyDown == 71){
    g = 71;
    pressIt();
  }
});
$('img').on('load', frameIt);
$('form').on('submit', submitIt);
});
