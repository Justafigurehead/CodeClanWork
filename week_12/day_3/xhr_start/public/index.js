var makeRequest = function(url,callback){
  //create a new XmlHttpRequest Object(XHR). It's the transport method we use to get the information and bring it back. 
  var request = new XMLHttpRequest();

  //now we need to the request what we need it to do by setting the type of request.
  request.open("GET", url);

  //Need to tell it what to do after. Set the call we want it to use when request is complete.
  request.onload = callback;

  //send the request
  request.send();
};

var requestComplete = function(){
  if(this.status !== 200){
    return;
  }
  //grabbing the info.
  var jsonString = this.responseText;
  var countries = JSON.parse(jsonString);
  // populateList(countries);
};



var populateList = function(countries){
  var ul = document.getElementById("country-list");
  countries.forEach(function(country){
    var li = document.createElement('li');
    li.innerText = country.name;
    ul.appendChild(li);
  })
};

var app = function(){
  var url = "https://restcountries.eu/rest/v2";
  var button = document.querySelector('button#get-countries');

  makeRequest(url, requestComplete)


  // button.onclick = function(){
  //   makeRequest(url, requestComplete);
  // };
}

window.onload = app;