//define functions here
function getIt(){
  alert('Hey!');
}
function frameIt() {
  $('img').addClass("tasty");
}
function pressIt(event) {
  if (event.keyCode == 71){
    pressIt();
  alert('G was pushed');
  }
}
function submitIt() {
  alert("Your form is going to be submitted now.");
}
$(document).ready(function(){

$("p").on('click', getIt);
$("input").on('keypress', pressIt(event));
$('img').on('load', frameIt);
$('form').on('submit', submitIt);
});
