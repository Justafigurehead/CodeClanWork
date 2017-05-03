var app = function(){
  var button = document.querySelector('button');
  button.onclick = handleButtonClick;

  var input = document.querySelector('input');
  input.onkeyup = handleKeyPress; //also has onkeypress and onkeydown;

  var select = document.querySelector('select');
  select.onchange = handleSelectChanged;
};


var handleSelectChanged = function(){
  var pTag = document.querySelector('#select-result');
  var result = "";
  if (this.value === "Caesar") result = "Et tu, Brutus!";
  pTag.innerText = result  + " Excellent choice, good fellow.";
};


var total =  0 + 1;
var handleButtonClick = function(){
  var pTag = document.querySelector('#button-result');
   pTag.innerText = 'The button has been suitably pressed ' + total + ' times, good Sir.';
   total ++;
};

var handleKeyPress = function(){
  var pTag = document.querySelector('#text-result');
  pTag.innerText = this.value;
}


window.onload = app;
