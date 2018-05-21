//define functions here
function getIt(){
  alert('Hey!');
}
function frameIt() {
  $('img').addClass("tasty");
}
function pressIt(key) {
  $("input").on('keyup', function(key){
  if (key.keyCode == 71){
  alert('G was pushed');
  }
  });
}
function submitIt() {
  alert("Your form is going to be submitted now.");
}
$(document).ready(function(){

$("p").on('click', getIt);
$("input").on('keydown', pressIt);
$('img').on('load', frameIt);
$('form').on('submit', submitIt);
});
