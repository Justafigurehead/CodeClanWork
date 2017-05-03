
var draw = function(){
  var canvas = document.querySelector('canvas');
  console.log(canvas);
  return canvas.getContext('2d');
}

var speech = function(context){
  // Quadratric curves example - taken &  modified from https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes
  context.beginPath();
  context.moveTo(75, 25);
  context.quadraticCurveTo(25, 25, 25, 62.5);
  context.quadraticCurveTo(25, 100, 50, 100);
  context.quadraticCurveTo(50, 120, 75, 125);
  context.quadraticCurveTo(60, 120, 65, 100);
  context.quadraticCurveTo(125, 100, 125, 62.5);
  context.quadraticCurveTo(125, 25, 75, 25);
  context.stroke();
  context.fillStyle= 'white';
  context.fill();
};

var drawLeft = function(context){
  context.beginPath();
  context.moveTo(100,100)
  context.lineTo(x, y);
};

var doKeyDown = function(event){
  var currentposition = {
    y: 50, 
    x: 50
  }
  
  console.log(event);
  var canvas = document.querySelector('canvas');
  console.log(canvas);
  var context = canvas.getContext('2d');
  switch(event.which){
    case 37:
      // console.log("left");
      drawLeft(context);
      break;
    case 38:
      drawUp(context);
      // console.log("up");
      break;
    case 39:
      drawRight(context);
      // console.log("right");
      break;
    case 40: 
      drawDown(context);
      // console.log("down");
      break;
    default: 
      // console.log('Hey');
  } 
  event.preventDefault();
};

var addAListener = function(){
  this.addEventListener("keydown", doKeyDown(event));
  console.log(event);
};

var app = function(){

  // speech(context);
  window.onkeydown = function(event){
    doKeyDown(event);
  };




};

window.onload = app;