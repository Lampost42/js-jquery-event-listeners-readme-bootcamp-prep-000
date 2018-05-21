//define functions here
function getIt(){
  alert('Hey!');
}
function frameIt() {
  $('img').addClass("tasty");
}
function pressIt() {
  var g = 71;
  if (g == 71){
  alert('G was pushed');
  g = 0;
  }
}
function submitIt() {
  alert("Your form is going to be submitted now.");
}
$(document).ready(function(){
$("p").on('click', getIt);
$("input").on('keydown',pressIt);
$('img').on('load', frameIt);
$('form').on('submit', submitIt);
});
