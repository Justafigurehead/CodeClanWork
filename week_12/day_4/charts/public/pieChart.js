var PieChart = function(){
  var container = document.querySelector('#pie-chart');

  var char = new Highcharts.Chart({
    chart: {
      type:'pie',
      renderTo: container
    }, 
    title: {
      text:"Pokemon Types I've Caught"
    },
    series: [{
      name:"Type",
      data: [
      {
        name: "Fire", 
        y: 10,
        color: "tomato"
      },
      {
        name: "Water",
        y:27,
        color: "steelblue",
        sliced: true
      }, 
      {
        name: "Fairy", 
        y: 1,
        color: "purple"
      }, 
        {
          name: "rock", 
          y: 40,
          color:"darkgoldenrod"
        }, 
        {
          name: "lightning", 
          y: 22, 
          color: "orange"
        }
      ]
    }]
  });
}