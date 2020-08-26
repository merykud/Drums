var crash = new Audio('sounds/crash.mp3');
var kick = new Audio('sounds/kick-bass.mp3');
var snare = new Audio('sounds/snare.mp3');
var tom1 = new Audio('sounds/tom-1.mp3');
var tom2 = new Audio('sounds/tom-2.mp3');
var tom3 = new Audio('sounds/tom-3.mp3');
var tom4 = new Audio('sounds/tom-4.mp3');

var allElements = document.querySelectorAll(".drum");

for (var i = 0; i < allElements.length; i++) {

  allElements[i].addEventListener("click", function() {
    var content = this.innerHTML;
    assignSound(content);
    changeAppearance(content);

  });
}

document.addEventListener("keydown", function(event) {
  var pressed = event.key;

  assignSound(pressed);
  changeAppearance(pressed);

});

function assignSound(letter) {

  switch (letter) {
    case 'w':
      crash.play();
      break;
    case 'a':
      kick.play();
      break;
    case 's':
      snare.play();
      break;
    case 'd':
      tom1.play();
      break;
    case 'j':
      tom2.play();
      break;
    case 'k':
      tom3.play();
      break;
    case 'l':
      tom4.play();
      break;

    default:
      console.log(content);

  }

}

function changeAppearance(letter){

  document.querySelector("."+ letter).classList.add("pressed");


setTimeout(function() {
document.querySelector("."+ letter).classList.remove("pressed");
 }, 100);



}
