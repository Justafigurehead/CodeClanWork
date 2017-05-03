
var init = function(){
  var state = JSON.parse(localStorage.getItem('toDoList')) || [];
  var list = document.querySelector('#todo-list');
  var button = document.querySelector('button');

  button.onclick = handleClick;
  console.log(list);
  populate(list, state);
};

var populate = function(list, state){
  state.forEach(function(item){
    addItem(list, item);
  });
};

var addItem = function(list, item){
  var addLi = document.createElement('li');
  console.log(item);
  addLi.innerText = item;
  list.appendChild(addLi);
};

var handleClick = function(){

  //get the value of the input box
  var input = document.querySelector('input');
  var data = input.value;
  
  //get the "todo-list" element from the DOM
  var list = document.querySelector('#todo-list');
  
  //invoke addItem and save item
  addItem(list, data);
  save(data);
  input.value = "";
}

var save = function(item){
  var toDoListPoints = JSON.parse(localStorage.getItem('toDoList')) || [];
  //save the item to localStorage 
  toDoListPoints.push(item);

  //NOTE You'll have to use JSON.stringify
  var data = JSON.stringify(toDoListPoints);
  localStorage.setItem("toDoList", data);
}

window.onload = init;

//ADVANCED: create a drop-down of many to-do lists that are stored in localStorage
//HINT: you'll have to use a different data structure (an array of objects maybe?)
