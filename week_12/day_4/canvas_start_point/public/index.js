

var app = function(){
  var canvas = document.getElementById("main-canvas");
  console.log(canvas);
  var context = canvas.getContext('2d');
  var img = document.createElement('img');
  img.src = "http://vignette2.wikia.nocookie.net/farmville2/images/2/26/Cheese_Quiche.png";

  var draw = function(){
    context.drawImage(img, 175, 175, 200, 200);
  };

  img.onload = draw;

  context.beginPath();
  context.moveTo(100, 150);
  context.arc(100 , 200, 25, 10, Math.PI*2, true);
  context.closePath();
  context.stroke(); 
  
  context.beginPath();
  context.moveTo(100,100);
  context.lineTo(100, 200);
  context.closePath();
  context.stroke();
  
  
  var drawCircle = function(x, y){
    context.beginPath();
    context.arc(x, y, 50, 0, Math.PI*2, true);
    context.stroke(); 
  };

  canvas.onclick = function(event){
    drawCircle(event.x, event.y);
  };

  var colorPicker = document.querySelector('#input-color');
  colorPicker.onchange = function(){
    var newColor = this.value;
    console.log(newColor);
    context.strokeStyle = newColor;
   };

};

window.onload = app;






// context.fillStyle = "tomato";
// context.fillRect(20, 20, 100, 100);


// context.beginPath();
// context.moveTo(100, 150);
// context.arc(100 , 200, 25, 10, Math.PI*2, true);
// context.closePath();
// context.fill();

// context.beginPath();
// // context.moveTo(200, 300);
// // context.lineTo(300, 300);
// context.arc(250, 315, 50, 15, Math.PI*2, true);

// context.stroke();

// context.beginPath();
// context.arc(250, 230, 150, 0, Math.PI*2, true);
// context.stroke();



