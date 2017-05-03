var MapWrapper = function(container, center, zoom){
  this.googleMap = new google.maps.Map(container, {
    center: center,
    zoom: zoom
  });
}

MapWrapper.prototype ={
  addMarker: function(coords){
    var marker = new google.maps.Marker({
      position: coords,
      map: this.googleMap
    })
  }
};


var GeoCoder = function(address, mapWrapper){
  this.address = address;
  this.mapWrapper = mapWrapper;
};


GeoCoder.prototype = {
  geoCode: function(){
      var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + this.address;
      var geoCoderThis = this;
      makeRequest(url, function(){
          var resultsObj = JSON.parse(this.responseText);
          var lat = resultsObj.results[0].geometry.location.lat;
          var lng = resultsObj.results[0].geometry.location.lng;
          geoCoderThis.mapWrapper.googleMap.setCenter({lat, lng});         
      });
  }
};


var makeRequest = function(url, callback){
  var xhr = new XMLHttpRequest();
  xhr.onload = callback;
  xhr.open("GET", url);
  xhr.send();
};

var handleBtnClicked = function(map){
  var input = document.querySelector("input");
  var address = input.value;
  var gc = new GeoCoder(address, map);
  gc.geoCode();
};

var app = function(){
  var container = document.getElementById("map");
  var center = {
    lat: 55.857092, 
    lng: -4
  };
  var zoom = 10;
  var mainMap = new MapWrapper(container, center, zoom);

  var button = document.querySelector("button");
  button.onclick = function(){
    handleBtnClicked(mainMap);
  }
};

window.onload = app;