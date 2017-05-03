var favFood = [];


var setSpanText = function(text){
  var span = document.querySelector('#fav-food')
  span.innerText = text;
};

var setFaveFoods = function(favefoods){
  var favouriteFoods = document.querySelector('#favouritefoods');
  favouriteFoods.innerText = favefoods.join(", ")
};


var handleButtonClick = function(){
  var input = document.querySelector('input');
  setSpanText(input.value);
  localStorage.setItem("selection", input.value);

  favFood.push(input.value);
  var data = JSON.stringify(favFood);
  localStorage.setItem("favefoods", data);
  input.value = "";
};

var app = function(){
  var button = document.querySelector('button');
  button.onclick = handleButtonClick;
  var saved = localStorage.getItem('selection');
  setSpanText(saved);

  var savedFoods = localStorage.getItem("favefoods") || [];
  favFood = JSON.parse(savedFoods);
  setFaveFoods(favFood);

}

window.onload = app;
