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
$("input").on('keypress', function(key){
  console.log(key.keyCode);
  if (key.keyCode == 103){
    pressIt();
  }
});
$('img').on('load', frameIt);
$('form').on('submit', submitIt);
});
