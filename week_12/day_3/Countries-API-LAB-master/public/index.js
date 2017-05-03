

var makeRequest = function(url, callback){
//create a new XMLHttpRequest object

var request = new XMLHttpRequest();

//set type of request, and the url
request.open("GET", url);

// set the callback we want it to use when the request is complete.
request.onload = callback;

// send the request
request.send();
};


var requestComplete = function(){
  if(this.status !== 200){
    return;
  }

  //grab the response text
  var jsonString = this.responseText;

  var countries = JSON.parse(jsonString);
  
  populateDropDown(countries);
  // populateList(countries);

};

var populateDropDown = function(countries){
  
  var select = document.querySelector('select#list-of-countries');
  countries.forEach(function(country, index){
    var option = document.createElement('option');
      country.index = index;
    option.innerText = country.name;
    select.appendChild(option);
  });
  select.addEventListener("change", function(){
    var index = this.selectedIndex-1;
    var country = countries[index];
    populateList(country);
});
};

var populateList = function(country){
  var ul = document.getElementById("country-info");
  var liName = document.getElementById('liName');
  liName.innerText= country.name;
  var liPop = document.getElementById('liPop');
  liPop.innerText = country.population;
  var liCap = document.getElementById('liCap');
  liCap.innerText = country.capital;
  ul.appendChild(liName);
  ul.appendChild(liPop);
  ul.appendChild(liCap);
};

var app = function(){
  var url = "https://restcountries.eu/rest/v2/all";

  makeRequest(url, requestComplete);

  // var button = document.querySelector('button');
  // button.onclick = function(){
  //   makeRequest(url, requestComplete);
  // };

}

window.onload = app;