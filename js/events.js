//define functions here
function getIt(){
  alert('Hey!');
}
function frameIt() {
  $('img').addClass("tasty");
}
function pressIt() {
  if (key.keyCode == 71){
    pressIt();
  alert('G was pushed');
  }
}
function submitIt() {
  alert("Your form is going to be submitted now.");
}
$(document).ready(function(){

$("p").on('click', getIt);
$("input").on('keypress', pressit);
$('img').on('load', frameIt);
$('form').on('submit', submitIt);
});
