//define functions here
function getIt(){
  alert('Hey!');
}
function frameIt() {
  $('img').addClass("tasty");
}
function pressIt(event) {
  alert('G was pushed');
}
function submitIt() {
  alert("Your form is going to be submitted now.");
}
$(document).ready(function(){

$("p").on('click', getIt);
$("input").on('keypress', function(){
  if (event.keyCode == 71){
    pressIt();
  }
});
$('img').on('load', frameIt);
$('form').on('submit', submitIt);
});
